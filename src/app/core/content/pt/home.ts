export const homeContent = {
  hero: {
    badge: 'Empresa Júnior de Desenvolvimento de Software — UFCA',
    titleStart: 'Transformamos ideias em ',
    titleHighlight: 'soluções digitais',
    titleEnd: ' de alto impacto',
    subtitle: 'Somos a Calang.io, a empresa júnior do curso de Ciência da Computação da Universidade Federal do Cariri. Desenvolvemos sites, aplicativos móveis e sistemas web sob medida para impulsionar o seu negócio.',
    ctaPrimary: 'Solicitar Orçamento',
    ctaSecondary: 'Conhecer Projetos',
    badgeOverlay: 'Filiados à UFCA & Movimento Empresa Júnior',
    stats: [
      { value: '15+', label: 'Projetos Entregues' },
      { value: '4+', label: 'Anos no Mercado' },
      { value: '25+', label: 'Membros Ativos' },
      { value: '100%', label: 'Satisfação dos Clientes' }
    ]
  },
  about: {
    badge: 'Quem Somos',
    title: 'Conectando a excelência acadêmica às necessidades reais do mercado',
    subtitle: 'A Calang.io une a inovação da universidade ao profissionalismo exigido pelo mercado, oferecendo desenvolvimento de software acessível e de alta qualidade.',
    description: 'Fundada por estudantes de Ciência da Computação da UFCA em Juazeiro do Norte - CE, nossa missão é formar profissionais diferenciados através da vivência empresarial, enquanto entregamos tecnologia moderna e escalável para empresas e empreendedores.',
    pillars: [
      {
        icon: 'code',
        title: 'Desenvolvimento Sob Medida',
        description: 'Construímos software personalizado utilizando as tecnologias mais modernas do mercado como Angular, React, Node.js e Python.'
      },
      {
        icon: 'lightbulb',
        title: 'Design UX/UI Intuitivo',
        description: 'Criamos interfaces bonitas, modernas e focadas na experiência do usuário para garantir engajamento e resultados.'
      },
      {
        icon: 'handshake',
        title: 'Impacto Social & Preço Acessível',
        description: 'Por sermos uma empresa júnior sem fins lucrativos, investimos o faturamento na capacitação da nossa equipe e oferecemos valores abaixo do mercado.'
      }
    ]
  },
  services: {
    badge: 'Nossos Serviços',
    title: 'Soluções completas para a presença digital da sua empresa',
    subtitle: 'Do planejamento ao lançamento, entregamos produtos digitais robustos e eficientes.',
    items: [
      {
        icon: 'desktop',
        title: 'Desenvolvimento Web',
        description: 'Landing pages, sites institucionais e portais corporativos otimizados para SEO e de carregamento rápido.'
      },
      {
        icon: 'smartphone',
        title: 'Aplicativos Mobile',
        description: 'Apps nativos e híbridos para Android e iOS com design fluido e alta performance.'
      },
      {
        icon: 'cloud',
        title: 'Sistemas Web e APIs',
        description: 'Plataformas de gestão, ERPs, CRMs e painéis administrativos sob medida para automatizar seus processos.'
      }
    ],
    linkText: 'Ver todos os serviços'
  },
  portfolio: {
    badge: 'Portfólio',
    title: 'Projetos recentes desenvolvidos por nossa equipe',
    subtitle: 'Confira alguns dos trabalhos que entregamos com orgulho para nossos clientes e parceiros.',
    projects: [
      {
        id: '1',
        title: 'Plataforma de Gestão Acadêmica',
        category: 'Sistema Web',
        description: 'Sistema completo para controle de frequência, notas e relatórios acadêmicos com painel administrativo em tempo real.',
        tags: ['Angular', 'Node.js', 'PostgreSQL'],
        image: 'assets/images/center-beneficios.jpg',
        status: 'Concluído'
      },
      {
        id: '2',
        title: 'App de Entregas Regionais',
        category: 'Aplicativo Mobile',
        description: 'Aplicativo mobile com rastreamento em tempo real, pagamento integrado e painel para lojistas do Cariri.',
        tags: ['Flutter', 'Firebase', 'Figma'],
        image: 'assets/images/dark-image-home.svg',
        status: 'Concluído'
      },
      {
        id: '3',
        title: 'Portal Institucional de Tecnologia',
        category: 'Desenvolvimento Web',
        description: 'Website moderno e responsivo focado em divulgação de serviços de tecnologia com blog e otimização para motores de busca.',
        tags: ['Angular', 'SSR', 'CSS3'],
        image: 'assets/images/light-image-home.svg',
        status: 'Concluído'
      }
    ],
    linkText: 'Ver portfólio completo'
  },
  testimonials: {
    badge: 'Depoimentos',
    title: 'O que nossos clientes dizem sobre nós',
    subtitle: 'A satisfação de quem confiou na Calang.io para desenvolver seu projeto.',
    items: [
      {
        name: 'Maria Oliveira',
        role: 'CEO da Cariri Inovações',
        comment: 'A equipe da Calang.io superou nossas expectativas! Entregaram um sistema web rápido, intuitivo e no prazo combinado. Recomendo fortemente!',
        rating: 5
      },
      {
        name: 'Carlos Eduardo',
        role: 'Fundador da Startup EduTech',
        comment: 'Trabalhar com a empresa júnior da UFCA foi incrível. O profissionalismo, a comunicação transparente e a qualidade técnica foram excepcionais.',
        rating: 5
      }
    ]
  },
  cta: {
    title: 'Pronto para tirar sua ideia do papel?',
    description: 'Fale com nossos consultores e receba uma proposta personalizada sem compromisso.',
    buttonText: 'Solicitar Orçamento Gratuito',
    secondaryButtonText: 'Falar via WhatsApp'
  }
};
