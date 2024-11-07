import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Information Technology Student",
    location: "BTEC International College - FPT",
    description:
      "Studied and graduated in Information Technology with a 'Fairly' grade. During my studies, I acquired foundational knowledge in programming and information technology.",
    icon: React.createElement(LuGraduationCap),
    date: "08/2019 - 01/2022",
  },
  {
    title: "VBA Programmer",
    location: "Samo Media and Technology Joint Stock Company",
    description:
      "Used Google Apps Script to analyze data, push, and store data on Google Sheets.",
    icon: React.createElement(CgWorkAlt),
    date: "05/2022 - 07/2022",
  },
  {
    title: "Front-End Developer",
    location: "JTC Team",
    description:
      "Designed and implemented web UI, developed new features, created effects, and optimized the user interface. Participated in database analysis and design, as well as in customer requirement discussions.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Full-Stack Course",
    location: "FPT Complex",
    description:
      "Completed a Full-Stack course to enhance comprehensive programming skills from frontend to backend.",
    icon: React.createElement(LuGraduationCap),
    date: "09/2023 - 02/2024",
  },
  {
    title: "SAP ABAP Intern",
    location: "Keystone Solutions",
    description:
      "Intern in SAP ABAP, working with SAP systems to develop and maintain ABAP applications. Responsibilities included analyzing user requirements, designing and implementing technical solutions, and testing ABAP programs to ensure quality and performance.",
    icon: React.createElement(LuGraduationCap),
    date: "06/2024 - 08/2024",
  },
] as const;


export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "Java",
  "Spring MVC",
  "SQL",
  "SAP ABAP",
  "Bootstrap",
  "jQuery",
  "MySQL",
  "SQL Server",
  "GitHub",
  "VSCode",
  "Eclipse",
  "WebStorm",
  "IntelliJ",
  "Google Apps Script",
] as const;
