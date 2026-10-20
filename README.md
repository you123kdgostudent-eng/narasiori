# 奈良縦断ドライブしおり

天王寺発、室生山上公園 芸術の森と谷瀬の吊り橋をめぐる日帰りドライブのWEBしおり（React + Vite）。

## 動かし方

```bash
npm install
npm run dev      # 開発用サーバー（http://localhost:5173）
npm run build    # dist/index.html に1ファイルで書き出し（ダブルクリックでも開けます）
```

## 予定を変えたいとき

中身はすべて `src/data/trip.js` にまとまっています。時刻・場所・持ち物などはこのファイルを書き換えるだけで反映されます。

## フォルダ構成

- `src/data/trip.js` … スケジュール、ルートマップ、持ち物などのデータ
- `src/components/` … 画面の部品（ヒーロー、タイムライン、ルートマップなど）
- `src/hooks/` … スクロール表示、現在時刻、端末への保存
- `src/styles.css` … 見た目
- `legacy/shiori.html` … React化する前の1ファイル版
