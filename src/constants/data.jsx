import projectImage1 from "../assets/propertyMS.png";
import projectImage2 from "../assets/healthcare.png";
import projectImage3 from "../assets/javafx.png";
 import { BiCodeAlt, BiMobileAlt, BiPalette, BiSearchAlt } from "react-icons/bi";
import { FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export const menuItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Contact", href: "/#contact" },
];

export const projects = [
  {
    id: 1,
    title: "WLDU Property Management System",
    category: "Web application",
    image: projectImage1,
    link:"https://github.com/yaredKassa1/Property-Management-System",
    description:
      "Developed a web application for managing properties, tenants, and maintenance requests, streamlining the property management process.",
  },
  {
    id: 2,
    title: "Healthcare Finder",
    category: "Mobile application",
    image: projectImage2,
    link:"https://github.com/yaredKassa1/health_care_finder",
    description:
      "Created a mobile application that helps users find healthcare facilities nearby based on their needs.",
  },
  {
    id: 3,
    title: "Library Management System",
    category: "Desktop application",
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
    title: "Internship Experience",
    description:
      "Gained hands-on experience in software development through internships, where I developed small-scale applications using React JS and other technologies.",
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

