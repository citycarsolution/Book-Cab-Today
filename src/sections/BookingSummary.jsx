import React, { useEffect, useState } from "react";
import { sendBookingEmail } from "../utils/sendBookingEmail";

function Row({ label, value }) {
  return (
    <div className="flex justify-between gap-4 text-sm">
      <span className="text-yellow-400/70">{label}</span>
      <span className="font-medium text-right text-yellow-200">
        {value || "—"}
      </span>
    </div>
  );
}

export default function BookingSummaryModal({ open, booking, onClose }) {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!open) return;
    const timer = setTimeout(() => {
      onClose?.();
      window.location.href = "/";
    }, 30000);
    return () => clearTimeout(timer);
  }, [open, onClose]);

  if (!open || !booking) return null;

  const handleConfirm = async () => {
    if (sending || sent) return;
    try {
      setSending(true);
      await sendBookingEmail(booking);
      setSent(true);
      onClose?.();
      window.location.href = "/";
    } catch (err) {
      console.error(err);
      alert("Email Error: " + (err?.text || err?.message));
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4">
      <div className="w-full max-w-md rounded-2xl bg-black border border-yellow-400/30 shadow-[0_0_40px_rgba(250,204,21,0.25)] overflow-hidden">

        {/* HEADER */}
        <header className="bg-black border-b border-yellow-400/30 px-6 py-4">
          <h2 className="text-lg font-semibold text-yellow-400">
            {sent
              ? "Thank you! Booking Received ✔️"
              : "Booking Summary"}
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
        <footer className="flex px-6 py-4 border-t border-yellow-400/30 justify-end">
          <button
            type="button"
            onClick={handleConfirm}
            disabled={sending}
            className={`rounded-xl px-5 py-2 text-sm font-semibold transition shadow-[0_8px_25px_rgba(250,204,21,0.4)] ${
              sending
                ? "bg-yellow-300 text-black"
                : sent
                ? "bg-yellow-400 text-black"
                : "bg-yellow-400 text-black hover:bg-yellow-300"
            }`}
          >
            {sending ? "Sending..." : sent ? "OK" : "Confirm Booking"}
          </button>
        </footer>
      </div>
    </div>
  );
}