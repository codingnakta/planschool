import AppLayout from '../layouts/AppLayout'
import Cell from '../components/Cell'
import Profile from '../widgets/Profile'

function Home() {
  return (
    <AppLayout>
      {/* 1행 — 1:2:2:1 */}
      <Cell>
        <Profile />
      </Cell>
      <Cell>Top-2 (2fr)</Cell>
      <Cell>Top-3 (2fr)</Cell>
      <Cell>Top-4 (1fr)</Cell>

      {/* 2행 — 1:2:2:1 */}
      <Cell>1 (1fr)</Cell>
      <Cell>2 (2fr)</Cell>
      <Cell>3 (2fr)</Cell>
      <Cell>4 (1fr)</Cell>
    </AppLayout>
  )
}

export default Home
