export interface CourseModule {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  topics: string[];
  takeaway: string;
}

export const COURSE_MODULES: CourseModule[] = [
  {
    id: 'intro',
    number: '01',
    title: 'Introdução à Extensão de Cílios',
    subtitle: 'Fundamentos e Princípio Fundamental',
    topics: [
      'O que é a extensão de cílios e sua evolução no mercado',
      'Princípio fundamental: estética, segurança, conforto e preservação do fio natural',
      'Principais técnicas: Fio a Fio clássico, Volume Híbrido, Volume Brasileiro e variações',
      'Avaliação individual e personalizada para cada cliente'
    ],
    takeaway: 'A técnica bonita é aquela que combina estética impecável com a saúde e preservação dos cílios naturais.'
  },
  {
    id: 'biosafety',
    number: '02',
    title: 'Biossegurança e Higiene',
    subtitle: 'Protocolo Sanitário e Segurança da Cliente',
    topics: [
      'Preparação antes de iniciar: higienização das mãos e bancada',
      'Boas práticas durante o atendimento e descarte correto de descartáveis',
      'Processamento e esterilização de materiais reutilizáveis',
      'Segurança da cliente: anamnese prévia, sinais de irritação e encaminhamento profissional'
    ],
    takeaway: 'Confiança e autoridade começam na segurança intransigente do seu ambiente de trabalho.'
  },
  {
    id: 'tools',
    number: '03',
    title: 'Materiais e Ferramentas de Alta Performance',
    subtitle: 'O Arsenal da Lash Designer de Sucesso',
    topics: [
      'Pinças específicas: isolamento preciso e aplicação ergonômica',
      'Fios: comprimentos, espessuras e curvaturas adequadas a cada proposta',
      'Adesivo (cola): armazenamento, validade, climatização e condições ambientais',
      'Preparadores e finalizadores: higienizador, primer e selantes',
      'Acessórios indispensáveis: pads em gel, micropore, microbrushes e suportes'
    ],
    takeaway: 'Dominar o ferramental evita desperdício de tempo e garante retenções acima da média.'
  },
  {
    id: 'anatomy',
    number: '04',
    title: 'Anatomia e Características dos Fios',
    subtitle: 'Biologia Ocular e Estrutura Fisiológica',
    topics: [
      'Ciclo biológico dos cílios: anágena (crescimento), catágena (transição) e telógena (queda)',
      'Compatibilidade de espessura com a resistência do fio natural',
      'Escolha de comprimentos sem sobrecarregar a sustentação',
      'Curvaturas estratégicas (C, CC, D, L, M) para valorizar cada olhar'
    ],
    takeaway: 'Nunca escolha extensões apenas pelo visual: respeite a saúde e o peso suportado pelo fio.'
  },
  {
    id: 'mapping',
    number: '05',
    title: 'Mapeamento e Design de Olhar (Mapping)',
    subtitle: 'Visagismo e Simetria',
    topics: [
      'Conceito e arquitetura de um Mapping profissional',
      'Efeitos consagrados: Natural, Boneca, Gatinho e Esquilo',
      'A Regra de Ouro: valorizar o olhar sem sobrecarregar a estrutura natural',
      'Transições suaves de comprimentos, simetria e direção',
      'Registro de ficha para reprodução e manutenções perfeitas'
    ],
    takeaway: 'O mapping certo transforma a harmonia facial da cliente e fideliza para sempre.'
  },
  {
    id: 'prep',
    number: '06',
    title: 'Avaliação, Anamnese e Preparação da Cliente',
    subtitle: 'Alinhamento de Expectativas e Conforto',
    topics: [
      'Ficha de Anamnese completa: sensibilidades, histórico e procedimentos prévios',
      'Preparação: acolhimento, higienização ocular e isolamento dos inferiores com pads',
      'Conferência do efeito desejado e limitações anatômicas',
      'Contraindicações e cautela: quando suspender e priorizar a segurança ocular'
    ],
    takeaway: 'Uma anamnese detalhada protege a cliente, o seu nome e blinda sua carreira.'
  },
  {
    id: 'step-by-step',
    number: '07',
    title: 'Passo a Passo da Aplicação Perfeita',
    subtitle: 'Do Isolamento à Conferência Final',
    topics: [
      '1. Preparar: higienização e organização minuciosa da bancada',
      '2. Isolar: precisão milimétrica sem encostar nos fios vizinhos',
      '3. Selecionar: fio com mapping, curvatura e espessura ideais',
      '4. Aplicar: acoplagem controlada respeitando a distância segura da pele',
      '5. Direcionar: alinhamento perfeito na direção projetada',
      '6. Conferir: checagem de stickies e excessos antes de liberar a cliente'
    ],
    takeaway: 'A técnica precisa gera trabalhos sem incômodos, onde a cliente nem sente que está de extensão.'
  },
  {
    id: 'retention',
    number: '08',
    title: 'Retenção Máxima e Cuidados com a Cola',
    subtitle: 'O Segredo para Extensões Duradouras',
    topics: [
      'Fatores críticos da retenção: preparação, gota do adesivo e velocidade de acoplagem',
      'Termohigrometria: controle de temperatura e umidade da sala',
      'Armazenamento correto do adesivo e controle de oxidação',
      'Dica de ouro: não culpar apenas a cola — diagnosticar o protocolo completo'
    ],
    takeaway: 'Retenção de 30+ dias é física, química e técnica trabalhando juntas.'
  },
  {
    id: 'maintenance',
    number: '09',
    title: 'Manutenção e Remoção Segura',
    subtitle: 'Preservando a Saúde dos Fios a Longo Prazo',
    topics: [
      'Avaliação dos fios remanescentes e substituição dos que cresceram',
      'Remoção com produto específico e técnica que não danifica o fio natural',
      'Reavaliação: como conduzir fios fragilizados e recuperar a saúde ciliar'
    ],
    takeaway: 'Uma remoção segura é tão importante quanto uma aplicação perfeita.'
  },
  {
    id: 'aftercare',
    number: '10',
    title: 'Pós-Procedimento e Home Care',
    subtitle: 'Educação da Cliente para Manter o Trabalho Impecável',
    topics: [
      'Orientações obrigatórias de higienização suave com espuma adequada',
      'Secagem sem fricção e rotina de pentear as extensões',
      'O que evitar: atrito, produtos oleosos e puxar os fios',
      'Agendamento estratégico da janela de manutenção'
    ],
    takeaway: 'Clientes educadas cuidam melhor dos cílios e retornam religiosamente a cada ciclo.'
  },
  {
    id: 'troubleshooting',
    number: '11',
    title: 'Erros Comuns e Como Corrigir',
    subtitle: 'Diagnóstico Prático de Falhas',
    topics: [
      'Excesso de adesivo e risco de aspecto pesado',
      'Stickies (fios colados entre si) e como separar com segurança',
      'Distância inadequada: nunca colar diretamente sobre a pele',
      'Peso excessivo e quedas precoces',
      'Saltos bruscos no mapping e direções desalinhadas'
    ],
    takeaway: 'Saber identificar e corrigir erros rapidamente é o que separa amadoras de mestras.'
  },
  {
    id: 'tools-check',
    number: '12 - 14',
    title: 'Ferramentas de Gestão e Metodologia Prática',
    subtitle: 'Ficha de Atendimento, Checklist e Dicas da Instrutora',
    topics: [
      'Modelo oficial de Ficha de Atendimento da Bianca Bondezan',
      'Checklist de 11 passos da profissional antes e depois de cada atendimento',
      'Filosofia da Instrutora: "Não tenha pressa para buscar velocidade. Construa primeiro uma base sólida."',
      'Orientação individualizada para início imediato de atendimentos'
    ],
    takeaway: '"Seu trabalho começa no conhecimento. Pratique com responsabilidade e consistência."'
  }
];

export const COURSE_FAQ = [
  {
    question: 'Preciso ter alguma experiência prévia para fazer o curso?',
    answer: 'Não! O Curso de Formação da Bianca Bondezan foi estruturado para levar você do absoluto zero até a segurança de realizar atendimentos profissionais e lucrativos.'
  },
  {
    question: 'Vou aprender a aplicar na prática ou é apenas teoria?',
    answer: 'O curso equilibra teoria profunda (apostila completa de 17 páginas) com prática supervisionada intensiva em modelo real, garantindo que você termine o treinamento apta a atender.'
  },
  {
    question: 'Recebo certificado ao concluir?',
    answer: 'Sim! Ao concluir a formação e demonstrar domínio das etapas de biossegurança, acoplagem e conferência, você recebe o Certificado Oficial de Lash Designer assinado pela instrutora Bianca Bondezan.'
  },
  {
    question: 'Terei suporte da Bianca após o curso?',
    answer: 'Sim! Você terá canal direto com a Bianca para tirar dúvidas sobre compras de materiais, ajustes de temperatura/umidade do adesivo, avaliação de mappings e primeiros atendimentos.'
  },
  {
    question: 'O que está incluso no material de apoio?',
    answer: 'Você recebe a Apostila Oficial de Formação (com os 14 módulos, ficha de anamnese padronizada, checklist de 11 etapas e guia de intercorrências), além de mentoria sobre precificação e gestão de clientes.'
  }
];
