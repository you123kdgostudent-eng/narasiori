// trip.js の ["ふつうの文", { em: "強調" }, { strong: "太字" }] を表示する
export default function RichText({ parts }) {
  return parts.map((part, i) => {
    if (typeof part === "string") return part;
    if (part.em) return <em key={i}>{part.em}</em>;
    return <strong key={i}>{part.strong}</strong>;
  });
}
