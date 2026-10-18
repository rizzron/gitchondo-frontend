
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Boho Wall Hanging",
    category: "Wall Decor",
    price: 1800,
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Macrame Plant Hanger",
    category: "Plant Decor",
    price: 650,
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Handcrafted Home Decor",
    category: "Home Decor",
    price: 1200,
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
  },
];

const FeaturedProductsPage = () => {
  return (
    <section className="bg-[#FAF7F2] px-6 py-20 md:pb-20">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#A66D4F]">
              A little something handmade
            </p>

            <h2 className="text-3xl font-medium text-[#382D27] md:text-4xl">
              Featured creations
            </h2>

            <p className="mt-3 max-w-lg text-sm leading-6 text-[#796C61]">
              Thoughtfully handcrafted pieces to bring warmth and personality
              into your home.
            </p>
          </div>

          <Link
            href="/products"
            className="hidden whitespace-nowrap text-sm font-medium text-[#6F5948] underline underline-offset-4 transition hover:text-[#A66D4F] sm:block"
          >
            View all products →
          </Link>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article key={product.id} className="group">
              {/* Product image */}
              <div className="overflow-hidden rounded-2xl bg-[#F0E8DE]">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Product information */}
              <div className="flex items-start justify-between gap-4 pt-5">
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#9A8777]">
                    {product.category}
                  </p>

                  <h3 className="mt-2 text-lg font-medium text-[#382D27]">
                    {product.name}
                  </h3>
                </div>

                <p className="whitespace-nowrap pt-5 font-medium text-[#382D27]">
                  ৳{product.price.toLocaleString("en-BD")}
                </p>
              </div>

              {/* Inquiry link */}
              <Link
                href="/contact"
                className="mt-4 inline-block text-sm font-medium text-[#6F5948] underline underline-offset-4 transition hover:text-[#A66D4F]"
              >
                Ask about this piece →
              </Link>
            </article>
          ))}
        </div>

        {/* Mobile link */}
        <div className="mt-10 sm:hidden">
          <Link
            href="/products"
            className="inline-block rounded-full border border-[#CFC0B1] px-6 py-3 text-sm font-medium text-[#382D27] transition hover:bg-white"
          >
            View all products →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsPage;
