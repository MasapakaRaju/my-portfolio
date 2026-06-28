import { useEffect, useState } from 'react'
import type { PersonalInfo } from '../../types'
import './Hero.css'

interface HeroProps {
  personalInfo: PersonalInfo
}

const roles = ['Java Backend Engineer', 'Spring Boot Specialist', 'API Performance Builder', 'AI-Assisted Developer']

const metrics = [
  { value: '12+', label: 'Production APIs' },
  { value: '20+', label: 'SQL Queries Tuned' },
  { value: '15+', label: 'Issues Resolved' },
]

export default function Hero({ personalInfo }: HeroProps) {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 34)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIndex(i => (i + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIndex])

  return (
    <section className="hero" id="hero">
      <div className="hero-bg" />
      <div className="container hero-content">
        <div className="hero-copy">
          <p className="hero-greeting">Backend systems, performance, and product-minded engineering</p>
          <h1 className="hero-name">{personalInfo.name}</h1>
          <h2 className="hero-role">
            <span className="typing">{displayed}</span>
            <span className="cursor">|</span>
          </h2>
          <p className="hero-tagline">{personalInfo.tagline}</p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>

          <div className="hero-socials">
            <a href={personalInfo.githubUrl} target="_blank" rel="noopener noreferrer" className="social-link">
              GitHub
            </a>
            <a href={personalInfo.linkedinUrl} target="_blank" rel="noopener noreferrer" className="social-link">
              LinkedIn
            </a>
            <a href={personalInfo.leetcodeUrl} target="_blank" rel="noopener noreferrer" className="social-link">
              LeetCode
            </a>
          </div>
        </div>

        <div className="hero-console" aria-label="Engineering profile snapshot">
          <div className="console-topbar">
            <span />
            <span />
            <span />
          </div>
          <div className="console-code">
            <p><span>engineer</span> = "Java Backend"</p>
            <p><span>stack</span> = ["Spring Boot", "PostgreSQL", "Docker"]</p>
            <p><span>focus</span> = "high-throughput APIs"</p>
            <p><span>workflow</span> = "AI-assisted delivery"</p>
          </div>
          <div className="hero-metrics">
            {metrics.map(metric => (
              <div key={metric.label} className="hero-metric">
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-down" aria-label="Scroll down">
        <span />
      </a>
    </section>
  )
}