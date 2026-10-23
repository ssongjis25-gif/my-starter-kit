import { Link } from 'react-router-dom'

// 없는 주소로 들어왔을 때 보이는 404 페이지
export default function NotFoundPage() {
  return (
    <section className="py-16 text-center">
      <p className="text-6xl font-bold text-indigo-600">404</p>
      <h1 className="mt-4 text-2xl font-bold">페이지를 찾을 수 없어요</h1>
      <p className="mt-2 text-slate-600">주소가 잘못되었거나 삭제된 페이지예요.</p>
      <Link
        to="/"
        className="mt-6 inline-block rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
      >
        홈으로 돌아가기
      </Link>
    </section>
  )
}
