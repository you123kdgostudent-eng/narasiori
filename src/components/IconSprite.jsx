// ページ全体で使うアイコン（線画）と鹿のイラストの定義。
// <Icon name="car" /> のように id を指定して呼び出します。
const SYMBOLS = "<symbol id=\"i-car\" viewBox=\"0 0 24 24\"><path d=\"M3 13l2-5.2A2 2 0 0 1 6.9 6.5h10.2a2 2 0 0 1 1.9 1.3L21 13v4h-2.7M5.7 17H3v-4h18M9.3 17h5.4\"/><circle cx=\"7.5\" cy=\"17\" r=\"1.8\"/><circle cx=\"16.5\" cy=\"17\" r=\"1.8\"/></symbol>\n" +
  "<symbol id=\"i-palette\" viewBox=\"0 0 24 24\"><path d=\"M12 3a9 9 0 1 0 0 18c1.2 0 1.8-.8 1.8-1.7 0-.5-.2-.9-.5-1.3-.3-.4-.5-.8-.5-1.3 0-1 .8-1.7 1.7-1.7H17a4 4 0 0 0 4-4C21 6.6 17 3 12 3z\"/><circle cx=\"7.5\" cy=\"11\" r=\"1\"/><circle cx=\"10\" cy=\"7\" r=\"1\"/><circle cx=\"14.5\" cy=\"7\" r=\"1\"/></symbol>\n" +
  "<symbol id=\"i-mountain\" viewBox=\"0 0 24 24\"><path d=\"M2 19l7-11 4 6 2.5-3.5L22 19z\"/><path d=\"M7.2 10.8l1.8 1.4 1.7-1.4\"/></symbol>\n" +
  "<symbol id=\"i-bridge\" viewBox=\"0 0 24 24\"><path d=\"M2 16h20M4 8v11M20 8v11M4 8c3 6 13 6 16 0M8 12.4V16M12 13.5V16M16 12.4V16\"/></symbol>\n" +
  "<symbol id=\"i-sunset\" viewBox=\"0 0 24 24\"><path d=\"M3 18h18M6 15a6 6 0 0 1 12 0M12 4v3M4.9 7.9l1.5 1.5M19.1 7.9l-1.5 1.5M8 21h8\"/></symbol>\n" +
  "<symbol id=\"i-flag\" viewBox=\"0 0 24 24\"><path d=\"M5 21V4h11l-2 4 2 4H5\"/></symbol>\n" +
  "<symbol id=\"i-clock\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M12 7v5l3 2\"/></symbol>\n" +
  "<symbol id=\"i-pin\" viewBox=\"0 0 24 24\"><path d=\"M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z\"/><circle cx=\"12\" cy=\"9.5\" r=\"2.5\"/></symbol>\n" +
  "<symbol id=\"i-road\" viewBox=\"0 0 24 24\"><path d=\"M8 3L4 21M16 3l4 18M12 4v3M12 10.5v3M12 17v3\"/></symbol>\n" +
  "<symbol id=\"i-hourglass\" viewBox=\"0 0 24 24\"><path d=\"M6 3h12M6 21h12M7 3v1a5 5 0 0 0 10 0V3M7 21v-1a5 5 0 0 1 10 0v1M12 9v6\"/></symbol>\n" +
  "<symbol id=\"i-map\" viewBox=\"0 0 24 24\"><path d=\"M9 4L3 6v14l6-2 6 2 6-2V4l-6 2zM9 4v14M15 6v14\"/></symbol>\n" +
  "<symbol id=\"i-shoe\" viewBox=\"0 0 24 24\"><path d=\"M3 8v9h18v-1.5a3 3 0 0 0-2.4-2.9L13 11.5 10 8.5 7 10 3 8zM3 17v2h18v-2M10.5 11.5l1-1M12.5 13l1-1\"/></symbol>\n" +
  "<symbol id=\"i-jacket\" viewBox=\"0 0 24 24\"><path d=\"M9 3l3 3 3-3 5 3-2 5-2-1v11H8V10l-2 1-2-5zM12 6v15\"/></symbol>\n" +
  "<symbol id=\"i-alert\" viewBox=\"0 0 24 24\"><path d=\"M12 3L2 20h20zM12 10v4M12 17h.01\"/></symbol>\n" +
  "<symbol id=\"i-bowl\" viewBox=\"0 0 24 24\"><path d=\"M3 12h18a9 9 0 0 1-18 0zM8 21h8M13 3l-3 7M19 4l-6 6\"/></symbol>\n" +
  "<symbol id=\"deer-buck\" viewBox=\"0 0 120 120\"><path d=\"M14 41C16 36 20 31 26 29C29 27 32 27 35 28L46 16C46 22 43 27 39.5 31C42 40 46 48 54 52C66 50 82 50 92 53C96 54 99 53 101 50.5C101.5 55 99.5 58 97 59.5C99 66 99 74 96.5 80L97.5 104H93.8L92 84.5L90.5 104H86.8L86.3 78C84 76.5 82 75.5 80 75C74 75.5 69 75.5 64 74.5L63.5 104H59.8L58.2 81L55.7 104H52L50.3 70C47 64 44.5 60 41.5 55.5C36.5 50.5 30.5 47.5 24.5 46.2C20 45.3 16 44.2 14 41Z\" fill=\"currentColor\"/><path d=\"M31 29C30 21 32 14 36.5 8M33 18.5C29.5 16 27.5 13 26.5 9M36.5 8C39 6 41.5 5.2 44.5 5.6M35 11.5C37.5 11.5 40 12.5 42 14.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\"/><g style=\"fill: var(--washi)\" opacity=\".85\"><circle cx=\"64\" cy=\"57\" r=\"1.6\"/><circle cx=\"70\" cy=\"55.5\" r=\"1.6\"/><circle cx=\"76\" cy=\"57\" r=\"1.6\"/><circle cx=\"82\" cy=\"55.8\" r=\"1.6\"/><circle cx=\"88\" cy=\"57.5\" r=\"1.6\"/><circle cx=\"67\" cy=\"62\" r=\"1.5\"/><circle cx=\"73\" cy=\"61.5\" r=\"1.5\"/><circle cx=\"79\" cy=\"62\" r=\"1.5\"/><circle cx=\"85\" cy=\"62.5\" r=\"1.5\"/><circle cx=\"24.5\" cy=\"35.5\" r=\"1.3\"/></g></symbol>\n" +
  "<symbol id=\"deer-doe\" viewBox=\"0 0 120 120\"><path d=\"M14 41C16 36 20 31 26 29C29 27 32 27 35 28L46 16C46 22 43 27 39.5 31C42 40 46 48 54 52C66 50 82 50 92 53C96 54 99 53 101 50.5C101.5 55 99.5 58 97 59.5C99 66 99 74 96.5 80L97.5 104H93.8L92 84.5L90.5 104H86.8L86.3 78C84 76.5 82 75.5 80 75C74 75.5 69 75.5 64 74.5L63.5 104H59.8L58.2 81L55.7 104H52L50.3 70C47 64 44.5 60 41.5 55.5C36.5 50.5 30.5 47.5 24.5 46.2C20 45.3 16 44.2 14 41Z\" fill=\"currentColor\"/><g style=\"fill: var(--washi)\" opacity=\".85\"><circle cx=\"64\" cy=\"57\" r=\"1.6\"/><circle cx=\"70\" cy=\"55.5\" r=\"1.6\"/><circle cx=\"76\" cy=\"57\" r=\"1.6\"/><circle cx=\"82\" cy=\"55.8\" r=\"1.6\"/><circle cx=\"88\" cy=\"57.5\" r=\"1.6\"/><circle cx=\"67\" cy=\"62\" r=\"1.5\"/><circle cx=\"73\" cy=\"61.5\" r=\"1.5\"/><circle cx=\"79\" cy=\"62\" r=\"1.5\"/><circle cx=\"85\" cy=\"62.5\" r=\"1.5\"/><circle cx=\"24.5\" cy=\"35.5\" r=\"1.3\"/></g></symbol>\n" +
  "<symbol id=\"i-deer\" viewBox=\"0 0 24 24\"><path d=\"M9 11.5c0 4 1.5 7.5 3 8.5 1.5-1 3-4.5 3-8.5zM9 11.5L5 10M15 11.5l4-1.5M10 9.5V4M10 6.5L8 4.8M14 9.5V4M14 6.5l2-1.7\"/></symbol>\n" +
  "<symbol id=\"i-up\" viewBox=\"0 0 24 24\"><path d=\"M12 19V5M6 11l6-6 6 6\"/></symbol>";

export default function IconSprite() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <defs dangerouslySetInnerHTML={{ __html: SYMBOLS }} />
    </svg>
  );
}
