import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Database,
  FileSpreadsheet,
  BarChart,
  Cloud,
  BrainCog,
  ClipboardList,
  Calendar,
  LayoutDashboard,
  BookOpen,
} from "lucide-react";

const technologies = [
  {
    name: "SQL",
    logo: Database,
  },
  {
    name: "Excel",
    logo: FileSpreadsheet,
  },
  {
    name: "Power BI",
    logo: BarChart,
  },
  {
    name: "Salesforce",
    logo: Cloud,
  },
  {
    name: "Jira",
    logo: ClipboardList,
  },
  {
    name: "Monday",
    logo: Calendar,
  },
  {
    name: "Miro",
    logo: LayoutDashboard,
  },
  {
    name: "Notion",
    logo: BookOpen,
  },
  {
    name: "UiPath",
    logo: BrainCog,
  },
];

export const TechnologyStrip = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-12 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl font-semibold text-gray-600">
            Empowered by Leading Technologies
          </h2>
        </motion.div>

        <div className="flex justify-center gap-12">
          {technologies.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex flex-col items-center"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <tech.logo
                className={`w-12 h-12 mb-2 ${
                  hoveredIndex === index ? "text-red-500" : "text-gray-400"
                }`}
              />
              <span
                className={`text-gray-500 font-medium ${
                  hoveredIndex === index ? "text-red-500" : ""
                }`}
              >
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-gray-600">
          <p className="text-sm">
            Let's work together with these technologies to take your app or
            business to the next level.
          </p>
        </div>
      </div>
    </section>
  );
};
