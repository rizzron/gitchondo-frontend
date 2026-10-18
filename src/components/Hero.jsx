
import Link from "next/link";

const HeroPage = () => {
  return (
    <section className="bg-[#FAF7F2]">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-16">

        {/* Left side: Text content */}
        <div>
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-[#A66D4F]">
            Made slowly, loved forever
          </p>

          <h1 className="max-w-xl text-5xl font-medium leading-tight tracking-tight text-[#382D27] md:text-7xl">
            Handmade pieces,{" "}
            <span className="font-serif italic text-[#A66D4F]">
              made with love.
            </span>
          </h1>

          <p className="mt-6 max-w-lg leading-7 text-[#796C61]">
            Bring warmth and character into your home with thoughtfully
            handcrafted macrame decor. Every knot tells a story.
          </p>

          {/* Action buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/products"
              className="rounded-full bg-[#6F5948] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#503E31]"
            >
              Explore Collection →
            </Link>

            <Link
              href="/about"
              className="rounded-full border border-[#CFC0B1] px-7 py-4 text-sm font-medium text-[#382D27] transition hover:bg-white"
            >
              Our Story
            </Link>
          </div>

          <p className="mt-10 text-sm text-[#8B7B6D]">
            ✦ Handmade with care · Designed for your home
          </p>
        </div>

        {/* Right side: Hero image */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85"
            alt="Warm and naturally styled home interior"
            className="h-[380px] w-full rounded-t-[180px] object-cover md:h-[550px]"
          />

          {/* Floating label */}
          <div className="absolute -bottom-5 left-4 rounded-2xl bg-white px-5 py-4 shadow-lg md:-left-8">
            <p className="text-sm font-medium text-[#382D27]">
              Made by hand
            </p>
            <p className="mt-1 text-xs text-[#8B7B6D]">
              Unique pieces, just for you
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroPage;
