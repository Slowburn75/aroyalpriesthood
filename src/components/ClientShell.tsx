"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ParticleField } from "./ParticleField";

export function ClientShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <ParticleField />
      <Header />
      <motion.main
        key={pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {children}
      </motion.main>
      <Footer />
    </>
  );
}
