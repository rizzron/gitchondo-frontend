import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#382D27]">
      <Navbar />

      {/* Page Heading */}
      <section className="px-6 py-16 text-center md:py-20">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#A66D4F]">
          Our Journey
        </p>

        <h1 className="text-4xl font-bold md:text-5xl">
          The Story Behind Gitchondo
        </h1>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#75675E]">
          Every beautiful journey begins with a small step, and ours
          began with a few handmade macrame creations.
        </p>
      </section>

      {/* Our Story */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 pb-20 md:grid-cols-2 md:gap-14">
        <div>
          <img
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80"
            alt="A warm and natural home interior"
            className="h-80 w-full rounded-2xl object-cover shadow-sm md:h-[420px]"
          />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A66D4F]">
            How It All Began
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight">
            From a Few Creations to a Bigger Dream
          </h2>

          <p className="mt-6 leading-8 text-[#75675E]">
            Gitchondo started with a few handmade macrame pieces,
            created with care, patience, and a love for handcrafted
            designs. What began as a small journey gradually gained
            attention and appreciation from people who loved our work.
          </p>

          <p className="mt-4 leading-8 text-[#75675E]">
            Encouraged by the growing interest and public demand, we
            decided to take the next step and bring our creations online.
            Our goal is to make our macrame products accessible to
            customers across Bangladesh, so more people can discover
            and enjoy the beauty of handmade decor.
          </p>

          <p className="mt-4 leading-8 text-[#75675E]">
            This is just the beginning of our journey. Thank you for
            being part of our story and helping us grow.
          </p>

          <p className="mt-6 text-lg font-semibold italic text-[#A66D4F]">
            Made by hand, with love.
          </p>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-[#EFE6DC] px-6 py-14 text-center md:py-16">
        <h2 className="text-3xl font-bold">
          What We Believe In
        </h2>

        <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#75675E]">
          We believe that handmade pieces bring warmth, character, and
          a personal touch to every space. At Gitchondo, we are excited
          to share that feeling with homes across the country.
        </p>
      </section>

      <Footer />
    </main>
  );
}