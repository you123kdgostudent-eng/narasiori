import { useEffect, useState } from "react";

// この端末のブラウザに値を保存する useState。
// プライベートモードなどで保存できない場合も、画面はそのまま動きます。
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    let saved = null;
    try {
      saved = localStorage.getItem(key);
      return saved === null ? initialValue : JSON.parse(saved);
    } catch {
      // 以前の版はメモを文字列のまま保存していたので、そのまま読み込む
      return typeof initialValue === "string" && saved !== null ? saved : initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // 保存できなくても表示には影響しないので何もしない
    }
  }, [key, value]);

  return [value, setValue];
}
