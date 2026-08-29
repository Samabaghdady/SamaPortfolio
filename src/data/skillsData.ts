export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    level?: 'Advanced' | 'Intermediate' | 'Proficient';
    icon?: string;
  }[];
}

export const skillCategoriesData: SkillCategory[] = [
  {
    id: "web-dev",
    title: "Web & Frameworks",
    description: "Building responsive web applications, backend APIs, and desktop GUIs.",
    iconName: "Globe",
    skills: [
      { name: "React", level: "Advanced" },
      { name: "Node.js & Express", level: "Advanced" },
      { name: "Spring Boot", level: "Proficient" },
      { name: "EJS Templates", level: "Advanced" },
      { name: "Chart.js & Three.js", level: "Proficient" },
      { name: "Tkinter (Python GUI)", level: "Proficient" },
      { name: "wxWidgets (C++ GUI)", level: "Proficient" },
      { name: "Tailwind CSS & HTML5/CSS3", level: "Advanced" }
    ]
  },
  {
    id: "languages",
    title: "Programming Languages",
    description: "Core programming languages for full-stack engineering, AI & desktop apps.",
    iconName: "Code2",
    skills: [
      { name: "C++", level: "Advanced" },
      { name: "Java", level: "Advanced" },
      { name: "Python", level: "Proficient" },
      { name: "JavaScript (ES6+)", level: "Advanced" },
      { name: "TypeScript", level: "Proficient" },
      { name: "Functional Programming", level: "Proficient" }
    ]
  },
  {
    id: "databases-ai",
    title: "Databases & AI",
    description: "Database management, computer vision pipelines, and session security.",
    iconName: "Database",
    skills: [
      { name: "MongoDB", level: "Advanced" },
      { name: "MySQL (XAMPP)", level: "Advanced" },
      { name: "OpenCV & Face Recognition", level: "Proficient" },
      { name: "Spring Security", level: "Proficient" },
      { name: "RESTful APIs", level: "Advanced" },
      { name: "Session Auth & bcrypt", level: "Advanced" },
      { name: "i18n (Multi-Language)", level: "Proficient" }
    ]
  },
  {
    id: "cs-core",
    title: "CS Fundamentals",
    description: "Core computer science principles, object-oriented design & algorithms.",
    iconName: "Brain",
    skills: [
      { name: "Data Structures", level: "Advanced" },
      { name: "Algorithms", level: "Advanced" },
      { name: "Object-Oriented Programming (OOP)", level: "Advanced" },
      { name: "MVC Architecture", level: "Advanced" },
      { name: "Software Design Patterns", level: "Advanced" },
      { name: "Problem Solving", level: "Advanced" }
    ]
  },
  {
    id: "tools-design",
    title: "Tools, Design & Productivity",
    description: "Version control, design software, and office suite tools.",
    iconName: "GitBranch",
    skills: [
      { name: "Git & GitHub", level: "Advanced" },
      { name: "Figma (UI/UX)", level: "Proficient" },
      { name: "Adobe Photoshop & Illustrator", level: "Proficient" },
      { name: "Microsoft Office (Word, Excel, PowerPoint)", level: "Advanced" },
      { name: "Vite & Tooling", level: "Proficient" }
    ]
  }
];
