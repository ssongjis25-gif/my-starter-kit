import { create } from 'zustand'

// 카운터 상태의 "모양"을 정의합니다. (값 + 값을 바꾸는 함수들)
interface CounterState {
  count: number
  increase: () => void
  decrease: () => void
  reset: () => void
}

// create()로 공용 보관함을 만듭니다.
// 컴포넌트에서 useCounterStore()를 호출하면 어디서든 같은 값을 쓸 수 있어요.
export const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}))
