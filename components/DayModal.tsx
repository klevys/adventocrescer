import React from 'react';
import { AdventDay } from '../types';
import { X, BookOpen, Target, Gift, Trophy } from 'lucide-react';

interface DayModalProps {
  day: AdventDay | null;
  isOpen: boolean;
  onClose: () => void;
  onComplete: (dayNumber: number) => void;
  isCompleted: boolean;
}

const DayModal: React.FC<DayModalProps> = ({ day, isOpen, onClose, onComplete, isCompleted }) => {
  if (!isOpen || !day) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-christmas-dark/70 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      <div className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden transform transition-all scale-100 animate-[fadeIn_0.3s_ease-out]">
        
        {/* Header */}
        <div className="bg-christmas-red p-6 text-white text-center relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-1 hover:bg-white/20 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
          <span className="font-display text-2xl opacity-80">Dia {day.day}</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 leading-tight">{day.title}</h2>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
            
            {/* Verse */}
            <div className="bg-christmas-cream/30 p-4 rounded-lg border-l-4 border-christmas-gold">
                <div className="flex items-center gap-2 mb-2 text-christmas-dark font-bold uppercase text-xs tracking-wider">
                    <BookOpen size={16} /> Versículo
                </div>
                <p className="font-script text-3xl text-christmas-dark text-center px-4 py-2">
                    "{day.verse}"
                </p>
            </div>

            {/* Activity */}
            <div>
                <div className="flex items-center gap-2 mb-2 text-christmas-red font-bold uppercase text-xs tracking-wider">
                    <Gift size={16} /> Atividade
                </div>
                <p className="text-lg text-slate-700 font-body leading-relaxed">
                    {day.activity}
                </p>
            </div>

            {/* Objective */}
            <div>
                 <div className="flex items-center gap-2 mb-2 text-christmas-green font-bold uppercase text-xs tracking-wider">
                    <Target size={16} /> Objetivo
                </div>
                <p className="text-base text-slate-600 font-body">
                    {day.objective}
                </p>
            </div>

            {/* Extra/Challenge */}
            {(day.challenge || day.extra) && (
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                    <div className="flex items-center gap-2 mb-1 text-slate-500 font-bold uppercase text-xs tracking-wider">
                        <Trophy size={14} /> {day.challenge ? 'Desafio' : 'Extra'}
                    </div>
                    <p className="text-slate-600 italic">
                        {day.challenge || day.extra}
                    </p>
                </div>
            )}

        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
            <button 
                onClick={onClose}
                className="text-slate-500 font-bold text-sm hover:text-slate-700"
            >
                Fechar
            </button>
            <button
                onClick={() => {
                    onComplete(day.day);
                    onClose();
                }}
                className={`px-6 py-3 rounded-full font-bold text-white shadow-lg transform transition-all hover:scale-105 active:scale-95 flex items-center gap-2
                    ${isCompleted 
                        ? 'bg-christmas-green hover:bg-green-700' 
                        : 'bg-christmas-red hover:bg-red-700'
                    }`}
            >
                {isCompleted ? 'Concluído ✓' : 'Marcar como Concluído'}
            </button>
        </div>
      </div>
    </div>
  );
};

export default DayModal;