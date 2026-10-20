// 線画アイコン。name は IconSprite の symbol id（"i-" は省略）
export default function Icon({ name }) {
  return (
    <svg className="i" aria-hidden="true">
      <use href={`#i-${name}`} />
    </svg>
  );
}
