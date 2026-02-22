// src/components/ConfirmationModal.jsx
import React, { useEffect, useState } from "react";
import { sendBookingEmail } from "../utils/sendBookingEmail";

function Row({ label, value }) {
  return (
    <div className="flex justify-between gap-4 text-sm">
      <span className="text-yellow-400/70">{label}</span>
      <span className="font-medium text-yellow-200 text-right">
        {value || "—"}
      </span>
    </div>
  );
}

export default function ConfirmationModal({ open, booking, onClose }) {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  if (!open || !booking) return null;

  useEffect(() => {
    if (!open) return;
    const timer = setTimeout(() => {
      onClose?.();
      window.location.href = "/";
    }, 30000);
    return () => clearTimeout(timer);
  }, [open, onClose]);

  const handleConfirm = async () => {
    if (sending || sent) return;

    try {
      setSending(true);
      await sendBookingEmail(booking);
      setSent(true);

      setTimeout(() => {
        onClose?.();
        window.location.href = "/";
      }, 2000);
    } catch (err) {
      console.error("EmailJS Error:", err);
      alert("Email failed. Check console.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4">
      <div className="w-full max-w-md rounded-2xl bg-black border border-yellow-400/30 shadow-[0_0_50px_rgba(250,204,21,0.3)] overflow-hidden">

        {/* HEADER */}
        <header className="px-6 py-4 border-b border-yellow-400/30">
          <h2 className="text-lg font-semibold text-yellow-400">
            {sent ? "Booking Confirmed ✔️" : "Booking Summary"}
          </h2>
        </header>

        {/* BODY */}
        <div className="p-6 space-y-3">
          <Row label="Service" value={booking.serviceType} />
          <Row label="Name" value={booking.customerName} />
          <Row label="Mobile" value={booking.customerPhone} />
          <Row label="Email" value={booking.customerEmail} />
          <Row label="Pickup" value={booking.pickup} />
          <Row label="Drop" value={booking.drop} />
          <Row label="Date/Time" value={booking.datetime} />
          <Row label="Car" value={booking.carType} />
          <Row label="Payment" value={booking.paymentMethod} />
          <Row
            label="Estimated Fare"
            value={
              booking.estimatedFare
                ? `₹${booking.estimatedFare}`
                : "—"
            }
          />
        </div>

        {/* FOOTER */}
        <footer className="flex justify-end px-6 py-4 border-t border-yellow-400/30">
          <button
            type="button"
            onClick={handleConfirm}
            disabled={sending}
            className="rounded-xl px-5 py-2 text-sm font-semibold bg-yellow-400 text-black hover:bg-yellow-300 shadow-[0_10px_30px_rgba(250,204,21,0.6)] transition"
          >
            {sending ? "Sending..." : sent ? "Done ✔" : "Confirm Booking"}
          </button>
        </footer>
      </div>
    </div>
  );
}