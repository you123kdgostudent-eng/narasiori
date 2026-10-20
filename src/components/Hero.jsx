import Icon from "./Icon";

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero__sun" aria-hidden="true" />
      <div className="container hero__inner">
        <span className="hero__label">NARA DAY DRIVE</span>
        <h1 className="hero__title">
          <small>奈良縦断！</small>
          芸術の森 <span className="amp">&amp;</span>
          <br />
          谷瀬の吊り橋ドライブ
        </h1>
        <p className="hero__sub">よくばり日帰りドライブしおり</p>
      </div>

      <div className="hero__mountains" aria-hidden="true">
        <svg viewBox="0 0 400 140" preserveAspectRatio="none">
          <path d="M0 70 L40 40 L80 62 L130 22 L180 58 L220 34 L270 66 L320 28 L370 56 L400 44 V140 H0Z" fill="#5b7a69" opacity=".55" />
          <path d="M0 96 L50 66 L95 88 L150 56 L205 90 L255 62 L300 92 L350 70 L400 86 V140 H0Z" fill="#3d5e4f" opacity=".85" />
          {/* 吊り橋のシルエット */}
          <g stroke="#f7f3ea" strokeWidth="1.2" fill="none" opacity=".75">
            <path d="M150 94 Q205 120 260 94" />
            <line x1="150" y1="84" x2="150" y2="104" />
            <line x1="260" y1="84" x2="260" y2="104" />
            <line x1="150" y1="104" x2="260" y2="104" />
            <line x1="172" y1="101" x2="172" y2="104" />
            <line x1="194" y1="105" x2="194" y2="104" />
            <line x1="216" y1="105" x2="216" y2="104" />
            <line x1="238" y1="101" x2="238" y2="104" />
          </g>
          <path d="M0 116 Q100 100 200 114 T400 110 V140 H0Z" fill="#2e4a3e" />
          <path d="M0 132 Q100 124 200 132 T400 130 V140 H0Z" fill="#f7f3ea" />
        </svg>
      </div>

      <div className="hero__deer" aria-hidden="true">
        <svg className="deer deer--buck"><use href="#deer-buck" /></svg>
        <svg className="deer deer--doe"><use href="#deer-doe" /></svg>
      </div>
      <div className="hero__car" aria-hidden="true"><Icon name="car" /></div>
    </header>
  );
}
