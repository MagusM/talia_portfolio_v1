import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Hand } from "lucide-react";
import Logo from "../assets/talia-logo.svg";
import Logo2 from "../assets/talia-logo-removebg-preview.png";

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
        <div className="flex flex-col sm:flex-row items-center justify-center gap-12">
          <div className="w-full sm:w-96 h-96 relative order-first">
            <img
              src={Logo2}
              alt="Talia Chriqui - Business Analyst"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 max-w-5xl flex flex-col items-start"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Insight to Impact: Empowering Teams - Driving Growth
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              With 10 years of experience in data analytics and business
              operations, I empower businesses to optimize their systems,
              improve team efficiency, and achieve sustainable growth.
            </p>
            <ContactButton />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
