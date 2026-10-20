// 黄色いひし形の「動物が飛び出すおそれあり」標識（鹿）
export default function DeerSign({ className = "", pole = true }) {
  return (
    <div className={`deer-sign ${className}`.trim()} aria-hidden="true">
      <svg viewBox="0 0 100 100">
        <rect x="17" y="17" width="66" height="66" rx="6" transform="rotate(45 50 50)" className="deer-sign__plate" />
        <rect x="22" y="22" width="56" height="56" rx="3" transform="rotate(45 50 50)" className="deer-sign__rim" />
        <use href="#deer-buck" x="27" y="25" width="46" height="46" className="deer-sign__deer" />
      </svg>
      {pole && <span className="deer-sign__pole" />}
    </div>
  );
}
