export const portfolioData = {
  personal: {
    name: "Ekta Maurya",
    title: "Full Stack Developer",
    subtitle: "MERN Stack Specialist & MCA Graduate",
    tagline: "Building responsive, resilient web applications with modern React, Node.js, and clean API architectures.",
    email: "mauryae440@gmail.com",
    phone: "+91-9305776992",
    location: "Noida / Kanpur, Uttar Pradesh, India",
    github: "https://github.com/ekta9032",
    githubUsername: "ekta9032",
    linkedin: "https://linkedin.com/in/ekta-maurya-7b039432b",
    status: "Available for Full-time Roles & Internships",
    summary: `MCA graduate and aspiring Full Stack Developer with hands-on experience in MERN Stack development (MongoDB, Express.js, React.js, Node.js). Skilled in building responsive web applications, RESTful APIs, CRUD operations, and database integration. Strong foundation in JavaScript, React.js, and modern web technologies with a passion for problem-solving, continuous learning, and developing scalable software solutions.`
  },

  skills: {
    languages: [
      { name: "JavaScript (ES6+)", level: 90, highlight: "Primary Language" },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "SQL", level: 75 }
    ],
    frontend: [
      { name: "React.js", level: 92, highlight: "Core Focus" },
      { name: "React Hooks & Router", level: 90 },
      { name: "Context API & State Management", level: 85 },
      { name: "Responsive Web Design", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Component-Based Architecture", level: 92 }
    ],
    backend: [
      { name: "Node.js", level: 85, highlight: "Backend Runtime" },
      { name: "Express.js", level: 88, highlight: "REST APIs" },
      { name: "RESTful API Design", level: 90 },
      { name: "CRUD Operations", level: 95 },
      { name: "API Integration & Testing", level: 88 }
    ],
    database: [
      { name: "MongoDB", level: 88, highlight: "NoSQL DB" },
      { name: "Mongoose ODM", level: 88 },
      { name: "Data Modeling", level: 82 },
      { name: "Relational SQL Basics", level: 75 }
    ],
    tools: [
      { name: "Git & GitHub", highlight: "Version Control" },
      { name: "Postman", highlight: "API Testing" },
      { name: "VS Code", highlight: "Editor" },
      { name: "Vercel & Vite", highlight: "Deployment & Build" }
    ],
    concepts: [
      "Data Structures & Algorithms",
      "CRUD Operations",
      "Frontend-Backend Communication",
      "State Management",
      "Component Lifecycle",
      "Responsive UI/UX Patterns"
    ]
  },

  experience: [
    {
      role: "MERN Stack Developer Trainee",
      company: "QSpiders",
      location: "Noida, Uttar Pradesh",
      period: "Jun 2026 – Present",
      type: "Training / Internship",
      badge: "Current Role",
      highlights: [
        "Receiving extensive hands-on training in MongoDB, Express.js, React.js, and Node.js for full-stack web development.",
        "Developing responsive client-side applications using React.js, JavaScript (ES6+), HTML5, and CSS3.",
        "Building reusable React components utilizing Hooks (useState, useEffect, useMemo), React Router, and Context API.",
        "Designing and integrating secure RESTful APIs for seamless frontend-to-backend communication.",
        "Designing schemas and handling data queries using MongoDB and Mongoose ODM.",
        "Practicing collaborative software workflows with Git, GitHub branching, and code reviews."
      ]
    }
  ],

  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Pranveer Singh Institute of Technology (PSIT)",
      location: "Kanpur, Uttar Pradesh",
      period: "2024 – 2026",
      status: "Pursuing / Graduating",
      highlights: [
        "Advanced study in Software Engineering, Web Technologies, Database Systems, and Algorithms.",
        "Active involvement in technical projects, MERN stack development, and full-stack problem solving."
      ]
    },
    {
      degree: "Bachelor of Science (B.Sc.)",
      institution: "Microtek College of Management and Technology",
      location: "Varanasi, Uttar Pradesh",
      period: "2020 – 2023",
      status: "Completed",
      highlights: [
        "Built solid foundations in computing principles, mathematical analysis, and logical reasoning."
      ]
    }
  ],

  projects: [
    {
      id: "mern-task-manager",
      title: "Todo List – MERN Task Management Application",
      category: "Full Stack (MERN)",
      featured: true,
      description: "A robust full-stack task management application with complete CRUD functionality, custom RESTful endpoints, and efficient MongoDB persistence.",
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Mongoose", "REST APIs"],
      achievements: [
        "Developed full-stack architecture implementing complete Create, Read, Update, and Delete (CRUD) operations.",
        "Built modular RESTful APIs using Node.js and Express.js for task creation, status toggling, and filtering.",
        "Integrated MongoDB and Mongoose ODM for efficient schema validation and database persistence.",
        "Engineered a responsive React.js frontend using Hooks, reusable UI components, and dynamic state updates."
      ],
      githubUrl: "https://github.com/ekta9032",
      demoUrl: "https://github.com/ekta9032"
    },
    {
      id: "food-delivery-react",
      title: "Food Delivery System – React Web Application",
      category: "Frontend Application",
      featured: true,
      description: "A high-performance food delivery web application built with a modern UI design, dynamic menu filtering, and mobile-first responsiveness.",
      techStack: ["React.js", "JavaScript", "HTML5", "CSS3", "Context API", "Responsive Design"],
      achievements: [
        "Developed a responsive food ordering interface featuring modern UI/UX design patterns.",
        "Implemented dynamic menu filtering by category and pricing with reusable React component blocks.",
        "Applied component-based architecture ensuring maintainable, modular, and easily extendable code.",
        "Optimized responsiveness and touch interactions across mobile, tablet, and desktop viewports."
      ],
      githubUrl: "https://github.com/ekta9032",
      demoUrl: "https://github.com/ekta9032"
    }
  ]
};
