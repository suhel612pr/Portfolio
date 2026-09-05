// Add, remove, or re-group skills here. No proficiency percentages —
// those numbers can't really be verified, so the site just lists what
// you've worked with, grouped by area.

export interface SkillCategory {
  title: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Databases",
    items: ["MySQL", "SQL", "Relational schema design", "Query optimization"],
  },
  {
    title: "Frontend",
    items: ["React", "JavaScript", "HTML5", "CSS3 / Tailwind CSS", "Responsive layout"],
  },
  {
    title: "Tooling",
    items: ["Git", "GitHub", "Vite"],
  },
];
