import { FiArrowUp } from 'react-icons/fi'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-dark-border py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; 2026 Nikitha Reddy Bollepally. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-gray-500 hover:text-primary text-sm transition-colors"
          >
            Back to Top <FiArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  )
}
