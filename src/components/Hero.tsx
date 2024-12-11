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
              From cold leads to{" "}
              <span className="relative inline-block">
                {/* Outer Flame Layer */}
                <motion.div
                  initial={{
                    scale: 1.2,
                    opacity: 0.2,
                  }}
                  animate={{
                    scale: [1.1, 1.3, 1.1], // Flickering motion
                    translateY: [0, -10, 0], // Slight rising motion
                    opacity: [0.5, 0.7, 0.6], // Flickering transparency
                  }}
                  transition={{
                    duration: 1.2, // Smooth animation duration
                    repeat: Infinity, // Continuous loop
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 -z-10 bg-gradient-to-t from-red-600 via-orange-500 to-yellow-400 blur-2xl"
                  style={{
                    borderRadius: "50%",
                    filter: "blur(30px)", // Larger blur for outer flame
                  }}
                ></motion.div>

                {/* Middle Flame Layer */}
                <motion.div
                  initial={{
                    scale: 1,
                    opacity: 0.7,
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    translateY: [0, -8, 0], // Slightly less movement than the outer layer
                    opacity: [0.6, 0.8, 0.7],
                  }}
                  transition={{
                    duration: 0.9,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 -z-10 bg-gradient-to-t from-orange-500 via-yellow-400 to-white blur-lg"
                  style={{
                    borderRadius: "50%",
                    filter: "blur(20px)", // Medium blur for middle flame
                  }}
                ></motion.div>

                {/* Inner Flame Layer */}
                <motion.div
                  initial={{
                    scale: 0.8,
                    opacity: 0.8,
                  }}
                  animate={{
                    scale: [0.8, 1, 0.8],
                    translateY: [0, -6, 0], // Subtle motion for the inner layer
                    opacity: [0.7, 0.9, 0.8],
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 -z-10 bg-gradient-to-t from-yellow-400 via-white to-transparent blur-md"
                  style={{
                    borderRadius: "50%",
                    filter: "blur(15px)", // Smallest blur for inner flame
                  }}
                ></motion.div>

                {/* Text */}
                <motion.span
                  initial={{
                    opacity: 0.9,
                  }}
                  animate={{
                    opacity: [0.8, 1, 0.8], // Subtle flicker for glowing effect
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "mirror",
                  }}
                  className="relative bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent"
                >
                  Hot
                </motion.span>
              </span>{" "}
              deals
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
