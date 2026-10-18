"use client";

import { useState } from "react";

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

const ProductCardPage = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  const message = `Hello! I'm interested in buying this macrame product.

Product: ${product.name}
Selected size: ${selectedSize.label}
Displayed price: ৳${selectedSize.price.toLocaleString("en-BD")}

Could you please confirm the final price, product details, availability, and delivery information? I'd like to know more before placing my order.`;

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <article className="group overflow-hidden rounded-2xl border border-[#E8DED2] bg-white">
      {/* Product image */}
      <div className="overflow-hidden bg-[#F0E8DE]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Product details */}
      <div className="p-5">
        <p className="text-xs uppercase tracking-wider text-[#A66D4F]">
          {product.category}
        </p>

        <h2 className="mt-2 text-xl font-medium text-[#382D27]">
          {product.name}
        </h2>

        <p className="mt-2 text-sm leading-6 text-[#796C61]">
          {product.description}
        </p>

        {/* Size selector */}
        <label
          htmlFor={`size-${product.id}`}
          className="mt-5 block text-sm font-medium text-[#382D27]"
        >
          Choose size
        </label>

        <select
          id={`size-${product.id}`}
          value={selectedSize.label}
          onChange={(event) => {
            const size = product.sizes.find(
              (item) => item.label === event.target.value
            );
            setSelectedSize(size);
          }}
          className="mt-2 w-full rounded-lg border border-[#D8C9BA] bg-[#FAF7F2] px-4 py-3 text-sm text-[#382D27] outline-none focus:border-[#A66D4F]"
        >
          {product.sizes.map((size) => (
            <option key={size.label} value={size.label}>
              {size.label} — ৳{size.price.toLocaleString("en-BD")}
            </option>
          ))}
        </select>

        {/* Dynamic price */}
        <div className="mt-5">
          <p className="text-sm text-[#796C61]">Price for selected size</p>
          <p className="mt-1 text-2xl font-semibold text-[#382D27]">
            ৳{selectedSize.price.toLocaleString("en-BD")}
          </p>
        </div>

        {/* WhatsApp order button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#287D4A] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#20663C]"
        >
          <span aria-hidden="true">☏</span>
          Buy Now on WhatsApp
        </a>

        <p className="mt-3 text-center text-xs leading-5 text-[#8B7B6D]">
          Confirm price and availability with us on WhatsApp.
        </p>
      </div>
    </article>
  );
};

export default ProductCardPage;
