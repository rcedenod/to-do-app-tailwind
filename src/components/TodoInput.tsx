import { useState } from 'react';
import type { TodoInputProps } from '../types/Props';

export const TodoInput = ({ onAdd }: TodoInputProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
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
        className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-lg transition-colors active:scale-95 text-sm font-semibold cursor-pointer"
      >
        <span className="material-symbols-outlined text-[20px]">add</span>
        Agregar tarea
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-[1px] transition-opacity" 
            onClick={handleCancel}
          ></div>
          <div className="relative bg-white w-full max-w-lg rounded-xl shadow-2xl overflow-hidden p-6 animate-in fade-in zoom-in duration-200">

            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Agregar tarea</h2>
              <button 
                onClick={handleCancel}
                className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div>
                <label htmlFor="task-title" className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Titulo
                </label>
                <input 
                  id="task-title"
                  type="text" 
                  value={title} 
                  onChange={e => setTitle(e.target.value)} 
                  placeholder="Que hay que hacer?"
                  className="block w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-sm focus:ring-1 focus:ring-primary focus:border-transparent focus:bg-white transition-all outline-none placeholder:text-gray-400"
                  autoFocus
                />
              </div>

              <div>
                <label htmlFor="task-desc" className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Descripcion
                </label>
                <textarea 
                  id="task-desc"
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  placeholder="Agrega unos detalles sobre la tarea..."
                  className="block w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-sm focus:ring-1 focus:ring-primary focus:border-transparent focus:bg-white transition-all outline-none placeholder:text-gray-400 min-h-40 resize-none"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button 
                  type="button" 
                  onClick={handleCancel}
                  className="px-5 py-2.5 text-sm font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors active:scale-95 cursor-pointer"
                >
                  Cancelar
                </button>
                
                <button 
                  type="submit" 
                  className="px-5 py-2.5 text-sm font-semibold text-white bg-primary hover:bg-primary-hover rounded-lg shadow-md shadow-indigo-200 transition-colors active:scale-95 cursor-pointer"
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