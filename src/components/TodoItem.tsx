import type { TodoItemProps } from '../types/Props';

export const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => {
  
  // Formateador de fecha simple (ej. "24/10/2025")
  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString();
  };

  return (
    <div className="group p-5 hover:bg-white transition-colors bg-white/40">
      <div className="flex items-start gap-4">
        
        {/* CHECKBOX PERSONALIZADO */}
        <div className="relative flex items-center justify-center mt-1">
          <input 
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
            className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-300 bg-white transition-all checked:border-primary checked:bg-primary hover:border-primary focus:ring-2 focus:ring-primary/20 focus:ring-offset-0"
          />
          <span className="material-symbols-outlined pointer-events-none absolute text-white opacity-0 transition-opacity peer-checked:opacity-100 text-[16px]">
            check
          </span>
        </div>

        {/* CONTENIDO DE LA TAREA */}
        <div className={`flex-1 min-w-0 transition-opacity ${todo.completed ? 'opacity-50' : ''}`}>
          
          {/* Título */}
          <div className="flex items-center justify-between gap-2 mb-1">
            <h3 className={`text-base font-semibold truncate transition-colors ${
              todo.completed 
                ? 'text-gray-500 line-through decoration-gray-400' 
                : 'text-gray-900 group-hover:text-primary'
            }`}>
              {todo.title}
            </h3>
          </div>

          {/* Descripción */}
          {todo.description && (
            <p className={`text-sm text-gray-500yb mb-2 line-clamp-2 ${
              todo.completed ? 'line-through decoration-gray-400' : ''
            }`}>
              {todo.description}
            </p>
          )}

          {/* Footer: Fecha y Botón Eliminar */}
          <div className="flex items-center justify-between text-xs text-gray-400 mt-2">
            
            {/* Fecha con Icono */}
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">calendar_today</span>
              <span>{formatDate(todo.createdAt)}</span>
            </div>

            {/* Botón Eliminar (Visible solo al hacer hover en la tarea) */}
            <button 
              onClick={() => onDelete(todo.id)}
              className="flex items-center gap-1 text-rose-500 hover:text-rose-700 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer font-medium"
              title="Eliminar tarea"
            >
              <span className="material-symbols-outlined text-[18px]">delete</span>
              Eliminar
            </button>

          </div>

        </div>
      </div>
    </div>
  );
};