import AnnouncementBar from './components/AnnouncementBar'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import PromoBanners from './components/PromoBanners'
import PopularProducts from './components/PopularProducts'
import Footer from './components/Footer'

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
