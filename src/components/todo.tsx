import { Text, Input, Label, Span } from "./todo.styled";

type ToDoProps = {
  title: string;
  id: string;
  isActive: boolean;
  onTodoClick: (id: string) => void;
};

export default function ToDo({ title, id, isActive, onTodoClick }: ToDoProps) {

  return (
    <Label>
      <Input type="checkbox" value={title} onChange={() => onTodoClick(id)} checked={isActive} />
      <Span className="mark-current" $isActive={isActive}></Span>
      <Text $isActive={isActive}>{title}</Text>
    </Label>
  );
};
