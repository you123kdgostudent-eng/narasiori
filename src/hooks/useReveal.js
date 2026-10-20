import { useEffect, useRef, useState } from "react";

// 画面に入った要素を「下からふわっと」表示するためのフック。
// 1つの IntersectionObserver を共有し、同時に画面に入った要素は 0.12 秒ずつずらして表示します。
const callbacks = new Map();
let observer = null;

function getObserver() {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        let order = 0;
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          callbacks.get(entry.target)?.(order * 0.12);
          observer.unobserve(entry.target); // 一度表示したら監視をやめる
          callbacks.delete(entry.target);
          order++;
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
  }
  return observer;
}

export function useReveal() {
  const ref = useRef(null);
  const [state, setState] = useState({ shown: false, delay: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setState({ shown: true, delay: 0 });
      return;
    }
    const io = getObserver();
    callbacks.set(el, (delay) => setState({ shown: true, delay }));
    io.observe(el);
    return () => {
      io.unobserve(el);
      callbacks.delete(el);
    };
  }, []);

  return [ref, state];
}
