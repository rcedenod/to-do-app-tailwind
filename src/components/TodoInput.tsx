import { useState } from 'react';
import type { TodoInputProps } from '../types/Props';

export const TodoInput = ({ onAdd }: TodoInputProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    
    onAdd(title, description);
    
    setTitle('');
    setDescription('');
    setIsOpen(false);
  };

  const handleCancel = () => {
    setTitle('');
    setDescription('');
    setIsOpen(false);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className=""
      >
        + Nueva Tarea
      </button>

      {isOpen && (
        <div className="">
          
          <div className="">
            
            <h2 className="">Nueva Tarea</h2>
            
            <form onSubmit={handleSubmit} className="">
              <div className="">
                <label className="">Título</label>
                <input
                  className=""
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Ej. Comprar comida"
                  autoFocus
                  required
                />
              </div>

              <div className="">
                <label className="">Descripción</label>
                <textarea
                  className=""
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Detalles adicionales..."
                />
              </div>

              <div className="">
                <button 
                  type="button" 
                  onClick={handleCancel}
                  className=""
                >
                  Cancelar
                </button>
                
                <button 
                  type="submit" 
                  className=""
                >
                  Guardar
                </button>
              </div>
            </form>

          </div>
        </div>
      )}
    </>
  );
};