import { NavLink } from 'react-router-dom'
import { appTitle } from '../../config'
import { useCounterStore } from '../../stores/useCounterStore'

// 메뉴 목록. 메뉴를 추가하려면 여기에 한 줄만 더하면 됩니다.
const menus = [
  { to: '/', label: '홈' },
  { to: '/about', label: '소개' },
]

// 현재 페이지 메뉴는 진하게, 나머지는 연하게 보여줍니다.
const linkClass = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? 'font-semibold text-indigo-600'
    : 'text-slate-600 hover:text-indigo-600'

export default function Header() {
  // 홈 페이지의 카운터와 같은 값을 공유합니다.
  const count = useCounterStore((state) => state.count)

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4">
        <span className="text-lg font-bold">{appTitle}</span>
        <nav className="flex items-center gap-6">
          {menus.map((menu) => (
            <NavLink key={menu.to} to={menu.to} className={linkClass}>
              {menu.label}
            </NavLink>
          ))}
          <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
            카운터: {count}
          </span>
        </nav>
      </div>
    </header>
  )
}
