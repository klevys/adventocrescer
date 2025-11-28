import { AdventDay, IdeaImage } from './types';
import { Gift, Heart, Star, Music, Book, Sun, Users, Coffee, Home, Smile, Moon, Search, Globe } from 'lucide-react';

// ==================================================================================
// CONFIGURAÇÃO DE INTEGRAÇÃO (GOOGLE FORMS)
// ==================================================================================
// Os IDs abaixo conectam o site à planilha do Google da Igreja.
// Quando a família se registra ou conclui, os dados são enviados automaticamente.
// ==================================================================================

export const GOOGLE_FORM_CONFIG = {
  // ID do Formulário
  FORM_ID: "1FAIpQLScXVDhk854SsYw1CN9XKaSTCl8F1tdc_iCjI-YVguvqxMLHyA", 
  
  // IDs dos Campos
  ENTRY_PARENTS: "entry.905496285",   // Nome dos Pais
  ENTRY_CHILDREN: "entry.1735274493", // Nome dos Filhos
  ENTRY_STATUS: "entry.2131853291"    // Status (Iniciou/Concluído)
};

export const ADVENT_DAYS: AdventDay[] = [
  {
    day: 1,
    title: "Montar o Cantinho do Advento",
    activity: "Preparar juntos um espaço especial de Natal (com Bíblia, enfeites e calendário).",
    verse: "Isaías 9:2",
    objective: "Lembrar que Jesus é a Luz.",
    iconName: "Home"
  },
  {
    day: 2,
    title: "Fazer um Cartão para Jesus",
    activity: "Escrever ou desenhar um 'cartão de agradecimento' para Jesus.",
    verse: "Salmos 103:2",
    objective: "Gratidão.",
    iconName: "Gift"
  },
  {
    day: 3,
    title: "Noite da História Bíblica",
    activity: "Ler juntos Lucas 1:26-38 e conversar sobre o 'sim' de Maria.",
    challenge: "Compartilhar: 'Qual foi um 'sim' difícil que eu dei para Deus este ano?'",
    verse: "Lucas 1:38", 
    objective: "Obediência.",
    iconName: "Book"
  },
  {
    day: 4,
    title: "Ajudando Alguém em Casa",
    activity: "Fazer uma tarefa especial por outro membro da família sem dizer qual será.",
    verse: "Filipenses 2:4",
    objective: "Servir com alegria.",
    iconName: "Heart"
  },
  {
    day: 5,
    title: "Noite do Cinema",
    activity: "Assistir um musical ou desenho cristão de Natal e fazer pipoca.",
    verse: "1 Timóteo 5:8",
    objective: "Tempo de qualidade em família.",
    iconName: "Star"
  },
  {
    day: 6,
    title: "Dia do Louvor",
    activity: "Escolher uma música cristã natalina e cantar juntos.",
    verse: "Salmo 100",
    objective: "Adorar a Jesus.",
    iconName: "Music"
  },
  {
    day: 7,
    title: "Ação Solidária",
    activity: "Separar brinquedos/roupas em bom estado para doação.",
    verse: "2 Coríntios 9:7",
    objective: "Ajudar a quem precisa.",
    iconName: "Gift"
  },
  {
    day: 8,
    title: "Presente para Jesus",
    activity: "Dizer um presente que daria a Jesus hoje e por quê.",
    verse: "Mateus 2:1-12",
    objective: "Entregar o nosso melhor ao Rei Jesus.",
    iconName: "Gift"
  },
  {
    day: 9,
    title: "Caça ao Tesouro Bíblica",
    activity: "Esconder pistas pela casa com versículos que levam até 'um tesouro' (uma coisa simples).",
    verse: "João 3:16",
    objective: "Mostrar que o maior presente é Jesus.",
    iconName: "Search"
  },
  {
    day: 10,
    title: "Desafio do Amor",
    activity: "Cada um tira um papel com uma ação simples para fazer com alguém da família (abraçar, elogiar, ajudar, orar).",
    verse: "Gálatas 5:22",
    objective: "Demonstrar amor pelas pessoas da nossa casa.",
    iconName: "Heart"
  },
  {
    day: 11,
    title: "A História das Ovelhinhas",
    activity: "Contar Lucas 2:8-15 de forma lúdica.",
    challenge: "Fazer o som das ovelhas e montar o rebanho (pode ser de papel, pelúcias, LEGO, etc).",
    verse: "Lucas 2:8-15",
    objective: "Saber que Deus se importa com os humildes.",
    iconName: "Smile"
  },
  {
    day: 12,
    title: "Cartão de Natal",
    activity: "Preparar um cartão de Natal para alguém especial e entregar até o dia 25.",
    verse: "Isaías 7:14",
    objective: "Lembrar que Jesus é Emanuel: Deus conosco.",
    iconName: "Gift"
  },
  {
    day: 13,
    title: "Noite do Chocolate Quente",
    activity: "Fazer chocolate quente e orar juntos por 3 pessoas.",
    verse: "Tiago 5:16",
    objective: "Desenvolver a oração em família.",
    iconName: "Coffee"
  },
  {
    day: 14,
    title: "Desafio Silencioso",
    activity: "Fazer 5 min de silêncio com a Bíblia aberta e luz baixa. Compartilhar o que sentiu.",
    verse: "Salmos 46:10",
    objective: "Descansar no Senhor",
    iconName: "Moon"
  },
  {
    day: 15,
    title: "Cozinhar Juntos",
    activity: "Fazer biscoitos de Natal e entregar alguns para um vizinho com um versículo escrito.",
    verse: "Mateus 5:16",
    objective: "Comunhão e evangelismo",
    iconName: "Users"
  },
  {
    day: 16,
    title: "Contando as Bençãos",
    activity: "Em um papel bonito, listar bênçãos do ano. Guardar a lista junto do calendário do Advento.",
    verse: "1 Tessalonicenses 5:18",
    objective: "Gratidão.",
    iconName: "Star"
  },
  {
    day: 17,
    title: "Fazer uma Boa Ação Fora",
    activity: "Ajudar um vizinho, comprar água para um morador de rua, entregar uma palavra de conforto, etc.",
    verse: "Provérbios 19:17",
    objective: "Praticar a bondade",
    iconName: "Heart"
  },
  {
    day: 18,
    title: "Oração pelos missionários",
    activity: "Orar pelos missionários e por aquelas pessoas que ainda não conhecem o verdadeiro significado do Natal.",
    verse: "Romanos 10:15",
    objective: "Desenvolver a compaixão.",
    iconName: "Globe"
  },
  {
    day: 19,
    title: "Montar um Mini-Teatro",
    activity: "Reencenar o nascimento de Jesus.",
    verse: "Lucas 2",
    objective: "Guardar a mensagem no coração.",
    iconName: "Users"
  },
  {
    day: 20,
    title: "Noite do Perdão",
    activity: "Conversar sobre reconciliação, escrevendo algo que quer melhorar ou pedir perdão.",
    verse: "Efésios 4:32",
    objective: "Desenvolver a humildade e o perdão.",
    iconName: "Heart"
  },
  {
    day: 21,
    title: "Passeio em Família",
    activity: "Passear juntos pela cidade vendo as luzes de Natal. Antes de dormir, orar pelas famílias da cidade.",
    verse: "João 8:12",
    objective: "Tempo de qualidade em família.",
    iconName: "Sun"
  },
  {
    day: 22,
    title: "A História do Anjo",
    activity: "Fazer desenhos sobre o anjo Gabriel anunciando o nascimento.",
    verse: "Lucas 1:30",
    objective: "Confiar em Deus",
    iconName: "Book"
  },
  {
    day: 23,
    title: "Noite das Luzes",
    activity: "Apagar as luzes e acender luzes natalinas enquanto leem um texto bíblico.",
    verse: "João 1:1-14",
    objective: "Compreender Jesus como a Palavra e a Luz.",
    iconName: "Sun"
  },
  {
    day: 24,
    title: "Devocional de Natal",
    activity: "Fazer a leitura de um texto bíblico ou devocional de Natal durante a ceia.",
    verse: "Isaías 9:6-7",
    objective: "Declarar o Reino de Deus sobre a nossa casa.",
    iconName: "Book"
  },
  {
    day: 25,
    title: "Feliz Natal",
    activity: "Cada membro da família diz 3 coisas que admira nos outros.",
    extra: "Desenhar a família.",
    verse: "Colossenses 3:13-14",
    objective: "Fortalecer os laços.",
    iconName: "Star"
  }
];

export const IDEAS: IdeaImage[] = [
  { id: 1, url: "https://klevysonline.wordpress.com/wp-content/uploads/2025/11/ad1-1.png", caption: "Saquinhos de Papel Pendurados" },
  { id: 2, url: "https://klevysonline.wordpress.com/wp-content/uploads/2025/11/ad3.png", caption: "Árvore de Madeira com Envelopes" },
  { id: 3, url: "https://klevysonline.wordpress.com/wp-content/uploads/2025/11/ad5.png", caption: "Quadro com Ganchos" },
  { id: 4, url: "https://klevysonline.wordpress.com/wp-content/uploads/2025/11/ad6.png", caption: "Caixinhas de Presente Numeradas" },
  { id: 5, url: "https://klevysonline.wordpress.com/wp-content/uploads/2025/11/ad7.png", caption: "Varal com Envelopes Decorados" },
];