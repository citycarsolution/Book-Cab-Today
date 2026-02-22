// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

const PHONE = "+918433917535";
const WHATSAPP = "https://wa.me/918433917535";

export default function Footer() {
  return (
    <>
      {/* ================= NORMAL FOOTER ================= */}
      <footer className="bg-black text-yellow-300 border-t border-yellow-400/20 pb-20 md:pb-0">
        <div className="max-w-7xl mx-auto px-6 py-10">

          <h3 className="text-xl font-bold text-yellow-400">
            Book Cab Today
          </h3>

          <p className="mt-3 text-sm text-yellow-300/70 leading-relaxed">
            S/O Sunil Jaiswar, Building No 7, Room No 1054,
            Government Colony, Near Bharat Nagar,
            Bandra (East), Mumbai, Maharashtra - 400051
          </p>

          <div className="mt-6 text-sm space-y-3 text-yellow-300/80">
            <div>
              📞 <a href={`tel:${PHONE}`} className="hover:text-yellow-400">
                {PHONE}
              </a>
            </div>
            <div>
              ✉️ <a href="mailto:bookcabtoday@gmail.com" className="hover:text-yellow-400">
                bookcabtoday@gmail.com
              </a>
            </div>
            <div>
              💬 <a href={WHATSAPP} target="_blank" rel="noreferrer" className="hover:text-yellow-400">
                WhatsApp Support
              </a>
            </div>
          </div>

          <div className="mt-8 border-t border-yellow-400/20 pt-4 text-xs text-yellow-300/60 flex justify-between">
            <div>
              © {new Date().getFullYear()} Book Cab Today
            </div>
            <div className="flex gap-4">
              <Link to="/privacy-policy" className="hover:text-yellow-400">
                Privacy
              </Link>
              <Link to="/terms-and-conditions" className="hover:text-yellow-400">
                Terms
              </Link>
              <Link to="/refund-policy" className="hover:text-yellow-400">
                Refund
              </Link>
            </div>
          </div>

        </div>
      </footer>

      {/* ================= MOBILE STICKY BAR ================= */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-black border-t border-yellow-400/30 shadow-[0_-5px_20px_rgba(250,204,21,0.3)]">
        <div className="flex justify-around items-center h-14 text-xs font-semibold text-yellow-400">

          {/* CALL */}
          <a
            href={`tel:${PHONE}`}
            className="flex flex-col items-center justify-center w-full hover:bg-yellow-400/10 transition"
          >
            📞
            <span>Call</span>
          </a>

          {/* HOME */}
          <Link
            to="/"
            className="flex flex-col items-center justify-center w-full hover:bg-yellow-400/10 transition"
          >
            🏠
            <span>Home</span>
          </Link>

          {/* WHATSAPP */}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center justify-center w-full hover:bg-yellow-400/10 transition"
          >
            💬
            <span>WhatsApp</span>
          </a>

        </div>
      </div>
    </>
  );
}