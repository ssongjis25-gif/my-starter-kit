import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'

// "주소 ↔ 페이지" 연결표입니다. 새 페이지는 여기에 Route를 한 줄 추가하면 됩니다.
export default function App() {
  return (
    <Routes>
      {/* Layout(헤더/푸터) 안에서 페이지만 바뀝니다 */}
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* path="*" 는 위에 없는 모든 주소 → 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
