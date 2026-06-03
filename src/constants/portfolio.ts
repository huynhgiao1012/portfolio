import type { StaticImageData } from "next/image";

import DAO1 from "@src/assets/images/DAO1.png";
import DAO2 from "@src/assets/images/DAO2.png";
import DAO3 from "@src/assets/images/DAO3.png";
import DAO4 from "@src/assets/images/DAO4.png";
import DAO5 from "@src/assets/images/DAO5.png";
import DAO6 from "@src/assets/images/DAO6.png";
import DAO7 from "@src/assets/images/DAO7.png";
import DAO8 from "@src/assets/images/DAO8.png";
import DAO9 from "@src/assets/images/DAO9.png";
import DAO10 from "@src/assets/images/DAO10.png";
import DAO11 from "@src/assets/images/DAO11.png";
import DAOBg from "@src/assets/images/DAOBg.png";
import Driver5 from "@src/assets/images/DP.png";
import Driver1 from "@src/assets/images/Driver1.png";
import Driver2 from "@src/assets/images/Driver2.png";
import FA1 from "@src/assets/images/FA1.png";
import FA2 from "@src/assets/images/FA2.jpeg";
import LAIP from "@src/assets/images/LAIP2.png";
import Train1 from "@src/assets/images/Train1.png";
import Train2 from "@src/assets/images/Train2.png";
import Train3 from "@src/assets/images/Train3.png";
import Train4 from "@src/assets/images/Train4.png";
import Train5 from "@src/assets/images/Train5.png";
import Train6 from "@src/assets/images/Train6.png";
import Train7 from "@src/assets/images/Train7.png";
import Train8 from "@src/assets/images/Train8.png";
import Train9 from "@src/assets/images/Train9.png";

type PortfolioType = {
  id: number;
  label: string;
  description: string;
  date: string;
  link: string;
  technology: string[];
  img: StaticImageData;
  projectImg: StaticImageData[];
};

export const PORTFOLIO: PortfolioType[] = [
  {
    id: 1,
    label: "Train Ticket Booking System",
    description:
      "Web application that allows users to book their train ticket. Using HTML5/CSS3 as Frontend, Nodejs/ Restful API / Express JS as Backend, and MongoDB for database.",
    date: "2021 - 2022",
    link: "https://github.com/huynhgiao1012/train-bookingTicket-system",
    technology: [
      "HTML5",
      "CSS3",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "RestfulAPI",
    ],
    img: Train1,
    projectImg: [
      Train1,
      Train2,
      Train3,
      Train4,
      Train5,
      Train6,
      Train7,
      Train8,
      Train9,
    ],
  },
  {
    id: 2,
    label: "DAO - Onroad Vehicle Breakdown Assistance",
    description:
      "A mobile system helps users to find a list of nearby garages based on their current position when meeting technical problems with their vehicle along the street, provides booking maintaining function. A web system allows users to do some management tasks.",
    date: "November 2023 - March 2024",
    link: "https://github.com/huynhgiao1012/Thesis---ORVBA",
    technology: ["ReactJS", "React Native", "Node.js", "Express", "MongoDB"],
    img: DAOBg,
    projectImg: [
      DAO1,
      DAO2,
      DAO3,
      DAO4,
      DAO5,
      DAO6,
      DAO7,
      DAO8,
      DAO9,
      DAO10,
      DAO11,
    ],
  },
  {
    id: 3,
    label: "LAIP - Mobile UI",
    description:
      "Developed mobile application features using React Native for internal business operations. Built responsive interfaces for documentation and FAQ modules, implemented VietQR-based QR code functionalities, and collaborated with team members to deliver user-friendly features and improve application quality.",
    date: "August 2023 - October 2023",
    link: "",
    technology: ["React Native", "NodeJS", "ExpressJS"],
    img: LAIP,
    projectImg: [LAIP],
  },
  {
    id: 4,
    label: "Dr**** Project -- Car Booking Service Web Application",
    description:
      "Developed a responsive car-booking platform using React and TypeScript, with a focus on delivering a mobile-first user experience. Implemented core features including ride-booking workflows, booking management, and booking history. Integrated RESTful APIs to support booking operations, user data management, and real-time updates. Built reusable UI components and responsive layouts to enhance consistency, scalability, and maintainability across the application. Collaborated closely with cross-functional team members to deliver new features, troubleshoot issues, and continuously improve product quality and user experience.",
    date: "August, 2024",
    link: "",
    technology: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "RESTful API",
      "Zustand",
    ],
    img: Driver5,
    projectImg: [Driver1, Driver2],
  },
  {
    id: 5,
    label: "Fi****** Advisory Assist (App)",
    description:
      "Developed frontend features for an AI-powered meeting assistant platform using React and TypeScript. Built meeting recording, media management, and AI-driven experiences including transcription, summaries, compliance reviews, and interactive chat. Developed analytics dashboards, data visualizations, and tenant-based management features while delivering responsive, scalable, and user-friendly interfaces.",
    date: "2025",
    link: "",
    technology: [
      "ReactJS",
      "TypeScript",
      "Tailwind CSS",
      "Tanstack Query",
      "Radix UI",
    ],
    img: FA1,
    projectImg: [FA1],
  },
  {
    id: 6,
    label: "Fi****** Advisory Assist (CMS)",
    description:
      "Developed administrative and tenant management features for an AI-powered platform using React and TypeScript. Built user, group, permission, and configuration management modules, along with dashboards for monitoring AI processing tasks and system performance. Implemented advanced data management capabilities including bulk actions, CSV import/export, drag-and-drop configuration interfaces, feature toggles, and customizable AI templates, while integrating RESTful APIs and optimizing administrative workflows.",
    date: "2025",
    link: "",
    technology: [
      "ReactJS",
      "TypeScript",
      "Tailwind CSS",
      "Tanstack Query",
      "Radix UI",
    ],
    img: FA2,
    projectImg: [FA2],
  },
];
