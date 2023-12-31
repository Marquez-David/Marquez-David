import spotify_mobile from "../public/assets/spotify-mobile.jpg"
import spotify_web from "../public/assets/spotify-web.png"
import web_scraper from "../public/assets/web-scraper.jpg"

import TailwindIcon from "../icons/TailwindIcon.astro";
import ReactIcon from "../icons/ReactIcon.astro";
import AstroIcon from "../icons/AstroIcon.astro";
import JavaScriptIcon from "../icons/JavaScriptIcon.astro";
import TypeScriptIcon from "../icons/TypeScriptIcon.astro";
import SpotifyIcon from "../icons/SpotifyIcon.astro"
import PythonIcon from "../icons/PythonIcon.astro"
import RIcon from "../icons/RIcon.astro"

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
    "image": { spotify_mobile },
    "href": "https://github.com/Marquez-David/SpotifyClone/tree/main/mobile",
    "tags": [TAGS.REACTNATIVE, TAGS.JAVASCRIPT, TAGS.SPOTIFYAPI]
  },
  {
    "title": "Spotify clone Web",
    "description": "Development of a Spotify clone web. It is still under development 🚀",
    "image": { spotify_web },
    "href": "https://github.com/Marquez-David/SpotifyClone/tree/main/web",
    "tags": [TAGS.ASTRO, TAGS.REACT, TAGS.TYPESCRIPT, TAGS.TAILWIND]
  },
  {
    "title": "Web Scraping tools comparison",
    "description": "In this project, the quality of the information extracted from each tool, and the use of resources for each extraction are evaluated. The project is currently private but you can request access 🔐. ",
    "image": { web_scraper },
    "href": "https://github.com/Marquez-David/TFG/tree/main",
    "tags": [TAGS.PYTHON, TAGS.R]
  }
]