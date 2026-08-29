export interface ProjectDemo {
  name: string;
  link: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'Full-Stack' | 'Frontend' | 'Backend' | 'AI / Desktop' | 'Mobile / Other';
  date: string;
  image: string;
  description: string;
  architecture?: string;
  role?: string;
  tech: string[];
  features: string[];
  github?: string;
  liveUrl?: string;
  demos?: ProjectDemo[];
  driveUrl?: string;
  featured?: boolean;
}

export const projectsData: Project[] = [
  {
    id: "mello-wellness",
    title: "Mello – Mental Wellness & Habit Tracking Platform",
    category: "Full-Stack",
    date: "May 2026",
    image: "/mello-platform.png",
    description: "A full-stack mental wellness platform enabling users to track moods, build healthy habits, monitor progress through analytics dashboards, receive personalized recommendations, and engage with mindfulness activities.",
    role: "Developed the Mood Tracking module, including mood logging, historical tracking, trend visualization, and user insights features.",
    architecture: "Built with Spring Boot backend, Spring Security, MongoDB database, and React frontend with Chart.js analytics and Three.js 3D visuals.",
    tech: ["React", "Spring Boot", "Java", "MongoDB", "Spring Security", "Chart.js", "Three.js"],
    features: [
      "Mood Tracking & Interactive Historical Trend Visualization",
      "Habit Tracking, Daily Progress & Analytics Dashboards",
      "Personalized Wellness Recommendations & Mindfulness Activities",
      "Secure User Authentication & Spring Security Role Management",
      "Interactive 3D Visualizations with Three.js & Chart.js Integration"
    ],
    github: "https://github.com/farahkhaledl/mello-Software-design-project",
    driveUrl: "https://drive.google.com/file/d/19EWLWsEwNuWu0MR2VLc1YN9hD8sYlSpm/view?usp=sharing",
    demos: [
      { name: "Full Video Walkthrough (Drive)", link: "https://drive.google.com/file/d/19EWLWsEwNuWu0MR2VLc1YN9hD8sYlSpm/view?usp=sharing" }
    ],
    featured: true
  },
  {
    id: "ecommerce-store",
    title: "E-Commerce Web Application",
    category: "Full-Stack",
    date: "June 2024",
    image: "/ecommerce-store.png",
    description: "A comprehensive full-stack e-commerce web platform delivering online shopping workflows for customers and management tools for administrators. Supports secure authentication, product search, cart, checkout, order tracking, and analytics.",
    architecture: "Organized following Model-View-Controller (MVC) architecture with Controllers, Routes, Models, Views (EJS templates), and security middleware with MongoDB session storage.",
    tech: ["Node.js", "Express", "React", "EJS", "MongoDB", "bcrypt", "i18n"],
    features: [
      "User Auth & Role-based Access (Customer & Admin roles with bcrypt password hashing)",
      "Product Catalog, Search & Customer Review Moderation System",
      "Shopping Cart & Flexible Checkout (Credit card, COD, shipping threshold config)",
      "Order Management & Live Status Tracking (Pending, shipped, delivered, cancelled)",
      "Admin Dashboard Analytics for Revenue, Users, Inventory CRUD & Promotions",
      "Multi-Language Support (Full i18n implementation for English & Arabic)"
    ],
    github: "https://github.com/Abdelrahman123-star/WebStoreProject",
    demos: [
      { name: "Product Reviews Demo", link: "https://dai.ly/x9wd5zw" },
      { name: "Cart & Checkout Demo", link: "https://dai.ly/x9wd5uu" },
      { name: "Order Tracking Demo", link: "https://dai.ly/x9wd5uo" },
      { name: "Comments & Moderation", link: "https://dai.ly/x9wd5um" },
      { name: "Admin Dashboard Analytics", link: "https://dai.ly/x9wd5uw" },
      { name: "Multi-Language (i18n)", link: "https://dai.ly/x9wd5me" }
    ],
    featured: true
  },
  {
    id: "face-recognition-attendance",
    title: "Face Recognition–Based Attendance Management System",
    category: "AI / Desktop",
    date: "2025",
    image: "/attendance-system.png",
    description: "A desktop-based face recognition attendance system for automatic, real-time student attendance marking during university lectures.",
    architecture: "Thread-safe Python GUI architecture integrated with OpenCV computer vision pipelines, deep face embeddings, and MySQL database management.",
    tech: ["Python", "Tkinter", "OpenCV", "face_recognition", "MySQL", "XAMPP"],
    features: [
      "Offline Face Model Training & Registration",
      "Real-time Multi-Face Recognition & Automatic Marking",
      "Lecture, Course & Instructor Management System",
      "Automated Export to CSV & PDF Attendance Reports",
      "Thread-Safe Desktop Graphical User Interface (GUI)"
    ],
    github: "https://github.com/Samabaghdady/HCI_Project",
    featured: true
  },
  {
    id: "otlob-food-app",
    title: "Otlob – Multi-Role Food Delivery Application",
    category: "Backend",
    date: "December 2024",
    image: "/otlob-app.png",
    description: "A Java-based food delivery application supporting three distinct user roles (Seller, Customer, and Admin) with cart checkout, product management, and order workflows.",
    tech: ["Java", "OOP", "File I/O / Data Structures", "Design Patterns"],
    features: [
      "Role-Based System: Seller, Customer & Administrator Access Control",
      "Seller Dashboard for Product Creation, Inventory & Pricing",
      "Customer Catalog Browsing, Shopping Cart & Multi-Payment (Card & Cash)",
      "Admin Portal for Managing Customer Accounts & Active Sellers"
    ],
    github: "https://github.com/Samabaghdady/otlob_projectt"
  },
  {
    id: "contact-list-system",
    title: "Contact List Management System",
    category: "AI / Desktop",
    date: "December 2024",
    image: "/contact-list.png",
    description: "A desktop contact management application built entirely in C++ featuring a graphical user interface (GUI) developed with wxWidgets.",
    tech: ["C++", "wxWidgets", "GUI", "OOP", "File I/O"],
    features: [
      "Custom C++ GUI Built with wxWidgets Framework",
      "Full Contact Operations: Add, Edit, Delete, Search & Display",
      "Admin Access Control & Data Persistence",
      "Memory Management & Efficient C++ Data Structures"
    ],
    github: "https://github.com/Samabaghdady/ContactList"
  },
  {
    id: "tic-tac-toe-game",
    title: "Interactive C++ Tic Tac Toe with Night Mode",
    category: "AI / Desktop",
    date: "2024",
    image: "/tictactoe-game.png",
    description: "An interactive desktop Tic Tac Toe game with a custom graphical interface and night mode theme, demonstrating C++ object-oriented programming principles.",
    tech: ["C++", "GUI", "Object-Oriented Design", "UX Customization"],
    features: [
      "Engaging Gameplay Experience with Custom GUI",
      "Customizable Visual Night Mode Theme for Eye Comfort",
      "Clean Object-Oriented Architecture (OOP)",
      "Smart Game Logic & Win Condition Detection"
    ],
    github: "https://github.com/Samabaghdady/X_OGame"
  },
  {
    id: "fitness-tracker",
    title: "Fitness Goal Tracker System",
    category: "Backend",
    date: "June 2024",
    image: "/fitness-tracker.png",
    description: "A system built in C++ to track fitness goals, calculate progress metrics, and guide users with step-by-step instructions to reach target health outcomes.",
    tech: ["C++", "Algorithms", "Data Structures"],
    features: [
      "Personalized Fitness Goal Tracking & Progress Metrics",
      "Target Calculation Algorithms & Guided Recommendations",
      "Structured University Computer Science Coursework Project"
    ]
  }
];
