"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Heart, BookOpen, Camera, Gift } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { YouTubeFrame } from "@/components/VideoEmbed";
import { SCRIPTURE } from "@/lib/config";

const sections = [
    { icon: BookOpen, label: "Our Story", href: "/story", color: "#d4af37" },
    { icon: Heart, label: "His Name", href: "/name", color: "#f3e5ab" },
    { icon: Camera, label: "Gallery", href: "/gallery", color: "#d4af37" },
    { icon: Gift, label: "Treasury", href: "/treasury", color: "#f3e5ab" }
];

export default function Home() {
    return (
        <>
            <section className="hero-page">
                <div className="hero-bg" aria-hidden="true">
                    <Image
                        src="/royal-priesthood-preview.png"
                        alt=""
                        priority
                        fill
                        sizes="100vw"
                        className="hero-bg-img"
                    />
                    <div className="hero-bg-gradient" />
                </div>

                <div className="hero-container">
                    <motion.div
                        className="hero-main"
                        initial={{ opacity: 0, x: -28 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.75, ease: "easeOut" }}
                    >
                        <motion.div
                            className="hero-crown"
                            initial={{ scale: 0, rotate: -120 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{
                                type: "spring",
                                damping: 14,
                                stiffness: 120,
                                delay: 0.2,
                            }}
                        >
                            <CrownIcon />
                        </motion.div>

                        <motion.p
                            className="eyebrow"
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.35, duration: 0.5 }}
                        >
                            The Royal Registry
                        </motion.p>

                        <motion.h1
                            className="hero-title"
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.48, duration: 0.65 }}
                        >
                            A Royal Priesthood.
                            <br />
                            <span>A Chosen Generation.</span>
                            <br />
                            Our Prince is Here.
                        </motion.h1>

                        <motion.p
                            className="hero-subtitle"
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.65, duration: 0.55 }}
                        >
                            With hearts full of wonder and thanksgiving, we welcome the son God has
                            entrusted to us — a sign of covenant joy, answered prayers, and
                            generational promise.
                        </motion.p>

                        <motion.div
                            className="hero-quote"
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.82, duration: 0.55 }}
                        >
                            <span className="hero-quote-mark">&ldquo;</span>
                            <p>{SCRIPTURE.hero}</p>
                        </motion.div>

                        <motion.div
                            className="hero-scroll"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.05, duration: 0.5 }}
                        >
                            <span>Explore</span>
                            <ChevronDown size={18} className="scroll-arrow" />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <section className="home-video-section section-band">
                <ScrollReveal>
                    <div className="section-heading">
                        <p className="eyebrow">The Revelation</p>
                        <h2>It&apos;s a Boy</h2>
                        <p>Watch the moment we discovered our prince was on his way.</p>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={0.15}>
                    <div className="home-video">
                        <YouTubeFrame title="Gender Reveal Video" videoId="Lw7lLZIszRQ" />
                    </div>
                </ScrollReveal>
            </section>

            <section className="home-explore section-band">
                <ScrollReveal>
                    <div className="section-heading centered">
                        <p className="eyebrow">Welcome to the Celebration</p>
                        <h2>Explore the Story</h2>
                        <p>Every detail of this journey, crafted with love and gratitude.</p>
                    </div>
                </ScrollReveal>

                <div className="explore-grid">
                    {sections.map((item, i) => (
                        <ScrollReveal key={item.href} delay={i * 0.1}>
                            <Link href={item.href} className="explore-card">
                                <div className="explore-card-icon" style={{ borderColor: item.color }}>
                                    <item.icon size={28} />
                                </div>
                                <h3>{item.label}</h3>
                                <span className="explore-arrow">Explore &rarr;</span>
                            </Link>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            <section className="home-blessing section-band">
                <ScrollReveal>
                    <div className="blessing-card">
                        <Heart size={24} />
                        <h2>Bless This Family</h2>
                        <p>
                            If you&apos;d like to send a gift or leave a message for the family,
                            visit the Royal Treasury.
                        </p>
                        <Link href="/treasury" className="gold-button">
                            <Gift size={18} />
                            <span>The Royal Treasury</span>
                        </Link>
                    </div>
                </ScrollReveal>
            </section>
        </>
    );
}

function CrownIcon() {
    return (
        <svg width="48" height="36" viewBox="0 0 48 36" fill="none" aria-hidden="true">
            <path
                d="M24 0l6 12 12-4-8 16H2L0 8l12 4L24 0z"
                fill="url(#crown-grad)"
            />
            <path
                d="M10 24l-2 8h32l-2-8"
                stroke="#d4af37"
                strokeWidth="1.5"
                fill="none"
            />
            <defs>
                <linearGradient id="crown-grad" x1="0" y1="0" x2="48" y2="36">
                    <stop offset="0%" stopColor="#f3e5ab" />
                    <stop offset="100%" stopColor="#d4af37" />
                </linearGradient>
            </defs>
        </svg>
    );
}
