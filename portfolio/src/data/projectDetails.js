const detailsBySlug = {
  'game-hub': {
    problem:
      'Gamers struggle to discover games efficiently because most platforms either overload users with noise or lack meaningful filters, ratings, and clean UI experiences.',
    solution:
      'Built a fast and responsive frontend app that consumes external gaming APIs to help users easily explore, search, and filter games, while providing a modern UI and smooth user experience.',
    features: [
      'Browse thousands of games',
      'Powerful search and filtering by genre, platform, rating, and more',
      'Dynamic rating visualization',
      'Clean, responsive UI optimized for desktop and mobile',
      'Efficient API data handling and caching',
      'Fast performance with client-side rendering',
    ],
    techStack: ['React', 'TypeScript', 'Chakra UI', 'REST APIs'],
    summary:
      'Game Hub is a modern frontend application that helps users discover games effortlessly through an elegant UI, powerful filtering, and well-structured API data handling.',
  },
  'ft_transcendence': {
    problem:
      'Building a social real-time gaming experience requires reliable live interactions, authentication, and user communication — something many simple web games lack.',
    solution:
      'Developed a full-feature real-time multiplayer pong platform with authentication, chat, profiles, and live interactions powered by websockets.',
    features: [
      'Real-time multiplayer ping pong game',
      'Live chat system with rooms and private messaging',
      'Secure authentication and user management',
      'Customizable user profiles',
      'Matchmaking and live player presence',
      'Scalable backend using modern architecture',
    ],
    techStack: ['React', 'NestJS', 'TypeScript', 'PostgreSQL', 'Prisma', 'Socket.io'],
    summary:
      'ft_transcendence is a fully interactive real-time gaming platform combining gameplay, chat, and user management into a seamless modern web experience.',
  },
  'soccer-academy-management': {
    problem:
      'Football academies struggle to manage players, teams, and staff efficiently using spreadsheets or manual records, leading to disorganization and difficulty tracking performance.',
    solution:
      'Built a full-stack management platform that centralizes academy operations — handling players, teams, roles, and administration with a secure, intuitive system.',
    features: [
      'Player registration and management',
      'Team creation and assignment',
      'Role-based access (admin / coach / staff)',
      'Secure authentication',
      'Dashboard overview of academy data',
      'Responsive and easy-to-use UI',
    ],
    techStack: ['React', 'Node.js', 'Express', 'MySQL', 'Chakra UI'],
    summary:
      'A professional management platform designed to help academies organize players, teams, and staff efficiently with secure user roles and a clean interface.',
  },
  'portfolio': {
    problem:
      'Developers need a professional and visually engaging way to present their work, experience, and skills in one place.',
    solution:
      'Built a high-performance personal portfolio with animations, smooth navigation, and dedicated sections for projects, background, and contact.',
    features: [
      'Projects showcase with detailed pages',
      'Smooth animations and transitions',
      'Responsive design optimized for all devices',
      'Contact form integration',
      'Clean design with strong visual hierarchy',
    ],
    techStack: ['React', 'Vite', 'Chakra UI', 'Framer Motion', 'React Router'],
    summary:
      'A modern personal portfolio designed to highlight projects and experience while delivering smooth animations, great performance, and a polished user experience.',
  },
};

export default detailsBySlug;
