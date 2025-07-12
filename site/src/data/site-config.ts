export type Image = {
  src: string;
  alt?: string;
  caption?: string;
};

export type Link = {
  text: string;
  href: string;
};

export type Hero = {
  title?: string;
  text?: string;
  image?: Image;
  actions?: Link[];
};

export type Subscribe = {
  title?: string;
  text?: string;
  formUrl: string;
};

export type SiteConfig = {
  logo?: Image;
  title: string;
  subtitle?: string;
  description: string;
  image?: Image;
  about: string[];
  skills: string[];
  headerNavLinks?: Link[];
  footerNavLinks?: Link[];
  socialLinks?: Link[];
  hero?: Hero;
  subscribe?: Subscribe;
  postsPerPage?: number;
  projectsPerPage?: number;
  ctaLinks?: any;
};

const siteConfig: SiteConfig = {
  title: 'Damon Diaz',
  subtitle: 'Software Engineer',
  description: 'Software Engineer',
  image: {
    src: '/dante-preview.jpg',
    alt: 'Damon Diaz - Software Engineer'
  },
  about: [
    "I'm 🔥 about programming and debugging code.",
    'I have extensive experience in 🐍 and JavaScript.',
    'My favorite programming language is currently 🐍(Python).',
    'I enjoy solving 🧩\'s through code.',
    'I\'m currently documenting my learning journey',
  ],
  skills: [
    'Python', 'JavaScript', 'TypeScript',
    'Golang', 'C++',
    'React', 'Next.js', 'Tailwind CSS', 'Node.js', 'Astro.js',
    'Express', 'MongoDB', 'PostgreSQL',
    'Docker',
    'AWS', 'CI/CD', 'Git', 'GitHub', 'Linux'
  ],
  headerNavLinks: [
    {
      text: 'Home',
      href: '/'
    },
    {
      text: 'Projects',
      href: '/projects'
    },
    {
      text: 'Blog',
      href: '/blog'
    },
    {
      text: 'Tags',
      href: '/tags'
    },
    {
      text: 'Resume',
      href: '/resume/Damon_Diaz___Software_Engineer_2025_resume.pdf'
    }
  ],
  footerNavLinks: [
    {
      text: 'Home',
      href: '/'
    },
    {
      text: 'Projects',
      href: '/projects'
    },
    {
      text: 'Blog',
      href: '/blog'
    },
    {
      text: 'Tags',
      href: '/tags'
    },
    {
      text: 'Resume',
      href: '/resume/Damon_Diaz___Software_Engineer_2025_resume.pdf'
    }
  ],
  socialLinks: [
    {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/damondiaz/'
    },
    {
      text: 'GitHub',
      href: 'https://github.com/NoCapCbas'
    }
  ],
  hero: {
    title: 'Software Engineer',
    text: "",
  },
  subscribe: {
    title: 'Subscribe to Dante Newsletter',
    text: 'One update per week. All the latest posts directly in your inbox.',
    formUrl: '#'
  },
  ctaLinks: {
    "coffee": {
      title: 'Found my content helpful?',
      description: 'If you learned something from my content or found it helpful, please consider buying me a coffee.',
      text: 'Buy me a Coffee',
      href: 'https://www.buymeacoffee.com/damondiaz'
    }
  },
  postsPerPage: 8,
  projectsPerPage: 8
};

export default siteConfig;
