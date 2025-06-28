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
        id: 0,
        icon: html,
        label: "HTML5",
      },
      {
        id: 1,
        icon: css,
        label: "CSS3",
      },
      {
        id: 2,
        icon: javascript,
        label: "JavaScript",
      },
    ],
  },
  {
    id: 1,
    type: "Frontend Stack",
    skillinfo: [
      {
        id: 0,
        icon: react,
        label: "ReactJS",
      },
      {
        id: 1,
        icon: redux,
        label: "Redux",
      },
      {
        id: 2,
        icon: tailwind,
        label: "Tailwind CSS",
      },
    ],
  },
  {
    id: 3,
    type: "Tools & Utilities",
    skillinfo: [
      {
        id: 0,
        icon: git,
        label: "Git",
      },
      {
        id: 1,
        icon: github,
        label: "GitHub",
      },
      {
        id: 2,
        icon: cursor,
        label: "Cursor",
      },
      {
        id: 3,
        icon: vscode,
        label: "VSCode",
      },
      {
        id: 4,
        icon: vercel,
        label: "Vercel",
      },
      {
        id: 5,
        icon: figma,
        label: "Figma",
      },
    ],
  },
  {
    id: 2,
    type: "Animations & Interactions",
    skillinfo: [
      {
        id: 0,
        icon: gsap,
        label: "GSAP",
      },
      {
        id: 1,
        icon: framer,
        label: "Framer-motion",
      },
    ],
  },
  {
    id: 4,
    type: "UI Component Libraries",
    skillinfo: [
      {
        id: 0,
        icon: shadcn,
        label: "ShadCN",
      },
      {
        id: 1,
        icon: reactbits,
        label: "ReactBits",
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
    techs: ["HTML", "CSS", "Javascript", "GSAP", "Locomotive JS"],
    highlights: [
      "Scroll based animations",
      "magnetic buttons",
      "responsive layout",
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
    techs: ["React", "Tailwind CSS", "Javascript"],
    highlights: [
      "Reusable components",
      "Structured data-driven",
      "responsive layout",
    ],
    live: "https://hoobank-iota-brown.vercel.app/",
    github: "https://github.com/Niranjan05Kumar/hoobank",
  },
  {
    id: 2,
    image: medwin,
    title: "Medwin Health",
    description:
      "Responsive health landing page featuring embedded Google Map, clean layout, and mobile-friendly user interface.",
    techs: ["HTML", "Tailwind CSS", "Javascript"],
    highlights: ["Google Map integration", "responsive layout"],
    live: "https://medwin-psi.vercel.app/",
    github: "https://github.com/Niranjan05Kumar/Medwin",
  },
];

import GithubIcon from "../assets/github.svg?react";
import LinkedinIcon from "../assets/linkedin.svg?react";
import TwitterIcon from "../assets/twitter.svg?react";
import MailIcon from "../assets/mail.svg?react";
import LocationIcon from "../assets/location.svg?react";

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
    onClick: () =>
      window.open("https://www.linkedin.com/in/niranjan05kumar/", "_blank"),
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
    onClick: () =>
      window.open(
        "https://www.google.com/maps/place/Indian+Institute+of+Technology+(BHU)+Varanasi/@25.2677,82.9913,17z",
        "_blank"
      ),
  },
];

export const aboutPortfolio = [
  {
    title: "🛠 Tech Stack",
    items: [
      "React for component-based structure",
      "Tailwind CSS for utility-first, responsive design",
      "Framer Motion for smooth UI animations",
      "Lenis.js for fluid scrolling experience",
    ],
  },
  {
    title: "🎨 UI & Design",
    items: [
      "Minimal, theme-aware layout (dark/light toggle)",
      "Spotlight cards in Education for visual depth",
      "Consistent spacing and animations using custom CSS variables",
    ],
  },
  {
    title: "🔔 Interactive Elements",
    items: [
      "Resume download button with toast notification",
      "Footer-based confetti and 'About' toggle interaction",
      "Bookmark-style sidebar navigation",
      "Smooth section-based scrolling",
    ],
  },
  {
    title: "💡 Purpose",
    items: [
      "This portfolio is not just a showcase — it's a reflection of my approach to clean code, design thinking, and frontend creativity.",
    ],
  },
];
