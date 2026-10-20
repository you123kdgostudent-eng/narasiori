import { useState } from "react";
import Reveal from "./Reveal";
import RouteMap from "./RouteMap";
import SectionTitle from "./SectionTitle";
import { flowSteps } from "../data/trip";

export default function DayOverview() {
  // ルートマップで車が走っている区間（-1 はどこも走っていない）
  const [activeStep, setActiveStep] = useState(-1);

  return (
    <section id="flow">
      <div className="container">
        <SectionTitle en="OVERVIEW">1日の流れ</SectionTitle>
        <Reveal className="flow">
          <RouteMap onStepChange={setActiveStep} />
          <ol className="flow-steps">
            {flowSteps.map((step, i) => (
              <li key={step.when} className={i === activeStep ? "is-active" : undefined}>
                <span className="flow-steps__when">{step.when}</span>
                <div>
                  <strong>{step.title}</strong>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
