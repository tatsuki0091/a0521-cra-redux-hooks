export const NEW_TO_DO = "NEW_TO_DO";
export const DONE_TO_DO = "DONE_TO_DO";
export const REMOVE_TO_DO = "REMOVE_TO_DO";

export const newToDoAction = (content) => {
  return { type: NEW_TO_DO, payload: content };
};

export const updateTodoAction = (content) => {
  return { type: DONE_TO_DO, payload: content };
};
