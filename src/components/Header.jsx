// src/components/Header.jsx
import React from "react";

const PHONE = "+918433917535";
const WHATSAPP = "https://wa.me/918433917535";

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-black border-b border-yellow-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between h-16">

          {/* ===== LOGO ===== */}
          <a href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-yellow-400 flex items-center justify-center shadow-[0_0_20px_rgba(250,204,21,0.6)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-black fill-current"
              >
                <path d="M3 11l1.5-3.5A2 2 0 0 1 6.3 6h11.4a2 2 0 0 1 1.8 1.5L21 11v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H6v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-5z" />
              </svg>
            </div>

            <div>
              <div className="text-yellow-400 font-bold text-lg">
                Book Cab Today
              </div>
              <div className="text-yellow-300/60 text-xs">
                Mumbai Cab Service
              </div>
            </div>
          </a>

          {/* ===== NAV LINKS ===== */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-yellow-300/80 font-medium">
            <a href="/" className="hover:text-yellow-400 transition">
              Home
            </a>
            <a href="/privacy-policy" className="hover:text-yellow-400 transition">
              Privacy
            </a>
            <a href="/terms-and-conditions" className="hover:text-yellow-400 transition">
              Terms
            </a>
            <a href="/refund-policy" className="hover:text-yellow-400 transition">
              Refund
            </a>
          </nav>

          {/* ===== RIGHT SIDE ===== */}
          <div className="flex items-center gap-4">

            {/* Phone */}
            <a
              href={`tel:${PHONE}`}
              className="hidden sm:inline-flex px-4 py-2 rounded-full border border-yellow-400/40 text-yellow-300 text-sm hover:bg-yellow-400/10 transition"
            >
              {PHONE}
            </a>

            {/* WhatsApp */}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-full bg-yellow-400 text-black text-sm font-semibold hover:bg-yellow-300 shadow-[0_8px_25px_rgba(250,204,21,0.6)] transition"
            >
              WhatsApp
            </a>
          </div>

        </div>
      </div>
    </header>
  );
}