import TailwindIcon from "../public/TailwindIcon.astro";
import ReactIcon from "../public/ReactIcon.astro";
import AstroIcon from "../public/AstroIcon.astro";
import JavaScriptIcon from "../public/JavaScriptIcon.astro";
import TypeScriptIcon from "../public/TypeScriptIcon.astro";
import SpotifyIcon from "../public/SpotifyIcon.astro"
import PythonIcon from "../public/PythonIcon.astro"
import RIcon from "../public/RIcon.astro"

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
  }
};

export const projects = [
  {
    "title": "Spotify clone Application",
    "description": "Complete and functional development of a Spotify clone application. Users can interact with their playlists, albums, podcasts and artists, and play their songs.",
    "image": "./spotify-mobile.jpg",
    "href": "https://github.com/Marquez-David/SpotifyClone/tree/main/mobile",
    "tags": [TAGS.REACTNATIVE, TAGS.JAVASCRIPT, TAGS.SPOTIFYAPI]
  },
  {
    "title": "Spotify clone Web",
    "description": "Development of a Spotify clone web. It is still under development 🚀",
    "image": "./spotify-web.png",
    "href": "https://github.com/Marquez-David/SpotifyClone/tree/main/web",
    "tags": [TAGS.ASTRO, TAGS.REACT, TAGS.TYPESCRIPT, TAGS.TAILWIND]
  },
  {
    "title": "Web Scraping tools comparison",
    "description": "Comparison in effectiveness and efficiency of the most popular web scraping tools. The project is currently private but you can request access.",
    "image": "./web-scraper.jpg",
    "href": "https://github.com/Marquez-David/TFG/tree/main",
    "tags": [TAGS.PYTHON, TAGS.R]
  }
]