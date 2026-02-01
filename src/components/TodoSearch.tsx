import type { TodoSearchProps } from '../types/Props';

export const TodoSearch = ({ searchQuery, setSearchQuery }: TodoSearchProps) => {
return (
    <div className="relative flex-1">
      <input 
        type="text" 
        placeholder="Buscar tareas..." 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="block w-full pl-5 py-2.5 border-gray-200 rounded-lg bg-gray-50 text-gray-900 text-medium placeholder-gray-400 focus:outline-none focus:bg-white sm:text-sm transition-all border" 
      />
    </div>
  );
};