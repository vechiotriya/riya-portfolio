import { ProjectItemProps, StatProps } from "./types";

/**
 * @type {ProjectItemProps[]}
 * @description Project and work experience in an array
 */
export const projects: ProjectItemProps[] = [
  {
    type: "work",
    timeline: "May 2021 - May 2022",
    image:
      "https://vectorseek.com/wp-content/uploads/2023/04/Infosys-Logo-Vector.jpg",
    name: "Operations Executive @ Infosys",
    description:
      "Gained hands-on SDLC and Agile experience with end-to-end testing and Selenium automation, including automated reporting to improve QA efficiency.",
    tags: [
      "Java",
      "Selenium",
      "Gherkin",
      "Agile Methodologies",
      "Jira",
      "JUnit",
      "Git",
      "Test Automation",
    ],
    demoUrl: "",
    githubUrl: "",
  },
  {
    type: "work",
    timeline: "Feb 2024 - Aug 2025",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Software Engineer 1 @ Homeville Group",
    description:
      "As a Mobile App Developer, I collaborated with product and design teams to deliver scalable solutions, reduced APK size by 50%, improved UX through automation, and implemented custom Firebase analytics to drive performance, quality, and efficient cross-team delivery.",
    tags: [
      "React Native",
      "TypeScript",
      "Javascript",
      "Firebase",
      "Appium",
      "Git",
      "Mobile Development",
      "RTK",
    ],
    demoUrl: "",
    githubUrl: "",
  },
  {
    type: "work",
    timeline: "Sep 2025 - Present",
    image:
      "https://img-cdn.inc.com/image/upload/f_webp,c_fit,w_350,q_auto/inc5000company/The_Unmarketing_Agency_155608.jpg",
    name: "Junior React Native Developer @ UNM",
    description:
      "Built a cross-platform Expo app for a UAE real estate company with Web3 auth, Arabic RTL support, offline-ready Redux, 3D Mapbox property maps, secure Sumsub KYC, a shared Tamagui UI library, and consistent mobile web UI via Tailwind.",
    tags: [
      "React Native",
      "React",
      "Expo",
      "TypeScript",
      "CSS",
      "Javascript",
      "Tamagui",
      "Tailwind",
      "Github",
    ],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    type: "personal",
    timeline: "Dec 2023",
    image:
      "https://raw.githubusercontent.com/vechiotriya/Choppa/refs/heads/main/assets/sprites/choppa-logo.png",
    name: "Choppa",
    description:
      "A 2D platformer built with Kaboom.js uses a component-based entity system where sprites, physics, collisions, and input are composed declaratively in JavaScript. The game runs on a lightweight canvas renderer with a built-in game loop, scene management, and arcade-style physics for jumping, gravity, and tile-based levels.",
    tags: ["Javascript", "Kaboom.js", "HTML"],
    demoUrl: "https://vechiotriya.github.io/Choppa/",
    githubUrl: "https://github.com/vechiotriya/Choppa/",
  },
  {
    type: "personal",
    timeline: "Jun 2025",
    image:
      "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Buoy App",
    description:
      "A cross-platform mobile app built with React Native (Expo CLI), offering a smooth and responsive user experience. Backed by a Spring Boot (Java) REST API for secure authentication and scalable data management.",
    tags: ["Typescript", "Java", "React Native","Spring Boot","Expo"],
    demoUrl: "",
    githubUrl: "https://github.com/vechiotriya/buoy-app",
  },
  {
    type: "personal",
    timeline: "Mar 2019",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Shopping spree",
    description:
      "A full-stack e-commerce application is built with Spring MVC for backend logic, JSP for the frontend, Hibernate as the ORM framework, and H2 Database for storage. It follows the Model-View-Controller (MVC) design pattern for a structured and scalable architecture.",
    tags: [
      "Archived",
      "Java",
      "Spring MVC",
      "Hibernate",
      "JSP",
      "H2 Database",
      "MVC Pattern",
    ],
    demoUrl: "",
    githubUrl: "https://github.com/vechiotriya/ShoppingSpree",
  },
  {
    type: "personal",
    timeline: "Jun 2023",
    image:
      "https://images.unsplash.com/photo-1436891461396-6df41158de09?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "FinKeepers",
    description:
      "FinKeepers is an innovative aquarium automation project designed to streamline essential tasks such as feeding fish, managing aquarium lighting, and monitoring critical environmental parameters. By utilizing an Arduino Uno board and an array of sensors, the system ensures optimal conditions for the aquarium's inhabitants.",
    tags: ["Archived", "React.js", "ThingSpeak API", "IoT"],
    demoUrl: "",
    githubUrl: "https://github.com/vechiotriya/FinKeepers",
  },
  {
    type: "personal",
    timeline: "Apr 2019",
    image:
      "https://images.unsplash.com/photo-1592840496694-26d035b52b48?q=80&w=825&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Priest",
    description:
      "A Windows desktop-based online multiplayer game that portrays the inner conflict of a person’s mind against evils like greed, jealousy, anger, and ego. The player embodies the mind, engaging in battles against an army of skeletons that symbolize these destructive traits. The game allows up to four players, including the host, to participate in a match. The host automatically joins the match at its creation, and three additional players can connect to the room.",
    tags: ["Archived", "C#", "Unity"],
    demoUrl: "",
    githubUrl: "https://github.com/vechiotriya/PriestGame",
  },
  {
    type: "personal",
    timeline: "Feb 2020",
    image:
      "https://images.unsplash.com/photo-1501621667575-af81f1f0bacc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Glance",
    description:
      "Glance is an object detection app designed to run on Windows. Object detection is a branch of computer technology, closely related to computer vision and image processing, that identifies instances of specific semantic objects within digital images or videos.",
    tags: ["Archived", "YOLO algorithm", "Python", "OpenCV", "Kivy"],
    demoUrl: "",
    githubUrl: "https://github.com/vechiotriya/Glance",
  },
];

export const stats: StatProps[] = [
  { title: "Years of Experience", value: "3+" },
  { title: "Projects Completed", value: "15+" },
  { title: "Clients Served", value: "3+" },
  { title: "Late Night Debugs", value: "∞" },
];
