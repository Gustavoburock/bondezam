import { Service, Testimonial, Benefit } from './types';

export const SERVICES: Service[] = [
  {
    id: 'volume-brasileiro',
    name: 'Volume Brasileiro',
    price: 120.00,
    description: 'Volume equilibrado, com acabamento elegante e natural. Ideal para quem deseja realçar o olhar sem perder a leveza.',
    badge: 'Mais pedido para o dia a dia',
    imageAlt: 'Extensão de Cílios com Volume Brasileiro',
    imageSrc: '/volume_brasileiro.png',
    features: [
      'Resultado personalizado conforme o formato dos olhos',
      'Manutenção recomendada a cada 15 a 20 dias',
      'Leveza e conforto absoluto no dia a dia',
      'Fios tecnológicos com formato Y de alta durabilidade'
    ]
  },
  {
    id: 'volume-3d',
    name: 'Volume 3D',
    price: 130.00,
    description: 'Volume delicado e sofisticado, criando mais preenchimento e definição sem pesar no olhar.',
    imageAlt: 'Extensão de Cílios com Volume 3D',
    imageSrc: '/volume_3d.png',
    features: [
      'Preenchimento estratégico dos fios',
      'Efeito marcante porém incrivelmente delicado',
      'Ideal para quem possui fios naturais mais finos',
      'Materiais de alto padrão hipoalergênicos'
    ]
  },
  {
    id: 'volume-aura',
    name: 'Volume Aura',
    price: 140.00,
    description: 'Efeito leve e moderno, com acabamento suave e sofisticado para um olhar iluminado.',
    badge: 'Lançamento Exclusivo',
    imageAlt: 'Extensão de Cílios com Volume Aura',
    imageSrc: '/volume_aura.png',
    features: [
      'Efeito de olhar iluminado e vívido',
      'Técnica moderna de acoplagem segura',
      'Extrema leveza nos fios com acabamento acetinado',
      'Mapeamento exclusivo para cada cliente'
    ]
  },
  {
    id: 'volume-luxo',
    name: 'Volume Luxo',
    price: 150.00,
    description: 'Mais intensidade e glamour para quem ama um olhar marcante, cheio e sofisticado.',
    badge: 'Máximo Glamour',
    imageAlt: 'Extensão de Cílios com Volume Luxo',
    imageSrc: '/volume_luxo.png',
    features: [
      'Densidade e cor preta profunda',
      'Efeito rímel marcante sem agredir os fios',
      'Retenção prolongada com técnicas avançadas',
      'Acabamento aveludado impecável'
    ]
  },
  {
    id: 'volume-fox',
    name: 'Volume Fox',
    price: 160.00,
    description: 'Mapeamento alongado que cria um efeito mais puxado e poderoso, valorizando o formato dos olhos.',
    badge: 'Efeito Fox Eyes',
    imageAlt: 'Extensão de Cílios com Volume Fox',
    imageSrc: '/volume_fox.png',
    features: [
      'Olhar gateado, sensual e expressivo',
      'Modelagem direcionada no canto externo',
      'Harmonização precisa da simetria facial',
      'Destaque perfeito para ocasiões especiais'
    ]
  },
  {
    id: 'mega-brasileiro',
    name: 'Mega Brasileiro',
    price: 140.00,
    description: 'Para quem busca bastante presença e preenchimento, mantendo conforto e acabamento bem definido.',
    imageAlt: 'Extensão de Cílios com Mega Brasileiro',
    imageSrc: '/mega_brasileiro.png',
    features: [
      'Presença marcante e preenchimento denso',
      'Conforto adaptado para uso prolongado',
      'Definição e alinhamento milimétrico dos fios',
      'Durabilidade estendida com cuidados corretos'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Mariana Silva',
    role: 'Cliente de Volume Luxo',
    text: 'A experiência com a Bondezan é surreal! O atendimento é impecável e meus cílios duram muito mais do que em qualquer outro lugar. Sinto-me incrivelmente sofisticada e pronta a qualquer hora do dia.',
    rating: 5
  },
  {
    id: '2',
    name: 'Beatriz Fontes',
    role: 'Cliente de Volume Brasileiro',
    text: 'Procurei uma profissional que realmente cuidasse da saúde dos meus fios naturais, e a Bondezan me surpreendeu. O Volume Brasileiro é leve, super natural e recebo elogios todos os dias!',
    rating: 5
  },
  {
    id: '3',
    name: 'Gabriela Lima',
    role: 'Cliente de Volume Aura',
    text: 'O procedimento foi super relaxante, nem senti o tempo passar na maca. O resultado do Volume Aura ficou exatamente como eu sonhava: olhar radiante e elegante sem pesar nada!',
    rating: 5
  },
  {
    id: '4',
    name: 'Isadora Ramos',
    role: 'Cliente de Volume Fox',
    text: 'O Volume Fox transformou totalmente o meu olhar! Ele realça meus olhos de um jeito poderoso e elegante. O espaço privativo é maravilhoso e o atendimento é digno de 5 estrelas.',
    rating: 5
  }
];

export const BENEFITS: Benefit[] = [
  {
    title: 'Atendimento Personalizado',
    description: 'Mapeamento exclusivo e detalhado pensado especialmente para harmonizar com o formato e expressão do seu olhar.',
    iconName: 'Sparkles'
  },
  {
    title: 'Materiais de Altíssimo Padrão',
    description: 'Apenas os fios mais leves e macios do mercado mundial combinados com adesivos certificados e seguros.',
    iconName: 'ShieldCheck'
  },
  {
    title: 'Conforto & Retenção Absolutos',
    description: 'Técnica meticulosa que protege seus fios naturais, garantindo uma aplicação indolor e alta durabilidade.',
    iconName: 'Heart'
  },
  {
    title: 'Ambiente Sofisticado',
    description: 'Um espaço de acolhimento premium, projetado para que seu momento de autocuidado seja um verdadeiro spa.',
    iconName: 'Crown'
  }
];

export const FAQS = [
  {
    question: 'A extensão de cílios danifica meus cílios naturais?',
    answer: 'Não. Quando aplicada de forma correta por uma profissional qualificada, respeitando a espessura e comprimento suportados pelo fio natural, a extensão é 100% segura. Nós realizamos um mapeamento saudável para proteger a integridade de seus cílios.'
  },
  {
    question: 'Quanto tempo dura o procedimento de aplicação?',
    answer: 'O tempo varia entre 1h30 e 2h15, dependendo da técnica escolhida. É um momento relaxante em uma maca ergonômica super confortável, onde a maioria das nossas clientes aproveita para descansar.'
  },
  {
    question: 'De quanto em quanto tempo devo fazer a manutenção?',
    answer: 'A manutenção tradicional é recomendada a cada 15 a 21 dias, garantindo que o olhar permaneça preenchido e alinhado. Para quem busca maior durabilidade, o método Capping pode prolongar o resultado por mais de 30 dias, conforme o ciclo natural dos seus fios.'
  },
  {
    question: 'Posso usar rímel ou molhar os cílios?',
    answer: 'Molhar os cílios está liberado após o período de cura indicado, inclusive a higienização diária é fundamental para a saúde ocular. Porém, o uso de rímel (máscara de cílios) é estritamente proibido nas extensões, pois acumula resíduos impossíveis de remover e compromete a colagem.'
  },
  {
    question: 'Como faço para agendar o meu horário?',
    answer: 'É extremamente simples! Clique em qualquer botão de agendamento na página para ser redirecionada diretamente ao nosso WhatsApp oficial. Lá, nossa equipe ajudará você a escolher o melhor dia, horário e técnica.'
  }
];
