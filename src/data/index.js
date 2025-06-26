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
} from "../assets";

export const navLinks = [
  {
    id: "0",
    link: "About",
  },
  {
    id: "1",
    link: "Education",
  },
  {
    id: "2",
    link: "Skills",
  },
  {
    id: "3",
    link: "Projects",
  },
  {
    id: "4",
    link: "Contact",
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
    year: "2021 - Present",
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
        onClick: () => console.log("hii"),
        className:
          "bg-bg-light border-(--border-light) hover:bg-bg duration-500 hover:bg-bg duration-500",
      },
      {
        icon: css,
        label: "CSS3",
        onClick: () => console.log("hii"),
        className:
          "bg-bg-light border-(--border-light) hover:bg-bg duration-500",
      },
      {
        icon: javascript,
        label: "JavaScript",
        onClick: () => console.log("hii"),
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
        onClick: () => console.log("hii"),
        className:
          "bg-bg-light border-(--border-light) hover:bg-bg duration-500",
      },
      {
        icon: tailwind,
        label: "Tailwind CSS",
        onClick: () => console.log("hii"),
        className:
          "bg-bg-light border-(--border-light) hover:bg-bg duration-500",
      },
      {
        icon: redux,
        label: "Redux",
        onClick: () => console.log("hii"),
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
        onClick: () => console.log("hii"),
        className:
          "bg-bg-light border-(--border-light) hover:bg-bg duration-500",
      },
      {
        icon: github,
        label: "GitHub",
        onClick: () => console.log("hii"),
        className:
          "bg-bg-light border-(--border-light) hover:bg-bg duration-500",
      },
      {
        icon: cursor,
        label: "Cursor",
        onClick: () => console.log("hii"),
        className:
          "bg-bg-light border-(--border-light) hover:bg-bg duration-500",
      },
      {
        icon: vscode,
        label: "VS Code",
        onClick: () => console.log("hii"),
        className:
          "bg-bg-light border-(--border-light) hover:bg-bg duration-500",
      },
      {
        icon: vercel,
        label: "Vercel",
        onClick: () => console.log("hii"),
        className:
          "bg-bg-light border-(--border-light) hover:bg-bg duration-500",
      },
      {
        icon: figma,
        label: "Figma",
        onClick: () => console.log("hii"),
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
        onClick: () => console.log("hii"),
        className:
          "bg-bg-light border-(--border-light) hover:bg-bg duration-500",
      },
      {
        icon: gsap,
        label: "GSAP",
        onClick: () => console.log("hii"),
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
        onClick: () => console.log("hii"),
        className:
          "bg-bg-light border-(--border-light) hover:bg-bg duration-500",
      },
      {
        icon: reactbits,
        label: "ReactBits",
        onClick: () => console.log("hii"),
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

export const socialMedia = [
  {
    id: "social-media-1",
    icon: github,
    label: "Github",
    link: "https://github.com/niranjan05Kumar/",
  },
  {
    id: "social-media-2",
    icon: twitter,
    label: "Twitter",
    link: "https://x.com/05niranjankumar",
  },
  {
    id: "social-media-3",
    icon: linkedin,
    label: "Linkedin",
    link: "https://www.linkedin.com/in/niranjan05kumar/",
  },
  {
    id: "social-media-4",
    icon: mail,
    label: "Mail",
    link: "niranjankumar11082005@gmail.com",
  },
];
