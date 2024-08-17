import { FILTER_OPTION } from "../dependenses/const";

export type Todo = {
  title: string,
  id: string,
  isActive: boolean,
};

export type FilterOptionValue = typeof FILTER_OPTION[keyof typeof FILTER_OPTION];