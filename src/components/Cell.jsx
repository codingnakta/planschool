// 격자 한 칸. 위젯을 넣기 전까지 자리표시용으로도 쓴다.
function Cell({ children, className = '' }) {
  return (
    <div
      className={`flex items-center justify-center border border-gray-300 bg-gray-50 text-2xl font-bold text-gray-700 ${className}`}
    >
      {children}
    </div>
  )
}

export default Cell
