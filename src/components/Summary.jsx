import Icon from "./Icon";
import Reveal from "./Reveal";
import { summary } from "../data/trip";

export default function Summary() {
  return (
    <div className="container summary">
      <Reveal className="summary__card">
        {summary.map((item) => (
          <div className="stat" key={item.label}>
            <div className="stat__icon"><Icon name={item.icon} /></div>
            <div>
              <div className="stat__label">{item.label}</div>
              <div className="stat__value">{item.value}</div>
            </div>
          </div>
        ))}
      </Reveal>
    </div>
  );
}
