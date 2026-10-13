import AnnouncementBar from "./clients/components/AnnouncementBar";
import Header from "./clients/components/Header";
import Hero from "./clients/components/Hero";
import Features from "./clients/components/Features";
import PromoBanners from "./clients/components/PromoBanners";
import PopularProducts from "./clients/components/PopularProducts";
import Footer from "./clients/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <Features />
        <PromoBanners />
        <PopularProducts />
      </main>
      <Footer />
    </div>
  )
}
