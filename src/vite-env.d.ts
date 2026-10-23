/// <reference types="vite/client" />

// .env 파일에서 불러오는 환경변수의 타입을 알려줍니다.
// 새 환경변수를 추가하면 여기에도 적어주세요. (이름은 반드시 VITE_로 시작)
interface ImportMetaEnv {
  readonly VITE_APP_TITLE?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
