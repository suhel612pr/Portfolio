// Certificates. Images live in /public/certificates/ alongside the
// original PDFs (kept for a crisp full-resolution "view certificate" link).

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  image?: string;
  pdf?: string;
  credentialUrl?: string;
}

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "Internship Completion Certificate — SQL",
    issuer: "Intern Vision",
    date: "Dec 2025 – Feb 2026",
    description:
      "Completed an internship in the SQL domain. Certificate ID 1224INTV0261.",
    image: "/certificates/sql-internship-certificate.jpg",
    pdf: "/certificates/sql-internship-certificate.pdf",
  },
  {
    id: 2,
    title: "Letter of Recommendation",
    issuer: "Intern Vision Technology Pvt. Ltd.",
    date: "February 2026",
    description:
      "Written on completion of the SQL internship, covering technical proficiency, problem-solving, and reliability during the placement.",
    image: "/certificates/letter-of-recommendation.jpg",
    pdf: "/certificates/letter-of-recommendation.pdf",
  },
  {
    id: 3,
    title: "Web Development & Generative AI Internship",
    issuer: "Elite Forums",
    date: "May – Aug 2026",
    description:
      "Completed an internship covering web development, application development, and building with generative AI tools. Certificate ID EF-2026-404428.",
    image: "/certificates/elite-forum-itr-certificate.jpg",
    pdf: "/certificates/elite-forum-itr-certificate.pdf",
  },
  {
    id: 4,
    title: "Oracle MySQL Explorer Badge",
    issuer: "Oracle University",
    date: "2026",
    description:
      "Oracle Learning Explorer badge covering MySQL fundamentals.",
    image: "/certificates/oracle-mysql-explorer-badge.png",
  },
  {
    id: 5,
    title: "MySQL Database Service Badge",
    issuer: "Oracle University",
    date: "2026",
    description:
      "Oracle Learning Explorer badge covering Oracle's managed MySQL Database Service.",
    image: "/certificates/oracle-mysql-database-service-badge.png",
  },
  {
    id: 6,
    title: "freeCodeCamp JavaScript Certification",
    issuer: "freeCodeCamp",
    date: "04/July/2026",
    description:
      "Certificate for completing the JavaScript course on freeCodeCamp.",
    image: "/certificates/freecodecamp-javascript-certificate.jpg",
  },
];
