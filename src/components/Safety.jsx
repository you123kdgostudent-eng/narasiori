import Reveal from "./Reveal";
import RichText from "./RichText";
import SectionTitle from "./SectionTitle";
import { drivingNote, safety } from "../data/trip";

export default function Safety() {
  return (
    <section id="safety">
      <div className="container">
        <SectionTitle>運転のこと</SectionTitle>
        <Reveal className="safety">
          <p className="safety__note">{drivingNote}</p>
          <ul>
            {safety.map((parts, i) => (
              <li key={i}><span><RichText parts={parts} /></span></li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
