import type { TodoSearchProps } from '../types/Props';

export const TodoSearch = ({ searchQuery, setSearchQuery }: TodoSearchProps) => {
  return (
    <div className="">
      <input 
        type="text" 
        placeholder="Buscar por título o descripción..." 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="" 
      />
    </div>
  );
};