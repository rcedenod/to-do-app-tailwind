import type { TodoItemProps } from '../types/Props';

export const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => {
  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString() + ' ' + new Date(timestamp).toLocaleTimeString();
  };

  return (
    <div className="">
      <div className="">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="" 
        />
        <div className="">
          <h3 className="">
            {todo.title}
          </h3>
          {todo.description && (
            <p className="">
              {todo.description}
            </p>
          )}
          <span className="">
            Creado: {formatDate(todo.createdAt)}
          </span>
        </div>
      </div>
      <button onClick={() => onDelete(todo.id)} className="">
        Eliminar
      </button>
    </div>
  );
};