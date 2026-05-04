import { useEffect, useRef } from 'react'
import type { PersonalInfo } from '../../types'
import './About.css'

interface AboutProps {
  personalInfo: PersonalInfo
}

const stats = [
  { label: 'Years Experience', value: '3+' },
  { label: 'Projects Completed', value: '20+' },
  { label: 'Technologies', value: '15+' },
  { label: 'Happy Clients', value: '10+' },
]

export default function About({ personalInfo }: AboutProps) {
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
    <section id="about" ref={ref}>
      <div className="container">
        <h2 className="section-title fade-in">About Me</h2>
        <p className="section-subtitle fade-in">A little bit about who I am</p>

        <div className="about-grid">
          <div className="about-avatar fade-in">
            <div className="avatar-placeholder">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
              </svg>
            </div>
            <p className="avatar-hint">Replace with your photo</p>
          </div>

          <div className="about-text fade-in">
            <p>{personalInfo.about}</p>

            <div className="about-meta">
              <div className="meta-item">
                <span className="meta-label">Location</span>
                <span className="meta-value">{personalInfo.location}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Email</span>
                <a href={`mailto:${personalInfo.email}`} className="meta-value meta-link">
                  {personalInfo.email}
                </a>
              </div>
              <div className="meta-item">
                <span className="meta-label">Phone</span>
                <a href={`tel:${personalInfo.phone}`} className="meta-value meta-link">
                  {personalInfo.phone}
                </a>
              </div>
            </div>

            <div className="about-cta">
              <a href={personalInfo.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                GitHub Profile
              </a>
              <a href={personalInfo.linkedinUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>

        <div className="stats-grid">
          {stats.map(stat => (
            <div key={stat.label} className="stat-card fade-in">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
