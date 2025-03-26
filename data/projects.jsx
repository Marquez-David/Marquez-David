import TailwindIcon from "../icons/TailwindIcon.astro";
import ReactIcon from "../icons/ReactIcon.astro";
import AstroIcon from "../icons/AstroIcon.astro";
import JavaScriptIcon from "../icons/JavaScriptIcon.astro";
import TypeScriptIcon from "../icons/TypeScriptIcon.astro";
import SpotifyIcon from "../icons/SpotifyIcon.astro"
import PythonIcon from "../icons/PythonIcon.astro"
import RIcon from "../icons/RIcon.astro"
import NextJSIcon from "../icons/NextJSIcon.astro";

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
  }
};

export const projects = [
  {
    "title": "Spotify clone",
    "description": "Complete and functional development of a Spotify clone using React Native for mobile platforms and React for the web. Integrating Spotify’s API to enable features like music playback, playlists, and user authentication.",
    "image": "/assets/spotify_mobile.webp",
    "href": "https://github.com/Marquez-David/SpotifyClone/tree/main",
    "tags": [TAGS.NEXTJS, TAGS.REACT, TAGS.TAILWIND, TAGS.REACTNATIVE, TAGS.JAVASCRIPT, TAGS.SPOTIFYAPI]
  },
  {
    "title": "Web Scraping tools evaluation",
    "description": "An in-depth analysis of web scraping tools is conducted, evaluating the quality of extracted information and resource usage, such as CPU/RAM and execution time. The study compares tools based on their heuristics, effectiveness, and efficiency.",
    "image": "/assets/web_scraper.webp",
    "href": "https://github.com/Marquez-David/TFG/tree/main",
    "tags": [TAGS.PYTHON, TAGS.R]
  }
]