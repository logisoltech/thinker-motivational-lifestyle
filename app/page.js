import Footer from "./Cx/Footer";
import FutureSwimSection from "./Cx/FutureSwimSection";
import Hero from "./Cx/Hero";
import LastSection from "./Cx/LastSection";
import MindSection from "./Cx/MindSection";
import MindSectionTwo from "./Cx/MindSectionTwo";
import ThinkSection from "./Cx/ThinkSection";

export default function Home() {
  return (
    <div className="min-h-screen w-full min-w-0 overflow-x-visible">
      <Hero />
      <MindSection />
      <ThinkSection />
      <MindSectionTwo />
      {/* <FutureSwimSection /> */}
      <LastSection />
      <Footer />
    </div>
  );
}
