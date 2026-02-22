// src/sections/FaqSection.jsx
import React, { useState } from "react";

const faqs = [
  {
    question: "How to book a cab in Mumbai?",
    answer:
      "You can easily book a cab in Mumbai using our online booking system. Select airport transfer, local rental, or outstation taxi, choose your car, and confirm your booking instantly.",
  },
  {
    question: "Do you provide airport taxi in Mumbai?",
    answer:
      "Yes, we provide 24/7 airport taxi service in Mumbai for both pickup and drop. Our drivers ensure on-time airport transfers with clean A.C. cars.",
  },
  {
    question: "What are the local car rental packages in Mumbai?",
    answer:
      "We offer 8 Hours / 80 KM and 12 Hours / 120 KM local car rental packages in Mumbai. Extra charges apply only after package limits.",
  },
  {
    question: "Can I book an outstation cab from Mumbai?",
    answer:
      "Yes, we provide one way and round trip outstation cab booking from Mumbai to Pune, Lonavala, Shirdi, Nashik and many other cities.",
  },
  {
    question: "Is your Mumbai taxi service affordable?",
    answer:
      "Yes, we offer affordable cab service in Mumbai with transparent pricing and no hidden charges.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-black text-yellow-300 py-16 px-4">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400">
            Frequently Asked Questions – Mumbai Cab Service
          </h2>
          <p className="mt-4 text-yellow-300/70 max-w-3xl mx-auto text-sm md:text-base">
            Find answers about airport taxi Mumbai, local rental packages, and 
            outstation cab booking from Mumbai.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border border-yellow-400/30 rounded-xl overflow-hidden"
              >
                <button
                  className="w-full text-left px-6 py-4 flex justify-between items-center bg-black hover:bg-yellow-400/10 transition"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                >
                  <span className="font-medium text-yellow-200">
                    {faq.question}
                  </span>
                  <span className="text-yellow-400 text-xl">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 py-4 bg-black/70 text-yellow-300/80 text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}