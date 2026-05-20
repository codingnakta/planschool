// 격자 레이아웃 프레임.
// 가로 1:2:2:1, 세로 1:4 — 자식(셀)들을 그대로 격자에 배치한다.
function AppLayout({ children }) {
  return (
    <div className="grid min-h-full w-full grid-cols-[1fr_2fr_2fr_1fr] grid-rows-[1fr_4fr] px-4 pt-4 bg-red-100">
      {children}
    </div>
  );
}

export default AppLayout;
