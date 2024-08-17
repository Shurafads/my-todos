import { FILTER_OPTION } from "../dependenses/const";
import { FilterOptionValue, Todo } from "../types/types";
import {
  Text,
  ClearButton,
  FilterWrapper,
  Input,
  InputWrapper,
  Label,
} from "./filter.styled";

type FilterProps = {
  todos: Todo[];
  currentFilter: FilterOptionValue;
  onClearButtonClick: () => void;
  changeCurrentFilter: (value: FilterOptionValue) => void;
};

export default function Filter({ todos, currentFilter, onClearButtonClick, changeCurrentFilter}: FilterProps) {

  const todosCounter = todos.filter((todo) => todo.isActive).length;

  return (
    <FilterWrapper>
      <Text>{todosCounter} items left</Text>
      <InputWrapper>
        <Label $isCurrent={currentFilter === FILTER_OPTION.ALL}>
          <Input
            type="radio"
            name="todo"
            value={FILTER_OPTION.ALL}
            checked={currentFilter === FILTER_OPTION.ALL}
            onChange={(evt) => changeCurrentFilter(evt.target.value as FilterOptionValue)}
          />
          {FILTER_OPTION.ALL}
        </Label>
        <Label $isCurrent={currentFilter === FILTER_OPTION.ACTIVE}>
          <Input
            type="radio"
            name="todo"
            value={FILTER_OPTION.ACTIVE}
            checked={currentFilter === FILTER_OPTION.ACTIVE}
            onChange={(evt) => changeCurrentFilter(evt.target.value as FilterOptionValue)}
          />
          {FILTER_OPTION.ACTIVE}
        </Label>
        <Label $isCurrent={currentFilter === FILTER_OPTION.COMPLITED}>
          <Input
            type="radio"
            name="todo"
            value={FILTER_OPTION.COMPLITED}
            checked={currentFilter === FILTER_OPTION.COMPLITED}
            onChange={(evt) => changeCurrentFilter(evt.target.value as FilterOptionValue)}
          />
          {FILTER_OPTION.COMPLITED}
        </Label>
      </InputWrapper>
      <ClearButton data-testid='clearButton' onClick={onClearButtonClick}>Clear completed</ClearButton>
    </FilterWrapper>
  );
};
