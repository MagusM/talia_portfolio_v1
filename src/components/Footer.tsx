import React from "react";
import { Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-4">
          <div className="flex items-start md:items-center justify-center gap-2 text-gray-600">
            Created with <Heart className="w-4 h-4 text-red-500" /> by{" "}
            <a
              href="https://simonmor.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              Simon Mor
            </a>
          </div>
          <div className="hidden md:block w-px h-4 bg-gray-200" />
          <div className="text-sm text-gray-500">{currentYear}</div>
        </div>
      </div>
    </footer>
  );
};
