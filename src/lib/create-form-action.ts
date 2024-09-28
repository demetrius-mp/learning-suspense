import { z } from "zod";

type IsNever<T> = [T] extends [never] ? true : false;

type CustomFormState<TSchemaShape, TResult = never> =
  | {
      status: "error";
      errors?: z.typeToFlattenedError<TSchemaShape>;
      message?: string;
    }
  | ({
      status: "success";
      message?: string;
    } & (IsNever<TResult> extends true
      ? NonNullable<unknown>
      : { result: TResult }))
  | null;

type FormActionOptions<TSchema extends z.ZodTypeAny, TResult> = {
  schema: TSchema;
  action: (
    state: CustomFormState<z.infer<TSchema>, TResult>,
    data: z.infer<TSchema>
  ) => Promise<CustomFormState<z.infer<TSchema>, TResult>>;
};

type FormAction<TSchema extends z.ZodTypeAny, TResult> = (
  state: CustomFormState<TSchema, TResult>,
  formData: FormData
) => Promise<CustomFormState<TSchema, TResult>>;

export function createFormActionWithoutResult<TSchema extends z.ZodTypeAny>(
  options: FormActionOptions<TSchema, never>
): FormAction<TSchema, never> {
  const { action, schema } = options;

  return async (state, formData) => {
    const values = Object.fromEntries(formData);

    const parsed = await schema.safeParseAsync(values);

    if (!parsed.success) {
      return {
        status: "error",
        errors: parsed.error.flatten(),
      };
    }

    return action(state, parsed.data);
  };
}

export function createFormActionWithResult<TResult>() {
  return createFormActionWithoutResult as <TSchema extends z.ZodTypeAny>(
    options: FormActionOptions<TSchema, TResult>
  ) => FormAction<TSchema, TResult>;
}
