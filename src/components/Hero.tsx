import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import Logo from "../assets/talia-logo-removebg-preview.png";
import { AnimatedUnderline } from "./AnimatedUnderline";

export const ContactButton = () => {
  return (
    <div className="flex flex-row md:flex-row gap-4 w-full">
      {/* Email Button */}
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href="mailto:taliachriqui1@gmail.com"
        className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 hover:bg-blue-700 transition-colors  text-sm md:text-lg"
      >
        Let&apos;s Connect <ArrowRight className="w-5 h-5" />
      </motion.a>

      {/* WhatsApp Button */}
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/972584280592"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition-colors text-sm md:text-lg"
      >
        <MessageCircle className="w-5 h-5" />
        WhatsApp
      </motion.a>
    </div>
  );
};

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-12">
          {/* Left Section */}
          <div className="w-full sm:w-96 h-96 relative order-first">
            <img
              src={Logo}
              alt="Talia Chriqui - Business Analyst"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            />
          </div>

          {/* Right Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 max-w-5xl flex flex-col items-start relative z-0"
          >
            <h1 className="relative text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Insight to Impact:{" "}
              <span className="relative text-gray-900">
                <motion.span
                  initial={{
                    color: "black", // Start with black text
                    backgroundPosition: "-100%", // Start gradient far to the left
                  }}
                  animate={{
                    color: "transparent", // Transition text to transparent
                    backgroundPosition: "200%", // Gradient sweeps fully to the right
                  }}
                  transition={{
                    duration: 4, // Duration of the animation
                    delay: 2, // Delay before animation starts
                    ease: "easeInOut", // Smooth start and end
                  }}
                  className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent"
                  style={{
                    backgroundSize: "200%", // Adjust background size to balance gradient stops
                  }}
                >
                  Empowering
                </motion.span>
              </span>{" "}
              Teams - Driving Growth
              <AnimatedUnderline color="israel" delay={1.3} width={"100%"} />
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              With 10 years of experience in data analytics and business
              operations, I empower businesses to optimize their systems,
              improve team efficiency, and achieve sustainable growth.
            </p>
            <ContactButton />

            {/* Flags */}
            <div className="flex items-center gap-4 mt-8">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg"
                alt="French Flag"
                className="w-8 h-5 rounded shadow-md"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
                alt="English Flag"
                className="w-8 h-5 rounded shadow-md"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Israel.svg"
                alt="Hebrew Flag"
                className="w-8 h-5 rounded shadow-md"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
