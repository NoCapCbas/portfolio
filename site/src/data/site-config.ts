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
        'My favorite programming language is currently 🐹(Golang).',
        'I enjoy solving 🧩 through code.',
        'I\'m currently documenting my learning journey',
    ],
    skills: [
        'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Git', 'GitHub', 'Linux', 'Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Git', 'GitHub', 'Linux'
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
            href: '/resume/Damon_Diaz___Software_Engineer_2024_resume.pdf'
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
            href: '/resume/Damon_Diaz___Software_Engineer_2024_resume.pdf'
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
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
