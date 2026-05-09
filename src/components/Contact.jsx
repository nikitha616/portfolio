import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub } from 'react-icons/fi'
import ScrollReveal from './ScrollReveal'

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-sm text-gray-500 mb-10">// GET IN TOUCH</h2>

        <ScrollReveal>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gray-300 text-xl leading-relaxed mb-8">
            Feel free to reach out to me!
          </p>

          <div className="bg-dark-card border border-dark-border rounded-xl p-8 glow-border">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <a href="mailto:nikithareddy1611@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-dark-bg border border-dark-border flex items-center justify-center text-primary group-hover:border-primary transition-colors">
                  <FiMail size={20} />
                </div>
                <div className="text-left">
                  <p className="text-gray-500 text-xs">Email</p>
                  <p className="text-gray-300 text-sm group-hover:text-primary transition-colors">nikithareddy1611@gmail.com</p>
                </div>
              </a>

              <a href="tel:+919397888908" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-dark-bg border border-dark-border flex items-center justify-center text-primary group-hover:border-primary transition-colors">
                  <FiPhone size={20} />
                </div>
                <div className="text-left">
                  <p className="text-gray-500 text-xs">Phone</p>
                  <p className="text-gray-300 text-sm group-hover:text-primary transition-colors">+91 9397888908</p>
                </div>
              </a>

              <a href="https://linkedin.com/in/nikitha-reddy-bollepally-668583286/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-dark-bg border border-dark-border flex items-center justify-center text-primary group-hover:border-primary transition-colors">
                  <FiLinkedin size={20} />
                </div>
                <div className="text-left">
                  <p className="text-gray-500 text-xs">LinkedIn</p>
                  <p className="text-gray-300 text-sm group-hover:text-primary transition-colors">Nikitha Reddy</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-dark-bg border border-dark-border flex items-center justify-center text-primary">
                  <FiMapPin size={20} />
                </div>
                <div className="text-left">
                  <p className="text-gray-500 text-xs">Location</p>
                  <p className="text-gray-300 text-sm">Bangalore, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
