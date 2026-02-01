import type { TodoFiltersProps } from '../types/Props';
import type { FilterStatus } from '../types/Todos';

export const TodoFilters = ({ currentFilter, onFilterChange }: TodoFiltersProps) => {
  
  const getButtonClass = (filter: FilterStatus) => {
    const baseClass = "px-3.5 py-1.5 text-sm font-medium rounded-md transition duration-100 ease-in-out w-full";
    
    return currentFilter === filter 
      ? `${baseClass} bg-white text-gray-900`
      : `${baseClass} text-gray-500 hover:text-gray-900`;
  };

  return (
    <div className="flex p-1 bg-gray-100 rounded-lg self-start">
      <button onClick={() => onFilterChange('all')} className={getButtonClass('all')}>Todas</button>
      <button onClick={() => onFilterChange('active')} className={getButtonClass('active')}>Pendientes</button>
      <button onClick={() => onFilterChange('completed')} className={getButtonClass('completed')}>Completadas</button>
    </div>
  );
};