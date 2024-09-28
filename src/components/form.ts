import { addTodoAction, signInAction } from "@/app/actions";
import { useFormState } from "react-dom";

export const Form = () => {
  const [state, action] = useFormState(addTodoAction, null);

  if (state?.status === "success") {
    state.result.id;
  }
};
