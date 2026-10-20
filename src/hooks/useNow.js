import { useEffect, useState } from "react";

// 現在時刻を「0時からの分数」で返す（1分ごとに更新）
export function useNowMinutes() {
  const read = () => {
    const d = new Date();
    return d.getHours() * 60 + d.getMinutes();
  };
  const [now, setNow] = useState(read);

  useEffect(() => {
    const id = setInterval(() => setNow(read()), 60 * 1000);
    return () => clearInterval(id);
  }, []);

  return now;
}

export const toMinutes = (hm) => {
  const [h, m] = hm.split(":").map(Number);
  return h * 60 + m;
};
