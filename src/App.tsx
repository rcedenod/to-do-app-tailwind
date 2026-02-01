import { useState } from 'react';
import { useTodos } from './hooks/useTodos';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
import { TodoFilters } from './components/TodoFilters';
import { TodoSearch } from './components/TodoSearch';
import type { FilterStatus } from './types/Todos';

function App() {
  const { todos, addTodo, toggleTodo, deleteTodo, clearCompleted } = useTodos();
  const [statusFilter, setStatusFilter] = useState<FilterStatus>('all');
  const [searchQuery, setSearchQuery] = useState('');

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

  const activeCount = todos.filter(t => !t.completed).length;

  return (
    <div className="">
      <div className="">
        <h1 className="">Mis Tareas</h1>
        <TodoInput onAdd={addTodo} />
        <div className="">
          <TodoSearch 
            searchQuery={searchQuery} 
            setSearchQuery={setSearchQuery} 
          />
          <TodoFilters
            currentFilter={statusFilter}
            onFilterChange={setStatusFilter}
            onClearCompleted={clearCompleted}
            itemsLeft={activeCount}
          />
        </div>
        <TodoList 
          todos={filteredTodos} 
          onToggle={toggleTodo} 
          onDelete={deleteTodo} 
        />
        {todos.length > 0 && filteredTodos.length === 0 && (
          <p className="">No se encontraron tareas con esos criterios.</p>
        )}
      </div>
    </div>
  );
}

export default App;