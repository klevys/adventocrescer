import React from 'react';
import { AdventDay } from '../types';
import { Check, Lock } from 'lucide-react';

interface DayCardProps {
  day: AdventDay;
  isCompleted: boolean;
  onClick: () => void;
  index: number;
}

const DayCard: React.FC<DayCardProps> = ({ day, isCompleted, onClick, index }) => {
    // Stagger animation delay based on index
    const delayStyle = { animationDelay: `${index * 50}ms` };

    return (
        <div 
            style={delayStyle}
            onClick={onClick}
            className={`
                group relative aspect-square cursor-pointer perspective-1000 animate-[fadeInUp_0.5s_ease-out_both]
            `}
        >
            <div className={`
                w-full h-full rounded-xl shadow-lg transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-xl
                flex flex-col items-center justify-center p-4 border-2
                ${isCompleted 
                    ? 'bg-christmas-green/10 border-christmas-green' 
                    : 'bg-white border-christmas-gold'
                }
            `}>
                {/* Ribbon decoration */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-2 bg-christmas-red rounded-b-sm shadow-sm"></div>

                <span className={`
                    font-display text-4xl md:text-5xl font-bold mb-2
                    ${isCompleted ? 'text-christmas-green' : 'text-christmas-red'}
                `}>
                    {day.day}
                </span>

                {isCompleted && (
                    <div className="absolute top-2 right-2 bg-christmas-green text-white rounded-full p-1 shadow-sm">
                        <Check size={12} strokeWidth={4} />
                    </div>
                )}
                
                <p className="text-xs text-center text-slate-500 font-body uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-4">
                    Abrir
                </p>
            </div>
        </div>
    );
};

export default DayCard;