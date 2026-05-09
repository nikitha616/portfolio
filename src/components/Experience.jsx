import { FiDownload } from 'react-icons/fi'
import ScrollReveal from './ScrollReveal'

const experiences = [
  {
    title: 'Software Engineer Intern',
    company: 'Cisco',
    period: 'Mar 2026 - Present',
    points: [
      'Enhanced ORBIT reservation workflow by resolving critical system issues, improving reliability and reducing workflow failures in production',
      'Implemented multi-pipeline execution to enable parallel workflows and improve resource utilization',
    ],
  },
  {
    title: 'Software Engineer Intern',
    company: 'Target',
    period: 'Feb 2025 - Aug 2025',
    points: [
       'At Target Corporation, I developed backend services using Spring Boot and worked on automation systems for internal workflows and tariff processing. I built REST APIs, Elasticsearch synchronization jobs, and automated integration tests using Dockerized PostgreSQL. I also worked on workflow automation and improving system reliability and scalability.'
    ],
  },
]

const education = [
  {
    title: 'B.Tech in Information Technology',
    institution: 'Jawaharlal Nehru Technological University',
    period: '2021 - 2025',
    detail: 'Hyderabad, India',
  },
]

const achievements = [
  'Top 5 Finalist, Target India Hackathon (2025)',
  'Google Cloud Gen AI Academy 2.0',
  'Salesforce Trailhead - Agentblazer Champion',
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Experience */}
          <ScrollReveal direction="left">
          <div>
            <h2 className="section-title text-sm text-gray-500 mb-8">// EXPERIENCE</h2>
            <div className="space-y-6">
              {experiences.map((exp, i) => (
                <div key={i} className="relative pl-6 border-l-2 border-dark-border">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary border-2 border-dark-bg"></div>
                  <h3 className="text-white font-semibold text-sm">{exp.title}</h3>
                  <p className="text-gray-500 text-xs mt-1">
                    <span className="text-primary font-semibold">{exp.company}</span> &bull; {exp.period}
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {exp.points.map((point, j) => (
                      <li key={j} className="text-gray-400 text-sm leading-relaxed flex items-start gap-2">
                        <span className="text-primary mt-1.5 text-[6px]">&#9679;</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          </ScrollReveal>

          {/* Education & Achievements */}
          <ScrollReveal delay={150}>
          <div>
            <h2 className="section-title text-sm text-gray-500 mb-8">// EDUCATION</h2>
            <div className="space-y-6">
              {education.map((edu, i) => (
                <div key={i} className="relative pl-6 border-l-2 border-dark-border">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary border-2 border-dark-bg"></div>
                  <h3 className="text-white font-semibold text-sm">{edu.title}</h3>
                  <p className="text-gray-500 text-xs mt-1">
                    {edu.institution} &bull; {edu.period}
                  </p>
                  <p className="text-gray-400 text-sm mt-2">{edu.detail}</p>
                </div>
              ))}
            </div>

            <h2 className="section-title text-sm text-gray-500 mt-10 mb-6">// ACHIEVEMENTS</h2>
            <div className="space-y-3">
              {achievements.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-primary mt-1">&#9670;</span>
                  <p className="text-gray-400 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
          </ScrollReveal>

          {/* Decorative Illustration */}
          <ScrollReveal direction="right" delay={300}>
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              <div className="w-48 h-48 bg-gradient-to-br from-primary/20 to-accent-blue/20 rounded-2xl flex items-center justify-center float-animation">
                <div className="text-primary">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                    <line x1="12" y1="2" x2="12" y2="22" />
                  </svg>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary/10 rounded-lg"></div>
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-accent-blue/10 rounded-lg"></div>
            </div>
          </div>
          </ScrollReveal>
        </div>

        {/* Resume Button */}
        <ScrollReveal delay={400}>
        <div className="flex justify-center mt-12">
          <a
            href="#"
            className="flex items-center gap-2 border border-dark-border hover:border-primary text-gray-300 hover:text-white px-6 py-3 rounded-full font-medium transition-all text-sm"
          >
            View Full Resume <FiDownload size={14} />
          </a>
        </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
