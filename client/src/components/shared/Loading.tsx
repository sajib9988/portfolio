"use client";

import { motion } from "motion/react";

export default function Loading() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-background">
      <motion.div
        className="flex gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
      >
        <motion.div
          className="h-4 w-4 rounded-full bg-cyan-600"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
        <motion.div
          className="h-4 w-4 rounded-full bg-cyan-600"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
        />
        <motion.div
          className="h-4 w-4 rounded-full bg-cyan-600"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
        />
      </motion.div>
    </div>
  );
}
