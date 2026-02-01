import type { TodoListProps } from '../types/Props';
import { TodoItem } from './TodoItem'; // Este es un componente (valor), no lleva 'type'

export const TodoList = ({ todos, onToggle, onDelete }: TodoListProps) => {
  return (
    <div className="">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};