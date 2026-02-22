// src/sections/BookingForm.jsx
import React, { useMemo, useState } from "react";
import BookingSummaryModal from "./BookingSummary";

const SERVICES = [
  { id: "airport", icon: "✈️", label: "Airport Transfer" },
  { id: "local", icon: "🏙️", label: "Local Rental" },
  { id: "oneway", icon: "🚗", label: "Outstation — One Way" },
  { id: "roundtrip", icon: "🔄", label: "Outstation — Round Trip" },
];

export default function BookingForm({
  selectedCar,
  searchParams,
  onBack,
  qrImageUrl,
}) {
  const todayISO = new Date().toISOString().split("T")[0];
  const defaultTime = new Date(Date.now() + 3600000)
    .toTimeString()
    .slice(0, 5);

  const initialService = searchParams?.service || "airport";
  const serviceLabel =
    SERVICES.find((s) => s.id === initialService)?.label || "Service";

  const carTitleMap = {
    sedan: "Sedan — Dzire/Xcent",
    ertiga: "SUV — Ertiga",
    carens: "SUV — Kia Carens",
    crysta: "SUV — Innova Crysta",
    hycross: "SUV — Innova Hycross",
    fortuner: "SUV — Fortuner",
  };

  const upiAmount = useMemo(() => {
    const raw = selectedCar?.fare?.total;
    return typeof raw === "number" && raw > 0 ? Math.round(raw) : 0;
  }, [selectedCar]);

  const km = selectedCar?.km ?? 0;

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    pickup: searchParams?.pickup?.label || "",
    drop: searchParams?.drop?.label || searchParams?.airport?.label || "",
    date: searchParams?.pickupDate || todayISO,
    time: searchParams?.pickupTime || defaultTime,
    payment: "cash",
    upiId: "",
  });

  const [showQr, setShowQr] = useState(false);
  const [summaryOpen, setSummaryOpen] = useState(false);
  const [summaryBooking, setSummaryBooking] = useState(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const valid = useMemo(() => {
    const basic =
      form.firstName && form.phone && form.pickup && form.date && form.time;
    return form.payment === "upi" ? basic && form.upiId : basic;
  }, [form]);

  const submit = (e) => {
    e.preventDefault();
    if (!valid) return;

    const bookingData = {
      serviceType: serviceLabel,
      customerName: `${form.firstName} ${form.lastName}`.trim(),
      customerPhone: form.phone,
      customerEmail: form.email,
      pickup: form.pickup,
      drop: form.drop || "—",
      datetime: `${form.date} ${form.time}`,
      carType: carTitleMap[selectedCar?.carId] || "—",
      paymentMethod: form.payment === "upi" ? "UPI" : "Cash",
      estimatedFare: upiAmount,
      km,
    };

    setSummaryBooking(bookingData);
    setSummaryOpen(true);
  };

  const inputClass =
    "mt-1 w-full p-3 bg-black text-yellow-300 border border-yellow-400/30 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-yellow-400";

  return (
    <section className="max-w-4xl mx-auto px-4 py-10 text-yellow-300">

      {/* HEADER */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-yellow-400">
          Final Booking — {serviceLabel}
        </h2>
        <button
          onClick={onBack}
          className="px-4 py-2 rounded-lg border border-yellow-400/40 hover:bg-yellow-400/10 transition"
        >
          ← Back
        </button>
      </div>

      {/* CAR SUMMARY */}
      <div className="bg-black/70 border border-yellow-400/30 rounded-xl p-4 shadow-[0_0_20px_rgba(250,204,21,0.15)] mb-6">
        <div className="font-semibold">
          Selected Car: {carTitleMap[selectedCar?.carId] || "—"}
        </div>
        <div className="text-yellow-300/70 mt-1">
          Distance: <b>{km} km</b> • Fare: <b>₹ {upiAmount}</b>
        </div>
      </div>

      {/* FORM CARD */}
      <div className="bg-black/80 backdrop-blur-xl rounded-2xl border border-yellow-400/30 shadow-[0_0_30px_rgba(250,204,21,0.15)] overflow-hidden">

        <div className="px-6 py-4 border-b border-yellow-400/30">
          <h3 className="text-lg font-semibold text-yellow-400">
            Passenger & Trip Details
          </h3>
        </div>

        <form
          onSubmit={submit}
          className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          <div>
            <label>First Name *</label>
            <input name="firstName" value={form.firstName} onChange={onChange} className={inputClass} required />
          </div>

          <div>
            <label>Last Name</label>
            <input name="lastName" value={form.lastName} onChange={onChange} className={inputClass} />
          </div>

          <div>
            <label>Mobile *</label>
            <input name="phone" value={form.phone} onChange={onChange} className={inputClass} required />
          </div>

          <div>
            <label>Email</label>
            <input type="email" name="email" value={form.email} onChange={onChange} className={inputClass} />
          </div>

          <div className="sm:col-span-2">
            <label>Pickup Address *</label>
            <input name="pickup" value={form.pickup} onChange={onChange} className={inputClass} required />
          </div>

          <div className="sm:col-span-2">
            <label>Drop Address</label>
            <input name="drop" value={form.drop} onChange={onChange} className={inputClass} />
          </div>

          <div>
            <label>Date *</label>
            <input type="date" name="date" value={form.date} onChange={onChange} className={inputClass} required />
          </div>

          <div>
            <label>Time *</label>
            <input type="time" name="time" value={form.time} onChange={onChange} className={inputClass} required />
          </div>

          {/* PAYMENT */}
          <div className="sm:col-span-2">
            <label>Payment *</label>
            <div className="mt-2 flex gap-3">
              {["cash", "upi"].map((method) => (
                <label
                  key={method}
                  className={`px-4 py-2 rounded-md border border-yellow-400/30 cursor-pointer transition ${
                    form.payment === method
                      ? "bg-yellow-400 text-black"
                      : "bg-black hover:bg-yellow-400/10"
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value={method}
                    checked={form.payment === method}
                    onChange={onChange}
                    className="hidden"
                  />
                  {method === "cash" ? "Cash" : "UPI"}
                </label>
              ))}
            </div>
          </div>

          {form.payment === "upi" && (
            <div className="sm:col-span-2">
              <label>UPI ID *</label>
              <input name="upiId" value={form.upiId} onChange={onChange} className={inputClass} required />
            </div>
          )}

          {/* SUBMIT */}
          <div className="sm:col-span-2 pt-4">
            <button
              type="submit"
              disabled={!valid}
              className={`w-full py-3 rounded-lg font-semibold bg-yellow-400 text-black hover:bg-yellow-300 shadow-[0_10px_25px_rgba(250,204,21,0.5)] transition ${
                !valid ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Confirm Booking
            </button>
          </div>
        </form>
      </div>

      {summaryOpen && summaryBooking && (
        <BookingSummaryModal
          open={summaryOpen}
          booking={summaryBooking}
          onClose={() => setSummaryOpen(false)}
        />
      )}
    </section>
  );
}