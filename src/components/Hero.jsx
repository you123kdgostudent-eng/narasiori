import { facts } from "../data/trip";

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="container hero__inner">
        <h1 className="hero__title">奈良縦断</h1>
        <div className="hero__side">
          <p className="hero__lead">芸術の森と<br />谷瀬の吊り橋へ。</p>
          <p className="hero__sub">天王寺から、車で日帰り。</p>
          <dl className="hero__facts">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}{fact.note && <small>{fact.note}</small>}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="hero__land" aria-hidden="true">
        <svg viewBox="0 0 400 120" preserveAspectRatio="none">
          <path d="M0 58L46 30 92 50 146 18 196 46 242 26 292 54 340 22 400 44V120H0z" className="hero__ridge" />
          {/* 谷瀬の吊り橋 */}
          <g className="hero__bridge">
            <path d="M232 70Q275 92 318 70" />
            <path d="M232 62V82M318 62V82M232 82H318M253 79V82M275 84V82M297 79V82" />
          </g>
          <path d="M0 92Q100 76 200 90T400 84V120H0z" className="hero__ground" />
        </svg>
        <div className="hero__deer">
          <svg className="deer deer--buck"><use href="#deer-buck" /></svg>
          <svg className="deer deer--doe"><use href="#deer-doe" /></svg>
        </div>
      </div>
    </header>
  );
}
