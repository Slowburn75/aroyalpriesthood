export const SITE = {
  title: "AROYALPRIESTHOOD | A Royal Priesthood",
  description:
    "A premium Christian baby announcement celebrating the arrival of a beloved prince, wrapped in testimony, prophecy, and royal gratitude.",
  url: "https://aroyalpriesthood.com",
  name: "AROYALPRIESTHOOD"
} as const;

export const CONTACT = {
  email: "hello@aroyalpriesthood.com"
} as const;

export const BABY = {
  name: "Prince Zion Nathaniel",
  nickName: "Prince Zion"
} as const;

export const NAV_ITEMS = [
  { label: "HOME", href: "/" },
  { label: "OUR STORY", href: "/story" },
  { label: "HIS NAME", href: "/name" },
  { label: "GALLERY", href: "/gallery" },
  { label: "TREASURY", href: "/treasury" }
] as const;

export const MILESTONES = [
  {
    number: "01",
    title: "The Sanctuary Encounter",
    subtitle: "Divine Setup at Madonna University",
    text: "Met at Madonna University. He was serving in the Evangelism department; she was serving in the School of Impact (PSI). A divine setup orchestrated by the King.",
    detail:
      "Their paths crossed in the halls of faith, each devoted to a different ministry yet united by the same Spirit. What began as a passing greeting would unfold into a kingdom assignment."
  },
  {
    number: "02",
    title: "The Direct Declaration",
    subtitle: "A Prophetic Phone Call",
    text: "Moving past the community zone, a bold phone call declared a prophetic future. She countered with a prayer: \"Let the will of God for this friendship be manifest.\" God answered.",
    detail:
      "Stepping out in faith, he picked up the phone and spoke what his heart knew. Her response was not romance but reverence — a prayer that put their story in God's hands. And He moved."
  },
  {
    number: "03",
    title: "Sovereign Alignment",
    subtitle: "September 17 — Same Birthday",
    text: "Born on the exact same day. A beautiful, supernatural signature of God's perfect timing and design for their union.",
    detail:
      "What are the odds? Two hearts, born on the same day, brought together by the same God. A detail too precise to be coincidence — it was a stamp of divine approval."
  }
] as const;

export const NAME_MEANINGS = [
  {
    name: "Zion",
    meaning: "The Dwelling Place of God",
    scripture: "Psalm 132:13 — 'For the Lord has chosen Zion; He has desired it for His dwelling place.'",
    description:
      "Zion speaks of belonging, of being set apart for God's glory. A mountain that cannot be moved, a people established by His hand."
  },
  {
    name: "Nathaniel",
    meaning: "Gift of God",
    scripture: "John 1:47 — 'Behold, an Israelite indeed, in whom there is no deceit!'",
    description:
      "Nathaniel means gift of God — a testimony that this son is received with reverence, joy, and prophetic gratitude."
  }
] as const;

export const SCRIPTURE = {
  hero: "1 Peter 2:9 — 'But you are a chosen generation, a royal priesthood, a holy nation, His own special people...'",
  name: "Psalm 127:3 — 'Behold, children are a heritage from the Lord, the fruit of the womb is a reward.'"
} as const;

export const GIFTS = [
  {
    title: "Little Prince Essentials",
    description: "Thoughtful diapers, care items, blankets, and everyday treasures for his first royal season.",
    action: "Send Essentials",
    icon: "baby"
  },
  {
    title: "Royal Wardrobe",
    description: "Soft outfits, heirloom pieces, and elegant babywear for pictures, dedication, and cozy days.",
    action: "Bless His Closet",
    icon: "gift"
  },
  {
    title: "Seed of Blessing",
    description: "A love offering toward his care, future, and the beautiful new rhythms of family life.",
    action: "Give a Seed",
    icon: "heart"
  }
] as const;

export interface GalleryItem {
  id: number;
  src: string;
  category: string;
  caption: string;
  color: string;
  colSpan?: 1 | 2 | 4;
  rowSpan?: 1 | 2;
}

export const GALLERY_ITEMS: readonly GalleryItem[] = [
  { id: 1, src: "/images/IMG_2403.avif", category: "maternity", caption: "Carried in Love", color: "#122955", colSpan: 2 },
  { id: 2, src: "/images/IMG_2404.avif", category: "maternity", caption: "Glowing with Grace", color: "#16336B" },
  { id: 3, src: "/images/IMG_2405.avif", category: "maternity", caption: "A Mother's Joy", color: "#0D2355" },
  { id: 4, src: "/images/IMG_2406.avif", category: "maternity", caption: "Sacred Waiting", color: "#1A3A6B" },
  { id: 5, src: "/images/IMG_2407.avif", category: "maternity", caption: "Radiant Hope", color: "#2A4A7F", colSpan: 2 },
  { id: 6, src: "/images/IMG_2408.avif", category: "maternity", caption: "Quiet Anticipation", color: "#1F3D73" },
  { id: 7, src: "/images/IMG_2409.avif", category: "maternity", caption: "A Precious Time", color: "#0B1B3D", colSpan: 2, rowSpan: 2 },
  { id: 8, src: "/images/IMG_2410.avif", category: "newborn", caption: "Welcome, Little Prince", color: "#1A3A6B", colSpan: 2 },
  { id: 9, src: "/images/IMG_2411.avif", category: "newborn", caption: "Tiny Hands, Big Promise", color: "#0D2355", colSpan: 2 },
  { id: 10, src: "/images/IMG_2412.avif", category: "newborn", caption: "His First Days", color: "#122955" },
  { id: 11, src: "/images/IMG_2413.avif", category: "newborn", caption: "Perfect Peace", color: "#1F3D73", colSpan: 2 },
  { id: 12, src: "/images/IMG_2414.avif", category: "newborn", caption: "Fresh from Heaven", color: "#2A4A7F" },
  { id: 13, src: "/images/IMG_2772.avif", category: "family", caption: "A Royal Family", color: "#0B1B3D", colSpan: 2 },
  { id: 14, src: "/images/IMG_2877.avif", category: "family", caption: "Covenant of Love", color: "#122955" },
  { id: 15, src: "/images/IMG_2901.avif", category: "celebration", caption: "Joy Unspeakable", color: "#1A3A6B" },
  { id: 16, src: "/images/IMG_2921.avif", category: "celebration", caption: "Thanksgiving", color: "#0D2355" },
  { id: 17, src: "/images/IMG_2922.avif", category: "celebration", caption: "Celebration", color: "#16336B" },
  { id: 18, src: "/images/IMG_2925.avif", category: "celebration", caption: "Blessings Overflow", color: "#1F3D73" },
  { id: 19, src: "/images/IMG_2927.avif", category: "celebration", caption: "Forever Grateful", color: "#2A4A7F" }
] as const;
