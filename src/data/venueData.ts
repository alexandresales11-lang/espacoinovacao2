import { GalleryPhoto, Amenity, FaqItem } from '../types';

export const VENUE_INFO = {
  name: 'Espaço Inovação',
  tagline: 'Espaço para Festas e Eventos',
  motto: 'Natureza, elegância e experiências inesquecíveis em um só lugar.',
  phoneRaw: '74991205293',
  phoneFormatted: '(74) 99120-5293',
  whatsappUrl: 'https://wa.me/5574991205293',
  address: 'Segunda Travessa São Francisco de Assis, Catuaba, Jacobina - BA, 44700-000',
  addressShort: 'Catuaba, Jacobina - Bahia',
  cep: '44700-000',
  capacity: 'Mais de 300 convidados',
  host: {
    name: 'Konccy',
    role: 'Idealizadora e Anfitriã',
    photo: 'https://i.imgur.com/RnP9jNx.jpeg',
    bio: 'Com dedicação e carinho por cada detalhe, Konccy projetou o Espaço Inovação para ser o cenário de memórias inesquecíveis. Aqui, cada aniversário, casamento, confraternização ou evento corporativo é tratado de forma única e personalizada.',
  },
  referenceFlyer: '/assets/aistudio/Gemini_Generated_Image_uxwxctuxwxctuxwx_4d6e9873.jpg',
};

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  // Piscina & Jardim
  {
    id: 'piscina-1',
    url: 'https://i.imgur.com/yw4NkBg.jpeg',
    title: 'Área da Piscina Cristalina',
    category: 'piscina',
    description: 'Piscina com deck, iluminação e espaço perfeito para eventos diurnos e confraternizações.',
    aspect: 'landscape',
  },
  {
    id: 'piscina-2',
    url: 'https://i.imgur.com/CKFRWj4.jpeg',
    title: 'Deck e Lazer ao Ar Livre',
    category: 'piscina',
    description: 'Ambiente arejado e acolhedor ao redor da piscina para receber seus convidados com frescor.',
    aspect: 'landscape',
  },
  {
    id: 'jardim-1',
    url: 'https://i.imgur.com/TSsQLTc.jpeg',
    title: 'Jardim Exuberante e Arborizado',
    category: 'piscina',
    description: 'Paisagismo natural, gramado e vegetação que garantem fotos deslumbrantes e contato com a natureza.',
    aspect: 'landscape',
  },
  {
    id: 'jardim-2',
    url: 'https://i.imgur.com/CqpD88d.jpeg',
    title: 'Área Verde e Espaço Aberto',
    category: 'piscina',
    description: 'Harmonia entre arquitetura moderna e natureza viva no coração de Jacobina.',
    aspect: 'landscape',
  },

  // Salão & Coberto
  {
    id: 'coberto-1',
    url: 'https://i.imgur.com/xRR2VAl.jpeg',
    title: 'Salão Principal Coberto',
    category: 'salao',
    description: 'Ampla área coberta e protegida do sol e da chuva com pé-direito generoso e ventilação.',
    aspect: 'landscape',
  },
  {
    id: 'coberto-2',
    url: 'https://i.imgur.com/COLi1IJ.jpeg',
    title: 'Espaço para Mesas e Buffet',
    category: 'salao',
    description: 'Distribuição inteligente para montagem de mesas, pista de dança, ilha gastronômica e palco.',
    aspect: 'landscape',
  },
  {
    id: 'coberto-3',
    url: 'https://i.imgur.com/HUf83k7.jpeg',
    title: 'Estrutura Moderna de Apoio',
    category: 'salao',
    description: 'Pisos e acabamentos elegantes pensados para facilitar a decoração e circulação dos convidados.',
    aspect: 'landscape',
  },
  {
    id: 'coberto-4',
    url: 'https://i.imgur.com/U9VD8sP.jpeg',
    title: 'Visão Panorâmica Interna',
    category: 'salao',
    description: 'Estrutura completa que suporta confortavelmente mais de 300 convidados.',
    aspect: 'landscape',
  },
  {
    id: 'salao-porta',
    url: 'https://i.imgur.com/sY0EA6y.jpeg',
    title: 'Entrada para o Salão',
    category: 'salao',
    description: 'Acesso amplo e convidativo para os ambientes climatizados e cobertos.',
    aspect: 'portrait',
  },

  // Entrada & Recepção
  {
    id: 'entrada-1',
    url: 'https://i.imgur.com/E830ra7.jpeg',
    title: 'Portão e Fachada de Acesso',
    category: 'entrada',
    description: 'Fachada discreta, segura e de fácil identificação para a chegada dos convidados.',
    aspect: 'landscape',
  },
  {
    id: 'entrada-2',
    url: 'https://i.imgur.com/O3QQXzO.jpeg',
    title: 'Acesso Principal ao Espaço',
    category: 'entrada',
    description: 'Portão amplo que facilita carga, descarga de cerimonialistas, buffets e músicos.',
    aspect: 'landscape',
  },
  {
    id: 'chegada-1',
    url: 'https://i.imgur.com/NCziKG3.jpeg',
    title: 'Primeira Impressão ao Entrar',
    category: 'entrada',
    description: 'A vista encantadora que acolhe os convidados assim que cruzam a recepção.',
    aspect: 'landscape',
  },
  {
    id: 'chegada-2',
    url: 'https://i.imgur.com/ovw9nDb.jpeg',
    title: 'Área de Convivência e Passagem',
    category: 'entrada',
    description: 'Corredores largos e integrados que conectam o salão, piscina e jardins.',
    aspect: 'landscape',
  },
  {
    id: 'recepcao-calorosa',
    url: 'https://i.imgur.com/MOQduAR.jpeg',
    title: 'Recepção Calorosa',
    category: 'entrada',
    description: 'Clima festivo e aconchegante para receber amigos, familiares e parceiros de negócios.',
    aspect: 'landscape',
  },

  // Banheiros & Estrutura
  {
    id: 'banheiro-1',
    url: 'https://i.imgur.com/R9VrRtc.jpeg',
    title: 'Bancada e Lavabo de Luxo',
    category: 'banheiros',
    description: 'Bancadas em granito/mármore, cubas modernas, espelho e acabamento de alto padrão.',
    aspect: 'portrait',
  },
  {
    id: 'banheiro-2',
    url: 'https://i.imgur.com/s6H3nTK.jpeg',
    title: 'Lavatório e Higienização',
    category: 'banheiros',
    description: 'Estrutura sempre limpa, arejada e higienizada para o conforto dos convidados.',
    aspect: 'portrait',
  },
  {
    id: 'banheiro-3',
    url: 'https://i.imgur.com/OyPbbDy.jpeg',
    title: 'Cabines Sanitárias Individuais',
    category: 'banheiros',
    description: 'Cabines reservadas e equipadas para atender grandes públicos sem filas.',
    aspect: 'portrait',
  },
  {
    id: 'banheiro-4',
    url: 'https://i.imgur.com/FhFZuWn.jpeg',
    title: 'Banheiro Masculino / Feminino',
    category: 'banheiros',
    description: 'Setores separados e confortáveis com ventilação e iluminação impecáveis.',
    aspect: 'portrait',
  },
];

export const AMENITIES: Amenity[] = [
  {
    id: 'capacidade',
    title: 'Capacidade para 300+ Convidados',
    description: 'Estrutura dimensionada para receber eventos de grande porte com conforto, livre circulação e espaço para pista de dança e buffet.',
    highlight: 'Espaço amplo sem aperto',
    iconName: 'Users',
  },
  {
    id: 'climatizado',
    title: 'Salão Climatizado',
    description: 'Ambiente fechado com climatização para garantir a temperatura perfeita em qualquer estação do ano, faça chuva ou calor intenso.',
    highlight: 'Conforto térmico absoluto',
    iconName: 'Snowflake',
  },
  {
    id: 'natureza',
    title: 'Área Aberta com Natureza',
    description: 'Jardim arborizado, plantas ornamentais e iluminação acolhedora para fotos inesquecíveis e cerimônias ao ar livre.',
    highlight: 'Cenário natural encantador',
    iconName: 'Trees',
  },
  {
    id: 'piscina',
    title: 'Área de Piscina Privativa',
    description: 'Piscina cristalina com área de deck, perfeita para aniversários diurnos, confraternizações de empresas e finais de semana memoráveis.',
    highlight: 'Lazer e exclusividade',
    iconName: 'Waves',
  },
  {
    id: 'mobiliario',
    title: 'Cadeiras e Mesas Completas',
    description: 'Mobiliário já incluso na locação para você economizar tempo e reduzir expressivamente os custos extras de aluguel externo.',
    highlight: 'Economia garantida',
    iconName: 'Armchair',
  },
  {
    id: 'cozinha',
    title: 'Cozinha Equipada de Apoio',
    description: 'Bancadas de preparo, pontos elétricos, pias e área para os profissionais de buffet trabalharem com máxima agilidade e higiene.',
    highlight: 'Pronto para o buffet',
    iconName: 'UtensilsCrossed',
  },
  {
    id: 'banheiros',
    title: 'Banheiros Modernos e Setorizados',
    description: 'Instalações completas: masculino, feminino, lavabo sofisticado e ambiente adaptado para crianças e acessibilidade.',
    highlight: 'Sem filas e higiênico',
    iconName: 'Sparkles',
  },
  {
    id: 'localizacao',
    title: 'Localização de Fácil Acesso',
    description: 'Situado no bairro Catuaba em Jacobina, com rua tranquila, estacionamento facilitado e ponto estratégico para seus convidados.',
    highlight: 'Prático e seguro',
    iconName: 'MapPin',
  },
];

export const EVENT_TYPES = [
  'Casamento & Noivado',
  'Aniversário / 15 Anos',
  'Confraternização de Empresa',
  'Formatura',
  'Festa Infantil',
  'Chá Revelação / Batizado',
  'Outro Evento Especial',
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Quantas pessoas o Espaço Inovação comporta confortavelmente?',
    answer: 'O espaço foi planejado para acomodar com muito conforto mais de 300 convidados, distribuídos entre o salão coberto e a ampla área externa com piscina e jardins.',
  },
  {
    question: 'As mesas e cadeiras já estão inclusas no aluguel?',
    answer: 'Sim! Disponibilizamos mesas e cadeiras completas no local, eliminando o estresse e o custo de alugar mobiliário em fornecedores terceirizados.',
  },
  {
    question: 'Posso levar meu próprio buffet, decoração e banda/DJ?',
    answer: 'Com certeza! Você tem total liberdade para contratar os fornecedores de sua preferência. Nossa cozinha de apoio é ampla e os pontos de energia atendem sonorização e iluminação profissional.',
  },
  {
    question: 'É possível agendar uma visita presencial para conhecer o local?',
    answer: 'Sim, adoramos receber você! Basta nos chamar no WhatsApp (74 99120-5293) com a Konccy para combinarmos o melhor dia e horário para você conhecer pessoalmente todos os ambientes.',
  },
  {
    question: 'Como funciona a reserva da data?',
    answer: 'As reservas são confirmadas mediante contrato simples e sinal. Como as datas de finais de semana e feriados costumam fechar com antecedência, recomendamos entrar em contato assim que definir a data estimada.',
  },
  {
    question: 'A piscina pode ser utilizada durante o evento?',
    answer: 'Sim! Para eventos diurnos, aniversários e confraternizações, a piscina fica à disposição do seu grupo com total privacidade.',
  },
];
