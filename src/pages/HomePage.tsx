import { useCounterStore } from '../stores/useCounterStore'

export default function HomePage() {
  // 보관함에서 필요한 값과 함수를 꺼내 씁니다.
  const { count, increase, decrease, reset } = useCounterStore()

  return (
    <section>
      <h1 className="text-3xl font-bold">환영합니다 👋</h1>
      <p className="mt-3 text-slate-600">
        Vite + React + TypeScript + Tailwind CSS로 만든 나만의 Starter Kit입니다.
      </p>

      <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6 text-center">
        <h2 className="font-semibold">Zustand 카운터 예제</h2>
        <p className="my-4 text-5xl font-bold text-indigo-600">{count}</p>
        <div className="flex justify-center gap-2">
          <button
            onClick={decrease}
            className="rounded-lg bg-slate-200 px-4 py-2 hover:bg-slate-300"
          >
            -1
          </button>
          <button
            onClick={increase}
            className="rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
          >
            +1
          </button>
          <button
            onClick={reset}
            className="rounded-lg border border-slate-300 px-4 py-2 hover:bg-slate-100"
          >
            초기화
          </button>
        </div>
        <p className="mt-4 text-sm text-slate-500">
          위쪽 헤더의 카운터 숫자도 함께 바뀌는 걸 확인해 보세요!
        </p>
      </div>
    </section>
  )
}
