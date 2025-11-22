// ICONS
import { FaGithub, FaLinkedin, FaInstagram, FaDiscord, FaTelegramPlane } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

import { FaHtml5, FaCss3, FaJs, FaReact, FaPython } from "react-icons/fa";
import { RiTailwindCssFill, RiOpenaiFill, RiFirebaseFill } from "react-icons/ri";
import { SiVite, SiTailwindcss, SiBootstrap, SiMysql } from "react-icons/si";

import { FaFigma, FaGitAlt } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiCanva, SiNotion } from "react-icons/si";

export const DataContacts = [
  {
    platform: "GitHub",
    link: "https://github.com/amdev05",
    icon: <FaGithub />,
  },
  {
    platform: "Linkedin",
    link: "https://www.linkedin.com/in/ade-muchlisidin-43ab99304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    icon: <FaLinkedin />,
  },
  {
    platform: "Instagram",
    link: "https://instagram.com/ademuchl17",
    icon: <FaInstagram />,
  },
  {
    platform: "Email",
    link: "mailto:ademuch80@gmail.com",
    icon: <IoMailOutline />,
  },
  {
    platform: "Telegram",
    link: "https://t.me/ademuchl17",
    icon: <FaTelegramPlane />,
  },
  {
    platform: "Discord",
    link: "https://discord.com/users/Ademuchl17#4057",
    icon: <FaDiscord />,
  },
];

// ICONS

// IMAGES
import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";
export const PROJECTS = [
  {
    title: "Portfolio Website",
    description: "A professional portfolio website designed to showcase your skills, projects, and experiences in a clean, modern layout.",
    technologies: [<FaReact />, <SiTailwindcss />, <SiVite />],
    year: "2024",
    image: project1,
    link: "https://amdev05.github.io/portfolio2023",
  },
  {
    title: "E-Commerce Page",
    description: "A user-friendly e-commerce page offering a seamless shopping experience with sleek design and essential shopping features.",
    technologies: [<FaHtml5 />, <SiTailwindcss />, <FaJs />],
    year: "2024",
    image: project2,
    link: "https://tlcweb.github.io/tlc",
  },
  {
    title: "Online Invitation",
    description: "A beautifully crafted digital wedding invitation designed to deliver an elegant and personalized touch for your big day.",
    technologies: [<FaHtml5 />, <FaCss3 />, <FaJs />],
    year: "2023",
    image: project3,
    link: "https://amwedd.github.io/MuhtarSyipa",
  },
  {
    title: "Blogging Page",
    description: "A minimalist blogging page for sharing your ideas, stories, and insights in a visually appealing and engaging way.",
    technologies: [<FaHtml5 />, <SiBootstrap />, <FaJs />],
    year: "2025",
    image: project4,
    link: "",
  },
];

// TECHNOLOGIES
export const TECHNOLOGIES = [
  {
    name: "HTML5",
    icon: <FaHtml5 />,
    color: "#E34F26",
  },
  {
    name: "CSS3",
    icon: <FaCss3 />,
    color: "#1572B6",
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
    color: "#F7DF1E",
  },
  {
    name: "Bootstrap",
    icon: <SiBootstrap />,
    color: "#7952B3",
  },
  {
    name: "Tailwind CSS",
    icon: <RiTailwindCssFill />,
    color: "#06B6D4",
  },
  {
    name: "React",
    icon: <FaReact />,
    color: "#61DAFB",
  },
  {
    name: "Firebase",
    icon: <RiFirebaseFill />,
    color: "#FFCA28",
  },
];

export const UTILITIES = [
  {
    name: "VS Code",
    icon: <VscVscode />,
    color: "#007ACC",
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
    color: "#F05032",
  },
  {
    name: "Figma",
    icon: <FaFigma />,
    color: "#F24E1E",
  },
  {
    name: "Canva",
    icon: <SiCanva />,
    color: "#00C4CC",
  },
  {
    name: "Notion",
    icon: <SiNotion />,
    color: "#ffffff",
  },
  {
    name: "OpenAI",
    icon: <RiOpenaiFill />,
    color: "#f7f7f7",
  },
];
