import Icon from "./Icon";
import Reveal from "./Reveal";
import RichText from "./RichText";
import SectionTitle from "./SectionTitle";
import { points } from "../data/trip";

export default function Points() {
  return (
    <section id="points">
      <div className="container">
        <SectionTitle en="POINTS">旅のポイント</SectionTitle>
        <div className="points">
          {points.map((point) => (
            <Reveal className="point" key={point.title}>
              <div className="point__icon"><Icon name={point.icon} /></div>
              <div>
                <h3>{point.title}</h3>
                <p><RichText parts={point.body} /></p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
