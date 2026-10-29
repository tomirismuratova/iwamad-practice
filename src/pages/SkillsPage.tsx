import SkillBadge, { type Skill } from '../components/SkillBadge'

const skills: Skill[] = [
  { id: 1, label: 'HTML' },
  { id: 2, label: 'CSS' },
  { id: 3, label: 'JavaScript' },
  { id: 4, label: 'React' },
  { id: 5, label: 'TypeScript' },
]

function SkillsPage() {
  return (
    <main>
      <h1>My Skills</h1>

      <div className="skills">
        {skills.map((skill) => (
          <SkillBadge key={skill.id} skill={skill} />
        ))}
      </div>
    </main>
  )
}

export default SkillsPage