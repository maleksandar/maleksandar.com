export const personal = {
  name: 'Aleksandar Milosavljević',
  subtitle: 'Software engineer · JS & agentic coding enthusiast',
  location: 'Madrid, Spain',
  email: 'amilosavljevic@pm.me',
  github: 'maleksandar',
  linkedin: 'maleksandar',
  cal: 'maleksandar',
};

export const bio = `Seasoned software engineer committed to fostering quality and maintainability in software development. Actively mentored fellow engineers and facilitated team coordination in roles such as team lead and delivery manager during my 10-year tenure in the IT industry. Genuinely excited about the shift toward agentic coding — using AI as a day-to-day collaborator to move faster, explore ideas more freely, and ship with more confidence.`;

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  technologies: string[];
}

export const experience: Experience[] = [
  {
    company: 'Datadog',
    role: 'Senior Software Engineer',
    period: 'Mar 2026 — Present',
    location: 'Madrid, Spain',
    description: 'Optimizing UX and UI for Authentication, Authorization and Accounts. Actively using agentic coding workflows — Claude Code and OpenAI Codex — as day-to-day collaborators to accelerate feature development, explore solutions faster, and ship with greater confidence.',
    technologies: ['React', 'TypeScript', 'JavaScript', 'Claude Code', 'Codex'],
  },
  {
    company: 'Decenter',
    role: 'Senior Frontend Engineer',
    period: 'Feb 2024 — Feb 2025',
    location: 'Belgrade, Serbia',
    description:
      'Worked on various features and components of DeFi Saver — a decentralized finance platform for EVM based DeFi protocols. Shrunk application build time from 2 minutes to under 6 seconds. Introduced technologies and laid groundwork for implementing a component library centered around a well-defined design system.',
    technologies: ['React', 'TypeScript', 'JavaScript'],
  },
  {
    company: 'Tenderly',
    role: 'UI Engineer — L4',
    period: 'Feb 2022 — Dec 2023',
    location: 'Belgrade, Serbia',
    description:
      'Implemented various features on the Tenderly Dashboard — a developer platform enabling blockchain developers to debug and simulate Web3 transactions on EVM based networks. Main contributor for tenderly-sdk and one of the main contributors for a Solidity code playground site.',
    technologies: ['React', 'TypeScript', 'JavaScript'],
  },
  {
    company: 'Grid Dynamics',
    role: 'Delivery Manager / UI Specialisation Lead / Senior UI Engineer',
    period: 'Feb 2019 — Jun 2021',
    location: 'Belgrade, Serbia',
    description:
      'Led two concurrent projects with distinct distributed teams for a prominent US-based sports brand, including an in-store checkout app and a web security initiative. Facilitated UI engineer growth through performance reviews and internship programs. Built a widget board integrated with banking services for financial advisors; promoted to team lead within three months.',
    technologies: ['Angular', 'TypeScript', 'Ember.js', 'Lerna', 'Cypress', 'SCRUM'],
  },
  {
    company: 'Zühlke Engineering',
    role: 'Software Engineer',
    period: 'Sep 2015 — Feb 2019',
    location: 'Belgrade, Serbia',
    description:
      'Engaged as a full stack developer on diverse client projects, specializing in the .NET (C#) and Angular.js stack. Contributed to clients spanning industries including major sports organizations, insurance firms, and energy sector companies.',
    technologies: ['Angular.js', 'TypeScript', 'C#', 'ASP.NET', 'Docker', 'Azure'],
  },
];

export const education = [
  {
    institution: 'University of Belgrade, Faculty of Mathematics',
    degree: "Master's in Informatics",
    period: 'Oct 2016 — Sep 2021',
  },
  {
    institution: 'University of Belgrade, Faculty of Mathematics',
    degree: "Bachelor's in Informatics",
    period: 'Oct 2012 — Jul 2015',
  },
  {
    institution: 'Scrum.org',
    degree: 'Professional Scrum Developer I',
    period: 'Certified',
  },
];

export const skills = {
  Core: ['HTML & CSS', 'JavaScript', 'TypeScript', 'C#'],
  Frameworks: ['React', 'Angular', 'Node.js', 'ASP.NET'],
  Languages: ['Serbian (native)', 'English (fluent)'],
};
