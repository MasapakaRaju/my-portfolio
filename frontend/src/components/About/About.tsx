import { useEffect, useRef } from 'react'
import type { PersonalInfo } from '../../types'
import './About.css'

interface AboutProps {
  personalInfo: PersonalInfo
}

const stats = [
  { label: 'Backend Experience', value: '1+ yr' },
  { label: 'Production APIs', value: '12+' },
  { label: 'SQL Optimizations', value: '20+' },
  { label: 'Records Processed', value: '10K+' },
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
        <p className="section-subtitle fade-in">Engineer profile shaped by backend systems, scale, and AI-assisted delivery</p>

        <div className="about-grid">
          <div className="about-avatar fade-in">
            <div className="avatar-placeholder profile-mark">
              <span>MR</span>
            </div>
            <p className="avatar-hint">Java | Spring Boot | Systems</p>
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
              <a href={personalInfo.leetcodeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                LeetCode Profile
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