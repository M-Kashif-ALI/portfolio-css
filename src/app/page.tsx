import HeroSection from "./components/heroSection";
import NavBar from "./components/navBar";

export default function Home() {
  return (
    <div className="main-page">
      <NavBar />
      <div className="hero">
        <HeroSection />
      </div>
    </div>
  );
}
