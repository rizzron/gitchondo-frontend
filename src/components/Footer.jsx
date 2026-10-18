
import Link from "next/link";

const FooterPage = () => {
  return (
    <footer className="bg-[#382D27] text-[#E7DCD1]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">

        {/* Brand */}
        <div>
          <Link
            href="/"
            className="text-2xl font-semibold tracking-wide text-white"
          >
            Gitchondo<span className="text-[#D6A17D]">.</span>
          </Link>

          <p className="mt-4 max-w-xs text-sm leading-7 text-[#C2B3A6]">
            Handmade macrame decor created with patience, care, and love.
            Bring a little warmth into your everyday spaces.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="font-semibold text-white">Explore</h3>

          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <Link href="/" className="transition hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="transition hover:text-white">
                Shop All
              </Link>
            </li>
            <li>
              <Link href="/about" className="transition hover:text-white">
                Our Story
              </Link>
            </li>
            <li>
              <Link href="/contact" className="transition hover:text-white">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer information */}
        <div>
          <h3 className="font-semibold text-white">Customer Care</h3>

          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <Link href="/contact" className="transition hover:text-white">
                How to Order
              </Link>
            </li>
            <li>
              <Link href="/contact" className="transition hover:text-white">
                Custom Requests
              </Link>
            </li>
            <li>
              <Link href="/contact" className="transition hover:text-white">
                Questions & Inquiries
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-white">Get in Touch</h3>

          <p className="mt-4 text-sm leading-7 text-[#C2B3A6]">
            Have a piece in mind? We'd love to hear from you.
          </p>

          <Link
            href="/contact"
            className="mt-5 inline-block rounded-full bg-[#FAF7F2] px-5 py-3 text-sm font-medium text-[#382D27] transition hover:bg-white"
          >
            Contact Us →
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-center text-xs text-[#C2B3A6] sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>
            © 2026 Gitchondo. All rights reserved.
          </p>

          <p>Handmade with love, to decor your space.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
