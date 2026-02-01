import type { TodoListProps } from '../types/Props';
import { TodoItem } from './TodoItem';

export const TodoList = ({ todos, onToggle, onDelete }: TodoListProps) => {
  return (
    <div className="flex flex-col divide-y divide-gray-100 border-t border-gray-100">
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