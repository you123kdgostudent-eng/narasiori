// しおりの中身はすべてこのファイルにまとめています。
// 予定や持ち物を変えたいときは、ここを書き換えるだけでOKです。

const TENNOJI = "天王寺駅";
const ART_FOREST = "室生山上公園芸術の森";
const TANIZE = "谷瀬の吊り橋";
const GOJO = "奈良県五條市";

const route = (origin, destination) =>
  "https://www.google.com/maps/dir/?api=1" +
  `&origin=${encodeURIComponent(origin)}` +
  `&destination=${encodeURIComponent(destination)}` +
  "&travelmode=driving";

const search = (query) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

export const summary = [
  { icon: "clock", label: "集合", value: "10:00" },
  { icon: "pin", label: "集合場所", value: "天王寺" },
  { icon: "road", label: "走行距離", value: "約250km" },
  { icon: "hourglass", label: "総移動時間", value: "約5時間45分" },
];

// kind: start（出発） / spot（立ち寄り） / move（移動） / goal（解散）
// start・end はコマ図の時刻と「いまココ」表示に使います（goal は start のみ表示）
export const schedule = [
  {
    kind: "start", start: "10:00", end: "10:15", icon: "car",
    tag: "START",
    title: "天王寺を出発", text: "天王寺で合流。西名阪道で宇陀市へ。",
    link: { href: route(TENNOJI, ART_FOREST), icon: "map", label: "ルート" },
  },
  {
    kind: "spot", start: "11:15", end: "13:30", icon: "palette",
    tag: "宇陀市",
    title: "芸術の森 ＆ 軽めのごはん", text: "室生山上公園で野外アートとランチ。",
    link: { href: search(ART_FOREST), icon: "pin", label: "地図" },
  },
  {
    kind: "move", start: "13:30", end: "15:30", icon: "mountain",
    tag: "約2時間",
    title: "十津川村へ大移動",
    link: { href: route(ART_FOREST, TANIZE), icon: "map", label: "ルート" },
  },
  {
    kind: "spot", start: "15:30", end: "17:00", icon: "bridge",
    tag: "十津川村",
    title: "谷瀬の吊り橋 ＆ 絶景ブレイク", text: "高さ54m。名物こんにゃくでひと休み。",
    link: { href: search(TANIZE), icon: "pin", label: "地図" },
  },
  {
    kind: "move", start: "17:00", end: "18:15", icon: "sunset",
    tag: "約1時間15分",
    title: "五條方面へ山を下りる",
    link: { href: route(TANIZE, GOJO), icon: "map", label: "ルート" },
  },
  {
    kind: "spot", start: "18:15", end: "19:45", icon: "bowl",
    tag: "五條・橿原",
    title: "帰り道で夕ごはん", text: "お店は当日の気分で決めよう。",
    link: { href: search("五條市 夕食"), icon: "pin", label: "お店" },
  },
  {
    kind: "move", start: "19:45", end: "21:00", icon: "car",
    tag: "約1時間15分",
    title: "天王寺へ帰路",
    link: { href: route(GOJO, TENNOJI), icon: "map", label: "ルート" },
  },
  {
    kind: "goal", start: "21:00", end: "22:00", icon: "deer",
    tag: "GOAL",
    title: "天王寺到着・解散",
  },
];

// 「1日の流れ」のルートマップ（座標は 320×340 の地図上の位置）
export const routeMap = {
  pins: [
    { x: 60, y: 70, name: "天王寺", time: "10:00発・21:00着", labelX: 74, labelY: 96, anchor: "start" },
    { x: 258, y: 100, name: "芸術の森", time: "11:15〜13:30", labelX: 246, labelY: 122, anchor: "end" },
    { x: 175, y: 290, name: "谷瀬の吊り橋", time: "15:30〜17:00", labelX: 188, labelY: 308, anchor: "start" },
    { x: 105, y: 200, name: "五條で夕ごはん", time: "18:15〜19:45", labelX: 118, labelY: 198, anchor: "start" },
  ],
  // ms はアニメーションの長さ（実際の運転時間に比例）
  segments: [
    { d: "M60 70C120 30 210 40 258 100", chip: { x: 163, y: 47, label: "約1時間15分" }, ms: 1300 },
    { d: "M258 100C290 160 255 225 175 290", chip: { x: 258, y: 193, label: "約2時間" }, ms: 1900 },
    { d: "M175 290C140 275 110 250 105 200", chip: { x: 129, y: 258, label: "約1時間15分" }, ms: 1300 },
    { d: "M105 200C100 150 50 120 60 70", chip: { x: 77, y: 135, label: "約1時間15分" }, ms: 1300 },
  ],
};

export const flowSteps = [
  { when: "朝", title: "天王寺 → 宇陀", text: "10:00に出発。芸術の森でアート散策とランチ" },
  { when: "昼", title: "宇陀 → 十津川", text: "山あいを約2時間南下して、谷瀬の吊り橋で絶景" },
  { when: "夕", title: "十津川 → 五條", text: "山を下りて、夕ごはんでゆっくりひと休み" },
  { when: "夜", title: "五條 → 天王寺", text: "21:00頃に到着・解散" },
];

export const points = [
  {
    icon: "road", title: "本格ロングドライブ",
    body: ["総移動時間 ", { strong: "約5時間45分" }, "、走行距離 ", { strong: "約250km" }, "。運転手さんの負担を全員でフォロー！"],
  },
  { icon: "shoe", title: "動きやすい靴で", body: ["芸術の森の散策と吊り橋は歩きます。ヒールやサンダルは避けて。"] },
  { icon: "jacket", title: "羽織るものを", body: ["山間部は市街地より気温が低め。夕方に向けて冷えるので一枚あると安心です。"] },
];

// { em: "..." } の部分が強調表示になります
export const safety = [
  [{ em: "2時間に1回" }, "を目安に、道の駅やSA・PAでこまめに休憩しましょう。"],
  ["運転交代ができる場合は無理せず交代を。眠気を感じたらすぐ休憩。"],
  ["十津川方面は", { em: "カーブ・狭い道・落石" }, "に注意。スピードは控えめに。"],
  ["山間部はガソリンスタンドが少なめ。", { em: "出発前に満タン" }, "にしておくと安心です。"],
  ["電波が入りにくい場所あり。ルートは事前にオフラインで確認を。"],
  ["十津川からの帰りは", { em: "日没後の山道" }, "。早めのライト点灯、対向車がいないときはハイビームを。"],
  ["夕ごはんのあとは眠くなりがち。", { em: "21時の解散まで" }, "気を抜かずに。"],
];

export const checklist = [
  { id: "shoes", label: "動きやすい靴" },
  { id: "jacket", label: "羽織るもの（山間部用）" },
  { id: "license", label: "運転免許証" },
  { id: "drink", label: "飲み物・眠気覚ましのおやつ" },
  { id: "battery", label: "モバイルバッテリー" },
  { id: "cash", label: "現金（駐車場・売店用）" },
];
