import { motion } from "framer-motion"

import { WORK_EXPERIENCES } from "@/constants/app"

const WorkExperiencesSection = () => (
  <section className="mb-24">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">
        Work Experiences
      </span>
    </h2>
    <div className="max-w-4xl mx-auto">
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-blue-300" />

        {WORK_EXPERIENCES.map((experience, index) => (
          <motion.div
            key={experience.company}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className={`relative mb-12 ${index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"} pl-12 md:pl-0 md:w-1/2`}
          >
            <div
              className={`absolute left-[11px] top-0 w-5 h-5 bg-blue-500 rounded-full border-4 border-gray-900 z-10 ${index % 2 === 0 ? "md:left-auto md:right-[-9px]" : "md:left-[-9px]"}`}
            />

            <div
              className={`bg-gray-700/80 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-600/80 transition-all border border-gray-600/30 ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white mb-2 md:mb-0">
                  {experience.company}
                </h3>
                <span className="text-sm text-blue-400 font-medium">
                  {`${experience.start_at} - ${experience.end_at ?? "Present"}`}
                </span>
              </div>

              <div className="space-y-2">
                {experience.positions.map((position) => (
                  <div
                    key={position}
                    className="flex items-center gap-2 text-gray-300"
                  >
                    <svg
                      className="w-4 h-4 text-blue-400 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm md:text-base">{position}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

export default WorkExperiencesSection
