import type { Todo, FilterStatus } from './Todos';

export type TodoInputProps = {
  onAdd: (title: string, description: string) => void;
};

export type TodoItemProps = {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

export type TodoListProps = {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

export type TodoSearchProps = {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
};

export type TodoFiltersProps = {
  currentFilter: FilterStatus;
  onFilterChange: (filter: FilterStatus) => void;
};