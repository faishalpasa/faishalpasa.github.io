import { motion } from "framer-motion"

import { SKILLS } from "@/constants/app"

const SkillsSection = () => (
  <section className="mb-24">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">
        Skills
      </span>
    </h2>
    <div className="space-y-12">
      {SKILLS.map((category) => (
        <div key={category.category}>
          <h3 className="text-2xl font-semibold text-white mb-6">
            {category.category}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.skills.map((skill) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-700/80 hover:bg-gray-600/80 transition-all border border-gray-600/30 backdrop-blur-sm rounded-xl p-6"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-medium">{skill.name}</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, index) => {
                      const starNumber = index + 1
                      const isPartialStar =
                        skill.level % 1 !== 0 &&
                        Math.ceil(skill.level) === starNumber
                      const isFullStar = skill.level >= starNumber
                      const decimalPart = skill.level % 1
                      const fillPercentage = isPartialStar
                        ? Math.round(decimalPart * 100)
                        : 0
                      const starColor = isFullStar
                        ? "text-yellow-400"
                        : "text-gray-600"
                      const gradientId = `partial-${skill.name}-${index}`

                      return (
                        <svg
                          key={index}
                          className={`w-5 h-5 ${starColor}`}
                          fill={
                            isPartialStar
                              ? `url(#${gradientId})`
                              : "currentColor"
                          }
                          viewBox="0 0 20 20"
                        >
                          {isPartialStar && (
                            <defs>
                              <linearGradient
                                id={gradientId}
                                x1="0"
                                x2="100%"
                                y1="0"
                                y2="0"
                              >
                                <stop
                                  offset={`${fillPercentage}%`}
                                  stopColor="rgb(250, 204, 21)"
                                />
                                <stop
                                  offset={`${fillPercentage}%`}
                                  stopColor="rgb(75, 85, 99)"
                                />
                              </linearGradient>
                            </defs>
                          )}
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      )
                    })}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
)

export default SkillsSection
