"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const WHATSAPP_NUMBER = "8801XXXXXXXXX";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `
Hello Knot & Soul!

My name is ${formData.name}.
My email is ${formData.email}.

Message:
${formData.message}

I would like to know more about your macrame products.
    `.trim();

    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      whatsappMessage,
    )}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#382D27]">
      <Navbar />

      {/* Page heading */}
      <section className="px-6 py-16 text-center md:py-20">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#A66D4F]">
          We'd Love to Hear From You
        </p>

        <h1 className="text-4xl font-bold md:text-5xl">Get in Touch</h1>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#75675E]">
          Have a question about our handmade macrame pieces? Want to customize
          an order? Send us a message and we’ll be happy to help.
        </p>
      </section>

      {/* Contact content */}
      <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-20 md:grid-cols-2">
        {/* Contact information */}
        <div className="rounded-2xl bg-[#382D27] p-8 text-white md:p-10">
          <h2 className="text-2xl font-semibold">Let’s Talk</h2>

          <p className="mt-4 leading-7 text-[#E5D9CE]">
            Every piece is made with care. Contact us for product details, size
            options, custom designs, pricing, or delivery information.
          </p>

          <div className="mt-10 space-y-7">
            <div>
              <p className="text-sm text-[#D6B49D]">WhatsApp</p>
              <p className="mt-1 font-medium">
                Contact us directly through WhatsApp
              </p>
            </div>

            <div>
              <p className="text-sm text-[#D6B49D]">Products</p>
              <p className="mt-1 font-medium">Handmade macrame for your home</p>
            </div>

            <div>
              <p className="text-sm text-[#D6B49D]">Custom Orders</p>
              <p className="mt-1 font-medium">
                Tell us your preferred size and design
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex rounded-full bg-[#A66D4F] px-6 py-3 font-semibold text-white transition hover:bg-[#8D573D]"
          >
            Chat on WhatsApp
          </a>
        </div>

        {/* Thank-you section */}
        <div className="flex flex-col overflow-hidden rounded-2xl border border-[#E8DED3] bg-white shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80"
            alt="Warm, natural home interior"
            className="h-64 w-full object-cover md:h-72"
          />

          <div className="flex flex-1 flex-col items-center justify-center px-8 py-10 text-center md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A66D4F]">
              A Little Note From Us
            </p>

            <h2 className="mt-4 text-3xl font-bold text-[#382D27]">
              Thank You for Being Here!
            </h2>

            <p className="mt-5 max-w-md leading-7 text-[#75675E]">
              Thank you for visiting Knot & Soul. Every handmade piece carries a
              little love, patience, and creativity. We're so happy you've
              stopped by to explore our collection.
            </p>

            <p className="mt-4 leading-7 text-[#75675E]">
              Have a question or a special design in mind? We'd love to hear
              from you!
            </p>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-full bg-[#A66D4F] px-7 py-3 font-semibold text-white transition hover:bg-[#8D573D]"
            >
              "Let's Chat on WhatsApp"
            </a>

            <p className="mt-5 text-sm italic text-[#A66D4F]">
              Made by hand, with love.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
