export const servicesContent = {
  hero: {
    badge: 'Nossas Soluções',
    title: 'Serviços de desenvolvimento de software de alta performance',
    subtitle: 'Oferecemos soluções tecnológicas completas, combinando design moderno, arquitetura sólida e código limpo para atender às necessidades do seu negócio.'
  },
  deliverablesLabel: 'O que entregamos:',
  list: [
    {
      id: 'web',
      icon: 'desktop',
      title: 'Desenvolvimento Web Institucional & Landing Pages',
      subtitle: 'Presença digital marcante e de alta conversão',
      description: 'Criamos websites institucionais, landing pages de alta conversão e portais informativos com design moderno, responsividade perfeita para dispositivos móveis e otimização avançada para motores de busca (SEO).',
      technologies: ['Angular', 'HTML5/CSS3', 'SEO/SSR', 'TypeScript'],
      deliverables: ['Design Responsivo', 'Otimização de Velocidade', 'Painel de Gerenciamento', 'Integração com Analytics']
    },
    {
      id: 'systems',
      icon: 'cloud',
      title: 'Sistemas Web Personalizados (ERPs & Dashboards)',
      subtitle: 'Automação e controle total das suas operações',
      description: 'Desenvolvemos plataformas web complexas sob medida, como sistemas de gestão empresarial (ERP), controle de estoque, portais de atendimento e painéis de dados (dashboards) em tempo real.',
      technologies: ['Node.js', 'Python/Django', 'PostgreSQL', 'RESTful APIs'],
      deliverables: ['Autenticação Segura', 'Relatórios Customizados', 'Perfis de Acesso', 'Backup Automatizado']
    },
    {
      id: 'mobile',
      icon: 'smartphone',
      title: 'Aplicativos Móveis (iOS & Android)',
      subtitle: 'A sua empresa no bolso dos seus clientes',
      description: 'Desenvolvimento de aplicativos nativos e multiplataforma para smartphones e tablets. Foco total em usabilidade, fluidez de navegação e integração com recursos do dispositivo (GPS, câmera, notificações push).',
      technologies: ['Flutter', 'Firebase', 'SQLite'],
      deliverables: ['Publicação nas Lojas (Google Play & App Store)', 'Push Notifications', 'Modo Offline', 'Design System Mobile']
    },
    {
      id: 'uxui',
      icon: 'mosaic',
      title: 'Design de Experiência e Interface (UX/UI)',
      subtitle: 'Protótipos interativos focados no usuário',
      description: 'Desenhamos a experiência do seu produto digital antes da escrita do código. Realizamos pesquisas de usuário, wireframes, protótipos navegáveis e design systems completos para garantir alta usabilidade.',
      technologies: ['Figma', 'Prototipagem', 'Design System', 'User Testing'],
      deliverables: ['Wireframes de Alta Fidelidade', 'Protótipo Interativo no Figma', 'Guia de Estilo de Marca', 'Assets Exportáveis']
    },
    {
      id: 'apis',
      icon: 'lightbulb',
      title: 'Integrações de APIs e Microsserviços',
      subtitle: 'Conectividade inteligente entre sistemas',
      description: 'Integramos seu sistema com gateways de pagamento (Stripe, Mercado Pago, Pix), serviços de email, ERPs legados, APIs de redes sociais e inteligência artificial.',
      technologies: ['RESTful', 'GraphQL', 'Docker', 'Webhooks'],
      deliverables: ['Documentação de API', 'Arquitetura Escalonável', 'Segurança SSL/JWT', 'Suporte Técnico']
    },
    {
      id: 'consulting',
      icon: 'handshake',
      title: 'Consultoria Técnica & Diagnóstico Digital',
      subtitle: 'Orientação especializada para sua empresa',
      description: 'Avaliamos a infraestrutura tecnológica do seu negócio, identificamos gargalos de performance ou segurança e propomos um plano de ação claro para modernização digital.',
      technologies: ['Auditoria de Código', 'Arquitetura de Software', 'Cloud Computing'],
      deliverables: ['Relatório de Diagnóstico', 'Plano de Ação Tecnológico', 'Recomendações de Segurança']
    }
  ],
  process: {
    badge: 'Metodologia',
    title: 'Como trabalhamos em cada projeto',
    subtitle: 'Nossa metodologia ágil garante transparência, pontualidade e alinhamento constante com o cliente.',
    steps: [
      {
        step: '01',
        title: 'Imersão & Discovery',
        description: 'Alinhamos expectativas, entendemos o problema de negócio e definimos os requisitos do projeto.'
      },
      {
        step: '02',
        title: 'Prototipagem & UX/UI',
        description: 'Criamos o fluxo navegável do sistema no Figma para aprovação do visual antes do código.'
      },
      {
        step: '03',
        title: 'Desenvolvimento Ágil',
        description: 'Programamos em sprints quinzenais com demonstrações constantes para acompanhamento do cliente.'
      },
      {
        step: '04',
        title: 'Garantia de Qualidade & Testes',
        description: 'Executamos testes de segurança, responsividade e usabilidade em diferentes dispositivos.'
      },
      {
        step: '05',
        title: 'Entrega & Treinamento',
        description: 'Implantamos o sistema no servidor final e treinamos a equipe do cliente para utilização.'
      }
    ]
  },
  cta: {
    title: 'Precisa de uma solução sob medida?',
    description: 'Nossa equipe está pronta para transformar seu desafio em software de alta qualidade.',
    buttonText: 'Solicitar Orçamento'
  }
};
