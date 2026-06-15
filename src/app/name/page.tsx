"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SCRIPTURE } from "@/lib/config";
import { Heart, Send, Sparkles, Star, User } from "lucide-react";

interface Suggestion {
  name: string;
  suggester: string;
  timestamp: number;
}

const STORAGE_KEY = "aroyalpriesthood-name-suggestions";

function useSuggestions() {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setSuggestions(JSON.parse(stored));
    } catch {}
  }, []);

  const addSuggestion = useCallback((name: string, suggester: string) => {
    const entry: Suggestion = {
      name: name.trim(),
      suggester: suggester.trim() || "Anonymous",
      timestamp: Date.now()
    };
    setSuggestions(prev => {
      const next = [entry, ...prev];
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch {}
      return next;
    });
  }, []);

  const clearSuggestions = useCallback(() => {
    setSuggestions([]);
    try { localStorage.removeItem(STORAGE_KEY); } catch {}
  }, []);

  return { suggestions, addSuggestion, clearSuggestions };
}

export default function NamePage() {
  const { suggestions, addSuggestion, clearSuggestions } = useSuggestions();
  const [nameInput, setNameInput] = useState("");
  const [whoInput, setWhoInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nameInput.trim()) return;
    addSuggestion(nameInput, whoInput);
    setNameInput("");
    setWhoInput("");
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
            A name is being prayerfully chosen. Suggest a name for the little prince below.
          </motion.p>
        </div>
      </section>

      <section className="name-suggest-section section-band">
        <ScrollReveal>
          <div className="suggest-card">
            <Star size={24} />
            <h2>Suggest a Name</h2>
            <p>
              Drop a name suggestion for the baby. Your suggestion will appear below for
              everyone to see.
            </p>

            <form className="suggest-form" onSubmit={handleSubmit}>
              <div className="suggest-fields">
                <div className="suggest-field-row">
                  <User size={16} />
                  <input
                    className="suggest-input"
                    type="text"
                    placeholder="Your name (optional)"
                    value={whoInput}
                    onChange={e => setWhoInput(e.target.value)}
                    maxLength={40}
                    aria-label="Your name"
                  />
                </div>
                <div className="suggest-field-row">
                  <Sparkles size={16} />
                  <input
                    className="suggest-input"
                    type="text"
                    placeholder="Enter a name..."
                    value={nameInput}
                    onChange={e => setNameInput(e.target.value)}
                    maxLength={60}
                    aria-label="Name suggestion"
                  />
                </div>
              </div>
              <motion.button
                className="gold-button suggest-btn"
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                disabled={!nameInput.trim()}
              >
                <Send size={16} />
                <span>Suggest</span>
              </motion.button>
            </form>
          </div>
        </ScrollReveal>

        <AnimatePresence mode="popLayout">
          {suggestions.length > 0 && (
            <motion.div
              className="suggestions-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {suggestions.map((s, i) => (
                <motion.div
                  key={`${s.name}-${s.timestamp}`}
                  className="suggestion-card"
                  layout
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{
                    type: "spring",
                    damping: 16,
                    stiffness: 200,
                    delay: i === 0 ? 0 : Math.min(i * 0.03, 0.3)
                  }}
                >
                  <span className="suggestion-text">
                    {s.suggester !== "Anonymous" ? (
                      <>
                        <span className="suggestion-suggester">{s.suggester}</span>
                        {" suggested "}
                      </>
                    ) : null}
                    <span className="suggestion-name">{s.name}</span>
                  </span>
                </motion.div>
              ))}
              <motion.button
                className="suggest-clear"
                onClick={clearSuggestions}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Clear all suggestions"
              >
                Clear all
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        <ScrollReveal delay={0.3}>
          <div className="name-ceremony-card scripture-card">
            <Heart size={24} />
            <p className="coming-soon-text">{SCRIPTURE.name}</p>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
