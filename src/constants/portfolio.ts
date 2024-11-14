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
import Img1 from "@src/assets/images/Img1.jpg";
import Img2 from "@src/assets/images/Img2.jpg";
import Img3 from "@src/assets/images/Img3.jpg";
import Img4 from "@src/assets/images/Img4.jpg";
import Img5 from "@src/assets/images/Img5.jpg";
import Img6 from "@src/assets/images/Img6.jpg";
import Img7 from "@src/assets/images/Img7.jpg";
import Img8 from "@src/assets/images/Img8.jpg";
import Img9 from "@src/assets/images/Img9.jpg";
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
    label: "Project3",
    description:
      "Duis gravida orci ut mi consectetur, sed fermentum lectus ullamcorper.",
    date: "10 March, 2018",
    link: "www.project-site3.com",
    technology: ["Angular", "TypeScript", "Firebase"],
    img: Img3,
    projectImg: [Img1, Img2, Img3],
  },
  {
    id: 4,
    label: "Project4",
    description: "Vestibulum non felis et orci viverra pharetra eu eu augue.",
    date: "22 June, 2019",
    link: "www.project-site4.com",
    technology: ["Vue.js", "Vuetify", "Node.js"],
    img: Img4,
    projectImg: [Img1, Img2, Img3],
  },
  {
    id: 5,
    label: "Project5",
    description:
      "Cras maximus felis ut elit facilisis, eget cursus libero feugiat.",
    date: "19 September, 2020",
    link: "www.project-site5.com",
    technology: ["Bootstrap", "SASS", "JavaScript"],
    img: Img5,
    projectImg: [Img1, Img2, Img3],
  },
  {
    id: 6,
    label: "Project6",
    description: "Mauris quis nisl a eros tincidunt ullamcorper.",
    date: "3 December, 2020",
    link: "www.project-site6.com",
    technology: ["React", "Redux", "SASS"],
    img: Img6,
    projectImg: [Img1, Img2, Img3],
  },
  {
    id: 7,
    label: "Project7",
    description:
      "Aliquam erat volutpat. Morbi at magna vitae libero fermentum posuere.",
    date: "10 January, 2021",
    link: "www.project-site7.com",
    technology: ["Python", "Flask", "SQLite"],
    img: Img7,
    projectImg: [Img1, Img2, Img3],
  },
  {
    id: 8,
    label: "Project8",
    description:
      "Nulla viverra orci nec augue sodales, vel aliquam ante tempor.",
    date: "17 March, 2021",
    link: "www.project-site8.com",
    technology: ["Swift", "Xcode", "CoreData"],
    img: Img8,
    projectImg: [Img1, Img2, Img3],
  },
  {
    id: 9,
    label: "Project9",
    description: "Sed tincidunt urna at sollicitudin egestas.",
    date: "25 August, 2021",
    link: "www.project-site9.com",
    technology: ["Django", "PostgreSQL", "HTML5"],
    img: Img9,
    projectImg: [Img1, Img2, Img3],
  },
  {
    id: 10,
    label: "Project10",
    description: "Donec fringilla ex eget turpis condimentum vehicula.",
    date: "5 December, 2022",
    link: "www.project-site10.com",
    technology: ["Java", "Spring Boot", "MySQL"],
    img: Img7,
    projectImg: [Img1, Img2, Img3],
  },
  {
    id: 11,
    label: "Project11",
    description: "Donec fringilla ex eget turpis condimentum vehicula.",
    date: "5 December, 2022",
    link: "www.project-site10.com",
    technology: ["Java", "Spring Boot", "MySQL"],
    img: Img8,
    projectImg: [Img1, Img2, Img3],
  },
  {
    id: 12,
    label: "Project12",
    description: "Donec fringilla ex eget turpis condimentum vehicula.",
    date: "5 December, 2022",
    link: "www.project-site10.com",
    technology: ["Java", "Spring Boot", "MySQL"],
    img: Img9,
    projectImg: [Img1, Img2, Img3],
  },
];
