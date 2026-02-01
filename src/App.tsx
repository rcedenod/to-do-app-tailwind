import { useState } from 'react';
import { useTodos } from './hooks/useTodos';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
import { TodoFilters } from './components/TodoFilters';
import { TodoSearch } from './components/TodoSearch';
import type { FilterStatus } from './types/Todos';

function App() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();
  const [statusFilter, setStatusFilter] = useState<FilterStatus>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTodos = todos.filter(todo => {
     const matchesStatus = statusFilter === 'all' ? true : statusFilter === 'active' ? !todo.completed : todo.completed;
     const query = searchQuery.toLowerCase();
     const matchesSearch = todo.title.toLowerCase().includes(query) || todo.description.toLowerCase().includes(query);
     return matchesStatus && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background font-display text-text-main antialiased flex items-center justify-center p-4 sm:p-6">
      
      <div className="w-full max-w-3xl bg-card rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        
        <div className="p-6 border-b border-gray-100 bg-white">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-gray-900">Task Manager</h1>
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

        <div className="bg-gray-50/50 min-h-75">
           <TodoList todos={filteredTodos} onToggle={toggleTodo} onDelete={deleteTodo} />
           
           {todos.length > 0 && filteredTodos.length === 0 && (
             <div className="p-10 text-center text-text-muted">
               No se encontraron tareas.
             </div>
           )}
        </div>

      </div>
    </div>
  );
}

export default App;