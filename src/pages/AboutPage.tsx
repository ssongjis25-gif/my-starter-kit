// 사용한 기술 목록. 내용을 바꾸면 화면에 바로 반영됩니다.
const techs = [
  { name: 'Vite', desc: '개발 서버와 빌드를 빠르게 해주는 도구' },
  { name: 'React', desc: '화면을 컴포넌트(조립 블록)로 만드는 라이브러리' },
  { name: 'TypeScript', desc: '실수를 미리 잡아주는 똑똑한 JavaScript' },
  { name: 'Tailwind CSS', desc: 'class 이름만으로 디자인하는 CSS 도구' },
  { name: 'React Router', desc: '주소에 따라 다른 페이지를 보여주는 도구' },
  { name: 'Zustand', desc: '여러 컴포넌트가 함께 쓰는 값(상태)을 관리하는 도구' },
]

export default function AboutPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold">소개</h1>
      <p className="mt-3 text-slate-600">이 Starter Kit에는 아래 기술이 들어 있어요.</p>
      <ul className="mt-6 space-y-3">
        {techs.map((tech) => (
          <li key={tech.name} className="rounded-xl border border-slate-200 bg-white p-4">
            <span className="font-semibold text-indigo-600">{tech.name}</span>
            <span className="ml-2 text-slate-600">{tech.desc}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
