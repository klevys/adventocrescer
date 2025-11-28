import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import DayCard from './components/DayCard';
import DayModal from './components/DayModal';
import IdeasSection from './components/IdeasSection';
import SnowEffect from './components/SnowEffect';
import Logo from './components/Logo';
import CompletionModal from './components/CompletionModal';
import RegistrationModal from './components/RegistrationModal';
import { ADVENT_DAYS } from './constants';
import { AdventDay } from './types';

function App() {
  const [completedDays, setCompletedDays] = useState<number[]>([]);
  const [selectedDay, setSelectedDay] = useState<AdventDay | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCompletionModalOpen, setIsCompletionModalOpen] = useState(false);
  
  // Initialize state synchronously from localStorage to avoid flash of content
  const [isRegistered, setIsRegistered] = useState<boolean>(() => {
    const saved = localStorage.getItem('familyRegistration');
    return !!saved;
  });

  // Load progress
  useEffect(() => {
    const savedProgress = localStorage.getItem('adventProgress');
    if (savedProgress) {
      try {
        const parsed = JSON.parse(savedProgress);
        setCompletedDays(parsed);
      } catch (e) {
        console.error("Failed to parse progress", e);
      }
    }
  }, []);

  const handleRegistration = (parents: string, children: string) => {
      const data = { parents, children, date: new Date().toISOString() };
      localStorage.setItem('familyRegistration', JSON.stringify(data));
      setIsRegistered(true);
  };

  // Save progress and check for completion
  const toggleComplete = (day: number) => {
    setCompletedDays(prev => {
      const isCompleting = !prev.includes(day);
      const newProgress = isCompleting 
        ? [...prev, day]
        : prev.filter(d => d !== day);
      
      localStorage.setItem('adventProgress', JSON.stringify(newProgress));
      
      // Check if all days are completed
      if (newProgress.length === 25 && isCompleting) {
        setTimeout(() => {
            setIsCompletionModalOpen(true);
        }, 1500); // Delay for celebration effect
      }

      return newProgress;
    });
  };

  const handleDayClick = (day: AdventDay) => {
    setSelectedDay(day);
    setIsModalOpen(true);
  };

  const progressPercentage = Math.round((completedDays.length / 25) * 100);

  return (
    <div className="min-h-screen font-body text-christmas-slate bg-[#FFFDF5] selection:bg-christmas-dark selection:text-white overflow-x-hidden">
      <SnowEffect />
      
      {/* Registration Wall - Only shows if not registered */}
      {!isRegistered && (
        <RegistrationModal onRegister={handleRegistration} />
      )}

      <Hero />

      <main className="max-w-6xl mx-auto px-6 py-12 -mt-10 relative z-20">
        
        {/* Progress Bar */}
        <div className="bg-white rounded-2xl p-6 shadow-xl mb-12 flex flex-col md:flex-row items-center justify-between gap-6 border border-christmas-cream/50">
            <div className="w-full md:w-auto text-center md:text-left">
                <h3 className="font-display text-2xl text-christmas-dark font-bold">Sua Jornada</h3>
                <p className="text-sm text-gray-500">Cada dia uma nova descoberta em família.</p>
            </div>
            <div className="flex-1 w-full flex items-center gap-4">
                <div className="w-full h-5 bg-gray-100 rounded-full overflow-hidden shadow-inner border border-gray-200">
                    <div 
                        className="h-full bg-gradient-to-r from-christmas-gold to-christmas-dark transition-all duration-1000 ease-out relative"
                        style={{ width: `${progressPercentage}%` }}
                    >
                        <div className="absolute inset-0 bg-white/30 animate-[shimmer_2s_infinite]"></div>
                    </div>
                </div>
                <span className="font-bold text-christmas-dark min-w-[3rem] text-lg">{progressPercentage}%</span>
            </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {ADVENT_DAYS.map((day, index) => (
            <DayCard 
              key={day.day}
              day={day}
              index={index}
              isCompleted={completedDays.includes(day.day)}
              onClick={() => handleDayClick(day)}
            />
          ))}
        </div>

      </main>

      <IdeasSection />

      <footer className="bg-[#2D2D2D] text-white py-12 text-center relative overflow-hidden mt-12">
        {/* Footer Background Pattern */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent scale-150"></div>
        
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center relative z-10">
            <div className="w-56 md:w-64 mb-8 transition-transform hover:scale-105 duration-300">
              <Logo variant="white" />
            </div>
            
            <h2 className="font-display text-2xl mb-4 text-christmas-cream opacity-90 tracking-wide">Ministério TRILHAR</h2>
            
            <p className="text-white/70 mb-8 max-w-xl text-lg italic font-light">
                "Ensina a criança no caminho em que deve andar, e mesmo quando for velho não se desviará dele."
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-6 text-sm text-white/50 mb-8 font-medium tracking-widest uppercase">
                <a href="https://instagram.com/trilharcrescer" target="_blank" rel="noopener noreferrer" className="hover:text-christmas-gold transition-colors">
                    @trilharcrescer
                </a>
                <span className="hidden md:inline w-1 h-1 bg-christmas-gold rounded-full"></span>
                <p>Feito com amor para famílias</p>
            </div>
            
            <div className="text-xs text-white/30 border-t border-white/10 pt-6 w-full max-w-lg">
                <p>© {new Date().getFullYear()} Todos os direitos reservados a Crescer - Igreja Batista</p>
            </div>
        </div>
      </footer>

      <DayModal 
        day={selectedDay}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onComplete={toggleComplete}
        isCompleted={selectedDay ? completedDays.includes(selectedDay.day) : false}
      />

      <CompletionModal 
        isOpen={isCompletionModalOpen}
        onClose={() => setIsCompletionModalOpen(false)}
      />
      
      {/* Global CSS for animations */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}

export default App;