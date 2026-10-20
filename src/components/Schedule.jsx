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
      ? schedule[current].title
      : drivingToArt
        ? "芸術の森へ向かってドライブ中"
        : null;
  const isDone = (item) => duringTrip && now >= toMinutes(item.end);
  return { current, nowText, isDone };
}

// 時刻欄：出発・解散は1つ、それ以外は開始と終了を縦に並べる
function Times({ item }) {
  if (item.kind === "start") return <span className="rb-time__main">{item.start}</span>;
  if (item.kind === "goal") return <span className="rb-time__main">{item.start}<small>頃</small></span>;
  return (
    <>
      <span className="rb-time__main">{item.start}</span>
      <span className="rb-time__end">{item.end}</span>
    </>
  );
}

// ラリーのコマ図（ロードブック）風のタイムスケジュール
export default function Schedule() {
  const { current, nowText, isDone } = useProgress();

  return (
    <section id="schedule">
      <div className="container">
        <SectionTitle en="ROADBOOK">タイムスケジュール</SectionTitle>

        {nowText && (
          <div className="nowbar" role="status">
            <span className="nowbar__label">現在地</span>
            <span>{nowText}</span>
          </div>
        )}

        <Reveal as="ol" className="roadbook">
          {schedule.map((item, i) => {
            const classes = [
              "rb-row",
              `rb-row--${item.kind}`,
              i === current && "is-now",
              isDone(item) && "is-done",
            ].filter(Boolean).join(" ");
            return (
              <li key={item.start} className={classes}>
                <div className="rb-time">
                  <span className="rb-no">{String(i + 1).padStart(2, "0")}</span>
                  <Times item={item} />
                </div>
                <div className="rb-diagram"><Icon name={item.icon} /></div>
                <div className="rb-body">
                  <div className="rb-meta">
                    <span className="rb-tag">{item.tag}</span>
                    {item.link && (
                      <a className="rb-link" href={item.link.href} target="_blank" rel="noopener noreferrer">
                        <Icon name={item.link.icon} />
                        {item.link.label}
                      </a>
                    )}
                  </div>
                  <h3 className="rb-title">{item.title}</h3>
                  {item.text && <p className="rb-text">{item.text}</p>}
                </div>
              </li>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
