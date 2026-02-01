import type { TodoFiltersProps } from '../types/Props';
import type { FilterStatus } from '../types/Todos';

export const TodoFilters = ({ 
  currentFilter, 
  onFilterChange, 
  onClearCompleted,
  itemsLeft 
}: TodoFiltersProps) => {

  const getButtonClass = (filter: FilterStatus) => {
    return currentFilter === filter ? '' : ''; 
  };

  return (
    <div className="">
      <span className="">{itemsLeft} items pendientes</span>

      <div className="">
        <button 
          onClick={() => onFilterChange('all')}
          className={getButtonClass('all')} // Ahora sí estamos usando currentFilter
        >
          Todos
        </button>
        <button 
          onClick={() => onFilterChange('active')}
          className={getButtonClass('active')}
        >
          Activos
        </button>
        <button 
          onClick={() => onFilterChange('completed')}
          className={getButtonClass('completed')}
        >
          Completados
        </button>
      </div>

      <button onClick={onClearCompleted} className="">
        Limpiar completados
      </button>
    </div>
  );
};