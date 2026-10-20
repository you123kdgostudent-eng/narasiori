import DeerSign from "./DeerSign";

export default function Footer() {
  return (
    <footer>
      <DeerSign className="footer__deer-sign" pole={false} />
      <p className="footer__lead">鹿の飛び出しに注意して、いってらっしゃい。</p>
      <p className="footer__sub">安全運転で素敵な一日を</p>
    </footer>
  );
}
