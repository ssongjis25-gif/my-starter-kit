import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

// 모든 페이지의 공통 틀: 위(헤더) - 가운데(페이지 내용) - 아래(푸터)
export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-800">
      <Header />
      {/* Outlet 자리에 주소에 맞는 페이지가 끼워져 들어옵니다 */}
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
