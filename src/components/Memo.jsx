import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { useLocalStorage } from "../hooks/useLocalStorage";

export default function Memo() {
  const [memo, setMemo] = useLocalStorage("nara-drive-memo", "");

  return (
    <section id="memo">
      <div className="container">
        <SectionTitle en="NOTE">メモ</SectionTitle>
        <Reveal className="memo">
          <label className="memo__label" htmlFor="memoText">寄りたいお店・気づいたことなど</label>
          <textarea
            id="memoText"
            rows={6}
            placeholder="例：吊り橋の売店でこんにゃくを買う"
            value={memo}
            onChange={(e) => setMemo(e.target.value)}
          />
          <p className="memo__hint">この端末のブラウザにだけ保存されます</p>
        </Reveal>
      </div>
    </section>
  );
}
