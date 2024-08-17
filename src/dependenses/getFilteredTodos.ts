import { Todo } from "../types/types";
import { FILTER_OPTION } from "./const";

export const getFilteredTodos = (
  todos: Todo[],
  currentFilter: string
) => {
  if (currentFilter === FILTER_OPTION.ACTIVE) {
    return todos.filter((todo) => todo.isActive);
  }
  if (currentFilter === FILTER_OPTION.COMPLITED) {
    return todos.filter((todo) => !todo.isActive);
  }
  return todos;
};
