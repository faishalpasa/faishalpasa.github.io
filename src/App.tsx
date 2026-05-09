import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const WORK_EXPERIENCES = [
  {
    company: "Bareksa",
    positions: ["Senior Frontend Engineer"],
    start_at: "May 2022",
    end_at: null,
  },
  {
    company: "Tanihub",
    positions: [
      "Senior Frontend Engineer",
      "Frontend Engineer",
      "Software Engineer",
    ],
    start_at: "Jun 2019",
    end_at: "May 2022",
  },
  {
    company: "Kompas TV",
    positions: ["Software Engineer"],
    start_at: "Jan 2017",
    end_at: "Jun 2019",
  },
  {
    company: "Project6 Id",
    positions: ["Web Developer"],
    start_at: "Sep 2016",
    end_at: "Jan 2017",
  },
]

const SKILLS = [
  {
    category: "Web",
    items: [
      "HTML/CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "PHP",
      "Laravel",
    ],
  },
  {
    category: "Mobile",
    items: ["React Native"],
  },
  {
    category: "Game",
    items: ["Unity", "C#"],
  },
]

const PORTFOLIOS = [
  {
    imgSrc: "/images/portfolio-1.jpeg",
    description:
      "Lagi bersih bersih folder, ketemu asset fitur invesment summary tahun 2022 Bareksa. Asset gambar nya berupa kartu2, dapet ide bikin game idle + card merge.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7355839572313845761/",
  },
  {
    imgSrc: "/images/portfolio-2.jpeg",
    description:
      "Project game web yang agak serius. Awalnya cuma pengen bikin game kayak dino chrome bertema mario bros. Lahirlah game parody: Tjoean Run.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7199740945905430528/",
  },
  {
    imgSrc: "/images/portfolio-3.jpeg",
    description:
      "Ngebuat story ala instagram untuk campaign Ramadan 2024 Bareksa dengan isi konten yang dinamis dan animasi CSS.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7176895408705601536/",
  },
  {
    imgSrc: "/images/portfolio-4.jpeg",
    description:
      "Mini game bendera — terinspirasi dari pengalaman jadi petugas pengibar bendera. Untuk memperingati hari kemerdekaan Indonesia ke-78.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7097599814149836800/",
  },
  {
    imgSrc: "/images/portfolio-5.jpeg",
    description:
      "Game puzzle simple untuk anak. Bosen dengan satu set, tinggal ganti image-nya. Alhamdulillah lolos QA oleh anak sendiri.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7036945722738446337/",
  },
  {
    imgSrc: "/images/portfolio-6.jpeg",
    description:
      'Spotify Top List — terinspirasi dari viral "Spotify Pie". Dibuat pakai Spotify API untuk menampilkan top tracks & artists.',
    link: "https://www.linkedin.com/feed/update/urn:li:activity:6941187905872621568/",
  },
  {
    imgSrc: "/images/portfolio-7.jpeg",
    description:
      "Mini game puzzle buah, mobile responsive dengan custom hook. Buahnya bisa beli di TaniHub haha.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:6887774836131803136/",
  },
  {
    imgSrc: "/images/portfolio-8.jpeg",
    description: "Fireworks using vanilla CSS and JS.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:6882713344353144832/",
  },
  {
    imgSrc: "/images/portfolio-9.jpeg",
    description:
      "Full keyboard Keychron K2 dibuat dengan CSS, lengkap dengan efek backlight dan typing animation.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:6878589670150819840/",
  },
  {
    imgSrc: "/images/portfolio-10.jpeg",
    description:
      "Game card match — hasil dari kebosanan ngerjain tech debt akhir 2020. Dibuat dengan React hook dan local storage.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:6748941109151588352/",
  },
]

const SOCIALS = [
  {
    key: "email",
    href: "mailto:mfaishalpasa@gmail.com",
    label: "Email",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
        />
      </svg>
    ),
  },
  {
    key: "linkedin",
    href: "https://www.linkedin.com/in/faishalpasa/",
    label: "LinkedIn",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 448 512"
        className="w-5 h-5"
      >
        <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
      </svg>
    ),
  },
  {
    key: "github",
    href: "https://github.com/faishalpasa/",
    label: "GitHub",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 496 512"
        className="w-5 h-5"
      >
        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z" />
      </svg>
    ),
  },
  {
    key: "instagram",
    href: "https://www.instagram.com/faishalpasa/",
    label: "Instagram",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 448 512"
        className="w-5 h-5"
      >
        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
      </svg>
    ),
  },
]

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4 },
}

function useDarkMode(): [boolean, () => void] {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme")
    if (saved) return saved === "dark"
    return window.matchMedia("(prefers-color-scheme: dark)").matches
  })

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [isDark])

  const toggle = () => setIsDark((prev) => !prev)
  return [isDark, toggle]
}

const SunIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
    />
  </svg>
)

const MoonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
    />
  </svg>
)

const App = () => {
  const [isDark, toggleDark] = useDarkMode()

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-200">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-2xl mx-auto px-5 h-14 flex items-center justify-between">
          <span className="font-semibold text-sm">Faishal Pasa</span>
          <button
            type="button"
            onClick={toggleDark}
            aria-label="Toggle dark mode"
            className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-5">
        {/* Hero */}
        <section className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/profile.jpeg"
              alt="Faishal Pasa"
              className="w-16 h-16 rounded-full object-cover mb-6 ring-2 ring-gray-100 dark:ring-gray-800"
            />
            <p className="text-sm font-medium text-gray-400 dark:text-gray-500 mb-3">
              Hi, I&apos;m
            </p>
            <h1 className="text-4xl font-bold tracking-tight mb-2">
              Faishal Pasa
              <span className="text-gray-400 dark:text-gray-500 font-normal">
                {" "}
                (Uje)
              </span>
            </h1>
            <p className="text-lg text-gray-500 dark:text-gray-400 mt-4 leading-relaxed">
              Software developer with +10 years of experience.
              <br />I build web apps, mobile apps, and games.
            </p>
            <div className="flex gap-3 mt-8">
              {SOCIALS.map((s) => (
                <a
                  key={s.key}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </section>

        <hr className="border-gray-100 dark:border-gray-800" />

        {/* Experience */}
        <section className="py-16">
          <motion.div {...fadeUp}>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-8">
              Experience
            </h2>
            <div className="space-y-8">
              {WORK_EXPERIENCES.map((exp, i) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.07 }}
                  className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-8"
                >
                  <span className="text-xs text-gray-400 dark:text-gray-500 sm:w-36 sm:text-right shrink-0 pt-0.5">
                    {exp.start_at} — {exp.end_at ?? "Present"}
                  </span>
                  <div>
                    <p className="font-medium">{exp.company}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                      {exp.positions.join(" · ")}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <hr className="border-gray-100 dark:border-gray-800" />

        {/* Skills */}
        <section className="py-16">
          <motion.div {...fadeUp}>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-8">
              Skills
            </h2>
            <div className="space-y-6">
              {SKILLS.map((group) => (
                <div
                  key={group.category}
                  className="flex flex-col sm:flex-row gap-2 sm:gap-8"
                >
                  <span className="text-xs text-gray-400 dark:text-gray-500 sm:w-36 sm:text-right shrink-0 pt-1">
                    {group.category}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <hr className="border-gray-100 dark:border-gray-800" />

        {/* Projects */}
        <section className="py-16">
          <motion.div {...fadeUp}>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-8">
              Featured Projects
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PORTFOLIOS.map((p, i) => (
              <motion.a
                key={p.link}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="group block rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600 transition-colors"
              >
                <div className="aspect-video overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <img
                    src={p.imgSrc}
                    alt="project preview"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 leading-relaxed">
                    {p.description}
                  </p>
                  <span className="inline-flex items-center gap-1 mt-3 text-xs font-medium text-blue-600 dark:text-blue-400">
                    View post
                    <svg
                      className="w-3 h-3 group-hover:translate-x-0.5 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-100 dark:border-gray-800 py-8 mt-4">
        <div className="max-w-2xl mx-auto px-5 text-center text-xs text-gray-400 dark:text-gray-600">
          © {new Date().getFullYear()} Faishal Pasa
        </div>
      </footer>
    </div>
  )
}

export default App
