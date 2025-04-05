import TailwindIcon from "../icons/TailwindIcon.astro";
import ReactIcon from "../icons/ReactIcon.astro";
import AstroIcon from "../icons/AstroIcon.astro";
import JavaScriptIcon from "../icons/JavaScriptIcon.astro";
import TypeScriptIcon from "../icons/TypeScriptIcon.astro";
import SpotifyIcon from "../icons/SpotifyIcon.astro"
import PythonIcon from "../icons/PythonIcon.astro"
import RIcon from "../icons/RIcon.astro"
import NextJSIcon from "../icons/NextJSIcon.astro";
import ReactQueryIcon from "../icons/ReactQueryIcon.astro";

const TAGS = {
  TAILWIND: {
    name: "Tailwind CSS",
    icon: TailwindIcon,
  },
  REACTNATIVE: {
    name: "React Native",
    icon: ReactIcon,
  },
  REACT: {
    name: "React",
    icon: ReactIcon,
  },
  ASTRO: {
    name: "Astro",
    icon: AstroIcon,
  },
  JAVASCRIPT: {
    name: "JavaScript",
    icon: JavaScriptIcon,
  },
  TYPESCRIPT: {
    name: "TypeScript",
    icon: TypeScriptIcon,
  },
  SPOTIFYAPI: {
    name: "Spotify API",
    icon: SpotifyIcon,
  },
  PYTHON: {
    name: "Python",
    icon: PythonIcon,
  },
  R: {
    name: "R",
    icon: RIcon,
  },
  NEXTJS: {
    name: "NextJS",
    icon: NextJSIcon,
  },
  REACTQUERY: {
    name: "React Query",
    icon: ReactQueryIcon,
  },
  JAVA: {
    name: "Java",
    icon: "icons/JavaIcon.svg",
  },
  C: {
    name: "C/C++",
    icon: "icons/CIcon.svg",
  },
  RACKET: {
    name: "Racket",
    icon: "icons/RacketIcon.svg",
  },
  SCALA: {
    name: "Scala",
    icon: "/icons/ScalaIcon.svg",
  },
  SERVICENOW: {
    name: "ServiceNow",
    icon: "/icons/ServicenowIcon.svg",
  },
  R2: {
    name: "R",
    icon: "/icons/RIcon.svg",
  },
  PYTHON2: {
    name: "Python",
    icon: "/icons/PythonIcon.svg",
  },
  JAVASCRIPT2: {
    name: "JavaScript",
    icon: "/icons/JavaScriptIcon.svg",
  },
  REACTNATIVE2: {
    name: "React Native",
    icon: "/icons/ReactIcon.svg",
  },
  FLASK: {
    name: "Flask",
    icon: "/icons/FlaskIcon.svg",
  },
  DOCKER: {
    name: "Docker",
    icon: "/icons/DockerIcon.svg",
  },
  HTML: {
    name: "HTML",
    icon: "/icons/HTMLIcon.svg",
  },
  BOOTSTRAP: {
    name: "Bootstrap",
    icon: "/icons/BootstrapIcon.svg",
  },
  REDIS: {
    name: "Redis",
    icon: "/icons/RedisIcon.svg",
  },
  JQUERY: {
    name: "",
    icon: "/icons/JQueryIcon.svg",
  },
  CSS: {
    name: "CSS",
    icon: "/icons/CSSIcon.svg",
  },
  GOOGLECLOUD: {
    name: "Google Cloud",
    icon: "/icons/GCloudIcon.svg",
  },
  AWS: {
    name: "",
    icon: "/icons/AWSIcon.svg",
  },
  POSTGRESQL: {
    name: "PostgreSQL",
    icon: "/icons/PostgresqlIcon.svg",
  },
  MYSQL: {
    name: "MySQL",
    icon: "/icons/MYSQLIcon.svg",
  },
  CUDA: {
    name: "Cuda",
    icon: "/icons/CudaIcon.svg",
  },
};

export const projects = [
  {
    "title": "Spotify clone",
    "description": "A fully functional Spotify clone developed with seamless integration of Spotify’s API, enabling features such as music playback, playlist management, and user authentication. The interface is designed for a smooth and responsive experience.",
    "image": "/assets/spotify_mobile.webp",
    "href": "https://github.com/Marquez-David/SpotifyClone/tree/main",
    "tags": [TAGS.NEXTJS, TAGS.REACT, TAGS.TAILWIND, TAGS.JAVASCRIPT, TAGS.SPOTIFYAPI, TAGS.REACTQUERY]
  },
  {
    "title": "Web Scraping tools evaluation",
    "description": "An in-depth analysis of web scraping tools is conducted, evaluating the quality of extracted information and resource usage, such as CPU/RAM and execution time. The study compares tools based on their heuristics, effectiveness, and efficiency.",
    "image": "/assets/web_scraper.webp",
    "href": "https://github.com/Marquez-David/TFG/tree/main",
    "tags": [TAGS.PYTHON, TAGS.R]
  }
]

export const experience = [
  {
    "id": "lp136nupAc3ToAvu",
    "type": "work",
    "title": "Software Engineer",
    "subtitle": "Software Engineer at Acuratio",
    "resume": "Responsible for backend and frontend development as well as database management. I work on building and maintaining a platform that allows companies to merge data sets while maintaining data protection.",
    "description": "Contribute to the comprehensive development of the company's federated learning platform. My responsibilities include designing and implementing both frontend and backend components, ensuring seamless integration between the two. Additionally, I manage database interactions, collaborating closely with the team to deliver solutions that enable organizations to combine and analyze data collaboratively, all while upholding the highest standards of data privacy and security.",
    "date": "Feb. 2024 ➡ Present",
    "tags": [TAGS.JAVASCRIPT2, TAGS.PYTHON2, TAGS.FLASK, TAGS.DOCKER, TAGS.POSTGRESQL, TAGS.HTML, TAGS.BOOTSTRAP, TAGS.CSS, TAGS.REDIS, TAGS.JQUERY, TAGS.GOOGLECLOUD, TAGS.AWS]
  },
  {
    "id": "v6adHHwHjIUvCgpB",
    "type": "work",
    "title": "Cloud Architecture Analyst",
    "subtitle": "Cloud Transformation & Architecture Analyst at Accenture",
    "resume": "Implement cloud-based solutions, utilizing ServiceNow to optimize workflows and operations. I contributed to the successful transformation of cloud architectures and improved service delivery for clients..",
    "description": "Played an important role in helping clients with their cloud transformation. I analyzed their needs and implemented cloud-based solutions, optimizing operations and improving service delivery. Using ServiceNow, I automated workflows, increased system efficiency, and ensured seamless integration with other platforms. In addition, I earned two certifications, Flow Designer and the Certified System Administrator, which deepened my knowledge of ServiceNow and its capabilities. This enabled me to contribute more effectively to optimizing cloud architectures and ensure that our solutions are scalable and tailored to customer needs.",
    "date": "Feb. 2022 ➡ Oct. 2023",
    "tags": [TAGS.SERVICENOW, TAGS.JAVASCRIPT2]
  },
  {
    "id": "tbP1XaLq1QoD2EQe",
    "type": "work",
    "title": "Mobile Developer",
    "subtitle": "Mobile Developer at Recomiend.app",
    "resume": "Building and maintaining cross-platform mobile applications, ensuring seamless functionality on both iOS and Android. I worked closely with product and design teams to implement user-friendly features while optimizing performance and ensuring high-quality code standards.",
    "description": "Focused mainly on extending and maintaining a mobile app that ran on both iOS and Android. I worked with cross-functional teams to design user-friendly experiences and develop new features. My role also involved optimizing app performance, ensuring smooth functionality across both platforms, and addressing any issues that arose during development. I collaborated closely with product managers, designers, and QA engineers to deliver high-quality updates and features, while adhering to best practices for code quality, testing, and debugging. This helped improve the overall user experience and contributed to the app’s ongoing success.",
    "date": "Mar. 2021 ➡ Jan. 2022",
    "tags": [TAGS.JAVASCRIPT2, TAGS.REACTNATIVE2]
  },
  {
    "id": "lddTaWCYmO21C0qt",
    "type": "education",
    "title": "Computer Science Bachelor",
    "subtitle": "Bachelor's degree in Computer Science with Mention in Computation",
    "resume": "A multidisciplinary program combining software engineering, algorithms, data structures, computational theory, and system architecture, emphasizing both theoretical and practical applications in computing.",
    "description": "The Bachelor's in Computer Science provided a solid foundation in key computer science areas, including software engineering, algorithms, data structures, and computation. The curriculum offered both theoretical insights into computational models and hands-on experience through projects, which helped develop technical and problem-solving skills. The program also emphasized teamwork, research, and the ability to adapt to rapid technological advancements, preparing me for roles in software development, systems analysis, and research.",
    "date": "Aug. 2016 ➡ May 2021",
    "tags": [TAGS.JAVA, TAGS.C, TAGS.RACKET, TAGS.SCALA, TAGS.R2, TAGS.PYTHON2, TAGS.JAVASCRIPT2, TAGS.CUDA, TAGS.POSTGRESQL, TAGS.MYSQL]
  }
]