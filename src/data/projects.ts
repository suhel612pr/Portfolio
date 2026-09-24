// Each project needs a title, description, and tags. github/live are
// optional — omit them rather than linking somewhere that isn't the
// actual project (e.g. your GitHub profile root instead of the repo).

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Jersey Kingdom",
    description:
      "An e-commerce storefront for a jersey shop: product browsing, filtering, a cart, and checkout flow, with cart state kept in local storage so it survives a refresh.",
    tags: ["React", "HTML5", "CSS3", "Local Storage", "Responsive Design"],
    github: "https://github.com/suhel612pr/Jersey-Kingdom",
    live: "https://jersey-kingdom.vercel.app/",
    featured: true,
  },
  {
    id: 2,
    title: "Contralabos",
    description:
      "ContraLabos is a digital labour chowk that connects contractors with workers for hiring. It also helps contractors digitise and manage their workforce and project data in one place.",
    tags: ["React", "HTML", "CSS", "Supabase", "Responsive Design"],
    github: "https://github.com/suhel612pr/ContraLabos",
    live: "https://contra-labos.vercel.app/",
    featured: true,
  },
  {
    id: 3,
    title: "Digital Personal Library Manager",
    description:
      "A dashboard for tracking a personal book collection — categorizing titles, marking items as borrowed or available, and searching across multiple fields at once.",
    tags: ["JavaScript", "HTML5", "CSS3", "State Management"],
    // TODO: add the specific repo URL here once it's public, e.g.
    // github: "https://github.com/suhel612pr/library-manager",
  },
  {
    id: 4,
    title: "E-Commerce Order Management System",
    description:
      "An order-processing simulator built on a small relational schema: products, customers, and orders tables, with computed sales metrics and an invoice log.",
    tags: ["React", "Vite", "MySQL", "Tailwind CSS"],
    // TODO: add the specific repo URL here once it's public.
  },
];
