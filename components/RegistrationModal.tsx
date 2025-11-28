import React, { useState } from 'react';
import { Send, Heart, Star } from 'lucide-react';
import Logo from './Logo';

interface RegistrationModalProps {
  onRegister: (parents: string, children: string) => void;
}

const RegistrationModal: React.FC<RegistrationModalProps> = ({ onRegister }) => {
  const [parentsName, setParentsName] = useState('');
  const [childrenName, setChildrenName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!parentsName.trim() || !childrenName.trim()) return;

    // Save to parent component/local storage
    onRegister(parentsName, childrenName);
    
    // Prepare Mailto
    const recipients = "lidia@sibapa.com,vanessa@sibapa.com";
    const familyName = parentsName.split(' ').pop() || parentsName.split(' ')[0];
    const subject = encodeURIComponent(`Início da Jornada do Advento - Família ${familyName}`);
    
    const body = encodeURIComponent(
`Olá Lidia e Vanessa!

Nossa família está começando hoje a jornada do Advento de Natal!

👨‍👩‍👧‍👦 Família: ${familyName}
👤 Pais: ${parentsName}
👶 Filhos: ${childrenName}

Estamos animados para viver esse tempo juntos!

Atenciosamente,
${parentsName}`
    );

    window.location.href = `mailto:${recipients}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-christmas-cream/30 backdrop-blur-md">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-christmas-gold/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-christmas-red/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden animate-[fadeInUp_0.6s_ease-out]">
        
        {/* Header */}
        <div className="bg-gradient-to-br from-christmas-red to-[#B01E20] p-8 text-center relative">
           <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
           
           <div className="w-32 mx-auto mb-6 transform hover:scale-105 transition-transform duration-500">
             <Logo variant="white" />
           </div>
           
           <h1 className="font-display text-4xl text-white font-bold mb-2 drop-shadow-md">Bem-vindos!</h1>
           <p className="text-white/90 font-body text-lg">Vamos celebrar o Natal em família?</p>
        </div>

        {/* Form */}
        <div className="p-8">
            <div className="mb-6 text-center">
                <p className="text-slate-600 leading-relaxed">
                    Antes de acessarem o calendário, contem pra gente quem vai participar dessa jornada especial.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-bold text-christmas-dark uppercase tracking-wider">
                        <Heart size={16} className="text-christmas-red" /> Nome dos Pais
                    </label>
                    <input 
                        type="text" 
                        required
                        value={parentsName}
                        onChange={(e) => setParentsName(e.target.value)}
                        placeholder="Ex: Carlos e Ana Souza"
                        className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-christmas-gold focus:ring-0 outline-none transition-all placeholder:text-slate-400"
                    />
                </div>

                <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-bold text-christmas-dark uppercase tracking-wider">
                        <Star size={16} className="text-christmas-gold" /> Nome dos Filhos
                    </label>
                    <input 
                        type="text" 
                        required
                        value={childrenName}
                        onChange={(e) => setChildrenName(e.target.value)}
                        placeholder="Ex: Davi, Sofia e Lucas"
                        className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-christmas-gold focus:ring-0 outline-none transition-all placeholder:text-slate-400"
                    />
                </div>

                <button 
                    type="submit"
                    className="w-full mt-4 bg-gradient-to-r from-christmas-green to-[#124a2a] text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-christmas-green/30 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group"
                >
                    <span>Iniciar Jornada</span>
                    <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                
                <p className="text-xs text-center text-slate-400 mt-4 px-4">
                    Ao clicar, enviaremos um e-mail automático para o Ministério Infantil avisando que vocês começaram!
                </p>
            </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationModal;