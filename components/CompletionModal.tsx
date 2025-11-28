import React, { useEffect, useState } from 'react';
import { Send, PartyPopper, X, Trophy } from 'lucide-react';

interface CompletionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CompletionModal: React.FC<CompletionModalProps> = ({ isOpen, onClose }) => {
  const [parentsName, setParentsName] = useState('');
  const [childrenName, setChildrenName] = useState('');

  // Load saved names when modal opens
  useEffect(() => {
    if (isOpen) {
        const savedData = localStorage.getItem('familyRegistration');
        if (savedData) {
            try {
                const { parents, children } = JSON.parse(savedData);
                setParentsName(parents || '');
                setChildrenName(children || '');
            } catch (e) {
                console.error("Erro ao ler dados da família", e);
            }
        }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const recipients = "lidia@sibapa.com,vanessa@sibapa.com";
    const familyName = parentsName.split(' ').pop() || parentsName.split(' ')[0];
    const subject = encodeURIComponent(`CONCLUSÃO do Advento de Natal - Família ${familyName}`);
    
    const body = encodeURIComponent(
`🎉 Parabéns!

Nossa família completou TODAS as atividades do Advento de Natal!

👨‍👩‍👧‍👦 Família: ${familyName}
👤 Pais: ${parentsName}
👶 Filhos: ${childrenName}

Foi um tempo precioso em família fortalecendo nossa fé.

Atenciosamente,
Família ${familyName}`
    );

    window.location.href = `mailto:${recipients}?subject=${subject}&body=${body}`;
    
    setTimeout(onClose, 2000);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-christmas-dark/90 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      <div className="relative bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden transform animate-[fadeIn_0.5s_ease-out] border-4 border-christmas-gold">
        
        {/* Confetti Effect CSS would go in global styles, but purely visual here */}
        
        <div className="bg-gradient-to-b from-christmas-gold to-[#D68215] p-8 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIiBvcGFjaXR5PSIwLjEiPjxwYXRoIGQ9Ik0yMCAyMEwzMCAzMEwyMCA0MEwxMCAzMHoiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')] opacity-20"></div>
          
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/10 rounded-full text-white hover:bg-black/20 transition-colors"
          >
            <X size={20} />
          </button>
          
          <div className="flex justify-center mb-4 relative z-10">
            <div className="bg-white p-4 rounded-full shadow-lg ring-4 ring-white/30">
                <Trophy className="text-christmas-gold w-10 h-10" fill="currentColor" />
            </div>
          </div>
          
          <h2 className="font-display text-4xl font-bold text-white mb-1 drop-shadow-md">Parabéns!</h2>
          <p className="font-body text-white/90 font-medium">Missão Cumprida com Sucesso!</p>
        </div>

        <div className="p-8 bg-white">
          <p className="text-slate-600 mb-6 text-center text-sm leading-relaxed">
            Que alegria! Vocês completaram a jornada. <br/>
            Confirme os dados abaixo para avisar a liderança e celebrar essa conquista.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1 ml-1">Nome dos Pais</label>
              <input 
                type="text" 
                required
                value={parentsName}
                onChange={(e) => setParentsName(e.target.value)}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 font-medium focus:ring-2 focus:ring-christmas-gold focus:border-transparent outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1 ml-1">Nome dos Filhos</label>
              <input 
                type="text" 
                required
                value={childrenName}
                onChange={(e) => setChildrenName(e.target.value)}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 font-medium focus:ring-2 focus:ring-christmas-gold focus:border-transparent outline-none transition-all"
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-christmas-green text-white font-bold py-3.5 px-4 rounded-xl shadow-lg hover:bg-[#124a2a] transform active:scale-95 transition-all flex items-center justify-center gap-2 mt-4"
            >
              <Send size={18} />
              Enviar Conclusão
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CompletionModal;