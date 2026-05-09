import { motion } from 'framer-motion'

import { PORTFOLIOS } from '../constants/app'

const PortfoliosSection = () => {
  const handleOpenLink = (link: string) => {
    window.open(link, '_blank')
  }

  return (
    <section>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">Featured Projects</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PORTFOLIOS.map((portfolio, index) => (
          <motion.div
            key={portfolio.link}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="group cursor-pointer"
            onClick={() => handleOpenLink(portfolio.link)}
          >
            <div className="relative overflow-hidden rounded-xl backdrop-blur-sm bg-gray-700/80 hover:bg-gray-600/80 transition-all border border-gray-600/30">
              <div className="aspect-video overflow-hidden">
                <img
                  src={portfolio.imgSrc}
                  alt="portfolio"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <p className="text-gray-300 text-sm md:text-base line-clamp-3">
                  {portfolio.description}
                </p>
                <div className="mt-4 flex items-center text-blue-400 text-sm">
                  View Project
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default PortfoliosSection
