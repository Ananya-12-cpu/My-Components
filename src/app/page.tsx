

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
    route: "/coming-soon",
  },
  {
    name: "Stop Watch",
    description: "Track time with a stylish stopwatch.",
    route: "/stopwatch",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
    

      <main className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-center mb-24 mt-8">Featured Modules</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((mod, idx) => (
            <Link key={mod.name} href={mod.route}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer"
              >
                <h3 className="text-xl font-bold mb-2">{mod.name}</h3>
                <p className="text-gray-300">{mod.description}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </main>

      <footer className="text-center text-gray-500 text-sm py-10">
        &copy; {new Date().getFullYear()} Smart Project. Built with ❤️ using Next.js.
      </footer>
    </div>
  );
}
