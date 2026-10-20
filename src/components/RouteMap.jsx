import { useCallback, useEffect, useRef, useState } from "react";
import { routeMap } from "../data/trip";

const { pins, segments } = routeMap;
const reduceMotion = () =>
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

// ゆっくり出てゆっくり止まる
const easeInOut = (p) => (p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2);

// 1日の流れのルートマップ。画面に入ると、道を描きながら車が走ります。
export default function RouteMap({ onStepChange }) {
  const mapRef = useRef(null);
  const carRef = useRef(null);
  const routeRefs = useRef([]);
  const playId = useRef(0);
  const [playing, setPlaying] = useState(false);
  const [pinsOn, setPinsOn] = useState(1); // 表示済みのピンの数
  const [chipsOn, setChipsOn] = useState(0); // 表示済みの所要時間ラベルの数

  const play = useCallback(() => {
    const id = ++playId.current; // 再生し直したら古いアニメーションは止める
    setPlaying(true);
    setPinsOn(1);
    setChipsOn(0);
    routeRefs.current.forEach((path) => {
      const len = path.getTotalLength();
      path.style.strokeDasharray = len;
      path.style.strokeDashoffset = len;
    });

    const runSegment = (i) => {
      onStepChange(i < segments.length ? i : -1);
      if (i >= segments.length) return;
      const path = routeRefs.current[i];
      const len = path.getTotalLength();
      let start = null;

      const frame = (ts) => {
        if (id !== playId.current) return;
        if (start === null) start = ts;
        const p = Math.min((ts - start) / segments[i].ms, 1);
        const e = easeInOut(p);
        path.style.strokeDashoffset = len * (1 - e);
        const pt = path.getPointAtLength(len * e);
        carRef.current.setAttribute("transform", `translate(${pt.x} ${pt.y})`);
        if (p < 1) {
          requestAnimationFrame(frame);
          return;
        }
        setChipsOn(i + 1);
        setPinsOn(Math.min(i + 2, pins.length));
        setTimeout(() => id === playId.current && runSegment(i + 1), 350);
      };
      requestAnimationFrame(frame);
    };
    runSegment(0);
  }, [onStepChange]);

  // 画面に入ったら1回だけ自動再生
  useEffect(() => {
    if (reduceMotion() || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          play();
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(mapRef.current);
    return () => io.disconnect();
  }, [play]);

  return (
    <div className={`routemap${playing ? " is-playing" : ""}`} ref={mapRef}>
      <svg
        className="routemap__svg"
        viewBox="0 0 320 340"
        role="img"
        aria-label="天王寺から芸術の森、谷瀬の吊り橋、五條を回って天王寺へ戻るルート"
      >
        <rect x="0" y="0" width="320" height="340" rx="14" className="rm-bg" />
        <g className="rm-mtn"><path d="M262 262l14-22 14 22zM280 262l16-26 16 26zM248 278l12-18 12 18z" /></g>
        <g className="rm-compass" transform="translate(296 26)">
          <path d="M0-12L5 4 0 1-5 4z" />
          <text y="18" textAnchor="middle">N</text>
        </g>
        <text className="rm-area" x="18" y="322">大阪</text>
        <text className="rm-area" x="310" y="296" textAnchor="end">十津川</text>

        {segments.map((seg, i) => (
          <g key={seg.d}>
            <path className="rm-road" d={seg.d} />
            <path className="rm-route" d={seg.d} ref={(el) => (routeRefs.current[i] = el)} />
          </g>
        ))}

        {segments.map(({ chip }, i) => {
          const w = chip.label.length * 9.5 + 14;
          return (
            <g key={i} transform={`translate(${chip.x} ${chip.y})`}>
              <g className={`rm-chip${i < chipsOn ? " is-on" : ""}`}>
                <rect x={-w / 2} y="-9" width={w} height="18" rx="9" />
                <text textAnchor="middle" y="3.5">{chip.label}</text>
              </g>
            </g>
          );
        })}

        {pins.map((pin, i) => (
          <g key={pin.name} className={`rm-pin${i < pinsOn ? " is-on" : ""}`} data-pin={i}>
            <circle className="rm-pin__halo" cx={pin.x} cy={pin.y} r="11" />
            <circle className="rm-pin__dot" cx={pin.x} cy={pin.y} r="6" />
            <text className="rm-name" x={pin.labelX} y={pin.labelY} textAnchor={pin.anchor}>{pin.name}</text>
            <text className="rm-time" x={pin.labelX} y={pin.labelY + 14} textAnchor={pin.anchor}>{pin.time}</text>
          </g>
        ))}

        <g className="rm-car" ref={carRef} transform={`translate(${pins[0].x} ${pins[0].y})`}>
          <circle r="12" />
          <use href="#i-car" x="-8" y="-8" width="16" height="16" />
        </g>
      </svg>
      <button className="btn routemap__replay" type="button" onClick={() => !reduceMotion() && play()}>
        もう一度ルートを再生
      </button>
    </div>
  );
}
