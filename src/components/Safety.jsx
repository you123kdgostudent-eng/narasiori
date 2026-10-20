import Icon from "./Icon";
import Reveal from "./Reveal";
import RichText from "./RichText";
import SectionTitle from "./SectionTitle";
import { safety } from "../data/trip";

export default function Safety() {
  return (
    <section id="safety">
      <div className="container">
        <SectionTitle en="SAFETY">ドライブ注意事項</SectionTitle>
        <Reveal className="safety">
          <h3><Icon name="alert" /> 長距離運転・安全運転のために</h3>
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
