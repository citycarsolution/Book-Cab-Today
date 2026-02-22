// src/sections/AboutSection.jsx
import React from "react";

export default function AboutSection() {
  return (
    <section className="bg-black text-yellow-300 py-16 px-4">
      <div className="max-w-6xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400">
            Best Cab Service in Mumbai – Airport, Local & Outstation Taxi
          </h2>
          <p className="mt-4 text-yellow-300/70 max-w-3xl mx-auto text-sm md:text-base">
            Looking for a reliable Mumbai cab service? We provide affordable 
            airport taxi in Mumbai, local car rental, and outstation cab 
            booking from Mumbai with professional drivers and clean A.C. cars.
          </p>
        </div>

        {/* CONTENT GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* AIRPORT */}
          <div className="bg-black border border-yellow-400/30 rounded-2xl p-6 shadow-[0_0_25px_rgba(250,204,21,0.15)]">
            <h3 className="text-xl font-semibold text-yellow-400 mb-3">
              ✈️ Airport Taxi Mumbai
            </h3>
            <p className="text-sm text-yellow-300/80 leading-relaxed">
              Book affordable airport transfer in Mumbai for pickup or drop.
              We track flight timings and ensure on-time service from Mumbai
              Airport to any location across the city.
            </p>
          </div>

          {/* LOCAL */}
          <div className="bg-black border border-yellow-400/30 rounded-2xl p-6 shadow-[0_0_25px_rgba(250,204,21,0.15)]">
            <h3 className="text-xl font-semibold text-yellow-400 mb-3">
              🏙️ Mumbai Local Car Rental
            </h3>
            <p className="text-sm text-yellow-300/80 leading-relaxed">
              Hire a cab in Mumbai for 8 hours / 80 KM or 12 hours / 120 KM 
              packages. Perfect for business meetings, shopping, sightseeing 
              and daily travel.
            </p>
          </div>

          {/* OUTSTATION */}
          <div className="bg-black border border-yellow-400/30 rounded-2xl p-6 shadow-[0_0_25px_rgba(250,204,21,0.15)]">
            <h3 className="text-xl font-semibold text-yellow-400 mb-3">
              🚗 Outstation Cab from Mumbai
            </h3>
            <p className="text-sm text-yellow-300/80 leading-relaxed">
              Book one way cab from Mumbai or round trip taxi to Pune, 
              Lonavala, Shirdi, Nashik and more. Transparent pricing and 
              professional drivers for safe long-distance travel.
            </p>
          </div>

        </div>

        {/* EXTRA SEO TEXT */}
        <div className="mt-14 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
            Why Choose Our Mumbai Taxi Service?
          </h3>
          <p className="text-sm md:text-base text-yellow-300/80 leading-relaxed">
            We are one of the most trusted taxi services in Mumbai offering
            affordable cab booking with transparent pricing, no hidden charges,
            and 24/7 customer support. Whether you need a Mumbai airport cab,
            local rental, or outstation taxi from Mumbai, we ensure safe,
            comfortable and on-time rides every time.
          </p>
        </div>

      </div>
    </section>
  );
}