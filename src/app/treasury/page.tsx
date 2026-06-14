"use client";

import { motion } from "framer-motion";
import { Baby, Gift, HeartHandshake, Mail } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CONTACT, GIFTS } from "@/lib/config";

const giftIcons = [Baby, Gift, HeartHandshake];

export default function TreasuryPage() {
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
            The Royal Treasury
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Gifts
          </motion.h1>
          <motion.p
            className="page-hero-sub"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            For loved ones asking how to celebrate with the family, here are three thoughtful ways
            to sow into this new chapter.
          </motion.p>
        </div>
      </section>

      <section className="treasury-section section-band">
        <div className="gift-grid-page">
          {GIFTS.map((gift, i) => {
            const Icon = giftIcons[i];
            return (
              <ScrollReveal key={gift.title} delay={i * 0.15}>
                <motion.article
                  className="gift-card-page"
                  whileHover={{ y: -8, boxShadow: "0 24px 70px rgba(0,0,0,0.45)" }}
                  transition={{ type: "spring", damping: 18 }}
                >
                  <div className="gift-card-icon-wrap">
                    <Icon size={32} />
                  </div>
                  <h3>{gift.title}</h3>
                  <p>{gift.description}</p>
                  <motion.a
                    href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(gift.title)}`}
                    className="outline-button"
                    whileHover={{ scale: 1.03, backgroundColor: "rgba(212,175,55,0.12)" }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Mail size={16} />
                    <span>{gift.action}</span>
                  </motion.a>
                </motion.article>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      <section className="treasury-message section-band">
        <ScrollReveal>
          <div className="message-card">
            <HeartHandshake size={28} />
            <h2>Leave a Blessing</h2>
            <p>
              Want to send a personal message to the family? We&apos;d love to hear from you.
            </p>
            <a href={`mailto:${CONTACT.email}`} className="gold-button">
              <Mail size={18} />
              <span>Send a Message</span>
            </a>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
