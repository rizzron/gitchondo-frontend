import FeaturedProductsPage from "@/components/FeaturedProducts";
import FooterPage from "@/components/Footer";
import HeroPage from "@/components/Hero";
import NavbarPage from "@/components/Navbar";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF7F2]">
      <NavbarPage />

      <HeroPage />

      <FeaturedProductsPage />

      <FooterPage />
    </main>
  );
}
