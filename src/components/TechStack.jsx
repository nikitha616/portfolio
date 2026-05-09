import {
  SiReact, SiNodedotjs, SiSpringboot,
  SiExpress, SiMongodb, SiPostgresql,
  SiGit, SiDocker, SiPython, SiApachekafka,
  SiMysql, SiRedis
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import ScrollReveal from './ScrollReveal'

const techStack = [
  { name: 'Java', icon: FaJava, color: '#ED8B00' },
  { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'Express.js', icon: SiExpress, color: '#ffffff' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'Redis', icon: SiRedis, color: '#DC382D' },
  { name: 'Kafka', icon: SiApachekafka, color: '#231F20' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
]

export default function TechStack() {
  return (
    <ScrollReveal direction="right" delay={150}>
      <h2 className="section-title text-sm text-gray-500 mb-8">// MY TECH STACK</h2>
      
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="bg-dark-card border border-dark-border rounded-xl p-4 flex flex-col items-center gap-3 card-hover hover:border-primary/30 glow-border cursor-default"
          >
            <tech.icon size={36} style={{ color: tech.color }} />
            <span className="text-gray-400 text-xs font-medium text-center">{tech.name}</span>
          </div>
        ))}
      </div>
    </ScrollReveal>
  )
}
