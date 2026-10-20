import Icon from "./Icon";
import Reveal from "./Reveal";
import { summary } from "../data/trip";

// 青い案内板を4枚並べた概要
export default function Summary() {
  return (
    <div className="container summary">
      <Reveal className="plates">
        {summary.map((item) => (
          <div className="plate" key={item.label}>
            <span className="plate__label"><Icon name={item.icon} />{item.label}</span>
            <span className="plate__value">{item.value}</span>
          </div>
        ))}
      </Reveal>
    </div>
  );
}
