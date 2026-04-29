// src/app/shared/data/portfolio.data.ts

export interface Skill {
  name: string;
  percentage: number;
}

export interface Tool {
  name: string;
  icon: string;
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  bullets: string[];
}

export interface Education {
  year: string;
  degree: string;
  school: string;
}

export interface Project {
  period: string;
  name: string;
  stack: string;
  bullets: string[];
  link: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  location: string;
}

export const PORTFOLIO = {
  name: 'Vishal',
  role: 'Software Developer',
  location: 'Coimbatore',
  summary: `I am a software developer with 3+ years of experience in technical training and
    web development. My expertise lies in Angular, Laravel, and RESTful API integration,
    implementing secure coding practices and researching emerging technologies. I excel
    in designing and creating user-friendly applications using various programming
    languages, with a strong focus on security in coding.`,

  contact: {
    phone: '+91 9629588042',
    email: 'vishalramesh011@gmail.com',
    location: 'Coimbatore, Tamil Nadu, India',
  } as ContactInfo,

  stats: [
    { num: '3+', label: 'Years Exp.' },
    { num: '2',  label: 'Projects'   },
    { num: '8+', label: 'Skills'     },
  ],

  skills: [
    { name: 'Angular 18 / AngularJS',    percentage: 90 },
    { name: 'TypeScript / JavaScript',   percentage: 88 },
    { name: 'Laravel / PHP',             percentage: 85 },
    { name: 'RESTful APIs',              percentage: 87 },
    { name: 'MySQL',                     percentage: 82 },
    { name: 'HTML5 / CSS3',              percentage: 90 },
    { name: 'Bootstrap 5',              percentage: 85 },
    { name: 'Angular Material',         percentage: 80 },
  ] as Skill[],

  tools: [
    { name: 'Git',              icon: 'fa-brands fa-git-alt'       },
    { name: 'MySQL Workbench',  icon: 'fa-solid fa-database'       },
    { name: 'Postman',          icon: 'fa-solid fa-satellite-dish' },
  ] as Tool[],

  experience: [
    {
      period: 'Mar 2023 — Present',
      role: 'Software Developer',
      company: 'Aurum Tech Services',
      bullets: [
        'Developed user-friendly web applications using Angular and HTML5 technologies',
        'Integrated RESTful APIs for seamless data retrieval and interaction within applications',
        'Conducted thorough testing to identify and resolve bugs in application functionality',
        'Maintained version control using Git, ensuring smooth collaboration with the development team',
        'Developed and maintained multiple Angular applications with TypeScript, HTML, CSS and JavaScript',
        'Integrated UI elements such as charts, tables, forms and other interactive features using Angular Material',
      ],
    },
  ] as Experience[],

  education: [
    {
      year: '2021',
      degree: 'Master of Science in Computer Science',
      school: 'Hindustan College of Arts & Science',
    },
    {
      year: '2018',
      degree: 'Bachelor of Science in Computer Science',
      school: 'SNMV College of Arts & Science',
    },
  ] as Education[],

  projects: [
    {
      period: 'Mar 2023 – Jan 2025',
      name: 'Farmer Billing Module',
      stack: 'AngularJS · PHP · Laravel 8 · MySQL · REST APIs',
      bullets: [
        'Developed billing, payments & transaction history module',
        'Built responsive Angular frontend for bill creation, listing & filtering',
        'Implemented Laravel 8 backend with secure APIs and transaction workflows',
        'Designed MySQL schemas; ensured role-based access control',
      ],
      link: 'https://devvg.adwayit.com',
    },
    {
      period: 'Jan 2025 – Present',
      name: 'Aurum — Jewellery Management System',
      stack: 'Angular 18 · TypeScript · Laravel 11 · MySQL · REST APIs',
      bullets: [
        'Built Angular frontend for stock management, orders & dashboard analytics',
        'Implemented Laravel REST APIs for inventory tracking & multi-branch operations',
        'Integrated RBAC for admin, staff and manager roles with secure authentication',
        'Built sales reporting modules with insights into stock levels & trends',
      ],
      link: 'https://devaurumv4.adwayit.com',
    },
  ] as Project[],

  navLinks: [
    { label: 'Home',       href: '#home'       },
    { label: 'About',      href: '#about'      },
    { label: 'Skills',     href: '#skills'     },
    { label: 'Experience', href: '#experience' },
    { label: 'Education',  href: '#education'  },
    { label: 'Projects',   href: '#projects'   },
    { label: 'Contact',    href: '#contact'    },
  ],
};
