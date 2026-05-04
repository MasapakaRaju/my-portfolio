import { useEffect, useRef } from 'react'
import type { Skill } from '../../types'
import './Skills.css'

interface SkillsProps {
  skills: Skill[]
}

export default function Skills({ skills }: SkillsProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.fade-in').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const grouped = skills.reduce<Record<string, Skill[]>>((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = []
    acc[skill.category].push(skill)
    return acc
  }, {})

  const categoryOrder = ['Backend', 'Frontend', 'Database', 'Tools', 'Cloud']
  const orderedCategories = categoryOrder.filter(c => grouped[c])

  return (
    <section id="skills" ref={ref}>
      <div className="container">
        <h2 className="section-title fade-in">Skills & Technologies</h2>
        <p className="section-subtitle fade-in">Tools and technologies I work with</p>

        <div className="skills-grid">
          {orderedCategories.map(category => (
            <div key={category} className="skill-category fade-in">
              <h3 className="category-name">{category}</h3>
              <div className="skill-tags">
                {grouped[category].map(skill => (
                  <div key={skill.id} className="skill-tag">
                    <span className="skill-name">{skill.name}</span>
                    <div className="skill-bar-wrap">
                      <div
                        className="skill-bar"
                        style={{ '--proficiency': `${skill.proficiency}%` } as React.CSSProperties}
                      />
                    </div>
                    <span className="skill-percent">{skill.proficiency}%</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
