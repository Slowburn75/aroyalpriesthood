"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Share2 } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { BABY, NAME_MEANINGS, SCRIPTURE } from "@/lib/config";

const LETTERS = BABY.name.split("");

function seeded(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function ConfettiPieces({ count }: { count: number }) {
  const pieces = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        y: 300 + seeded(i * 7 + 1) * 200,
        x: (seeded(i * 13 + 3) - 0.5) * 200,
        rotate: seeded(i * 19 + 5) * 720,
        duration: 1.5 + seeded(i * 23 + 7) * 1.5,
        background: ["#d4af37", "#f3e5ab", "#fdfbf7", "#c9a032"][i % 4],
        left: `${5 + i * 4.5}%`
      })),
    [count]
  );

  return (
    <div className="name-confetti" aria-hidden="true">
      {pieces.map((p, i) => (
        <motion.span
          key={i}
          className="confetti-piece"
          initial={{ y: -20, x: 0, rotate: 0, opacity: 1 }}
          animate={{ y: p.y, x: p.x, rotate: p.rotate, opacity: 0 }}
          transition={{ duration: p.duration, delay: i * 0.05, ease: "easeIn" }}
          style={{ background: p.background, left: p.left }}
        />
      ))}
    </div>
  );
}

export default function NamePage() {
  const [revealed, setRevealed] = useState(false);
  const [lettersVisible, setLettersVisible] = useState(false);

  const handleReveal = () => {
    setRevealed(true);
    setTimeout(() => setLettersVisible(true), 400);
  };

  const handleShare = async () => {
    const text = `Meet ${BABY.name}! Watch the name reveal at ${window.location.href}`;
    if (navigator.share) {
      await navigator.share({ title: BABY.name, text, url: window.location.href });
    } else {
      await navigator.clipboard.writeText(text);
    }
  };

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
            A name chosen before time — click to reveal the prince&apos;s royal title.
          </motion.p>
        </div>
      </section>

      <section className="name-reveal-section section-band">
        <ScrollReveal>
          <div className="name-ceremony-card">
            {!revealed ? (
              <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="name-prompt"
              >
                <motion.div
                  animate={{ boxShadow: ["0 0 0 0 rgba(212,175,55,0.4)", "0 0 0 20px rgba(212,175,55,0)"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="name-prompt-glow"
                />
                <Sparkles size={28} />
                <p className="eyebrow">The moment you&apos;ve been waiting for</p>
                <motion.button
                  className="gold-button name-reveal-btn"
                  onClick={handleReveal}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Sparkles size={20} />
                  <span>Reveal the Prince&apos;s Name</span>
                </motion.button>
              </motion.div>
            ) : (
              <motion.div
                className="name-display"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <ConfettiPieces count={20} />

                <AnimatePresence>
                  {lettersVisible && (
                    <motion.div
                      className="name-letters"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      {LETTERS.map((letter, i) => (
                        <motion.span
                          key={i}
                          className="name-letter"
                          initial={{ opacity: 0, y: -60, rotate: -30 }}
                          animate={{ opacity: 1, y: 0, rotate: 0 }}
                          transition={{ delay: i * 0.06, type: "spring", damping: 10, stiffness: 80 }}
                        >
                          {letter === " " ? "\u00A0" : letter}
                        </motion.span>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                <AnimatePresence>
                  {lettersVisible && (
                    <motion.div
                      className="name-meaning-section"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.6 }}
                    >
                      <p className="scripture-verse">{SCRIPTURE.name}</p>

                      <div className="meaning-grid">
                        {NAME_MEANINGS.map((item, i) => (
                          <motion.div
                            key={item.name}
                            className="meaning-card"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 + i * 0.15, duration: 0.5 }}
                          >
                            <h3>{item.name}</h3>
                            <p className="meaning-label">{item.meaning}</p>
                            <p className="meaning-text">{item.description}</p>
                            <p className="meaning-scripture">{item.scripture}</p>
                          </motion.div>
                        ))}
                      </div>

                      <motion.button
                        className="share-button"
                        onClick={handleShare}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Share2 size={18} />
                        <span>Share the Name</span>
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
