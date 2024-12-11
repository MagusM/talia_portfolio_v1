import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const timelineData = [
  {
    year: "1-3 business days",
    title: "Diagnosis Phase",
    bullets: [
      "Conduct on-site or virtual observation of all relevant teams and of the organization itself.",
      "Understand workflows, pain points, and communication patterns.",
    ],
    icon: ArrowDown,
  },
  {
    year: "5-7 business days",
    title: "Analysis & Feedback",
    bullets: [
      "Create detailed reports of current processes.",
      "Provide initial insights and involve teams in feedback sessions.",
    ],
    icon: ArrowDown,
  },
  {
    year: "12-20 business days",
    title: "Implementation with Training",
    bullets: [
      "Roll out tailored solutions collaboratively.",
      "Train teams to ensure understanding and adoption.",
    ],
    icon: ArrowDown,
  },
  {
    year: "Ongoing, 5-10 business days initially.",
    title: "Follow-Up & Continuous Feedback",
    bullets: [
      "Provide ongoing support and gather feedback to refine solutions.",
    ],
    icon: ArrowDown,
  },
];

export const Timeline = () => {
  return (
    <section className="py-20 bg-white overflow-x-hidden" id="timeline">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            The Empower Process
          </h1>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200" />

            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative mb-12"
              >
                <div
                  className={`flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline point */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center z-10">
                    <item.icon className="w-4 h-4 text-white" />
                  </div>

                  {/* Content */}
                  <div
                    className={`w-full md:w-1/2 px-4 ${
                      index % 2 === 0 ? "md:pl-8" : "md:pr-8"
                    }`}
                  >
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <span className="text-blue-500 font-semibold">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 mt-2">
                        {item.title}
                      </h3>
                      <ul className="list-disc list-inside mt-4 text-gray-600">
                        {item.bullets.map((bullet, bulletIndex) => (
                          <li key={bulletIndex} className="mb-2">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
