import { useEffect, useState } from "react";
import Icon from "./Icon";

export default function ToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      className={`to-top${visible ? " is-visible" : ""}`}
      aria-label="ページの先頭へ戻る"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <Icon name="up" />
    </button>
  );
}
