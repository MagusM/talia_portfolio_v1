import React from "react";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { Testimonials } from "../components/Testimonials";
import { Contact } from "../components/Contact";
import { TechnologyStrip } from "../components/TechnologiesStrip";
import { Timeline } from "../components/Timeline";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <TechnologyStrip />
      <Services />
      <Timeline />
      <Testimonials />
      <Contact />
    </>
  );
};
