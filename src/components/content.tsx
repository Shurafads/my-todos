import { LegacyRef } from "react";
import ToDo from "./todo";
import { Todo } from "../types/types";
import {
  Button,
  ContentWrapper,
  InputWrapper,
  Notification,
  TodosWrapper,
  Input,
  Label,
} from "./content.styled";

type ContentProps = {
  todos: Todo[];
  notificationStatus: boolean;
  inputValue: string;
  inputRef: LegacyRef<HTMLInputElement>;
  onAddTodoClick: () => void;
  onTodoClick: (id: string) => void;
  onInputChange: (value: string) => void;
};

export default function Content({ todos, notificationStatus, inputValue, inputRef, onInputChange, onAddTodoClick, onTodoClick }: ContentProps) {

  return (
    <ContentWrapper>
      {notificationStatus && (
        <Notification>
          The input field doesn`t contain any tasks
        </Notification>
      )}

      <InputWrapper>
        <Button data-testid='addTodoButton' onClick={onAddTodoClick}></Button>
        <Label>
          <Input
            data-testid="field"
            ref={inputRef}
            value={inputValue}
            placeholder="What needs to be done?"
            onChange={(evt) => onInputChange(evt.target.value)}
          />
        </Label>
      </InputWrapper>

      <TodosWrapper
        data-testid="TodosWrapper"
      >
        {[...todos].reverse().map((todo) => (
          <ToDo
            key={todo.id}
            title={todo.title}
            id={todo.id}
            isActive={todo.isActive}
            onTodoClick={onTodoClick}
          />
        ))}
      </TodosWrapper>
    </ContentWrapper>
  );
}
