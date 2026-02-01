export type Todo = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
};

export type FilterStatus = 'all' | 'active' | 'completed';