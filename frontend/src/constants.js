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
  { name: "Download CV", path: "https://drive.usercontent.google.com/u/0/uc?id=1K8sK1VSmmg__2uVbDbaSwo_k6Gk7c57I&export=download", external: true },
];

export const skills = [
  {
    category: "Languages",
    skills: [
      { 
        name: "Java", 
        icon: "java",
        description: "A class-based, object-oriented programming language designed to have as few implementation dependencies as possible.",
        docLink: "https://docs.oracle.com/javase/tutorial/"
      },
      { 
        name: "JavaScript", 
        icon: "javascript",
        description: "A programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm.",
        docLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      },
      { 
        name: "C++", 
        icon: "cplusplus",
        description: "A programming language created as an extension of the C programming language with object-oriented features.",
        docLink: "https://en.cppreference.com/w/"
      },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { 
        name: "HTML/CSS", 
        icon: "html5",
        description: "HTML (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser. CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML.",
        docLink: "https://developer.mozilla.org/en-US/docs/Web/HTML"
      },
      { 
        name: "Node.js", 
        icon: "nodejs",
        description: "An open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.",
        docLink: "https://nodejs.org/en/docs/"
      },
      { 
        name: "ReactJs", 
        icon: "react",
        description: "A free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.",
        docLink: "https://reactjs.org/docs/getting-started.html"
      },
      { 
        name: "Express", 
        icon: "express",
        description: "A back end web application framework for Node.js designed for building web applications and APIs.",
        docLink: "https://expressjs.com/"
      },
      { 
        name: "Bootstrap", 
        icon: "bootstrap",
        description: "A free and open-source CSS framework directed at responsive, mobile-first front-end web development.",
        docLink: "https://getbootstrap.com/docs/"
      },
      { 
        name: "Tailwind", 
        icon: "tailwind",
        description: "A utility-first CSS framework for rapidly building custom user interfaces.",
        docLink: "https://tailwindcss.com/docs"
      },
      { 
        name: "Redux", 
        icon: "redux",
        description: "A predictable state container for JavaScript apps that helps you write applications that behave consistently.",
        docLink: "https://redux.js.org/"
      },
    ],
  },
  {
    category: "Databases",
    skills: [
      { 
        name: "MySQL", 
        icon: "mysql",
        description: "An open-source relational database management system that uses SQL (Structured Query Language).",
        docLink: "https://dev.mysql.com/doc/"
      },
      { 
        name: "MongoDB", 
        icon: "mongodb",
        description: "A source-available cross-platform document-oriented database program that uses JSON-like documents with optional schemas.",
        docLink: "https://docs.mongodb.com/"
      },
    ],
  },
  {
    category: "Developer Tools",
    skills: [
      { 
        name: "GitHub", 
        icon: "github",
        description: "A provider of Internet hosting for software development and version control using Git.",
        docLink: "https://docs.github.com/en"
      },
      { 
        name: "VS Code", 
        icon: "vscode",
        description: "A source-code editor made by Microsoft with support for debugging, syntax highlighting, intelligent code completion, snippets, and more.",
        docLink: "https://code.visualstudio.com/docs"
      },
      { 
        name: "IntelliJ IDEA", 
        icon: "intellij",
        description: "An integrated development environment written in Java for developing computer software.",
        docLink: "https://www.jetbrains.com/idea/documentation/"
      },
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
    institution: "KVS no.1 Jammagar",
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