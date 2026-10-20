import Checklist from "./components/Checklist";
import DayOverview from "./components/DayOverview";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import IconSprite from "./components/IconSprite";
import Memo from "./components/Memo";
import Points from "./components/Points";
import Safety from "./components/Safety";
import Schedule from "./components/Schedule";
import Summary from "./components/Summary";
import ToTop from "./components/ToTop";

export default function App() {
  return (
    <>
      <IconSprite />
      <Hero />
      <main>
        <Summary />
        <DayOverview />
        <Schedule />
        <Points />
        <Safety />
        <Checklist />
        <Memo />
      </main>
      <Footer />
      <ToTop />
    </>
  );
}
