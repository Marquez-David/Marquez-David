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
import CSSIcon from "../icons/CSSIcon.astro";

const TAGS = {
  TAILWIND: {
    name: "Tailwind CSS",
    class: "bg-[#003159] text-white",
    icon: TailwindIcon,
  },
  REACTNATIVE: {
    name: "React Native",
    class: "bg-[#003159] text-white",
    icon: ReactIcon,
  },
  REACT: {
    name: "React",
    class: "bg-[#003159] text-white",
    icon: ReactIcon,
  },
  ASTRO: {
    name: "Astro",
    class: "bg-[#003159] text-white",
    icon: AstroIcon,
  },
  JAVASCRIPT: {
    name: "JavaScript",
    class: "bg-[#003159] text-white",
    icon: JavaScriptIcon,
  },
  TYPESCRIPT: {
    name: "TypeScript",
    class: "bg-[#003159] text-white",
    icon: TypeScriptIcon,
  },
  SPOTIFYAPI: {
    name: "Spotify API",
    class: "bg-[#003159] text-white",
    icon: SpotifyIcon,
  },
  PYTHON: {
    name: "Python",
    class: "bg-[#003159] text-white",
    icon: PythonIcon,
  },
  R: {
    name: "R",
    class: "bg-[#003159] text-white",
    icon: RIcon,
  },
  NEXTJS: {
    name: "NextJS",
    class: "bg-[#003159] text-white",
    icon: NextJSIcon,
  },
  REACTQUERY: {
    name: "React Query",
    class: "bg-[#003159] text-white",
    icon: ReactQueryIcon,
  },
  CSS: {
    name: "CSS",
    class: "bg-[#003159] text-white",
    icon: CSSIcon,
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