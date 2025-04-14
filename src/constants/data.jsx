import projectImage1 from "../assets/portfolio.png";
import projectImage2 from "../assets/healthcare.png";
import projectImage3 from "../assets/javafx.png";
 import { BiCodeAlt, BiMobileAlt, BiPalette, BiSearchAlt } from "react-icons/bi";
import { FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export const menuItems = [
  { label: "Home", href: "#" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const projects = [
  {
    id: 1,
    title: "Responsive Portfolio Website",
    image: projectImage1,
    link:"https://www.github.com/yaredKassa1",
    description:
      "A sleek and fully responsive portfolio website to showcase skills, projects, and experience. Built using React js and TailwindCSS with modern design practices.",
  },
  {
    id: 2,
    title: "Healthcare Finder",
    image: projectImage2,
    link:"https://github.com/yaredKassa1/health_care_finder",
    description:
      "Created a mobile application that helps users find healthcare facilities nearby based on their needs.",
  },
  {
    id: 3,
    title: "Library Management System",
    image: projectImage3,
    link:"https://github.com/yaredKassa1/javafx-assignment",
    description:
      "Developed a desktop application to manage library operations such as book issuance, returns, and cataloging.",
  },
];
export const services = [
  {
    title: "Web Development",
    description:
      "I offer comprehensive web development services tailored to meet your business needs.I utilize the latest technologies and frameworks such as React, Node.js, and MongoDB.",
    icon: BiCodeAlt,
  },
  {
    title: "Mobile App Development",
    description:
      "I develop mobile applications that provide users with seamless experiences and easy access to services. I utilize java and flutter to create cross-platform applications.",
    icon: BiMobileAlt,
  },
  {
    title: "UI/UX Design",
    description:
      "I specialize in creating intuitive and engaging user interfaces that enhance the overall experience for your customers.",
    icon: BiPalette,
  },
  {
    title: "Class Assignments",
    description:
      "Participated in various class assignments that involved developing small-scale applications using React JS and other technologies.",
    icon: BiSearchAlt,
  },
];

export const contactDetails = [
  {
    id: 1,
    type: "Email",
    value: "yaredk393@gmail.com",
    link: "mailto:yaredk393@gmail.com",
    icon: <FaEnvelope />,
  },
  {
    id: 2,
    type: "Phone",
    value: "+251924652979",
    link: "tel:+251924652979",
    icon: <FaPhone />,
  },
  {
    id: 3,
    type: "LinkedIn",
    value: "linkedin.com/in/yared-kassa",
    link: "https://www.linkedin.com/in/yared-kassa-81865a343",
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    type: "Location",
    value: "Adiss Ababa, Ethiopia",
    link: null,
    icon: <FaMapMarkerAlt />,
  },
];


export const words = [
  "React",
  "Next.js",
  "Tailwind",
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
  "Node.js",
  "Express",
  "MongoDB",
  "SQL",
  "APIs",
  "Git",
  "GitHub",
  "VS Code",
];

