import type { TodoStatsProps } from '../types/Props';

export const TodoStats = ({ total, active, completed }: TodoStatsProps) => {
  return (
    <div className="grid grid-cols-3 gap-4 p-4.5 border-b border-gray-100">
      
      <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center transition-transform hover:scale-105">
        <span className="text-2xl font-bold text-indigo-600">
          {total}
        </span>
        <span className="text-xs font-medium text-gray-500 uppercase tracking-wide mt-1">
          Total
        </span>
      </div>

      <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center transition-transform hover:scale-105">
        <span className="text-2xl font-bold text-orange-500">
          {active}
        </span>
        <span className="text-xs font-medium text-gray-500 uppercase tracking-wide mt-1">
          Pendientes
        </span>
      </div>

      <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center transition-transform hover:scale-105">
        <span className="text-2xl font-bold text-emerald-500">
          {completed}
        </span>
        <span className="text-xs font-medium text-gray-500 uppercase tracking-wide mt-1">
          Completadas
        </span>
      </div>

    </div>
  );
};