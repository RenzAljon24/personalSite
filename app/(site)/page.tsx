// eslint-disable
// @ts-nocheck


import { CardGrid } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Facebook, Instagram, ExternalLink, Mail } from "lucide-react"

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto px-7 sm:px-8 mt-20">
      <section className="relative overflow-hidden">
        <div />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12  sm:pb-20">
          <div className="text-center">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 mb-6">
                <span className="text-red-600 dark:text-red-400 text-sm font-medium">👋 Hello, I&#39;m</span>
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                <span className="bg-gradient-to-r from-teal-600 to-blue-600 dark:from-teal-400 dark:to-blue-400 bg-clip-text text-transparent">
                  Renz Aljon Cruz
                </span>
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
                Frontend Engineer that develops beautiful, functional web experiences
              </p>

              {/* Stats */}
              <div className="flex flex-wrap justify-center gap-8 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">3+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">50+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">100%</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Client Satisfaction</div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-6">
                <a
                  href="https://www.facebook.com/profile.php?id=100066723944685"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/rarc_0524"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-slate-600 hover:text-pink-600 dark:text-slate-400 dark:hover:text-pink-400"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/renz-aljon-cruz-ba13bb286"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-slate-600 hover:text-blue-700 dark:text-slate-400 dark:hover:text-blue-400"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/RenzAljon24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-slate-600 hover:text-gray-900 dark:text-slate-400 dark:hover:text-white"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <h2 className="mt-24 font-bold text-gray-700 text-2xl py-2 dark:text-slate-200">Latest Projects</h2>

      {/* Use the CardGrid component directly */}
      <CardGrid />
    </div>
  )
}
