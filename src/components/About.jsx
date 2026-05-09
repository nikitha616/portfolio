import { FiUser } from 'react-icons/fi'
import ScrollReveal from './ScrollReveal'

export default function About() {
  return (
    <ScrollReveal direction="left">
      <h2 className="section-title text-sm text-gray-500 mb-8">// ABOUT ME</h2>
      
      <div className="bg-dark-card border border-dark-border rounded-xl p-6 glow-border">
        <div className="flex flex-col sm:flex-row gap-6">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-primary to-accent-blue flex items-center justify-center">
              <FiUser size={40} className="text-white" />
            </div>
          </div>

          {/* Text */}
          <div className="space-y-4">
            <p className="text-gray-300 leading-relaxed">
              I'm a Software Engineer with hands-on experience at Cisco and Target. I specialize in building robust backend systems using Java, Spring Boot, and designing full-stack applications with React.
            </p>
            <p className="text-gray-400 leading-relaxed">
              B.Tech in Information Technology from JNTU Hyderabad. I'm passionate about automation, GenAI solutions, and writing clean, production-ready code.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors font-medium text-sm mt-2"
            >
              More About Me <FiUser size={14} />
            </a>
          </div>
        </div>
      </div>
    </ScrollReveal>
  )
}
