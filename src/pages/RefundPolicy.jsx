// src/pages/RefundPolicy.jsx
import React from "react";

export default function RefundPolicy() {
  return (
    <section className="bg-black text-yellow-300 min-h-screen px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-yellow-400 mb-6">
          Refund Policy – Book Cab Today
        </h1>

        <p className="text-yellow-300/80 mb-4">
          Book Cab Today aims to provide transparent and fair refund policies.
        </p>

        <h2 className="text-xl text-yellow-400 mt-8 mb-3">Cancellation Refund</h2>
        <ul className="list-disc list-inside space-y-2 text-yellow-300/80">
          <li>Full refund if cancelled 2 hours before pickup.</li>
          <li>No refund for last-minute cancellation.</li>
        </ul>

        <h2 className="text-xl text-yellow-400 mt-8 mb-3">Driver Delay Refund</h2>
        <p className="text-yellow-300/80">
          If the driver fails to arrive within reasonable time,
          customer may request partial or full refund.
        </p>

        <h2 className="text-xl text-yellow-400 mt-8 mb-3">Refund Processing Time</h2>
        <p className="text-yellow-300/80">
          Refunds will be processed within 5–7 business days.
        </p>
      </div>
    </section>
  );
}