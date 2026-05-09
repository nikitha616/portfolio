import { FiGithub, FiLinkedin, FiMail, FiArrowRight, FiDownload } from 'react-icons/fi'
import ScrollReveal from './ScrollReveal'

const codeLines = [
  { text: 'const Nikitha = {', color: 'text-blue-400' },
  { text: '  name: "Nikitha Reddy",', color: 'text-gray-300' },
  { text: '  role: "Software Engineer",', color: 'text-gray-300' },
  { text: '  passion: "Building scalable systems",', color: 'text-gray-300' },
  { text: '  skills: ["Java", "Spring Boot", "React"],', color: 'text-gray-300' },
  { text: '  databases: ["PostgreSQL", "MongoDB"],', color: 'text-gray-300' },
  { text: '  code: function() {', color: 'text-purple-400' },
  { text: '    while(!succeed) {', color: 'text-yellow-300' },
  { text: '      tryAgain();', color: 'text-green-400' },
  { text: '      learn();', color: 'text-green-400' },
  { text: '      build();', color: 'text-green-400' },
  { text: '    }', color: 'text-yellow-300' },
  { text: '    return "Success";', color: 'text-orange-400' },
  { text: '  }', color: 'text-purple-400' },
  { text: '};', color: 'text-blue-400' },
]

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://linkedin.com/in/nikitha-reddy-bollepally-668583286/', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:nikithareddy1611@gmail.com', label: 'Email' },
]

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <ScrollReveal direction="left">
          <div className="space-y-6">
            <p className="text-gray-400 text-lg">Hi, I'm</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Nikitha.
            </h1>
            <h2 className="text-2xl sm:text-3xl font-bold text-primary">
              Software Engineer
            </h2>
            <p className="text-gray-400 text-lg max-w-md leading-relaxed">
              I build scalable backend systems and full-stack web applications with Java, Spring Boot, React, and cloud technologies.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#projects"
                className="flex items-center gap-2 bg-primary hover:bg-primary-light text-white px-6 py-3 rounded-full font-medium transition-all"
              >
                View My Work <FiArrowRight />
              </a>
              <a
                href="#"
                className="flex items-center gap-2 border border-dark-border hover:border-primary text-gray-300 hover:text-white px-6 py-3 rounded-full font-medium transition-all"
              >
                Download CV <FiDownload />
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <p className="text-gray-500 text-sm mb-3">Connect with me:</p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-dark-border hover:border-primary flex items-center justify-center text-gray-400 hover:text-primary transition-all"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          </ScrollReveal>

          {/* Right - Terminal */}
          <ScrollReveal direction="right" delay={200}>
          <div className="relative">
            {/* Decorative Code Icon */}
            <div className="absolute -top-8 -right-4 text-primary opacity-20 float-animation">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </div>

            <div className="bg-dark-card border border-dark-border rounded-xl overflow-hidden glow-border">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-dark-border">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-gray-500 text-sm font-mono">Developer Terminal</span>
                <div className="text-primary">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-4 font-mono text-sm terminal-body overflow-x-auto">
                {codeLines.map((line, i) => (
                  <div key={i} className="terminal-line py-0.5">
                    <span className={line.color}>{line.text}</span>
                  </div>
                ))}
              </div>

              {/* Status Bar */}
              <div className="px-4 py-2 border-t border-dark-border flex items-center justify-end">
                <span className="text-green-400 text-xs font-mono flex items-center gap-1">
                  Status: Building awesome things <span className="cursor-blink">✍</span>
                </span>
              </div>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
