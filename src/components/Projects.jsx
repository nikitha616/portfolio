import { FiExternalLink, FiGithub, FiArrowRight } from 'react-icons/fi'
import ScrollReveal from './ScrollReveal'

const projects = [
  {
    title: 'E-Commerce Backend',
    description: 'Secure RESTful backend with JWT auth, role-based access, shopping cart, and Kafka-based async order processing.',
    tags: ['Java', 'Spring Boot', 'JWT', 'PostgreSQL', 'Kafka'],
    gradient: 'from-violet-600 to-indigo-600',
    github: '#',
    live: '#',
  },
  {
    title: 'Debt-A-Way',
    description: 'Full-stack web app with caching & pagination achieving 16% throughput increase, with HTTP-only cookie security.',
    tags: ['React', 'Node.js', 'Express', 'PostgreSQL'],
    gradient: 'from-cyan-600 to-blue-600',
    github: '#',
    live: '#',
  },
  {
    title: 'Fake Review Detection',
    description: 'Hybrid ML model using Random Forest and XGBoost with advanced feature extraction and stacking ensemble methods.',
    tags: ['Python', 'NLTK', 'scikit-learn', 'Transformers'],
    gradient: 'from-orange-500 to-pink-600',
    github: '#',
    live: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
        <div className="flex items-center justify-between mb-10">
          <h2 className="section-title text-sm text-gray-500">// FEATURED PROJECTS</h2>
          <a href="#" className="flex items-center gap-1 text-primary hover:text-primary-light text-sm font-medium transition-colors">
            View all projects <FiArrowRight size={14} />
          </a>
        </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 150}>
            <div
              className="bg-dark-card border border-dark-border rounded-xl overflow-hidden card-hover glow-border group"
            >
              {/* Project Image Placeholder */}
              <div className={`h-40 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                  </div>
                </div>
                {/* Hover Actions */}
                <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a href={project.github} className="w-8 h-8 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/60 transition-all">
                    <FiGithub size={14} />
                  </a>
                  <a href={project.live} className="w-8 h-8 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/60 transition-all">
                    <FiExternalLink size={14} />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-4">
                <h3 className="text-white font-semibold mb-1">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-3 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-dark-bg border border-dark-border text-gray-400 px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
