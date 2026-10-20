import Checklist from "./components/Checklist";
import DayOverview from "./components/DayOverview";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import IconSprite from "./components/IconSprite";
import Safety from "./components/Safety";
import Schedule from "./components/Schedule";
import ToTop from "./components/ToTop";

export default function App() {
  return (
    <>
      <IconSprite />
      <Hero />
      <main>
        <DayOverview />
        <Schedule />
        <Safety />
        <Checklist />
      </main>
      <Footer />
      <ToTop />
    </>
  );
}
