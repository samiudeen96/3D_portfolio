import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  angular,
  redux,
  tailwind,
  bootstrap,
  nodejs,
  mysql,
  mongodb,
  github,
  vercel,
  ilife,
  hasnatech,
  threejs,
  hotelGame,
  collection,
  portfolio,
  expTracker,
  railway,
  todo,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full-Stack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
    {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "github",
    icon: github,
  },
  {
    name: "Vercel",
    icon: vercel,
  },
  {
    name: "Railway",
    icon: railway,
  },
];

const experiences = [
  {
    id: 1,
    title: "Front-End Developer / Internship",
    company_name: "ILIFE Technologies",
    company_url: "https://ilifetech.in/",
    icon: ilife,
    iconBg: "#E6DEDD",
    date: "Apr 2019 - Dec 2019",
    points: [
      "Responsive Web Development - Built and optimized layouts using HTML5, CSS3, and JavaScript, improving mobile responsiveness across 100+ pages.",
      "Performance Optimization - Reduced load time by 40% for faster and more efficient user experiences.",
      "Front-End & Backend Integration - Collaborated with backend developers to ensure seamless server-side connectivity.",
      "Testing & Debugging - Identified and fixed issues to enhance website functionality and user experience.",
      "UI Consistency & Best Practices - Maintained design consistency, followed coding standards, and implemented interactive features for better engagement.",
    ],
  },
  {
    id: 2,
    title: "Front-End Developer | React Developer",
    company_name: "Hasnatech",
    company_url: "https://hasnatech.com/",
    icon: hasnatech,
    iconBg: "#E6DEDD",
    date: "Nov 2021 – Feb 2025",
    points: [
      "Front-End Development - Built 20+ responsive UI components using React.js & Tailwind CSS, boosting engagement by 30%.",
      "LMS Features & Gamification - Developed quizzes, progress tracking, certifications, and leaderboards to enhance learning.",
      "Interactive & Accessible Design - Integrated animations, videos, and ensured WCAG compliance for a seamless experience.",
      "Collaboration & Communication - Added chat, forums, and live session features for better user interaction.",
      "Deployment & Optimization - Deployed on GitHub/Vercel with performance improvements and minimal downtime.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

// const projects = [
//   {
//     name: "Ecommerce",
//     description:
//       "Web-based platform for buying and selling products or services. It includes features like product listings, shopping carts, secure payments, and order management.",
//     tags: [
//       {
//         name: "react",
//         color: "text-blue-400",
//       },
//       {
//         name: "node.js",
//         color: "text-green-500",
//       },
//       {
//         name: "mongodb",
//         color: "text-green-600",
//       },
//       {
//         name: "tailwind",
//         color: "text-blue-300",
//       },
//     ],
//     image: collection,
//     source_code_link: "https://github.com/samiudeen96/collection",
//     live_link: "https://collection-plum.vercel.app/",
//   },
//   {
//     name: "Hotel Game",
//     description:
//       "Web page is likely based on a hotel management simulation game where players manage a hotel, handle bookings, and optimize services to grow their business.",
//     tags: [
//       {
//         name: "angular",
//         color: "text-red-500",
//       },
//       {
//         name: "typeScript",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "bootstarp",
//         color: "text-violet-600",
//       },
//     ],
//     image: hotelGame,
//     source_code_link: "https://github.com/samiudeen96/hotelGame",
//     live_link: "https://hasnatech.github.io/hotel_game/",
//   },
// ];

const projects = [
  {
    name: "Expense Tracker",
    description:
      "Built a finance tracking app to manage income and expenses with real-time balance updates. Included category-wise summaries for better financial insights.",
    tags: [
      {
        name: "react",
        color: "text-blue-400",
      },
      {
        name: "tailwind",
        color: "text-blue-500",
      },
      {
        name: "node.js",
        color: "text-green-500",
      },
      {
        name: "MySQL",
        color: "text-blue-900",
      },
    ],
    category: "FullStack Development",
    image: expTracker,
    source_code_link: "https://github.com/samiudeen96/ExpenseTracker",
    live_link: "https://expensetracker-samiudeen.vercel.app/",
  },
  {
    name: "Ecommerce",
    description:
      "Web-based platform for buying and selling products or services. It includes features like product listings, shopping carts, secure payments, and order management.",
    tags: [
      {
        name: "react",
        color: "text-blue-400",
      },
      {
        name: "tailwind",
        color: "text-blue-500",
      },
      {
        name: "node.js",
        color: "text-green-500",
      },
      {
        name: "mongodb",
        color: "text-green-600",
      },
    ],
    category: "FullStack Development",
    image: collection,
    source_code_link: "https://github.com/samiudeen96/collection",
    live_link: "https://collection-plum.vercel.app/",
  },
  {
    name: "Hotel Game",
    description:
      "Web page is likely based on a hotel management simulation game where players manage a hotel, handle bookings, and optimize services to grow their business.",
    tags: [
      {
        name: "angular",
        color: "text-red-500",
      },
      {
        name: "typeScript",
        color: "text-blue-500",
      },
      {
        name: "bootstarp",
        color: "text-violet-600",
      },
    ],
    category: "Frontend Development",
    image: hotelGame,
    source_code_link: "https://github.com/samiudeen96/hotelGame",
    live_link: "https://hasnatech.github.io/hotel_game/",
  },
  {
    name: "Portfolio",
    description:
      "An interactive portfolio by Samiudeen showcasing web projects and skills. Features modern design and smooth navigation for a standout experience.",
    tags: [
      {
        name: "react",
        color: "text-blue-400",
      },
      {
        name: "javascript",
        color: "text-yellow-500",
      },
      {
        name: "tailwind",
        color: "text-blue-500",
      },
      {
        name: "three.js",
        color: "",
      },
    ],
    category: "Frontend Development",
    image: portfolio,
    source_code_link: "https://github.com/samiudeen96/portfolio",
    live_link: "https://samiudeen96.github.io/portfolio",
  },
  {
    name: "ToDo App",
    description:
      "Developed a simple and clean To-Do web app for task management. Users can create, view, filter, edit, and delete tasks based on their status.",
    tags: [
      {
        name: "react",
        color: "text-blue-400",
      },
      {
        name: "javascript",
        color: "text-yellow-500",
      },
      {
        name: "tailwind",
        color: "text-blue-500",
      },
    ],
    category: "Frontend Development",
    image: todo,
    source_code_link: "https://github.com/samiudeen96/To-Do",
    live_link: "https://samiudeen96.github.io/To-Do",
  },
];

const expIn = [
  {
    name: "Front-end Developer",
    desc: "I design and build beautiful, responsive interfaces with a focus on performance and accessibility.",
    points: [
      {
        list: "✔️ HTML / CSS / JavaScript / TypeScript",
      },
      {
        list: "✔️ React / Angular / Tailwind CSS",
      },
      {
        list: "✔️ UI/UX & Responsive Design",
      },
    ],
    textColor: "text-[#915eff]",
    borderColor: "border-indigo-100",
    fromColor: "from-indigo-100",
    bgColor: "bg-indigo-100",
    category: "frontend",
  },
  {
    name: "Full-stack Developer",
    desc: "I build robust backend systems, APIs, and database structures that power modern web applications.",
    points: [
      {
        list: "✔️ Node.js",
      },
      {
        list: "✔️ Express / MongoDb / MySQL",
      },
      {
        list: "✔️ API Integration & Security",
      },
    ],
    textColor: "text-green-700",
    borderColor: "border-green-100",
    fromColor: "from-green-100",
    bgColor: "bg-green-100",
    category: "fullstack",
  },
];

export { services, technologies, experiences, projects, expIn };
