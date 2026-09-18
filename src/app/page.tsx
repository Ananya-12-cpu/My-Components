

"use client"

import { motion } from "framer-motion";
import Link from "next/link";
// import { Button } from "@/components/ui/button";

const modules = [
  {
    name: "Filter",
    description: "Filter data with custom logic and UI.",
    route: "/filter",
  },
  {
    name: "Pagination",
    description: "Paginate large datasets efficiently.",
    route: "/pagination",
  },
  {
    name: "Calculator",
    description: "A smart calculator built with React.",
    route: "/calculator",
  },
  {
    name: "To Do Application",
    description: "Manage tasks and boost productivity.",
    route: "/todo",
  },
  {
    name: "Stop Watch",
    description: "Track time with a stylish stopwatch.",
    route: "/stopwatch",
  },
  {
    name: "Markdown Preview",
    description: "Write markdown and preview it live.",
    route: "/markdown_preview",
  },
  {
    name: "Tic Tac Toe",
    description: "Classic two-player game with winner detection.",
    route: "/tictactoe",
  },
  {
    name: "QR Code",
    description: "Generate a scannable QR code.",
    route: "/qr",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-16 mt-12">
          <h1 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
            My Components
          </h1>
          <p className="text-gray-300 text-lg">A collection of interactive UI modules built with Next.js.</p>
        </div>

        <h2 className="text-2xl font-semibold text-center mb-10 text-gray-200">Featured Modules</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((mod) => (
            <Link key={mod.name} href={mod.route}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 border border-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-purple-500/20 hover:border-purple-400/40 transition-all cursor-pointer"
              >
                <h3 className="text-xl font-bold mb-2 text-white">{mod.name}</h3>
                <p className="text-gray-300">{mod.description}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </main>

      <footer className="text-center text-gray-500 text-sm py-10">
        &copy; {new Date().getFullYear()} My Components. Built with ❤️ using Next.js.
      </footer>
    </div>
  );
}
