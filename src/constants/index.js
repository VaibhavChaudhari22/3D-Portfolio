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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  
} from "../assets";


export const navLinks = [
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
    title: "ReactJS Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Farmer",
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
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
    name: "git",
    icon: git,
  },
  {
    name: "SQL",
    icon: figma,
  },
  {
    name: "JWT Authentication",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Intern",
    company_name: "Apna College",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Nov 2023 - March 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  
  {
    title: "Web Developer Intern",
    company_name: "IT Networkz",
    icon: shopify,
    iconBg: "#383E56",
    date: "March 2022 - May 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our project, but vaibhav proved me wrong.",
    name: "prof.Pranjali Gujar",
    designation: "professor",
    company: "TGPCET",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their project' success like vaibhav does.",
    name: "Tushar Sonkusare",
    designation: "Frontend Developer",
    company: "freelance",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    testimonial:
      "After vaibhav optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lokesh Bodad",
    designation: "Entreprenuer",
    company: "FruitVerse",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const projects = [
  {
    name: "Easy Shop",
    description:
      "ECommerce platform enabling customers to browse products, place orders, and make secure payments, with dashboards for managing orders, products, and deliveries.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/VaibhavChaudhari22/EasyShop-Ecommerce-platform",
  },
  {
    name: "Wanderlust",
    description:
"Online marketplace connecting property owners with renters for short-term stays, offering seamless listing, searching, and updating functionalities for a user-friendly experience.",    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
       {
        name: "Live",
        color: "Red-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/VaibhavChaudhari22/Wanderlust",
  },
  {
    name: "Joker App",
    description:
"Responsive web application that dynamically fetches and displays jokes using the Joker API, featuring a joke generator and optimized with React hooks for performance.",    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
       {
        name: "Live",
        color: "Red-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/VaibhavChaudhari22/Joker-react-app",
  },
  {
    name: "Weather app",
    description:
      " A responsive React web application providing current weather conditions for any location, showcasing modern web development practices.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    // image: weather,
    source_code_link: "https://github.com/VaibhavChaudhari22/Weather-App",
  },
  {
    name: "Hotel Room Reservation",
    description:
"A simple hotel reservation CRUD app built with Angular and TypeScript, offering a user-friendly interface to manage bookings efficiently.",    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "Angualar",
        color: "pink-text-gradient",
      },
       
    ],
    image: jobit,
    source_code_link: "https://github.com/VaibhavChaudhari22/Hotel-Room-Reservation-App",
  },
];

export { services, technologies, experiences, testimonials, projects, };
  
