import ProductCard from "@/components/ProductCard";
import NavbarPage from "@/components/Navbar";
import FooterPage from "@/components/Footer";

const products = [
  {
    id: 1,
    name: "Boho Wall Hanging",
    category: "Wall Decor",
    description:
      "A handcrafted statement piece for a warm, natural interior.",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
    sizes: [
      { label: "Small", price: 1200 },
      { label: "Medium", price: 1800 },
      { label: "Large", price: 2500 },
    ],
  },
  {
    id: 2,
    name: "Macrame Plant Hanger",
    category: "Plant Decor",
    description:
      "A handmade hanging accent for your favorite indoor plants.",
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80",
    sizes: [
      { label: "Small", price: 450 },
      { label: "Medium", price: 650 },
      { label: "Large", price: 900 },
    ],
  },
  {
    id: 3,
    name: "Handcrafted Home Decor",
    category: "Home Decor",
    description:
      "Natural textures and thoughtful details for your living space.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
    sizes: [
      { label: "Small", price: 800 },
      { label: "Medium", price: 1200 },
      { label: "Large", price: 1700 },
    ],
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2]">
      <NavbarPage />

      <section className="mx-auto max-w-7xl px-6 py-10 md:py-20">
        {/* Page heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-[#A66D4F]">
            Made with love
          </p>

          <h1 className="mt-4 text-4xl font-medium text-[#382D27] md:text-5xl">
            Our Collection
          </h1>

          <p className="mt-5 leading-7 text-[#796C61]">
            Explore our handmade macrame creations. Choose the size
            that suits your space, then contact us directly on WhatsApp
            to discuss your order.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      <FooterPage/>
    </main>
  );
}
