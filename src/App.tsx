import Header from './components/Header'
import ProfileCard from './components/ProfileCard'
import Footer from './components/Footer'
import type { Skill } from './components/SkillBadge'

import './style.css'

const skills: Skill[] = [
  { id: 1, label: 'HTML' },
  { id: 2, label: 'CSS' },
  { id: 3, label: 'JavaScript' },
  { id: 4, label: 'React' },
  { id: 5, label: 'TypeScript' },
]

function App() {
  return (
    <>
      <Header
        name="Muratova Tomiris"
        role="Aspiring Web Developer"
      />

      <ProfileCard
        name="Muratova Tomiris"
        bio="I'm a KBTU student learning web development. I'm taking the IWaMAD course to build real projects and grow a portfolio."
        avatarUrl={`${import.meta.env.BASE_URL}IMG_4152.jpg`}
        email="t_muratova@kbtu.kz"
        githubUrl="https://github.com/"
        skills={skills}
      />

      <Footer
        year={2026}
        name="Muratova Tomiris"
        week="Week 3"
      />
    </>
  )
}

export default App