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
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
    I hold a degree in <span className="font-medium">Computer Science Engineering</span> and have a strong passion for <span className="font-medium">programming</span>. My journey in tech has led me to specialize in <span className="font-medium">full-stack web development</span> with expertise in the <span className="font-medium">MERN stack (MongoDB, Express.js, React, Node.js)</span>. I have also gained proficiency in <span className="font-medium">Next.js</span>, <span className="font-medium">TypeScript</span>, and <span className="font-medium">Prisma</span>, which further complement my development skills.
  </p>
  <p className="mb-3">
    My favorite aspect of programming is tackling complex problems, which has driven me to solve <span className="font-medium">over 600+ Data Structures and Algorithms (DSA) challenges</span> on platforms like <span className="font-medium">LeetCode</span> and <span className="font-medium">CodeStudio</span>, among others.
  </p>
  <p className="mb-3">
    In addition to problem-solving, I continuously seek to enhance my technical skill set, exploring new technologies and improving my workflow. Currently, I am actively looking for <span className="font-medium">internship</span> or <span className="font-medium">contract opportunities</span> as a <span className="font-medium">software developer</span>, where I can apply my technical expertise to real-world projects and contribute to impactful solutions.
  </p>
    </motion.section>
  );
}
