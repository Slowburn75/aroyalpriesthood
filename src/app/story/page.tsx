"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { YouTubeFrame } from "@/components/VideoEmbed";
import { MILESTONES } from "@/lib/config";
import { BookHeart, Heart } from "lucide-react";

export default function StoryPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-content">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Our Testimony
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            The Power <span className="strike">Couple</span> Family Story
          </motion.h1>
          <motion.p
            className="page-hero-sub"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Before the announcement, there was a journey marked by obedience, courage, prayer, and
            sovereign timing. Every step was written by His hand.
          </motion.p>
        </div>
      </section>

      <section className="timeline-section section-band">
        <div className="timeline-track">
          {MILESTONES.map((m, i) => (
            <ScrollReveal key={m.title} delay={i * 0.15}>
              <div className="timeline-block">
                <div className="timeline-marker">
                  <span>{m.number}</span>
                </div>
                <motion.article
                  className="timeline-card"
                  whileHover={{ y: -6, boxShadow: "0 20px 60px rgba(0,0,0,0.4)" }}
                  transition={{ type: "spring", damping: 20 }}
                >
                  <div className="timeline-card-header">
                    <BookHeart size={20} />
                    <h3>{m.title}</h3>
                  </div>
                  <p className="timeline-subtitle">{m.subtitle}</p>
                  <p className="timeline-text">{m.text}</p>
                  <details className="timeline-details">
                    <summary>Read more</summary>
                    <p>{m.detail}</p>
                  </details>
                </motion.article>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="story-video-section section-band">
        <ScrollReveal>
          <div className="section-heading centered">
            <p className="eyebrow">How We Met</p>
            <h2>The Beginning</h2>
            <p>Watch their love story unfold.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="story-video">
            <YouTubeFrame title="How We Met Video" videoId="ImlBCIp6mSw" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="story-quote">
            <Heart size={18} />
            <p>
              &ldquo;What God has joined together, let no man separate. From a divine encounter to a
              shared birthday — His signature is on every page of this story.&rdquo;
            </p>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
