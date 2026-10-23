import { appTitle } from '../../config'

// 연도는 한 번만 계산하면 되므로 컴포넌트 밖에 둡니다.
const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-6 text-center text-sm text-slate-500">
      © {currentYear} {appTitle}. All rights reserved.
    </footer>
  )
}
