import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { schedule } from "../data/trip";
import { toMinutes, useNowMinutes } from "../hooks/useNow";

// 現在時刻から「いまココ」の予定と、終わった予定を求める
function useProgress() {
  const now = useNowMinutes();
  const current = schedule.findIndex(
    (item) => now >= toMinutes(item.start) && now < toMinutes(item.end)
  );
  // 出発後〜芸術の森到着までの移動中（この区間は予定カードがない）
  const drivingToArt = current === -1 && now >= toMinutes("10:15") && now < toMinutes("11:15");
  const duringTrip = current !== -1 || drivingToArt;

  const nowText =
    current !== -1
      ? `いまココ：${schedule[current].title}`
      : drivingToArt
        ? "いまココ：芸術の森へ向かってドライブ中"
        : null;
  const isDone = (item) => duringTrip && now >= toMinutes(item.end);
  return { current, nowText, isDone };
}

export default function Schedule() {
  const { current, nowText, isDone } = useProgress();

  return (
    <section id="schedule">
      <div className="container">
        <SectionTitle>タイムスケジュール</SectionTitle>

        {nowText && (
          <div className="nowbar is-visible" role="status">
            <span className="nowbar__dot" />
            <span>{nowText}</span>
          </div>
        )}

        <ol className="timeline">
          {schedule.map((item, i) => {
            const classes = [
              "tl-item",
              `tl-item--${item.kind}`,
              i === current && "is-now",
              isDone(item) && "is-done",
            ].filter(Boolean).join(" ");
            return (
              <Reveal as="li" key={item.start} className={classes}>
                <div className="tl-icon"><Icon name={item.icon} /></div>
                <div className="tl-card">
                  <div className="tl-head">
                    <span className="tl-time">{item.time}</span>
                    <span className="tl-tag">{item.tag}</span>
                    {item.link && (
                      <a
                        className={`tl-link${item.kind === "spot" ? " tl-link--accent" : ""}`}
                        href={item.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon name={item.link.icon} />
                        {item.link.label}
                      </a>
                    )}
                  </div>
                  <h3 className="tl-title">{item.title}</h3>
                  {item.text && <p className="tl-text">{item.text}</p>}
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
