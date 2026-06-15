"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SCRIPTURE } from "@/lib/config";
import { Heart, MessageCircle } from "lucide-react";

export default function NamePage() {
  return (
    <>
      <section className="page-hero name-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-content">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            The Prophetic Reveal
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Baby&apos;s Name
          </motion.h1>
          <motion.p
            className="page-hero-sub"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            A name is being prayerfully chosen. Stay tuned for the big reveal.
          </motion.p>
        </div>
      </section>

      <section className="name-reveal-section section-band">
        <ScrollReveal>
          <div className="name-ceremony-card">
            <motion.div
              className="name-prompt"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Heart size={40} />
              <h2 className="coming-soon-title">Coming Soon</h2>
              <p className="coming-soon-text">
                {SCRIPTURE.name}
              </p>
              <a href="mailto:hello@aroyalpriesthood.com" className="gold-button">
                <MessageCircle size={18} />
                <span>Suggest a Name</span>
              </a>
            </motion.div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
