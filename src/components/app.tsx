import { useCallback, useEffect, useRef, useState } from "react";
import Filter from "./filter";
import  Content  from "./content";
import { FILTER_OPTION } from "../dependenses/const";
import { getFilteredTodos } from "../dependenses/getFilteredTodos";
import { Main, Title, Wrapper } from "./app.styled";
import { FilterOptionValue, Todo } from "../types/types";
import { nanoid } from "nanoid";

export default function App() {

  const [todos, setTodos] = useState<Todo[]>([]);
  const [currentFilter, setCurrentFilter] = useState<FilterOptionValue>(FILTER_OPTION.ALL);
  const [inputValue, setInputValue] = useState<string>('');
  const [notificationStatus, setNotificationStatus] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const timeuotRef = useRef<NodeJS.Timeout>();

  const onTodoClick = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isActive: !todo.isActive } : todo
      )
    );
  };

  const onAddTodoClick = useCallback(() => {

    if (inputValue.length === 0) {
      setNotificationStatus(true);
      clearTimeout(timeuotRef.current);
      const timeout = setTimeout(() => setNotificationStatus(false), 3000);
      timeuotRef.current = timeout;
      return;
    }

    setTodos((prev) => [
      ...prev,
      {
        title: inputValue,
        id: nanoid(),
        isActive: true,
      },
    ]);

    setInputValue('');

  }, [inputValue, setTodos]);

  const onInputChange = (value: string) => {
    if (inputValue.length === 0 && value === " ") {
      return;
    }
    setInputValue(value);
  };

  const onClearButtonClick = () => {
    setTodos(prev => prev.filter((todo) => todo.isActive));
    setCurrentFilter(FILTER_OPTION.ALL);
  };

  const changeCurrentFilter = (value: FilterOptionValue) => {
    setCurrentFilter(value);
  };

  useEffect(() => {
    const callback = (evt: KeyboardEvent) => {

      if (evt.key === "Enter") {
        if (inputValue.length !== 0) {
          onAddTodoClick();
        } else {
          setNotificationStatus(true);
          clearTimeout(timeuotRef.current);
          const timeout = setTimeout(() => setNotificationStatus(false), 3000);
          timeuotRef.current = timeout;
        }
      } else if (inputRef.current !== null) {
        inputRef.current.focus();
      }
    };

    window.addEventListener("keydown", callback);

    return () => {
      window.removeEventListener("keydown", callback);
    };

  }, [onAddTodoClick, inputValue]);

  return (
    <Main>
      <Title>my todos</Title>
      <Wrapper>
        <Content
          todos={getFilteredTodos(todos, currentFilter)}
          notificationStatus={notificationStatus}
          inputValue={inputValue}
          inputRef={inputRef}
          onInputChange={onInputChange}
          onAddTodoClick={onAddTodoClick}
          onTodoClick={onTodoClick}
        />
        <Filter
          todos={todos}
          currentFilter={currentFilter}
          onClearButtonClick={onClearButtonClick}
          changeCurrentFilter={changeCurrentFilter}
        />
      </Wrapper>
    </Main>
  );
};
