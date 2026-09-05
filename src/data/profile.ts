// Central profile data. Edit this file to update the site — nothing else
// needs to change. This is also the file a future Supabase/CMS layer
// would replace with a fetch call (see README "Connecting a real backend").

export const profile = {
  name: "Suhel Ansari",
  roles: ["Data Science", "Full-Stack Development", "SQL & Databases"],
  location: "Palghar, Maharashtra, India",
  avatarUrl: "/avatar/avatar.jpg",
  email: "suhelias786@gmail.com",
  github: "https://github.com/suhel612pr",
  // Add a LinkedIn/Instagram URL here if you want it in the nav/footer, e.g.:
  // linkedin: "https://linkedin.com/in/...",

  // Shown in the hero. Keep it short and specific.
  tagline:
    "I build web applications and work with relational databases, currently completing a Diploma in Computer Science Engineering.",

  // Longer version for the About section.
  about: [
    "I'm a Computer Science Engineering diploma student with a focus on databases and full-stack web development, and I'm building toward a career in data science.",
    "Most of my hands-on experience so far comes from an SQL internship and an industrial training placement, both of which involved writing real queries and building interfaces around them rather than just following a course.",
  ],

  // Set to a real file path (e.g. "/resume/suhel-ansari-resume.pdf") once
  // you drop your resume into /public/resume/. Left empty, the Resume
  // button is hidden instead of linking to a file that doesn't exist.
  resumeUrl: "",
};

export const education = [
  {
    title: "Diploma in Computer Science Engineering",
    organization: "St. John College of Engineering and Management",
    location: "Palghar, Maharashtra",
    period: "In progress",
    description:
      "Core coursework in Data Structures, Database Management Systems, Object-Oriented Programming, and Algorithms.",
  },
];

export const experience = [
  {
    title: "Industrial Training Student",
    organization: "Elite Forum",
    location: "Vasai Road, Maharashtra",
    period: "Current",
    description:
      "Working on responsive front-end layouts and everyday software engineering practices — Git workflows, code reviews, and deploying working builds — under industry mentors.",
  },
  {
    title: "SQL Intern",
    organization: "Intern Vision",
    location: "Remote",
    period: "Completed",
    description:
      "Worked with relational schema design, multi-table queries, and index optimization. Built the SQL foundation the two database-driven projects below are based on.",
  },
];
