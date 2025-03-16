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
    "title": "Spotify clone Application",
    "description": "Complete and functional development of a Spotify clone application for android. Users can interact with their playlists, albums, podcasts and artists, and play their songs. 🎺",
    "image": "/assets/spotify_mobile.webp",
    "href": "https://github.com/Marquez-David/SpotifyClone/tree/main/mobile",
    "tags": [TAGS.REACTNATIVE, TAGS.JAVASCRIPT, TAGS.SPOTIFYAPI]
  },
  {
    "title": "Spotify clone Web",
    "description": "Complete and functional development of a Spotify clone web application. Users can interact with their playlists, albums, podcasts and artists. It is still under development. 🚀",
    "image": "/assets/spotify_web.webp",
    "href": "https://github.com/Marquez-David/SpotifyClone/tree/main/web",
    "tags": [TAGS.NEXTJS, TAGS.REACT, TAGS.JAVASCRIPT, TAGS.TAILWIND, TAGS.SPOTIFYAPI]
  },
  {
    "title": "Web Scraping tools evaluation",
    "description": "In this project the most important programming packages within web scraping are evaluated. The evaluation method is based on the quality of the extracted information and the use of resources for each extraction. The project is private but request access. 🔐",
    "image": "/assets/web_scraper.webp",
    "href": "https://github.com/Marquez-David/TFG/tree/main",
    "tags": [TAGS.PYTHON, TAGS.R]
  }
]