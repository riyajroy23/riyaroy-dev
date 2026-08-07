export interface Experience {
  role: string;
  company: string;
  slug: string;
  location: string;
  dates: string;
  bullets: string[];
}

export const experience: Experience[] = [
  {
    role: "Software Engineer Intern",
    company: "John Hancock (Manulife)",
    slug: "john-hancock",
    location: "Boston, MA",
    dates: "Jun 2026 — Present",
    bullets: [
      "Engineered a Databricks ETL workflow using Python and SQL to extract account data, apply deduplication logic, and populate client-facing reports for 30K+ accounts per quarter.",
      "Automated workflow validation and email alerts, reducing manual monitoring for the production support team.",
      "Expanded an internal OpenAPI mock server with configurable response variants, enabling 100+ API test cases.",
    ],
  },
  {
    role: "Software Innovation Engineer Intern",
    company: "New Balance",
    slug: "new-balance",
    location: "Boston, MA",
    dates: "Jan 2026 — May 2026",
    bullets: [
      "Developed an OpenCV-based calibration tool to detect fiducial markers, improving robotic arm positioning by 6%.",
      "Automated Azure-to-COCO data conversion for 24K shoe part images, enabling scalable computer vision training.",
      "Trained a Mask R-CNN model, achieving 95% segmentation accuracy across 12 shoe part classes while reducing production inference time by 30%.",
    ],
  },
  {
    role: "Software Project Lead",
    company: "Northeastern University",
    slug: "northeastern",
    location: "Boston, MA",
    dates: "Jan 2026 — May 2026",
    bullets: [
      "Led an 8-person engineering team to develop a co-op preparation website with alumni mentorship, Q&A forums, and job postings scraped from the Northeastern portal, validated by 25+ student testers.",
      "Directed agile sprints, 20+ code reviews, and hands-on mentorship, driving the product from ideation to launch.",
    ],
  },
  {
    role: "Software Engineer Co-op",
    company: "Nara Logics",
    slug: "nara-logics",
    location: "Boston, MA",
    dates: "Jan 2025 — Aug 2025",
    bullets: [
      "Built a Python explainable AI tool identifying the key features in clustering models with 92% consistency.",
      "Integrated a React interface and AWS (EC2, S3) pipeline, accelerating model output analysis for 10+ clients.",
      "Organized 5 training sessions to onboard AI tooling into the standard workflow for model analysis and tuning.",
    ],
  },
];

export interface Project {
  name: string;
  slug: string;
  kind: "vision" | "webapp";
  tag: string;
  tagVariant: "primary" | "accent";
  description: string;
  stack: string[];
}

export const projects: Project[] = [
  {
    name: "ML-Based Skin Cancer Diagnosis",
    slug: "skin-cancer-diagnosis",
    kind: "vision",
    tag: "computer vision",
    tagVariant: "primary",
    description:
      "Deep learning system for classifying dermatoscopic images across 7 skin cancer types, deployed to a website with real-time predictions.",
    stack: ["Python", "TensorFlow", "Keras", "OpenCV", "Pandas"],
  },
  {
    name: "ReCo-op",
    slug: "recoop",
    kind: "webapp",
    tag: "full-stack",
    tagVariant: "accent",
    description:
      "Website fostering co-op preparation groups and alumni mentorship, built with a MongoDB-backed Flask API and a shadcn/ui-driven React front end.",
    stack: ["TypeScript", "React", "MongoDB", "Flask"],
  },
  {
    name: "SelfServe",
    slug: "selfserve",
    kind: "webapp",
    tag: "full-stack",
    tagVariant: "accent",
    description:
      "Full-stack production website for an early-stage startup, with reusable UI components and PostgreSQL-backed auth and data.",
    stack: ["TypeScript", "React", "PostgreSQL", "Postman", "Google Maps API"],
  },
];

export interface Publication {
  title: string;
  meta: string;
  date: string;
}

export const publications: Publication[] = [
  {
    title: "Retirement Score Calculator",
    meta: "United States Patent 11,669,806 · U.S. Patent and Trademark Office",
    date: "Jun 2023",
  },
  {
    title: "Diagnosing Skin Cancer Using AI and Machine Learning",
    meta: "11th IEEE Integrated STEM Education Conference",
    date: "Mar 2021",
  },
];

export const skills = {
  languages: ["Java", "Python", "C++", "JavaScript", "TypeScript", "HTML/CSS", "SQL", "R", "Racket", "MATLAB"],
  frameworks: ["React", "Flask", "Express.js", "Jest", "Cypress", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "Keras"],
  tools: ["Git", "Node.js", "PostgreSQL", "Linux", "AWS", "Azure", "Vite", "Jira", "Databricks", "Power BI", "Kubernetes", "Postman", "Docker", "MongoDB"],
  certifications: ["Microsoft Azure Fundamentals (AZ-900), 2026", "InspiritAI — AI in Healthcare Intensive, 2020", "InspiritAI — Deep Learning & LLMs Intensive, 2024"],
};

export const education = {
  school: "Northeastern University, Khoury College of Computer Sciences",
  location: "Boston, MA",
  degree: "Bachelor of Science in Computer Science, AI Concentration — Expected December 2026",
  gpa: "GPA 3.95 / 4.0",
  honors: ["Honors Program", "Dean's List, 6/6"],
  coursework: [
    "Data Structures & Algorithms",
    "Object-Oriented Design",
    "Artificial Intelligence",
    "Software Engineering",
    "Foundations of Cybersecurity",
    "Operating Systems",
    "Natural Language Processing",
  ],
};

export const contact = {
  name: "Riya Roy",
  email: "roy.riy@northeastern.edu",
  linkedin: "https://linkedin.com/in/riyajroy",
  linkedinLabel: "linkedin.com/in/riyajroy",
  github: "https://github.com/riyajroy23",
  githubLabel: "github.com/riyajroy23",
  location: "Boston, MA",
};

export const navItems = [
  { id: "about", label: "about" },
  { id: "experience", label: "experience" },
  { id: "projects", label: "projects" },
  { id: "publications", label: "publications" },
  { id: "skills", label: "skills" },
  { id: "education", label: "education" },
  { id: "hobbies", label: "hobbies" },
  { id: "contact", label: "contact" },
];