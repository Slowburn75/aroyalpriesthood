"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GalleryGrid, Lightbox } from "@/components/gallery";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function GalleryPage() {
  const [lightboxId, setLightboxId] = useState<number | null>(null);

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
            Moments to Treasure
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Gallery
          </motion.h1>
          <motion.p
            className="page-hero-sub"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            A collection of sacred moments from this journey of faith and love.
          </motion.p>
        </div>
      </section>

      <section className="gallery-section section-band">
        <ScrollReveal>
          <GalleryGrid onImageClick={id => setLightboxId(id)} />
        </ScrollReveal>
      </section>

      {lightboxId !== null && <Lightbox key={lightboxId} imageId={lightboxId} onClose={() => setLightboxId(null)} />}
    </>
  );
}
