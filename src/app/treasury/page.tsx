"use client";

import { motion } from "framer-motion";
import { Baby, Gift, HeartHandshake, Mail, Landmark } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CONTACT, GIFTS, TREASURY_MESSAGE, BANK_ACCOUNTS } from "@/lib/config";

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
            For loved ones asking how to celebrate with the family.
          </motion.p>
        </div>
      </section>

      <section className="treasury-message section-band">
        <ScrollReveal>
          <div className="gratitude-card">
            <HeartHandshake size={24} />
            <p>{TREASURY_MESSAGE.gratitude}</p>
            <p>{TREASURY_MESSAGE.kindness}</p>
            <p>{TREASURY_MESSAGE.invite}</p>
          </div>
        </ScrollReveal>
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

      <section className="bank-section section-band">
        <ScrollReveal>
          <h2 className="section-title-centered">Bank Account Details</h2>
        </ScrollReveal>

        <div className="bank-grid">
          {BANK_ACCOUNTS.map((acc, i) => (
            <ScrollReveal key={acc.currency} delay={i * 0.15}>
              <motion.div
                className="bank-card"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", damping: 20 }}
              >
                <div className="bank-header">
                  <Landmark size={20} />
                  <span className="bank-currency">{acc.currency}</span>
                </div>
                <div className="bank-details">
                  <div className="bank-row">
                    <span className="bank-label">Account Name</span>
                    <span className="bank-value">{acc.name}</span>
                  </div>
                  <div className="bank-row">
                    <span className="bank-label">Bank</span>
                    <span className="bank-value">{acc.bank}</span>
                  </div>
                  <div className="bank-row">
                    <span className="bank-label">Account Number</span>
                    <span className="bank-value mono">{acc.accountNumber}</span>
                  </div>
                  {"sortCode" in acc && (
                    <div className="bank-row">
                      <span className="bank-label">Sort Code</span>
                      <span className="bank-value mono">{acc.sortCode}</span>
                    </div>
                  )}
                  {"iban" in acc && (
                    <div className="bank-row">
                      <span className="bank-label">IBAN</span>
                      <span className="bank-value mono">{acc.iban}</span>
                    </div>
                  )}
                  {"bic" in acc && (
                    <div className="bank-row">
                      <span className="bank-label">BIC</span>
                      <span className="bank-value mono">{acc.bic}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="treasury-message section-band">
        <ScrollReveal>
          <div className="gratitude-card closing">
            <p>{TREASURY_MESSAGE.closing}</p>
            <p>{TREASURY_MESSAGE.blessing}</p>
            <p className="signature">{TREASURY_MESSAGE.signature}</p>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
