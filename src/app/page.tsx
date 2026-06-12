"use client";

import Image from "next/image";
import {
  Baby,
  Gift,
  HeartHandshake,
  Menu,
  ScrollText,
  Sparkles,
  X
} from "lucide-react";
import { useEffect, useState } from "react";

const babyName = "Prince Zion Nathaniel";

const navItems = [
  { label: "HOME", href: "#home" },
  { label: "OUR TESTIMONY", href: "#testimony" },
  { label: "BABY'S NAME", href: "#name" },
  { label: "THE ROYAL TREASURY", href: "#treasury" }
];

const milestones = [
  {
    title: "The Sanctuary Encounter",
    text: "Met at Madonna University. He was serving in the Evangelism department; she was serving in the School of Impact (PSI). A divine setup."
  },
  {
    title: "The Direct Declaration",
    text: "Moving past the community zone, a bold phone call declared a prophetic future. She countered with a prayer: \"Let the will of God for this friendship be manifest.\" God answered."
  },
  {
    title: "Sovereign Alignment (September 17)",
    text: "Born on the exact same day. A beautiful, supernatural signature of God's perfect timing and design for their union."
  }
];

const gifts = [
  {
    icon: Baby,
    title: "Little Prince Essentials",
    description: "Thoughtful diapers, care items, blankets, and everyday treasures for his first royal season.",
    action: "Send Essentials"
  },
  {
    icon: Gift,
    title: "Royal Wardrobe",
    description: "Soft outfits, heirloom pieces, and elegant babywear for pictures, dedication, and cozy days.",
    action: "Bless His Closet"
  },
  {
    icon: HeartHandshake,
    title: "Seed of Blessing",
    description: "A love offering toward his care, future, and the beautiful new rhythms of family life.",
    action: "Give a Seed"
  }
];

function YouTubeFrame({ title, videoId }: { title: string; videoId: string }) {
  return (
    <div className="video-shell">
      <iframe
        title={title}
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.14 }
    );

    document.querySelectorAll(".reveal").forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="AROYALPRIESTHOOD home">
          <Sparkles aria-hidden="true" />
          <span>AROYALPRIESTHOOD</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(item => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(open => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </header>

      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`}>
        <nav aria-label="Mobile navigation">
          {navItems.map(item => (
            <a href={item.href} key={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <main>
        <section id="home" className="hero section-band">
          <div className="hero-media" aria-hidden="true">
            <Image
              src="/royal-priesthood-preview.png"
              alt=""
              priority
              fill
              sizes="(max-width: 760px) 100vw, 48vw"
            />
          </div>

          <div className="hero-content reveal">
            <p className="eyebrow">The Royal Registry</p>
            <h1>A Royal Priesthood. A Chosen Generation. Our Prince is Here.</h1>
            <p className="hero-copy">
              With hearts full of wonder and thanksgiving, we welcome the son God has entrusted to
              us: a sign of covenant joy, answered prayers, and generational promise.
            </p>
          </div>

          <div className="hero-video reveal">
            <YouTubeFrame title="Gender Reveal Video" videoId="Lw7lLZIszRQ" />
          </div>
        </section>

        <section id="testimony" className="section-band testimony">
          <div className="section-heading reveal">
            <p className="eyebrow">Our Testimony</p>
            <h2>The Power Couple Story</h2>
            <p>
              Before the announcement, there was a journey marked by obedience, courage, prayer,
              and sovereign timing.
            </p>
          </div>

          <div className="timeline">
            {milestones.map((milestone, index) => (
              <article className="milestone reveal" key={milestone.title}>
                <span className="milestone-number">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{milestone.title}</h3>
                  <p>{milestone.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="testimony-video reveal">
            <YouTubeFrame title="How We Met Video" videoId="ImlBCIp6mSw" />
          </div>
        </section>

        <section id="name" className="section-band name-section">
          <div className="name-card reveal">
            <p className="eyebrow">The Prophetic Reveal</p>
            <h2>Baby&apos;s Name</h2>
            <button className="gold-button" onClick={() => setRevealed(true)}>
              <Sparkles aria-hidden="true" />
              <span>Reveal the Prince&apos;s Name</span>
            </button>

            <div className={`name-reveal ${revealed ? "is-revealed" : ""}`} aria-live="polite">
              <div className="confetti" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <p className="script-name">{babyName}</p>
              <p>
                Zion speaks of the dwelling place of God and a people set apart for His glory.
                Nathaniel means gift of God: a testimony that this son is received with reverence,
                joy, and prophetic gratitude. Together, his name declares belonging, favor, and
                kingdom purpose.
              </p>
            </div>
          </div>
        </section>

        <section id="treasury" className="section-band treasury">
          <div className="section-heading reveal">
            <p className="eyebrow">The Royal Treasury</p>
            <h2>Gifts</h2>
            <p>
              For loved ones asking how to celebrate with the family, here are three thoughtful ways
              to sow into this new chapter.
            </p>
          </div>

          <div className="gift-grid">
            {gifts.map(gift => {
              const Icon = gift.icon;
              return (
                <article className="gift-card reveal" key={gift.title}>
                  <Icon aria-hidden="true" />
                  <h3>{gift.title}</h3>
                  <p>{gift.description}</p>
                  <a href="mailto:hello@aroyalpriesthood.com" className="outline-button">
                    {gift.action}
                  </a>
                </article>
              );
            })}
          </div>
        </section>
      </main>

      <footer>
        <ScrollText aria-hidden="true" />
        <p>Declared with love, faith, and royal gratitude.</p>
      </footer>
    </>
  );
}
