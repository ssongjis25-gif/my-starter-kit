import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // react: React 사용, tailwindcss: Tailwind CSS 스타일 기능 활성화
  plugins: [react(), tailwindcss()],
})
