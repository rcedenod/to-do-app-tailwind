import { useState, useEffect } from 'react';
import { useTodos } from './hooks/useTodos';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
import { TodoFilters } from './components/TodoFilters';
import { TodoSearch } from './components/TodoSearch';
import { TodoStats } from './components/TodoStats';
import type { FilterStatus } from './types/Todos';

function App() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();
  
  const [statusFilter, setStatusFilter] = useState<FilterStatus>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 3;
  const filteredTodos = todos.filter(todo => {
    const matchesStatus = 
      statusFilter === 'all' 
        ? true 
        : statusFilter === 'active' 
          ? !todo.completed 
          : todo.completed;

    const query = searchQuery.toLowerCase();
    const matchesSearch = 
      todo.title.toLowerCase().includes(query) || 
      todo.description.toLowerCase().includes(query);

    return matchesStatus && matchesSearch;
  });

  const totalItems = filteredTodos.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  
  const paginatedTodos = filteredTodos.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  useEffect(() => {
    setCurrentPage(1);
  }, [statusFilter, searchQuery, todos.length]);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  const totalCount = todos.length;
  const activeCount = todos.filter(t => !t.completed).length;
  const completedCount = totalCount - activeCount;

  return (
    <div className="min-h-screen bg-white font-display text-text-main antialiased flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col">
        
        <div className="p-6 border-b border-gray-100 bg-white">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-gray-900">Administrador de tareas</h1>
              <p className="text-sm text-text-muted mt-1">Organiza tus metas diarias.</p>
            </div>
            <TodoInput onAdd={addTodo} />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <TodoSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <TodoFilters 
              currentFilter={statusFilter} 
              onFilterChange={setStatusFilter} 
            />
          </div>
        </div>

        <div className="bg-gray-50/50 flex flex-col flex-1">
           
           <TodoStats 
             total={totalCount} 
             active={activeCount} 
             completed={completedCount} 
           />

           <div className="flex-1">
             <TodoList 
               todos={paginatedTodos} 
               onToggle={toggleTodo} 
               onDelete={deleteTodo} 
             />
             
             {todos.length > 0 && filteredTodos.length === 0 && (
               <div className="p-10 text-center text-text-muted">
                 No se encontraron tareas con esos filtros.
               </div>
             )}
              
             {todos.length === 0 && (
                <div className="p-10 text-center text-text-muted">
                  ¡Tu lista está vacía! Agrega una nueva tarea para empezar.
                </div>
             )}
           </div>

           {totalItems > 0 && (
             <div className="p-4 border-t border-gray-100 bg-white flex items-center justify-end text-xs text-gray-500 sticky bottom-0">

                {totalPages > 1 && (
                  <div className="flex gap-2">
                    <button 
                      onClick={handlePrev}
                      disabled={currentPage === 1}
                      className="px-3 py-1 rounded border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium cursor-pointer"
                    >
                      Anterior
                    </button>
                    <button 
                      onClick={handleNext}
                      disabled={currentPage === totalPages}
                      className="px-3 py-1 rounded border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium cursor-pointer"
                    >
                      Siguiente
                    </button>
                  </div>
                )}
             </div>
           )}

        </div>

      </div>
    </div>
  );
}

export default App;