import React from 'react';
import { Star } from 'lucide-react';
import Logo from './Logo';

const Hero: React.FC = () => {
  return (
    <header className="relative bg-christmas-red text-white pt-20 pb-12 px-6 text-center overflow-hidden">
        {/* Logo in top left - Increased width for new aspect ratio */}
        <div className="absolute top-6 left-6 z-20 w-40 md:w-48 opacity-90 hover:opacity-100 transition-opacity">
            <Logo variant="white" />
        </div>

        {/* Decorative Circles */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-christmas-green opacity-20 rounded-full translate-x-20 translate-y-20"></div>

        <div className="relative z-10 max-w-4xl mx-auto mt-8 md:mt-0">
            <div className="flex justify-center items-center gap-4 mb-4">
                <Star className="text-christmas-gold w-8 h-8 fill-current animate-pulse" />
                <h1 className="text-5xl md:text-7xl font-display font-bold text-christmas-cream drop-shadow-lg">
                    Advento de Natal
                </h1>
                <Star className="text-christmas-gold w-8 h-8 fill-current animate-pulse" />
            </div>
            <p className="font-body text-lg md:text-xl text-white/90 leading-relaxed mb-6">
                Celebrar o Advento de Natal em família é uma oportunidade de lembrar juntos o <span className="font-bold text-christmas-gold">verdadeiro sentido do Natal: Jesus</span>.
            </p>
            <p className="font-body text-base md:text-lg text-white/80 max-w-2xl mx-auto">
                Em meio à correria do fim de ano, este guia nos convida a desacelerar, fortalecer os laços e preparar o coração para a vinda do Salvador.
            </p>
            <div className="mt-8">
                <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold tracking-wider uppercase">
                    25 Dias de Atividades em Família
                </span>
            </div>
        </div>
    </header>
  );
};

export default Hero;