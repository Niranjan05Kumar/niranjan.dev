import {
  css,
  cursor,
  figma,
  framer,
  git,
  github,
  html,
  javascript,
  react,
  redux,
  tailwind,
  vercel,
  vscode,
  githubs,
  linkedin,
  mail,
  twitter,
  gsap,
  reactbits,
  shadcn,
  uiverse,
  hoobank,
  medwin,
  obysagency,
  location,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    label: "About",
    href: "about",
  },
  {
    id: "education",
    label: "Education",
    href: "education",
  },
  {
    id: "skills",
    label: "Skills",
    href: "skills",
  },
  {
    id: "projects",
    label: "Projects",
    href: "projects",
  },
  {
    id: "contact",
    label: "Contact",
    href: "contact",
  },
];

export const topSkills = [
  {
    id: 0,
    icon: react,
    label: "React",
    position: "-top-[20%] left-0",
  },
  {
    id: 1,
    icon: tailwind,
    label: "Tailwind",
    position: "-top-[20%] right-0",
  },
  {
    id: 2,
    icon: javascript,
    label: "Javascript",
    position: "-bottom-[20%] left-0",
  },
  {
    id: 3,
    icon: framer,
    label: "Framer motion",
    position: "-bottom-[20%] right-0",
  },
];

export const education = [
  {
    id: 0,
    title: "Bachelor of Technology",
    score: "68",
    totalScore: "6.80 CGPA",
    institute: "Indian Institute of Technology (BHU), Varanasi",
    stream: "Mining Engineering",
    year: "2023 - Present",
    span: "md:col-span-2 md:row-span-2",
    progressColor: "--primary",
  },
  {
    id: 1,
    title: "Class 12th",
    score: "78.60",
    totalScore: "393 / 500",
    institute: "Govt. Sr. Sec. School Kumher Bharatpur (Rajasthan)",
    stream: "Science - RBSE",
    year: 2022,
    span: "md:col-span-3",
    progressColor: "",
  },
  {
    id: 2,
    title: "Class 10th",
    score: "77.67",
    totalScore: "466 / 600",
    institute:
      "Govt. Sr. Sec. School Bailara kalan, Kumher Bharatpur (Rajasthan)",
    stream: "Common - RBSE",
    year: 2020,
    span: "md:col-span-3",
    progressColor: "",
  },
];

export const skills = [
  {
    id: 0,
    type: "Core Technologies",
    skillinfo: [
      {
        icon: html,
        label: "HTML5",
        className:
          "bg-bg-light border-(--border-light) hover:bg-bg duration-500 hover:bg-bg duration-500",
      },
      {
        icon: css,
        label: "CSS3",
        className:
          "bg-bg-light border-(--border-light) hover:bg-bg duration-500",
      },
      {
        icon: javascript,
        label: "JavaScript",
        className:
          "bg-bg-light border-(--border-light) hover:bg-bg duration-500",
      },
    ],
  },
  {
    id: 1,
    type: "Frontend Stack",
    skillinfo: [
      {
        icon: react,
        label: "React JS",
        className:
          "bg-bg-light border-(--border-light) hover:bg-bg duration-500",
      },
      {
        icon: tailwind,
        label: "Tailwind CSS",
        className:
          "bg-bg-light border-(--border-light) hover:bg-bg duration-500",
      },
      {
        icon: redux,
        label: "Redux",
        className:
          "bg-bg-light border-(--border-light) hover:bg-bg duration-500",
      },
    ],
  },
  {
    id: 3,
    type: "Tools & Utilities",
    skillinfo: [
      {
        icon: git,
        label: "Git",
        className:
          "bg-bg-light border-(--border-light) hover:bg-bg duration-500",
      },
      {
        icon: github,
        label: "GitHub",
        className:
          "bg-bg-light border-(--border-light) hover:bg-bg duration-500",
      },
      {
        icon: cursor,
        label: "Cursor",
        className:
          "bg-bg-light border-(--border-light) hover:bg-bg duration-500",
      },
      {
        icon: vscode,
        label: "VS Code",
        className:
          "bg-bg-light border-(--border-light) hover:bg-bg duration-500",
      },
      {
        icon: vercel,
        label: "Vercel",
        className:
          "bg-bg-light border-(--border-light) hover:bg-bg duration-500",
      },
      {
        icon: figma,
        label: "Figma",
        className:
          "bg-bg-light p-[17px] border-(--border-light) hover:bg-bg duration-500",
      },
    ],
  },
  {
    id: 2,
    type: "Animations & Interactions",
    skillinfo: [
      {
        icon: framer,
        label: "Framer-motion",
        className:
          "bg-bg-light border-(--border-light) hover:bg-bg duration-500",
      },
      {
        icon: gsap,
        label: "GSAP",
        className:
          "bg-bg-light border-(--border-light) hover:bg-bg duration-500",
      },
    ],
  },
  {
    id: 4,
    type: "UI Component Libraries",
    skillinfo: [
      {
        icon: shadcn,
        label: "ShadCN",
        className:
          "bg-bg-light border-(--border-light) hover:bg-bg duration-500",
      },
      {
        icon: reactbits,
        label: "ReactBits",
        className:
          "bg-bg-light border-(--border-light) hover:bg-bg duration-500",
      },
    ],
  },
];

export const projects = [
  {
    id: 0,
    image: obysagency,
    title: "Obys Agency Clone",
    description:
      "Animated Obys clone with GSAP, Locomotive Scroll, and magnetic interactions showcasing creative scroll effects.",
    techs: [
      "HTML", "CSS", "Javascript", "GSAP", "Locomotive JS" 
    ],
    highlights: [
      "Scroll based animations", "magnetic buttons", "responsive layout", 
    ],
    live: "https://niranjan05kumar.github.io/obys.agency/",
    github: "https://github.com/Niranjan05Kumar/obys.agency",
  },
  {
    id: 1,
    image: hoobank,
    title: "HooBank UI",
    description:
      "React-based HooBank UI with Tailwind CSS, featuring reusable components and structured data-driven design.",
    techs: [
      "React", "Tailwind CSS", "Javascript",
    ],
    highlights: [
      "Reusable components", "Structured data-driven", "responsive layout", 
    ],
      live: "https://hoobank-iota-brown.vercel.app/",
    github: "https://github.com/Niranjan05Kumar/hoobank",
  },
  {
    id:2,
    image: medwin,
    title: "Medwin Health",
    description:
      "Responsive health landing page featuring embedded Google Map, clean layout, and mobile-friendly user interface.",
    techs: [
      "HTML", "Tailwind CSS", "Javascript",
    ],
    highlights: [
      "Google Map integration", "responsive layout", 
    ],
      live: "https://medwin-psi.vercel.app/",
    github: "https://github.com/Niranjan05Kumar/Medwin",
  },
];

import GithubIcon from '../assets/github.svg?react';
import LinkedinIcon from '../assets/linkedin.svg?react';
import TwitterIcon from '../assets/twitter.svg?react';
import MailIcon from '../assets/mail.svg?react';
import LocationIcon from '../assets/location.svg?react';

export const socialMedia = [
  {
    id: "social-media-1",
    icon: GithubIcon,
    label: "Github",
    link: "https://github.com/niranjan05Kumar/",
    onClick: () => window.open("https://github.com/niranjan05Kumar/", "_blank"),
  },
  {
    id: "social-media-2",
    icon: LinkedinIcon,
    label: "Linkedin",
    link: "https://www.linkedin.com/in/niranjan05kumar/",
    onClick: () => window.open("https://www.linkedin.com/in/niranjan05kumar/", "_blank"),
  },
  {
    id: "social-media-3",
    icon: TwitterIcon,
    label: "Twitter",
    link: "https://x.com/05niranjankumar",
    onClick: () => window.open("https://x.com/05niranjankumar", "_blank"),
  },
  {
    id: "social-media-4",
    icon: MailIcon,
    label: "Mail",
    link: "niranjankumar11082005@gmail.com",
    onClick: () => window.open("mailto:niranjankumar11082005@gmail.com"),
  },
  {
    id: "social-media-5",
    icon: LocationIcon,
    label: "Varanasi, India",
    link: "Varanasi (221005), India",
    onClick: () => window.open("https://www.google.com/maps/place/Indian+Institute+of+Technology+(BHU)+Varanasi/@25.2677,82.9913,17z", "_blank"),
  },
];