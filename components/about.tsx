"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        After graduating in{" "}
        <span className="font-medium">Information Technology</span> from BTEC
        FPT, I began my programming career with various experiences. I have
        worked in roles such as{" "}
        <span className="font-medium">
          Front-end developer, and SAP ABAP intern
        </span>
        . <span className="italic">I enjoy</span> analyzing and building user
        interfaces.
      </p>

      <p className="mb-3">
        I have experience with multiple languages and technologies like{" "}
        <span className="font-medium">
          HTML, CSS, JavaScript, Java, and SAP ABAP
        </span>
        . I also participated in personal projects, including{" "}
        <span className="font-medium">Vegefoods Website</span> and{" "}
        <span className="font-medium">The Band Website</span>, with a focus on
        optimizing user experience and implementing management features.
      </p>

      <p>
        <span className="italic">When I’m not coding</span>, I enjoy listening
        to music, watching movies, and reading books. I also love{" "}
        <span className="font-medium">learning new things</span>, especially
        about technology.
      </p>
    </motion.section>
  );
}
