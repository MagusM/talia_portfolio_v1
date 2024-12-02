import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Hand } from "lucide-react";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

const waveAnimation = {
  initial: { rotate: 0 },
  animate: {
    rotate: [0, 14, -8, 14, -4, 10, 0],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      repeatDelay: 1,
    },
  },
};

export const ContactButton = () => {
  return (
    <a href="mailto:chriquitalia22@gmail.com" className="inline-block">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 hover:bg-blue-700 transition-colors"
      >
        Let&apos;s Connect <ArrowRight className="w-5 h-5" />
      </motion.button>
    </a>
  );
};

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <motion.div
            className="flex items-center justify-center gap-3 mb-4"
            custom={0}
            variants={textVariants}
          >
            <span className="text-4xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Hello, I&apos;m Talia Chriqui
            </span>
            <motion.div
              initial="initial"
              animate="animate"
              variants={waveAnimation}
            >
              <Hand className="w-8 h-8 text-yellow-400" />
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-12">
          <div className="w-full sm:w-96 h-96 relative order-first">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
              alt="Talia Chriqui - Business Analyst"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 max-w-xl flex flex-col items-start"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Transform Your Business with Data-Driven Insights
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Expert business analysis consulting to help your organization make
              informed decisions and achieve sustainable growth.
            </p>
            <ContactButton />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
