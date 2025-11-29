import React from 'react';
import { AdventDay } from '../types';
import { Check, Gift, Heart, Star, Music, Book, Sun, Users, Coffee, Home, Smile, Moon, Search, Globe } from 'lucide-react';

interface DayCardProps {
  day: AdventDay;
  isCompleted: boolean;
  onClick: () => void;
  index: number;
}

const DayCard: React.FC<DayCardProps> = ({ day, isCompleted, onClick, index }) => {
    // Stagger animation delay based on index
    const delayStyle = { animationDelay: `${index * 50}ms` };

    // Helper to map string names to Lucide components
    const IconComponent = (() => {
        switch (day.iconName) {
            case 'Home': return Home;
            case 'Gift': return Gift;
            case 'Book': return Book;
            case 'Heart': return Heart;
            case 'Star': return Star;
            case 'Music': return Music;
            case 'Search': return Search;
            case 'Smile': return Smile;
            case 'Coffee': return Coffee;
            case 'Moon': return Moon;
            case 'Users': return Users;
            case 'Globe': return Globe;
            case 'Sun': return Sun;
            default: return null;
        }
    })();

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
                flex flex-col items-center justify-center p-2 border-2 relative overflow-hidden
                ${isCompleted 
                    ? 'bg-christmas-green/10 border-christmas-green' 
                    : 'bg-white border-christmas-gold'
                }
            `}>
                {/* Ribbon decoration - changes color on completion */}
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-8 h-2 rounded-b-sm shadow-sm z-10 transition-colors duration-300 ${isCompleted ? 'bg-christmas-green' : 'bg-christmas-red'}`}></div>

                {/* Theme Icon */}
                {IconComponent && (
                     <div className={`mb-1 transition-colors duration-300 mt-2 ${isCompleted ? 'text-christmas-green' : 'text-christmas-gold'}`}>
                        <IconComponent size={24} strokeWidth={isCompleted ? 2.5 : 2} />
                     </div>
                )}

                <span className={`
                    font-display text-4xl font-bold z-10 leading-none
                    ${isCompleted ? 'text-christmas-green' : 'text-christmas-dark'}
                `}>
                    {day.day}
                </span>

                {isCompleted && (
                    <div className="absolute top-2 right-2 bg-christmas-green text-white rounded-full p-1 shadow-sm z-20">
                        <Check size={12} strokeWidth={4} />
                    </div>
                )}
                
                <p className="text-[10px] text-center text-slate-400 font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-2">
                    Abrir
                </p>
            </div>
        </div>
    );
};

export default DayCard;