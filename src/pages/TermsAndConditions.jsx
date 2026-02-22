// src/pages/TermsAndConditions.jsx
import React from "react";

export default function TermsAndConditions() {
  return (
    <section className="bg-black text-yellow-300 min-h-screen px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-yellow-400 mb-6">
          Terms & Conditions – Book Cab Today
        </h1>

        <p className="text-yellow-300/80 mb-4">
          By booking a cab with Book Cab Today, you agree to the following terms.
        </p>

        <h2 className="text-xl text-yellow-400 mt-8 mb-3">Booking Policy</h2>
        <ul className="list-disc list-inside space-y-2 text-yellow-300/80">
          <li>All bookings are subject to availability.</li>
          <li>Correct pickup and drop details must be provided.</li>
          <li>Fare may vary if distance or time changes.</li>
        </ul>

        <h2 className="text-xl text-yellow-400 mt-8 mb-3">Payment Terms</h2>
        <p className="text-yellow-300/80">
          Payment can be made via Cash or UPI. Additional charges may apply
          for tolls, parking, or waiting time.
        </p>

        <h2 className="text-xl text-yellow-400 mt-8 mb-3">Driver & Passenger Responsibility</h2>
        <p className="text-yellow-300/80">
          Passengers must maintain respectful behavior. Any damage caused
          to the vehicle will be chargeable.
        </p>

        <h2 className="text-xl text-yellow-400 mt-8 mb-3">Changes & Cancellations</h2>
        <p className="text-yellow-300/80">
          Cancellations must be informed at least 2 hours before pickup time.
        </p>
      </div>
    </section>
  );
}