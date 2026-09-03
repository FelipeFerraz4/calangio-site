export const portfolioContent = {
  hero: {
    badge: 'Nosso Portfólio',
    title: 'Projetos que transformam ideias em resultados reais',
    subtitle: 'Conheça alguns dos cases desenvolvidos pelos membros da Calang.io para empresas, instituições e empreendedores.'
  },
  clientLabel: 'Cliente:',
  highlightsLabel: 'Destaques:',
  categories: [
    { id: 'all', label: 'Todos' },
    { id: 'web', label: 'Sistemas Web' },
    { id: 'mobile', label: 'Aplicativos Mobile' },
    { id: 'site', label: 'Websites' }
  ],
  projects: [
    {
      id: '1',
      title: 'Plataforma de Gestão Acadêmica',
      category: 'web',
      categoryLabel: 'Sistema Web',
      client: 'Instituição de Ensino',
      year: '2025',
      summary: 'Sistema web para acompanhamento de turmas, matrículas, notas e relatórios analíticos de desempenho estudantil.',
      description: 'Desenvolvido para otimizar os processos administrativos de uma instituição educacional no Cariri. Conta com controle de acesso por níveis de usuário (professores, alunos e administradores), geração de boletins em PDF e gráficos de acompanhamento.',
      technologies: ['Angular', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker'],
      image: 'assets/images/center-beneficios.jpg',
      status: 'Concluído',
      highlights: ['Redução de 40% no tempo de emissão de relatórios', 'Painel analítico em tempo real', 'Mais de 1.000 usuários ativos']
    },
    {
      id: '2',
      title: 'App de Entregas Regionais',
      category: 'mobile',
      categoryLabel: 'Aplicativo Mobile',
      client: 'Empresa de Logística Local',
      year: '2025',
      summary: 'Aplicativo móvel para conexão entre entregadores, comércios parceiros e clientes finais com rastreamento GPS.',
      description: 'Solução mobile completa para gestão de entregas rápidas na região de Juazeiro do Norte e Crato. Inclui aplicativo para o entregador, app para o cliente e painel web para a central de logística.',
      technologies: ['Flutter', 'Firebase', 'Google Maps API', 'Figma'],
      image: 'assets/images/dark-image-home.svg',
      status: 'Concluído',
      highlights: ['Geolocalização em tempo real', 'Interface simples e intuitiva', 'Notificações push automáticas']
    },
    {
      id: '3',
      title: 'Portal Institucional de Tecnologia',
      category: 'site',
      categoryLabel: 'Website',
      client: 'Grupo de Pesquisa UFCA',
      year: '2024',
      summary: 'Website institucional moderno com otimização SEO avançada, blog de publicações científicas e agenda de eventos.',
      description: 'Projeto focado em dar visibilidade aos trabalhos de pesquisa desenvolvidos no ecossistema da universidade, garantindo carregamento ultrarrápido e navegação adaptada a todos os dispositivos.',
      technologies: ['Angular', 'SSR', 'CSS3 Vanilla', 'SEO'],
      image: 'assets/images/light-image-home.svg',
      status: 'Concluído',
      highlights: ['Lighthouse score 98+', 'Totalmente responsivo', 'Suporte a Server-Side Rendering']
    },
    {
      id: '4',
      title: 'Sistema de Agendamento e Consultas',
      category: 'web',
      categoryLabel: 'Sistema Web',
      client: 'Clínica de Saúde',
      year: '2024',
      summary: 'Plataforma de marcação de consultas online com confirmação automática via WhatsApp e prontuário digital.',
      description: 'Solução que automatizou o fluxo de marcação de exames e consultas de uma clínica regional, reduzindo faltas de pacientes através de lembretes automáticos.',
      technologies: ['React', 'Python', 'FastAPI', 'MongoDB'],
      image: 'assets/images/center-beneficios.png',
      status: 'Concluído',
      highlights: ['Integração com WhatsApp API', 'Prontuário eletrônico seguro', 'Painel financeiro integrado']
    }
  ],
  cta: {
    title: 'Gostou do nosso trabalho?',
    description: 'Vamos construir a próxima solução de sucesso para a sua empresa.',
    buttonText: 'Fale Conosco'
  }
};
