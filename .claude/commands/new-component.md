---
description: 새 React 컴포넌트 파일(TypeScript + Tailwind)을 만듭니다
argument-hint: <컴포넌트이름> [하위폴더]
---

새 컴포넌트를 만들어 주세요. 인자: $ARGUMENTS

## 인자 해석
- 첫 번째 단어: 컴포넌트 이름 (PascalCase, 예: `Button`). 소문자나 kebab-case로 들어오면 PascalCase로 바꿉니다.
- 두 번째 단어(선택): `src/components/` 아래 하위 폴더 이름 (예: `ui`). 없으면 `src/components/` 바로 아래에 만듭니다.
- 이름이 없으면 파일을 만들지 말고 사용법(`/new-component Button ui`)을 알려 주세요.

## 만들기 전 확인
- 같은 경로에 파일이 이미 있으면 덮어쓰지 말고 사용자에게 알려 주세요.
- `src/components/layout/`의 기존 컴포넌트 스타일을 참고해 맞춰 주세요.

## 파일 규칙
- 경로: `src/components/[하위폴더/]이름.tsx`
- 들여쓰기 2칸, 세미콜론 없음, 작은따옴표 사용 (기존 코드와 동일)
- `export default function 이름()` 형태의 함수 컴포넌트
- props가 필요하면 `interface 이름Props`로 타입을 정의하고, 기본 예시로 `children`이나 `className` 정도만 넣습니다.
- 스타일은 Tailwind CSS 클래스만 사용합니다 (별도 CSS 파일 만들지 않기).
- 주석은 한국어로, 초보자가 이해할 수 있게 꼭 필요한 곳에만 짧게 씁니다.
- React를 따로 import하지 않습니다 (새 JSX 변환 사용 중).

## 예시 결과 (`/new-component Card ui`)

```tsx
import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
}

// 내용을 감싸는 흰색 카드 상자
export default function Card({ children }: CardProps) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      {children}
    </div>
  )
}
```

## 끝난 뒤
- 만든 파일 경로와, 다른 파일에서 쓰는 import 예시를 한국어로 알려 주세요.
  (예: `import Card from '../components/ui/Card'`)
- 다른 파일은 수정하지 않습니다.
