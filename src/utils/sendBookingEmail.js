// src/utils/sendBookingEmail.js
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_gqnmtga";
const TEMPLATE_ID = "template_wvd6jbq";
const PUBLIC_KEY = "hT2h0GCkb0gmhnT2_";

export async function sendBookingEmail(booking) {
  const templateParams = {
    service: booking.serviceType || "Cab Booking",
    name: booking.customerName || "N/A",
    phone: booking.customerPhone || "N/A",
    email: booking.customerEmail || "N/A",
    pickup: booking.pickup || "N/A",
    drop: booking.drop || "N/A",
    datetime: booking.datetime || "N/A",
    car: booking.carType || "N/A",
    payment: booking.paymentMethod || "N/A",
    fare: booking.estimatedFare || "N/A",
  };

  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    );
    return response;
  } catch (error) {
    console.error("EmailJS Error:", error);
    throw error;
  }
}