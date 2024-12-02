import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const timelineData = [
  {
    year: '2020 - Present',
    title: 'Senior Business Analyst',
    company: 'Tech Solutions Inc.',
    description: 'Led cross-functional teams in implementing data-driven solutions, resulting in 30% efficiency improvement.',
    icon: Briefcase,
  },
  {
    year: '2017 - 2020',
    title: 'Business Analyst',
    company: 'Innovation Corp',
    description: 'Developed and maintained business intelligence dashboards, driving strategic decision-making processes.',
    icon: Briefcase,
  },
  {
    year: '2015 - 2017',
    title: 'Junior Business Analyst',
    company: 'StartUp Ventures',
    description: 'Conducted market research and competitive analysis to identify business opportunities.',
    icon: Briefcase,
  },
  {
    year: '2015',
    title: 'MBA in Business Analytics',
    company: 'Business School University',
    description: 'Graduated with honors, specialized in data-driven decision making.',
    icon: GraduationCap,
  },
];

export const Timeline = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Professional Journey</h1>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-blue-200" />

            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative mb-12"
              >
                <div className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}>
                  {/* Timeline point */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-y-4 md:-translate-x-1/2 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center z-10">
                    <item.icon className="w-4 h-4 text-white" />
                  </div>

                  {/* Content */}
                  <div className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'
                  }`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <span className="text-blue-500 font-semibold">{item.year}</span>
                      <h3 className="text-xl font-bold text-gray-900 mt-2">{item.title}</h3>
                      <p className="text-gray-600 font-medium mt-1">{item.company}</p>
                      <p className="text-gray-500 mt-2">{item.description}</p>
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