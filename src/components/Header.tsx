"use client";

import { Crown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_ITEMS } from "@/lib/config";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <Link className="brand" href="/" onClick={closeMenu} aria-label="AROYALPRIESTHOOD home">
          <Crown aria-hidden="true" />
          <span>AROYALPRIESTHOOD</span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {NAV_ITEMS.map(item => (
            <Link
              href={item.href}
              key={item.href}
              className={pathname === item.href ? "nav-active" : ""}
            >
              {item.label}
            </Link>
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
          {NAV_ITEMS.map(item => (
            <Link
              href={item.href}
              key={item.href}
              onClick={closeMenu}
              className={pathname === item.href ? "nav-active" : ""}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
