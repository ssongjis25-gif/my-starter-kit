# My Starter Kit

새 프로젝트를 시작할 때 복사해서 바로 쓸 수 있는 **나만의 프로젝트 템플릿**입니다.
개발 초보자도 이해할 수 있도록 모든 폴더와 파일의 역할을 아래에 정리했어요.

## 사용된 기술

| 기술 | 한 줄 설명 |
| --- | --- |
| Vite | 개발 서버를 켜고, 완성된 웹사이트로 묶어주는(빌드) 도구 |
| React | 화면을 "컴포넌트"라는 조립 블록으로 만드는 라이브러리 |
| TypeScript | 실수를 미리 잡아주는 똑똑한 JavaScript |
| Tailwind CSS | `class="text-xl font-bold"`처럼 class 이름만으로 디자인하는 도구 |
| React Router | 주소(URL)에 따라 다른 페이지를 보여주는 도구 |
| Zustand | 여러 컴포넌트가 함께 쓰는 값(상태)을 보관하는 "공용 보관함" |

## 실행 방법

터미널을 열고 이 폴더로 이동한 뒤 입력하세요.

```bash
cd ~/my-starter-kit

npm install        # 처음 한 번만: 필요한 라이브러리를 내려받습니다
npm run dev        # 개발 서버 실행 → 브라우저에서 http://localhost:5173 접속
```

| 명령어 | 하는 일 |
| --- | --- |
| `npm run dev` | 개발 서버 실행 (코드를 고치면 화면이 바로 바뀜). 끄려면 터미널에서 `Ctrl + C` |
| `npm run build` | 오류가 없는지 검사하고 배포용 파일을 `dist/` 폴더에 만듦 |
| `npm run preview` | 빌드 결과물을 미리 확인 (먼저 `npm run build` 필요) |
| `npm run lint` | 코드 스타일/실수 검사 |

## 폴더 구조

```
my-starter-kit/
├── public/                  # 가공 없이 그대로 제공되는 파일 (파비콘 등)
├── src/                     # ⭐ 우리가 코드를 작성하는 곳
│   ├── components/
│   │   └── layout/          # 모든 페이지에 공통으로 보이는 틀
│   │       ├── Layout.tsx   #   헤더 + 페이지 내용 + 푸터를 조립
│   │       ├── Header.tsx   #   위쪽 영역: 앱 이름, 메뉴, 카운터 표시
│   │       └── Footer.tsx   #   아래쪽 영역: 저작권 표시
│   ├── pages/               # 주소마다 보여줄 "페이지" 모음
│   │   ├── HomePage.tsx     #   홈 (/) : 소개 문구와 카운터 예제
│   │   ├── AboutPage.tsx    #   소개 (/about) : 사용 기술 목록
│   │   └── NotFoundPage.tsx #   404 : 없는 주소로 들어왔을 때
│   ├── stores/              # Zustand 상태 보관함 모음
│   │   └── useCounterStore.ts #  카운터 예제 (숫자 + 증가/감소/초기화)
│   ├── App.tsx              # "주소 ↔ 페이지" 연결표 (라우팅)
│   ├── main.tsx             # 앱의 시작점 (여기서 화면이 처음 그려짐)
│   ├── config.ts            # 앱 이름 같은 공통 설정값
│   ├── index.css            # Tailwind CSS를 불러오는 파일
│   └── vite-env.d.ts        # 환경변수의 타입 정보
├── index.html               # 웹사이트의 뼈대 HTML (제목, 언어 설정 등)
├── package.json             # 프로젝트 정보 + 설치된 라이브러리 + 명령어 목록
├── vite.config.ts           # Vite 설정 (React, Tailwind 플러그인 연결)
├── tsconfig*.json           # TypeScript 설정 (보통 건드릴 일 없음)
├── .oxlintrc.json           # lint(코드 검사) 설정
├── .env.example             # 환경변수 견본 (아래에서 설명)
└── .gitignore               # Git에 올리지 않을 파일 목록
```

### 직접 만들어지는 폴더 (Git에는 안 올라가요)

- `node_modules/` : `npm install` 하면 생기는 라이브러리 보관 폴더. 매우 크지만 지워도 다시 설치하면 돼요.
- `dist/` : `npm run build` 하면 생기는 배포용 결과물.

## 자주 하는 작업

### 새 페이지 추가하기 (예: 연락처)

1. `src/pages/ContactPage.tsx` 파일을 만듭니다.

   ```tsx
   export default function ContactPage() {
     return <h1 className="text-3xl font-bold">연락처</h1>
   }
   ```

2. `src/App.tsx`에 import와 Route를 추가합니다. (`path="*"` 보다 **위에** 두세요)

   ```tsx
   import ContactPage from './pages/ContactPage'
   // ...
   <Route path="/contact" element={<ContactPage />} />
   ```

3. `src/components/layout/Header.tsx`의 `menus` 목록에 한 줄 추가하면 메뉴에도 나타납니다.

   ```tsx
   { to: '/contact', label: '연락처' },
   ```

### 새 상태(공용 값) 추가하기

`src/stores/useCounterStore.ts`를 복사해서 이름과 내용을 바꾸면 됩니다.
컴포넌트에서는 `const count = useCounterStore((state) => state.count)`처럼 필요한 값만 꺼내 씁니다.

### 환경변수(.env) 사용하기

환경변수는 "코드 밖에서 바꿀 수 있는 설정값"이에요.

1. `.env.example`을 복사해 `.env`를 만듭니다: `cp .env.example .env`
2. `.env` 안의 값을 수정합니다. (예: `VITE_APP_TITLE=내 사이트`)
3. 개발 서버를 껐다가(`Ctrl + C`) 다시 `npm run dev` 합니다.

> - 브라우저에서 쓰려면 이름이 반드시 `VITE_`로 시작해야 합니다.
> - `.env`는 `.gitignore`에 들어 있어 GitHub에 올라가지 않습니다. 견본인 `.env.example`만 올라갑니다.
> - 브라우저 코드에 들어간 값은 누구나 볼 수 있으니 **진짜 비밀번호·비밀키는 넣지 마세요.**
