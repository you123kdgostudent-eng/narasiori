import Icon from "./Icon";
import DeerSign from "./DeerSign";

// 国道の「おにぎり」型ルート番号
function RouteShield({ number }) {
  return (
    <svg className="shield" viewBox="0 0 40 36" aria-label={`国道${number}号`}>
      <path d="M2 2h36v14c0 9-8 15-18 18C10 31 2 25 2 16z" className="shield__body" />
      <text x="20" y="21" textAnchor="middle" className="shield__num">{number}</text>
    </svg>
  );
}

// 案内標識の矢印（直進・右斜め上）
function SignArrow({ turn }) {
  return (
    <svg className="sign-arrow" viewBox="0 0 32 40" aria-hidden="true">
      <g transform={turn ? "rotate(35 16 24)" : undefined}>
        <path d="M16 2L4 16h8v22h8V16h8z" />
      </g>
    </svg>
  );
}

export default function Hero() {
  return (
    <header className="hero" id="top">
      <p className="hero__eyebrow">NARA DAY DRIVE ／ 日帰りドライブしおり</p>

      <div className="signpost">
        <div className="guide-sign">
          <div className="guide-sign__shields">
            <span className="expressway">西名阪道</span>
            <RouteShield number="168" />
          </div>
          <h1 className="guide-sign__title">
            <span className="guide-sign__lead">奈良縦断！</span>
            <span className="guide-sign__row">
              <SignArrow />
              <span className="guide-sign__dest">
                <span className="ja">芸術の森</span>
                <span className="en">Art Forest</span>
              </span>
              <span className="guide-sign__area">宇陀</span>
            </span>
            <span className="guide-sign__row">
              <SignArrow turn />
              <span className="guide-sign__dest">
                <span className="ja">谷瀬の吊り橋</span>
                <span className="en">Tanize Suspension Bridge</span>
              </span>
              <span className="guide-sign__area">十津川</span>
            </span>
          </h1>
          <p className="guide-sign__foot">芸術の森 &amp; 谷瀬の吊り橋ドライブ</p>
        </div>
      </div>

      <DeerSign className="hero__deer-sign" />

      <div className="hero__ridge" aria-hidden="true">
        <svg viewBox="0 0 400 80" preserveAspectRatio="none">
          <path d="M0 50L40 28 78 44 130 12 182 40 226 22 270 46 318 16 362 38 400 26V80H0z" className="ridge-far" />
          <path d="M0 64L52 44 96 60 150 38 210 62 262 44 310 64 356 48 400 58V80H0z" className="ridge-near" />
        </svg>
      </div>
      <div className="hero__road" aria-hidden="true">
        <div className="hero__car"><Icon name="car" /></div>
      </div>
    </header>
  );
}
