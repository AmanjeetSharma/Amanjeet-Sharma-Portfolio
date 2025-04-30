import journey1 from './assets/project-images/journey/journey1.webp';
import journey2 from './assets/project-images/journey/journey2.webp';
import journey3 from './assets/project-images/journey/journey3.webp';

import chat1 from './assets/project-images/chat/chat1.webp';
import chat2 from './assets/project-images/chat/chat2.webp';

import cart1 from './assets/project-images/cart/cart1.webp';
import cart2 from './assets/project-images/cart/cart2.webp';

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "Skills", path: "#skills" },
  { name: "Projects", path: "#projects" },
  { name: "Education", path: "#education" },
  // { name: "Achievements", path: "#achievements" },
  { name: "Contact", path: "#contact" },
  { name: "Download CV", path: "https://drive.usercontent.google.com/u/0/uc?id=1u3aAv-Shk9u2mdvvRq93J_r0sz50dUc7&export=download", external: true },
];

export const skills = [
  {
    category: "Languages",
    skills: [
      { name: "Java", icon: "java" },
      { name: "JavaScript", icon: "javascript" },
      { name: "C++", icon: "cplusplus" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "HTML/CSS", icon: "html5" },
      { name: "Node.js", icon: "nodejs" },
      { name: "ReactJs", icon: "react" },
      { name: "Express", icon: "express" },
      { name: "Bootstrap", icon: "bootstrap" },
      { name: "Tailwind", icon: "tailwind" },
      { name: "redux", icon: "redux" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL", icon: "mysql" },
      { name: "MongoDB", icon: "mongodb" },
    ],
  },
  {
    category: "Developer Tools",
    skills: [
      { name: "GitHub", icon: "github" },
      { name: "VS Code", icon: "vscode" },
      { name: "IntelliJ IDEA", icon: "intellij" },
    ],
  },
];
export const projects = [
  {
    id: 1,
    title: "Online Shopping Cart",
    description: "Developed an e-commerce platform using Core Java with features like login, product catalog, shopping cart, and order management.",
    technologies: ["Java", "Java Collections", "OOPs", "JDBC", "Swing"],
    features: [
      {
        title: "Authentication System",
        description: "Implemented secure login with password encryption",
      },
      {
        title: "Product Catalog",
        description: "Created dynamic product listing with filters",
      },
      {
        title: "Shopping Cart",
        description: "Developed persistent cart functionality",
      },
      {
        title: "Order Processing",
        description: "Built order tracking and payment simulation",
      }
    ],
    githubLink: "https://github.com/AmanjeetSharma?tab=repositories",
    demoLink: "https://github.com/AmanjeetSharma?tab=repositories",
    images: [cart1, cart2]
  },
  {
    id: 2,
    title: "JourneyJunction – Travel Blog",
    description: "Developed a responsive and visually appealing travel blog website using React and Tailwind CSS.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "HTML"],
    features: [
      {
        title: "Routing and Navigation",
        description: "Implemented multi-page navigation with React Router",
      },
      {
        title: "UI Components",
        description: "Built reusable and interactive components",
      },
      {
        title: "Responsive Design",
        description: "Styled with Tailwind CSS for mobile-first UX",
      }
    ],
    githubLink: "https://github.com/AmanjeetSharma?tab=repositories",
    demoLink: "https://github.com/AmanjeetSharma?tab=repositories",
    images: [journey1, journey2, journey3]
  }, {
    id: 3,
    title: "Chat Application",
    description: "Real-time chat application using MERN stack with WebSockets for instant messaging.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    features: [
      {
        title: "User Authentication",
        description: "JWT based secure user registration/login",
      },
      {
        title: "Real-time Messaging",
        description: "Implemented Socket.io for instant updates",
      },
      {
        title: "Message History",
        description: "MongoDB storage with efficient querying",
      }
    ],
    githubLink: "https://github.com/AmanjeetSharma?tab=repositories",
    demoLink: "https://github.com/AmanjeetSharma?tab=repositories",
    images: [chat1, chat2]
  },
];

export const education = [
  {
    institution: "Lovely Professional University",
    degree: "Bachelor of Technology - Computer Science and Engineering",
    duration: "2022 - 2026",
    details: "CGPA: 8.00"
  },
  {
    institution: "Lord Buddha Public School",
    degree: "Intermediate",
    duration: "2020 - 2022",
    details: "Percentage: 79%"
  },
  {
    institution: "KVS no.1 – Jammagar",
    degree: "Matriculation",
    duration: "2019 - 2020",
    details: "Percentage: 90%"
  }
];

export const achievements = [
  "Part of a community development project focused on plantation and child education",
  "Solved 300+ questions on various platforms (LeetCode, CodeChef, HackerRank)",
  "Certified in Full-Stack Development Using MERN Stack (Cipher School)",
  "Certified in Server side JavaScript with Node.js (Coursera)",
  "Certified in Algorithms (Coursera)"
];