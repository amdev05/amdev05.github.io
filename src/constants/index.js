import logo from "../assets/images/logo.png";
export const USERDATA = {
  logo: logo,
  name: "Amdev",
  tagline: "Full Stack Developer",
};
export const NAVIGATIONS = ["Home", "Projects", "Profile", "Activity", "Contacts"];

import music from "/music/music.mp3";
import musicImage from "../assets/images/music.png";
export const MUSIC = {
  title: "Hinoki Wood",
  artist: "Gia Margaret",
  music: music,
  image: musicImage,
};

import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
export const PROJECTS = [
  {
    title: "Portfolio Website",
    description: "A professional portfolio website designed to showcase your skills, projects, and experiences in a clean, modern layout.",
    technologies: "Tailwind, React, Motion",
    year: "2024",
    image: project1,
    link: "https://amdev05.github.io/portfolio2023",
  },
  {
    title: "E-Commerce Page",
    description: "A user-friendly e-commerce page offering a seamless shopping experience with sleek design and essential shopping features.",
    technologies: "HTML, Tailwind, Javascript",
    year: "2024",
    image: project2,
    link: "https://tlcweb.github.io/tlc",
  },
  {
    title: "Online Invitation",
    description: "A beautifully crafted digital wedding invitation designed to deliver an elegant and personalized touch for your big day.",
    technologies: "HTML, Css, Javascript",
    year: "2023",
    image: project3,
    link: "https://amwedd.github.io/MuhtarSyipa",
  },
  {
    title: "Blogging Page",
    description: "A minimalist blogging page for sharing your ideas, stories, and insights in a visually appealing and engaging way.",
    technologies: "HTML, Bootstrap, Javascript",
    year: "2025",
    image: project4,
    link: "",
  },
];

// OLDIMPORTS

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a 2024 Informatics Engineering student at Universitas Komputer Indonesia with a strong passion for web development. I have studied various technologies such as HTML, CSS, JavaScript, and algorithms using Python. Additionally, I have independently expanded my skills by learning Bootstrap, TailwindCSS, ReactJS, and several other libraries. Since beginning my programming journey in 2023, I have worked on various website projects that showcase my dedication and skills.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Informatics Engineering Student",
    company: "Unikom",
    description: `A dedicated Informatics Engineering student at Universitas Komputer Indonesia, specializing in web development, programming, algorithm design, and continuously improving skills in modern frameworks and technologies.`,
    technologies: ["JavaScript", "Python", "Java", "Algorithm", "Database", "UI/UX", "Networking", "Operating Systems"],
  },
  {
    year: "2025 - Present",
    role: "Scholarship student",
    company: "Codepolitan",
    description: `I am currently a scholarship recipient learning Frontend JavaScript development, focusing on building responsive and interactive web applications using modern technologies like React and Tailwind CSS.`,
    technologies: ["Bootstrap", "Tailwind", "JavaScript", "React"],
  },
  {
    year: "2024 - Present",
    role: "Frontend Developer",
    company: "Amdev",
    description: `A passionate Frontend Developer at AMDEV, crafting visually appealing and interactive websites, focusing on delivering seamless user experiences and maintaining clean, efficient, and scalable code in every project.`,
    technologies: ["TailwindCss", "React", "Firebase"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "mailto:ademuch80@gmail.com",
};

export const CONTACTS = [
  {
    platform: "Email",
    link: "mailto:ademuch80@gmail.com",
    icon: "HiOutlineMail",
  },
  {
    platform: "",
    link: "",
    icon: "",
  },
];
