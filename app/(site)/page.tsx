// Home.tsx

import Card from "@/components/ui/card";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default async function Home() {
  const projectCard = await Card();
  return (
    <div className="max-w-2xl mx-auto px-7 sm:px-8 mt-28">
      <header className="flex flex-col mb-12 sm:mb-16 font-mono">
        <p className="text-base prose text-red-500 dark:text-red-400">Hello, I&apos;m</p>
        <h1 className="mb-1 text-5xl font-bold tracking-normal sm:text-7xl sm:mb-4 text-teal-800 dark:text-teal-600">
          Renz Aljon Cruz
        </h1>
        <h2 className="text-2xl prose sm:text-4xl text-slate-500 dark:text-slate-200">
          I&apos;m a Frontend Software Engineer.
        </h2>
        <ul className="flex text-gray-600 dark:text-gray-400 text-2xl gap-x-5 pt-2">
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=100066723944685"
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook"
            >
              <FaFacebook />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/rarc_0524"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
            >
              <FaInstagram />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/renz-aljon-cruz-ba13bb286"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/RenzAljon24"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <FaGithub />
            </a>
          </li>
        </ul>
      </header>

      <h2 className="mt-24 font-bold text-gray-700 text-2xl py-2 dark:text-slate-200">
        Latest Projects
      </h2>

      {/* Async Card Component */}
      {projectCard}
    </div>
  );
}
