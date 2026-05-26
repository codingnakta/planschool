import { useState, useEffect } from "react";

export default function NowTime() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n) => String(n).padStart(2, "0");
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const dateStr = `${now.getFullYear()}년 ${pad(now.getMonth() + 1)}월 ${pad(now.getDate())}일 (${days[now.getDay()]})`;

  const START_HOUR = 9;
  const END_HOUR = 18;
  const totalMinutes = (END_HOUR - START_HOUR) * 60;
  const elapsedMinutes = (now.getHours() - START_HOUR) * 60 + now.getMinutes();
  const progress = Math.min(100, Math.max(0, (elapsedMinutes / totalMinutes) * 100));

  return (
    <div className="w-full h-full p-4">
      <p className="font-medium text-xl mb-4">지금은</p>
      <p className="font-bold text-6xl mb-2">
        {pad(now.getHours())}:{pad(now.getMinutes())}:{pad(now.getSeconds())}
      </p>
      <p className="font-medium text-xl mt-2 ml-2">{dateStr}</p>
      <div className="flex items-center gap-3 mt-4 ml-2">
        <span className="text-sm font-medium whitespace-nowrap">출근 {pad(START_HOUR)}:00</span>
        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gray-500 rounded-full transition-all duration-1000"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="text-sm font-medium whitespace-nowrap">퇴근 {pad(END_HOUR)}:00</span>
      </div>
    </div>
  );
}
