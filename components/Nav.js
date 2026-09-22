"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { UNITS } from "@/lib/data";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [unitsOpen, setUnitsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setUnitsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function closeAll() {
    setUnitsOpen(false);
    setOpen(false);
  }

  return (
    <header className="site-nav">
      <div className="nav-inner">
        <Link href="/" className="brand" onClick={closeAll}>
          {/* <svg
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            style={{ color: "var(--gold-500)" }}
          >
            <path d="M35 75 Q30 55 40 42 Q35 30 42 22 Q46 30 50 26 Q54 30 58 24 Q62 30 58 22 Q66 28 62 40 Q75 48 68 62 L58 78 Q46 82 35 75 Z" />
            <circle cx="55" cy="42" r="2.5" fill="var(--gold-500)" stroke="none" />
          </svg> */}
          <span className="brand-text">
            <span className="name">Tsilatemariam</span>
            <span className="sub">INTEGRATED AGRIBUSINESS</span>
          </span>
        </Link>

        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>

        <nav className={`links ${open ? "open" : ""}`}>
          <Link href="/about" onClick={closeAll}>About</Link>

          <div className={`dropdown ${unitsOpen ? "open" : ""}`} ref={dropdownRef}>
            <button type="button" onClick={() => setUnitsOpen((v) => !v)}>
              Businesses ▾
            </button>
            <div className="dropdown-menu">
              {UNITS.map((u) => (
                <Link key={u.id} href={`/units/${u.id}`} onClick={closeAll}>
                  {u.name}
                </Link>
              ))}
            </div>
          </div>

          <div className={`dropdown ${open ? "impact-open" : ""}`}>
            <Link href="/vision" onClick={closeAll}>Impact</Link>
          </div>

          <Link href="/contact" onClick={closeAll}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}
