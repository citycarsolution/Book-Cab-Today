// src/pages/PrivacyPolicy.jsx
import React from "react";

export default function PrivacyPolicy() {
  return (
    <section className="bg-black text-yellow-300 min-h-screen px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-yellow-400 mb-6">
          Privacy Policy – Book Cab Today
        </h1>

        <p className="mb-4 text-yellow-300/80">
          At Book Cab Today, we respect your privacy. This Privacy Policy
          explains how we collect, use, and protect your personal information
          when you use our Mumbai cab booking services.
        </p>

        <h2 className="text-xl text-yellow-400 mt-8 mb-3">Information We Collect</h2>
        <ul className="list-disc list-inside space-y-2 text-yellow-300/80">
          <li>Name, phone number, and email address</li>
          <li>Pickup and drop location details</li>
          <li>Booking date, time, and car preference</li>
        </ul>

        <h2 className="text-xl text-yellow-400 mt-8 mb-3">How We Use Information</h2>
        <p className="text-yellow-300/80">
          We use your information only for cab booking confirmation,
          communication, customer support, and improving our taxi services.
        </p>

        <h2 className="text-xl text-yellow-400 mt-8 mb-3">Data Protection</h2>
        <p className="text-yellow-300/80">
          Your personal information is secure with us. We do not sell or share
          your data with third parties except for service fulfillment.
        </p>

        <h2 className="text-xl text-yellow-400 mt-8 mb-3">Contact Us</h2>
        <p className="text-yellow-300/80">
          If you have questions about this Privacy Policy, contact us at
          +918433917535.
        </p>
      </div>
    </section>
  );
}