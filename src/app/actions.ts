import {
  createFormActionWithoutResult,
  createFormActionWithResult,
} from "@/lib/create-form-action";
import { z } from "zod";

export const signInAction = createFormActionWithoutResult({
  schema: z.object({ email: z.string().email(), password: z.string().min(8) }),
  async action(state, data) {
    return {
      status: "success",
      message: `Welcome ${data.email}`,
    };
  },
});

export const addTodoAction = createFormActionWithResult<{
  id: string;
  text: string;
  done: boolean;
}>()({
  schema: z.object({ text: z.string(), done: z.boolean() }),
  async action(state, data) {
    return {
      status: "success",
      message: "To do created successfully",
      result: {
        ...data,
        id: "1",
      },
    };
  },
});
