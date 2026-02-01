import { useState } from 'react';
import type { TodoInputProps } from '../types/Props';

export const TodoInput = ({ onAdd }: TodoInputProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    
    onAdd(title, description);
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <div className="">
        <input
          className=""
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Título de la tarea"
          required
        />
        <textarea
          className=""
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Breve descripción (opcional)"
        />
        <button type="submit" className="">
          Crear Tarea
        </button>
      </div>
    </form>
  );
};