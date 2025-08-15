
export const brand = {
  name: 'Abhi Tanwar',
  title: 'Full‑Stack Web Developer',
  location: 'Winnipeg, MB',
  email: 'abhi.tanwar108@outlook.com',
  blurb:
    'Full‑stack developer focused on clean UI, reliable APIs, and smooth deployment. Currently finishing the Full‑Stack Web Development program (Aug 2025). Open to co‑op and junior roles.',
};

export const work = [
  {
    title: '311 Insights Dashboard',
    description:
      'Interactive dashboard that surfaces trends in Winnipeg 311 requests with sortable tables and quick filters. Designed for clarity and speed on large CSVs.',
    image:
      'https://images.unsplash.com/photo-1551281044-8a5f7f9ef1b4?q=80&w=1200&auto=format&fit=crop',
    link: '#', // demo or repo link
    tech: ['Python', 'Dash', 'Pandas', 'Plotly', 'Docker'],
  },
  {
    title: 'Flask Utility API',
    description:
      'Production‑ready Flask service that converts images (Pillow) and generates mock data (Faker). Includes input validation and robust error handling.',
    image:
      'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
    link: '#',
    tech: ['Flask', 'Pillow', 'Faker', 'REST', 'Gunicorn'],
  },
  {
    title: 'Security Lab Report (Sample)',
    description:
      'Professional write‑up template for penetration‑testing labs with executive summary, findings, and reproducible steps. Ready for PDF export.',
    image:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop',
    link: '#',
    tech: ['Reporting', 'OWASP', 'Docs'],
  },
];

export const skills = {
  description:
    'Comfortable across the stack with modern JavaScript and Python. I like shipping features quickly while keeping code readable and testable.',
  languages: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'SQL'],
  frameworks: ['React', 'Node.js', 'Express', 'Flask', 'Dash'],
  tools: ['Git/GitLab', 'Docker', 'CI/CD', 'Jest/RTL', 'Prettier', 'ESLint'],
};

export const resources = [
  {
    title: 'Course GitLab Snippets',
    image:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
    summary: 'Reusable snippets and patterns collected during the program.',
    link: '#',
  },
  {
    title: 'Security Checklists',
    image:
      'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=1200&auto=format&fit=crop',
    summary:
      'My notes for common web vulns, quick recon steps, and remediation tips.',
    link: '#',
  },
  {
    title: 'React Docs I used a lot',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    summary: 'Official React docs, hooks patterns, and best practices I follow.',
    link: 'https://react.dev/',
  },
];

export const setup = {
  vscode: [
    'Extensions: ESLint, Prettier, ES7+ React Snippets',
    'Settings: “Format On Save” enabled, Prettier as default formatter',
    'Theme: any dark theme (JetBrains Mono font below)',
  ],
  terminal: [
    'Windows: WSL (Debian) or PowerShell',
    'Node via nvm (LTS v20)',
    'Clone repo → npm install → npm start',
  ],
  font: 'JetBrains Mono (or Fira Code) with ligatures',
};
