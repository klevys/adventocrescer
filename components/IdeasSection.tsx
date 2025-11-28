import React from 'react';
import { IDEAS } from '../constants';

const IdeasSection: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-christmas-cream/20">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-christmas-red mb-4">
                    Ideias de Calendário
                </h2>
                <p className="text-slate-600 max-w-2xl mx-auto">
                    Use sua criatividade e aproveite o <strong>Dia 1</strong> para montar um cantinho especial. 
                    Aqui estão algumas inspirações para você criar seu próprio calendário do Advento.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {IDEAS.map((idea) => (
                    <div key={idea.id} className="group relative overflow-hidden rounded-xl shadow-md bg-white">
                        <img 
                            src={idea.url} 
                            alt={idea.caption} 
                            className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                            <p className="text-white font-bold p-4 w-full text-center transform translate-y-4 group-hover:translate-y-0 transition-transform">
                                {idea.caption}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            
             <div className="mt-12 p-6 bg-white border-2 border-dashed border-christmas-red rounded-xl text-center max-w-2xl mx-auto">
                <p className="text-christmas-green font-bold text-lg mb-2">DICA ESPECIAL</p>
                <p className="text-slate-600 italic">
                    "O importante é valorizar a época do Natal, relembrando seu verdadeiro sentido: Deus se fez carne e habitou entre nós!"
                </p>
            </div>
        </div>
    </section>
  );
};

export default IdeasSection;