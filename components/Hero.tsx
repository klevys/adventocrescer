import React from 'react';
import { Star } from 'lucide-react';
import Logo from './Logo';

const Hero: React.FC = () => {
  return (
    <header className="relative bg-gradient-to-b from-christmas-dark via-[#B03512] to-[#8A2508] text-white pt-16 pb-20 px-6 text-center overflow-hidden shadow-2xl">
        
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Soft Glow Top Center */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-christmas-gold/20 rounded-full blur-[100px]"></div>
            
            {/* Abstract Shapes */}
            <div className="absolute top-10 left-10 w-32 h-32 border border-white/5 rounded-full opacity-20"></div>
            <div className="absolute bottom-10 right-10 w-48 h-48 border border-white/5 rounded-full opacity-20"></div>
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
            
            {/* Centered Logo */}
            <div className="w-64 md:w-80 mb-8 transform hover:scale-105 transition-transform duration-700 drop-shadow-xl">
                <Logo variant="white" />
            </div>

            {/* Decorative Divider */}
            <div className="flex items-center gap-4 mb-8 opacity-80 w-full justify-center">
                <div className="h-px w-16 md:w-32 bg-gradient-to-r from-transparent via-christmas-gold to-transparent"></div>
                <Star className="w-5 h-5 text-christmas-gold fill-current animate-pulse" />
                <div className="h-px w-16 md:w-32 bg-gradient-to-r from-transparent via-christmas-gold to-transparent"></div>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-display font-bold text-christmas-cream drop-shadow-lg mb-6 leading-tight">
                Advento de Natal
            </h1>

            {/* Description */}
            <p className="font-body text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto mb-10">
                Celebrar o Advento de Natal em família é uma oportunidade de lembrar juntos o <br className="hidden md:block" />
                <span className="text-christmas-gold font-bold relative inline-block px-2">
                    verdadeiro sentido do Natal: Jesus
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-christmas-gold/30 rounded-full"></span>
                </span>.
            </p>

            {/* Badge/Tag */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg group hover:bg-white/15 transition-colors">
                <Star size={16} className="text-christmas-gold" />
                <span className="text-sm font-semibold tracking-widest uppercase text-christmas-cream">
                    25 Dias de Atividades em Família
                </span>
                <Star size={16} className="text-christmas-gold" />
            </div>
        </div>
    </header>
  );
};

export default Hero;