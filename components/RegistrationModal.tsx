import React, { useState } from 'react';
import { Send, Heart, Star, LogIn } from 'lucide-react';
import Logo from './Logo';
import { GOOGLE_FORM_CONFIG } from '../constants';

interface RegistrationModalProps {
  onRegister: (parents: string, children: string) => void;
}

const RegistrationModal: React.FC<RegistrationModalProps> = ({ onRegister }) => {
  const [parentsName, setParentsName] = useState('');
  const [childrenName, setChildrenName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!parentsName.trim() || !childrenName.trim()) return;

    setIsSubmitting(true);

    // 1. Tenta enviar via Iframe oculto (Maneira mais robusta para Google Forms)
    // Criamos um form invisível no DOM e submetemos ele para um iframe invisível
    if (GOOGLE_FORM_CONFIG.FORM_ID) {
        try {
            const iframeId = 'hidden_iframe_reg';
            let iframe = document.getElementById(iframeId) as HTMLIFrameElement;
            
            if (!iframe) {
                iframe = document.createElement('iframe');
                iframe.id = iframeId;
                iframe.name = iframeId;
                iframe.style.display = 'none';
                document.body.appendChild(iframe);
            }

            const formUrl = `https://docs.google.com/forms/d/e/${GOOGLE_FORM_CONFIG.FORM_ID}/formResponse`;
            
            const form = document.createElement('form');
            form.target = iframeId;
            form.action = formUrl;
            form.method = 'POST';
            form.style.display = 'none';

            const inputParents = document.createElement('input');
            inputParents.type = 'hidden';
            inputParents.name = GOOGLE_FORM_CONFIG.ENTRY_PARENTS;
            inputParents.value = parentsName;
            form.appendChild(inputParents);

            const inputChildren = document.createElement('input');
            inputChildren.type = 'hidden';
            inputChildren.name = GOOGLE_FORM_CONFIG.ENTRY_CHILDREN;
            inputChildren.value = childrenName;
            form.appendChild(inputChildren);

            const inputStatus = document.createElement('input');
            inputStatus.type = 'hidden';
            inputStatus.name = GOOGLE_FORM_CONFIG.ENTRY_STATUS;
            inputStatus.value = "Iniciou";
            form.appendChild(inputStatus);

            document.body.appendChild(form);
            form.submit();

            // Pequeno delay para garantir que o submit foi processado pelo browser
            await new Promise(resolve => setTimeout(resolve, 500));
            
            // Limpeza
            document.body.removeChild(form);
        } catch (error) {
            console.warn("Erro ao tentar enviar formulário via iframe:", error);
        }
    }

    // 2. Salvar localmente e liberar o app
    setTimeout(() => {
        onRegister(parentsName, childrenName);
        setIsSubmitting(false);
    }, 1000);
  };

  const handleAlreadyRegistered = () => {
    // Pula o envio para o Google Forms e libera o app com dados genéricos
    // Isso evita duplicidade na planilha
    onRegister("Família", "Retornando");
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-christmas-cream/30 backdrop-blur-md">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-christmas-gold/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-christmas-dark/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden animate-[fadeInUp_0.6s_ease-out]">
        
        {/* Header */}
        <div className="bg-gradient-to-br from-christmas-dark to-[#B03A12] p-8 text-center relative">
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
                <p className="text-christmas-slate leading-relaxed">
                    Antes de acessarem o calendário, contem pra gente quem vai participar dessa jornada especial.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-bold text-christmas-dark uppercase tracking-wider">
                        <Heart size={16} className="text-christmas-dark" /> Nome dos Pais
                    </label>
                    <input 
                        type="text" 
                        required
                        disabled={isSubmitting}
                        value={parentsName}
                        onChange={(e) => setParentsName(e.target.value)}
                        placeholder="Ex: Carlos e Ana Souza"
                        className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-christmas-gold focus:ring-0 outline-none transition-all placeholder:text-gray-400 text-christmas-slate"
                    />
                </div>

                <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-bold text-christmas-dark uppercase tracking-wider">
                        <Star size={16} className="text-christmas-gold" /> Nome dos Filhos
                    </label>
                    <input 
                        type="text" 
                        required
                        disabled={isSubmitting}
                        value={childrenName}
                        onChange={(e) => setChildrenName(e.target.value)}
                        placeholder="Ex: Davi, Sofia e Lucas"
                        className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-christmas-gold focus:ring-0 outline-none transition-all placeholder:text-gray-400 text-christmas-slate"
                    />
                </div>

                <div className="pt-2">
                    <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-christmas-green to-[#124a2a] text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-christmas-green/30 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group disabled:opacity-70 disabled:cursor-wait"
                    >
                        {isSubmitting ? (
                            <span>Salvando...</span>
                        ) : (
                            <>
                                <span>Iniciar Jornada</span>
                                <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                            </>
                        )}
                    </button>

                    <button
                        type="button"
                        onClick={handleAlreadyRegistered}
                        className="w-full mt-4 py-2 text-sm font-medium text-slate-500 hover:text-christmas-dark hover:bg-slate-50 rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                        <LogIn size={16} />
                        Já Cadastrei
                    </button>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationModal;