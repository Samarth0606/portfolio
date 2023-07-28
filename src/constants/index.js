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
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
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
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
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
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Mentor and Product Developer",
    company_name: "Coding Blocks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Oct 2021 - Till Date",
    points: [
      "Developing and maintaining web applications using Frontend tools and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Fullstack",
    company_name: "E-commerce",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "Nov 2021 - Mar 2022",
    points: [
      "Developing a web applications using MERN stack and Authentication techniques.",
      "The Web-App has Star-rating, order placing and multiple login as seller and buyer options.",
      "Implementing server side rendering for better security.",
      "multiple reviews on a product with authenticated user.",
    ],
  },
  {
    title: "Tech Manager and Developer",
    company_name: "Xtreme Technologies",
    icon: tesla,
    iconBg: "#383E56",
    date: "Oct 2021 - Feb 2022",
    points: [
      "Developing a web application using React.js, Express, Javascript, d3.js  and other backend related technologies.",
      "Providing current statuses and Implementing responsive design ",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  
  {
    title: "Defence",
    company_name: "Veda Aeronautics",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Dec 2021 - Jan 2022",
    points: [
      "Developing a Frontend web applications using frontend tools.",
      "Collaborating with defence product providing company",
      "Implementing responsive design and deploying it.",
     
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Samarth proved me wrong.",
    name: "Varun Kohli",
    designation: "CEO",
    company: "Coding Blocks",
    image: "https://cb3img.s3.ap-south-1.amazonaws.com/img/team/varun-kohli.png",
  },
  {
    testimonial:
      "I've never met a web developer and mentor who truly cares about their clients' success like Samarth does. Cheerz !",
    name: "Kartik Mathur",
    designation: "Founding member",
    company: "Coding blocks",
    image: "https://cb3img.s3.ap-south-1.amazonaws.com/img/team/kartikmathur.webp",
  },
  {
    testimonial:
      "After Samarth optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Saksham Madan",
    designation: "Lead",
    company: "Veda Aeronautics",
    image: "https://media.licdn.com/dms/image/C5603AQEzTVt1DRI4Aw/profile-displayphoto-shrink_400_400/0/1590851967172?e=1691625600&v=beta&t=h0fHXrpnU6H883N4f5oNyfxjybLaZlAwoiKswRQpUsY",
  },
];

const projects = [
  {
    name: "Coding blocks official Website",
    description:
      "Web-based platform that allows users to search, purchase, and manage courses from various options, providing a convenient and efficient solution for education and skill enhancement.",
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
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://codingblocks.com/",
  },
  {
    name: "E-commerce",
    description:
      "Web application that enables users and sellers to buy and sell their products with 100% authenticated techinuques and client and server side validations withsever side rendering for better security. Multiple reviews and likes functionality along with star-rating available and secured payment gateway of pay-u",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "red-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: "https://codingblocks.com/assets/img/ecom-website.png",
    source_code_link: "https://github.com/Samarth0606/jas",
  },
  {
    name: "Zomato Clone",
    description:
      "A comprehensive food ordering platform that allows users to select, add and order food and offers curated recommendations from popular restaurants.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Samarth0606",
  },
];

export { services, technologies, experiences, testimonials, projects };