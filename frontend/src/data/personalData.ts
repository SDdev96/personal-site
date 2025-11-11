// src/data/personalData.ts
import type { PersonalData } from "@/types/Portfolio";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaPython,
  FaJava,
  FaPhp,
  FaBootstrap,
  FaSass,
  FaReact,
  FaDatabase,
} from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiSpring } from "react-icons/si";
import heroImage from "@/assets/img/foto.jpg";
import cvLink from "@/assets/doc/salvatore-dambrosio-cv.pdf";
import videogame from "@/assets/img/projects/videogame-reviews-site.png";
import athletics from "@/assets/img/projects/athletics.png";
import intellicurtain from "@/assets/img/projects/intellicurtain.png"
import myweather from "@/assets/img/projects/my-weather.png"
import spidermanhome from "@/assets/img/projects/spiderman-home.png"
import reportingv from "@/assets/img/projects/report-ingv.png"
import sensorkit from "@/assets/img/projects/sensor-kit.png"
import ragevaluator from "@/assets/img/projects/rag-evaluator.png"


export const personalData: PersonalData = {
  imageSrc: heroImage,
  imageAlt: "Salvatore D'Ambrosio",
  fullName: "Salvatore D'Ambrosio",
  bsc: "Computer Engineering",
  msc: "",
  job: "Unemployed",
  skills: {
    hardSkills: {
      programmingLanguages: [
        {
          name: "HTML&CSS",
          logos: [
            {
              icon: FaHtml5,
              color: "rgba(228, 77, 38, 255)",
              size: 40,
            },
            {
              icon: FaCss3Alt,
              color: "rgba(38, 77, 228, 1)",
              size: 40,
            },
          ],
          mastery: "master",
          percentage: 90,
          frameworks: [
            {
              name: "Bootstrap",
              logos: [
                {
                  icon: FaBootstrap,
                  color: "rgba(76, 11, 206, 255)",
                  size: 28,
                },
              ],
              percentage: 90,
              mastery: "master",
            },
            {
              name: "Tailwind",
              logos: [
                {
                  icon: SiTailwindcss,
                  color: "#06B6D4",
                  size: 28,
                },
              ],
              percentage: 60,
              mastery: "advanced",
            },
            {
              name: "Sass",
              logos: [
                {
                  icon: FaSass,
                  color: "rgba(205, 103, 153, 255)",
                  size: 28,
                },
              ],
              percentage: 30,
              mastery: "basic",
            },
          ],
          libraries: [],
        },
        {
          name: "JavaScript/Typescript",
          logos: [
            {
              icon: FaJsSquare,
              color: "rgba(247, 224, 24, 255)",
              size: 40,
            },
            {
              icon: SiTypescript,
              color: "rgba(49, 120, 198, 1)",
              size: 34,
            },
          ],
          percentage: 85,
          mastery: "master",
          frameworks: [
            {
              name: "React",
              logos: [
                {
                  icon: FaReact,
                  color: "rgba(97, 219, 251, 255)",
                  size: 28,
                },
              ],
              percentage: 50,
              mastery: "in progress",
            },
          ],
          libraries: [
            {
              name: "Bootstrap",
              logos: [
                {
                  icon: FaBootstrap,
                  color: "rgba(76, 11, 206, 255)",
                  size: 28,
                },
              ],
              percentage: 35,
              mastery: "in progress",
            },
          ],
        },
        {
          name: "Java",
          logos: [
            {
              icon: FaJava,
              color: "rgba(2, 118, 145, 255)",
              size: 40,
            },
          ],

          percentage: 80,
          mastery: "master",
          frameworks: [
            {
              name: "JavaFX",
              logos: [
                {
                  icon: FaJava,
                  color: "#ED8B00",
                  size: 24,
                },
              ],
              percentage: 50,
              mastery: "intermediate",
            },
            {
              name: "Java Spring",
              logos: [
                {
                  icon: SiSpring,
                  color: "#6DB33F",
                  size: 20,
                },
              ],
              percentage: 50,
              mastery: "basic",
            },
          ],
          libraries: [],
        },
        {
          name: "PHP",
          logos: [
            {
              icon: FaPhp,
              color: "rgba(120, 124, 180, 255)",
              size: 40,
            },
          ],
          percentage: 70,
          mastery: "advanced",
          frameworks: [],
          libraries: [],
        },
        {
          name: "Python",
          logos: [
            {
              icon: FaPython,
              color: "rgba(87, 124, 170, 255)",
              size: 40,
            },
          ],
          percentage: 80,
          mastery: "advanced",
          frameworks: [
            {
              name: "MicroPython",
              logos: [""],
              percentage: 70,
              mastery: "advanced",
            },
          ],
          libraries: [
            {
              name: "Langchain",
              logos: [],
              percentage: 40,
              mastery: "intermediate",
            },
            { name: "NumPy", logos: [""], percentage: 20, mastery: "basic" },
            {
              name: "Faiss",
              logos: [""],
              percentage: 40,
              mastery: "intermediate",
            },
            {
              name: "Docling",
              logos: [""],
              percentage: 50,
              mastery: "intermediate",
            },
            {
              name: "Rank-BM25",
              logos: [""],
              percentage: 30,
              mastery: "basic",
            },
            {
              name: "Google-genai",
              logos: [""],
              percentage: 50,
              mastery: "intermediate",
            },
          ],
        },
        {
          name: "C",
          logos: [""],
          percentage: 40,
          mastery: "basic",
          frameworks: [],
          libraries: [],
        },
        {
          name: "Assembly",
          logos: [""],
          percentage: 30,
          mastery: "basic",
          frameworks: [],
          libraries: [],
        },
      ],
      databases: [
        {
          type: "SQL",
          name: "PostgreSQL",
          logos: [
            {
              icon: FaDatabase,
              color: "#336791",
              size: 40,
            },
          ],
          percentage: 70,
          mastery: "advanced",
        },
      ],
      tools: [
        "Git&GitHub",
        "Windsurf/VSCode",
        "Figma",
        "pgAdmin",
        "Wordpress",
        "Node-RED",
        "GenAI",
        "RAG Systems",
        "Langfuse",
        "SceneBuilder",
        "XAMPP",
        "NetSpot",
      ],
    },
    softSkills: [
      {
        name: "Leadership",
        percentage: 75,
        description:
          "Driven by both inclination and enjoyment I have taken on the role of team coordinator in all my academic projects, ensuring effective time management, balanced task distribution, and a positive team dynamic. Whenever issues arose, I was proactive in identifying and implementing the most suitable solutions.",
      },
      {
        name: "Problem Solving",
        percentage: 80,
        description:
          "My detail-oriented and persistent approach enables me to find optimal solutions to problems and tasks, allowing me to perform well even under pressure.",
      },
      {
        name: "Creativity",
        percentage: 85,
        description:
          "Creative by nature, I enjoy combining utility, simplicity, and elegance whenever the task requires it. In my work, I apply this approach to ensure clean code, reusability, and modularity. “When genius binds creativity to utility, great ideas are born”. ",
      },
      {
        name: "Teamwork",
        percentage: 65,
        description:
          "Thanks to my experience with academic projects and professional work, i have developed persistence and adaptability, which allow me to integrate into any team. I strongly believe in fairness and equity, which guides my interactions and fosters a positive and respectful work environment. ",
      },
    ],
  },
  experiences: [
    {
      name: "Software developer",
      description:
        'Internship at Nexsoft, located in Salerno, as a software developer. My work involved implementing Retrieval-Augmented Generation (RAG) systems using generative AI models, while also contributing to the design of automatic evaluation frameworks based on the "LLM as a Judge" approach to assess and improve the performance of the developed RAG systems.',
      tags: [
        "GitHub",
        "Windsurf",
        "RAG Systems",
        "LLM as a Judge",
        "Langfuse",
        "REST APIs",
        "Python",
        "GenAI",
      ],
      current: false,
    },
    {
      name: "Web developer",
      description:
        "From July 2024 I started a new job experience at T30 Web Agency, based in Eboli (SA), as a web developer. Here, My job is to develop websites for small and large companies. I use Wordpress as CMS, Elementor as page-builder, other plugins and widgets and custom code in HTML, CSS, JS and PHP",
      tags: ["Wordpress", "Elementor", "PHP", "HTML", "CSS", "JS"],
      current: false,
    },
    {
      name: "Tutoring",
      description:
        'In 2018 I started tutoring guys from middle school to university for scientific subject such as math, physics and computer science. At first at "Diversiamo", Salerno, then I kept on doing it privately.',
      tags: [],
      current: false,
    },
  ],
  hobbies: ["Programming", "Videogames", "Software & Web Development"],
  quote: '"May your heart be your guiding key"',
  cvLinks: [
    {
      label: "General CV",
      href: cvLink,
    },
  ],
  projects: [
    {
      id: 1,
      title: "Videogame reviews site",
      description:
        "Website where you can search, view, review and filter for a moltitude of videogames.",
      image: videogame,
      tags: [
        "React.js",
        "React-hook-form",
        "React-router-dom",
        "Material UI",
        "Antd",
        "Bootstrap",
        "Sass",
        "REST API",
        "JSON",
      ],
      link: "https://github.com/SDdev96/sito-recensioni-videogiochi",
    },
    {
      id: 9,
      title: "RAG-evaluator",
      description: "Sophisticated Retrieval-Augmented Generation (RAG) system designed to process, retrieve, and generate responses from LLMs for technical documents. It also implements Langfuse API to track the processes and a LLM-as-a-Judge system to evaluate the responses.",
      image: ragevaluator,
      tags: [
        "Python",
        "Google-genai",
        "REST API",
        "Langchain",
        "Docling",
        "FAISS",
        "BM25",
        "RAG system",
        "LLM-as-a-judge",
        "Langfuse",
      ],
      link: "https://github.com/SDdev96/RAG-evaluator",
    },
    {
      id: 2,
      title: "My weather",
      description:
        "Website to check the current and forecast weather in every place all around the globe.",
      image: myweather,
      tags: ["Vue.js", "Tailwind", "vite", "REST API", "Geolocation API"],
      link: "",
    },
    {
      id: 3,
      title: "Spiderman Home",
      description:
        "Advertising website for spiderman products and draw for bundle for registered users",
      image: spidermanhome,
      tags: ["PHP", "HTML5", "CSS3", "JS", "PostgreSQL", "PgAdmin", "Figma"],
      link: "https://github.com/SDdev96/spiderman-home",
    },
    {
      id: 4,
      title: "Report INGV",
      description:
        "JavaFX application that shows and filters earthquakes from INGV files",
      image: reportingv,
      tags: ["JavaFX", "Java", "SceneBuilder", "REST API"],
      link: "https://github.com/SDdev96/reportINGV",
    },
    {
      id: 5,
      title: "Athletics",
      description:
        "Design and scripting of DBMS for World Championships in Athletics 2024",
      image: athletics,
      tags: ["PostgreSQL", "PgAdmin"],
      link: "",
    },
    {
      id: 8,
      title: "My Calendar",
      description:
        "Fullstack project for a calendar. This is the initial version with CRUD operations",
      image: "",
      tags: [
        "React.ts",
        "css",
        "Java Spring Boot",
        "Typescript",
        "PostgreSQL",
        "MVC architecture",
        "CRUD API",
        "Hibernate-JPA",
        "Vite",
        "Mantine",
      ],
      link: "https://github.com/SDdev96/my-calendar",
    },
    {
      id: 6,
      title: "SensorKit",
      description:
        "Java application, management of sensors for IoT applications",
      image: sensorkit,
      tags: ["Java"],
      link: "https://github.com/SDdev96/sensorKit",
    },
    {
      id: 7,
      title: "IntelliCurtain",
      description: "Smart curtain for smart houses, including remote control.",
      image: intellicurtain,
      tags: [
        "Python",
        "MicroPython",
        "ESP32 chip",
        "Node-RED",
        "MQTT protocol",
        "Docker",
      ],
      link: "https://github.com/SDdev96/IntelliCurtain",
    },
  ],
  contactInfo: {
    location: "Eboli (SA), Italy",
    phone: "+39 3384591601",
    email: "sd.io@hotmail.com",
  },
  socialLinks: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/salvo9624",
      icon: "facebook",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/salvatoredambrosio/",
      icon: "instagram",
    },
    {
      name: "GitHub",
      href: "https://github.com/SDdev96",
      icon: "github",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/sdambrosio/",
      icon: "linkedin",
    },
  ],
};
