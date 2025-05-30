import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ecommerce from "@/public/ecommerce.png";
import netflix from "@/public/netflix.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import note_taking from "@/public/note_taking.png"
import videocall from "@/public/videocall.png"
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
    title: "Software Engineer Trainee - Gemini Solutions",
    location: "Gurgaon , Haryana",
    description:
      "worked on Reactjs , spring Boot as backend in internal projects , working on microservices , peforming testing using seleinum with java ",
    icon: React.createElement(LuGraduationCap),
    date: "06/01/2025 (Currently working)",
  },
  {
    title: "Fullstack Developer Intern - Progshee Technologies",
    location: "Remote",
    description:
      "worked on Next js nad created dynamic websites, also create backend in typescript collaborated with different teams  ,created different components in accordance to figma design Skills - Next js , Node js , Express js  , ",
    icon: React.createElement(LuGraduationCap),
    date: "15/01/2024 to 21/06/2024 (6 months)",
  },
  {
    title: "Software Devlopment Engineering Intern - MittArv",
    location: "Hybrid",
    description:
      "worked on Web and Android devlopment created dynamic websites , components in accordance to figma design Skills - React js , Node js , Express js , Flutter , Jira , Problem Solving ",
    icon: React.createElement(LuGraduationCap),
    date: "01/11/2023 to 01/01/2024",
  },
  {
    title: "Teaching Assistant Coding Ninjas",
    location: "Remote",
    description:
      " Assisted 50+ students in learning C++ and Data Structures and Algorithms Took doubt session and resolved 250+ doubts with an average rating of 4.62/5 Helped students in their assignments",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Executive at MUIEEE",
    location: "Indore , MP",
    description:
      "As an Executive at the C/P team at MUIEEE, I mentored and guided my team members across various programming sections, helping them upskill themselves and excel in their role , to participate in coding contests and sharpen their problem-solving abilities. Together, we strive to achieve our goals and drive success for our organization",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
] as const;

export const projectsData = [
  {
    title: "E-commerce Application",
    description:
      "Developed an E-commerce application with Features - Cart function , Filter product, place and Track Order , Integrated Payment gateway and Search box ",
    tags: ["React", "Node.js", "MongoDB", "Css", "Express.js"],
    imageUrl: ecommerce,
    link : "https://aalokshop.vercel.app/",
  },
  {
    title: "Video Call Application",
    description:
      "Developed Video call based web application using WebRTC , Sockets.io and frontend on Reactjs.Functionality inlcudes Video Calling using a room Id which should be same for both the users",
    tags: ["React", "Sockets.io", "webRTC", "CSS"],
    imageUrl: videocall,
    link : "https://aalok-video-call-app.vercel.app/",
  },
  {
    title: "Note-Taking Application",
    description:
      "Developed Note Taking App on which user can create , Update , delete and view the note with integrated rich text editor and search box",
    tags: ["React", "Node.js", "Express.js", "MongoDB"],
    imageUrl: note_taking,
    link : "https://take-your-notes.vercel.app/",
  },
  {
    title: "Netflix Clone",
    description:
      "Developed a Full-Stack MERN Application Functionality inlcudes login , signup , Responsive Trailer of movie and most resemble with Netflix web app",
    tags: ["React", "Express.js", "Node.js", "Css", "MongoDB"],
    imageUrl: netflix,
    link : "https://github.com/Aaloklowanshi/Netflix_clone",
  }
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Recoil",
  "Express",
  "C++",
  "DSA",
  "JAVA",
  "Python",
  "MySQL",
  "Socket.IO",
  "WebRTC",
  "Redux",

] as const;
