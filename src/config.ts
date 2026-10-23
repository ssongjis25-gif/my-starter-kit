// 앱 전체에서 쓰는 설정값 모음.
// .env 에 VITE_APP_TITLE 이 없어도 화면이 비지 않도록 기본값(??)을 둡니다.
export const appTitle: string = import.meta.env.VITE_APP_TITLE ?? 'My Starter Kit'
