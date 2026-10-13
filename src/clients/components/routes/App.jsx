import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AnnouncementBar from "../AnnouncementBar";
import Header from "../Header/Header";
import Hero from "../Hero";
import Features from "../Features";
import PromoBanners from "../PromoBanners";
import PopularProducts from "../PopularProducts";
import Footer from "../Footer";
import RunningPage from "../Header/Running";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <AnnouncementBar />
        <Header />

        <Routes>
          {/* Main Home Page Route */}
          <Route
            path="/"
            element={
              <main>
                <Hero />
                <Features />
                <PromoBanners />
                <PopularProducts />
              </main>
            }
          />

          {/* Running Shoes Page Route */}
          <Route path="/shoes/running" element={<RunningPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}