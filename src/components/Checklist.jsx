import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { checklist } from "../data/trip";
import { useLocalStorage } from "../hooks/useLocalStorage";

export default function Checklist() {
  // { shoes: true, ... } の形でこの端末に保存
  const [checked, setChecked] = useLocalStorage("nara-drive-checklist", {});
  const done = checklist.filter((item) => checked[item.id]).length;

  return (
    <section id="checklist">
      <div className="container">
        <SectionTitle>持ち物</SectionTitle>
        <Reveal as="ul" className="checklist">
          {checklist.map((item) => (
            <li key={item.id}>
              <label>
                <input
                  type="checkbox"
                  id={`check-${item.id}`}
                  checked={!!checked[item.id]}
                  onChange={(e) => setChecked({ ...checked, [item.id]: e.target.checked })}
                />
                <span className="checkbox" />
                <span className="check-text">
                  {item.label}
                  {item.note && <small>{item.note}</small>}
                </span>
              </label>
            </li>
          ))}
        </Reveal>
        <p className="check-progress">
          {done === checklist.length ? "全部そろいました" : `${checklist.length}つ中 ${done}つ準備済み`}
        </p>
      </div>
    </section>
  );
}
