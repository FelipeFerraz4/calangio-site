export const portfolioContent = {
  hero: {
    badge: 'Our Portfolio',
    title: 'Projects that transform ideas into real results',
    subtitle: 'Discover cases developed by Calang.io members for companies, institutions, and entrepreneurs.'
  },
  clientLabel: 'Client:',
  highlightsLabel: 'Highlights:',
  categories: [
    { id: 'all', label: 'All' },
    { id: 'web', label: 'Web Systems' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'site', label: 'Websites' }
  ],
  projects: [
    {
      id: '1',
      title: 'Academic Management Platform',
      category: 'web',
      categoryLabel: 'Web System',
      client: 'Educational Institution',
      year: '2025',
      summary: 'Complete web platform for tracking classes, enrollments, grades, and analytical student performance reports.',
      description: 'Developed to optimize administrative processes for an educational institution in the Cariri region. Features access control by user role (teachers, students, and admins), PDF report generation, and real-time chart tracking.',
      technologies: ['Angular', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker'],
      tags: ['Angular', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker'],
      image: 'assets/images/center-beneficios.jpg',
      status: 'Completed',
      highlights: ['40% reduction in report issuance time', 'Real-time analytical dashboard', 'Over 1,000 active users']
    },
    {
      id: '2',
      title: 'Regional Delivery Mobile App',
      category: 'mobile',
      categoryLabel: 'Mobile App',
      client: 'Local Logistics Company',
      year: '2025',
      summary: 'Mobile app connecting couriers, partner merchants, and end customers with real-time GPS tracking.',
      description: 'End-to-end mobile solution for fast delivery management in Juazeiro do Norte and Crato. Includes courier app, customer app, and a web dashboard for central logistics management.',
      technologies: ['Flutter', 'Firebase', 'Google Maps API', 'Figma'],
      tags: ['Flutter', 'Firebase', 'Google Maps API', 'Figma'],
      image: 'assets/images/dark-image-home.svg',
      status: 'Completed',
      highlights: ['Real-time geolocation tracking', 'Simple and intuitive interface', 'Automated push notifications']
    },
    {
      id: '3',
      title: 'Institutional Technology Portal',
      category: 'site',
      categoryLabel: 'Website',
      client: 'UFCA Research Group',
      year: '2024',
      summary: 'Modern institutional website with advanced SEO optimization, scientific publications blog, and event calendar.',
      description: 'Project aimed at giving visibility to research projects developed within the university ecosystem, ensuring ultra-fast loading speed and seamless responsive navigation.',
      technologies: ['Angular', 'SSR', 'CSS3 Vanilla', 'SEO'],
      tags: ['Angular', 'SSR', 'CSS3 Vanilla', 'SEO'],
      image: 'assets/images/light-image-home.svg',
      status: 'Completed',
      highlights: ['Lighthouse score 98+', 'Fully responsive layout', 'Server-Side Rendering support']
    },
    {
      id: '4',
      title: 'Appointment Scheduling System',
      category: 'web',
      categoryLabel: 'Web System',
      client: 'Healthcare Clinic',
      year: '2024',
      summary: 'Online medical appointment booking platform with automatic WhatsApp confirmation and digital medical records.',
      description: 'Solution that automated consultation and exam booking for a regional clinic, significantly reducing no-shows through automated WhatsApp reminders.',
      technologies: ['React', 'Python', 'FastAPI', 'MongoDB'],
      tags: ['React', 'Python', 'FastAPI', 'MongoDB'],
      image: 'assets/images/center-beneficios.png',
      status: 'Completed',
      highlights: ['WhatsApp API integration', 'Secure electronic health record', 'Integrated financial dashboard']
    }
  ],
  cta: {
    title: 'Liked our work?',
    description: 'Let\'s build the next successful software solution for your company.',
    buttonText: 'Contact Us'
  }
};
