import Footer from "./Cx/Footer";
import FutureSwimSection from "./Cx/FutureSwimSection";
import Hero from "./Cx/Hero";
import MindSection from "./Cx/MindSection";
import ThinkSection from "./Cx/ThinkSection";

export default function Home() {
  return (
    <div className="min-h-screen w-full min-w-0 overflow-x-visible">
      <Hero />
      <MindSection />
      <ThinkSection />
      <FutureSwimSection/>
      <Footer/>
    </div>
  );
}
