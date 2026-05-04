import { useEffect, useRef } from 'react'
import type { Experience as ExperienceType } from '../../types'
import './Experience.css'

interface ExperienceProps {
  experiences: ExperienceType[]
}

export default function Experience({ experiences }: ExperienceProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.fade-in').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" ref={ref}>
      <div className="container">
        <h2 className="section-title fade-in">Work Experience</h2>
        <p className="section-subtitle fade-in">My professional journey so far</p>

        <div className="timeline">
          {experiences.map((exp, i) => (
            <div key={exp.id} className="timeline-item fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="timeline-dot">
                {exp.isCurrent && <span className="dot-pulse" />}
              </div>
              <div className="timeline-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <p className="exp-company">{exp.company}</p>
                  </div>
                  <div className="exp-meta">
                    <span className={`exp-badge ${exp.isCurrent ? 'current' : ''}`}>
                      {exp.isCurrent ? 'Current' : 'Past'}
                    </span>
                    <span className="exp-dates">
                      {exp.startDate} — {exp.isCurrent ? 'Present' : exp.endDate}
                    </span>
                    <span className="exp-location">{exp.location}</span>
                  </div>
                </div>
                <p className="exp-desc">{exp.description}</p>
                <ul className="exp-highlights">
                  {exp.highlights.map((h, j) => (
                    <li key={j}>
                      <span className="highlight-dot" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
