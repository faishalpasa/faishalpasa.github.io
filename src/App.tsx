/* eslint-disable react/no-danger */
import { useEffect, useState } from 'react'
import Lottie from 'react-lottie'
import { motion } from 'framer-motion'

import * as animationData from './lottie/keyboard.json'
import './App.css'

const SPEED = 50
const TEXTS = ['Hi, I\'m Faishal Pasa', ' (Uje)', 'I\'m a frontend developer and I build ']
const REPEATED_TEXTS = ['web application', 'mobile application', 'anythings using code.']

const SKILLS = [
  { name: 'React', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'JavaScript', level: 90 },
  { name: 'HTML/CSS', level: 95 },
  { name: 'PHP', level: 80 },
  { name: 'Laravel', level: 85 },
]

const PORTFOLIOS = [
  {
    imgSrc: 'https://media.licdn.com/dms/image/D5605AQEarxivmjin3A/feedshare-thumbnail_720_1280/0/1716472325594?e=2147483647&v=beta&t=Aj1WVwStGRDvruKfVKE_hBLVmxxdwWRBFe7ZGonfkbY',
    description: 'Project game web yang agak serius. Awalnya cuma pengen bikin game kayak dino chrome bertema mario bros. Tapi, ada bisikan2 gaib dari rekan pegawhy yang memberikan ide2 absurd. Akhirnya, lahirlah game parody ini. Tjoean Run, perjuangan pegawhy berlari mencari cuan biar bebas finansial 🤣 .',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7199740945905430528/',
  },
  {
    imgSrc: 'https://media.licdn.com/dms/image/D5605AQGQBrfrKcM-kg/videocover-high/0/1711075193755?e=2147483647&v=beta&t=nMUpKfsKbK17UpsxMOERGg-0N7ej3angAFv2F23xclU',
    description: `Awal tahun dikasih task yang "gak biasa". Ngebuat story ala instagram untuk campaign Ramadan 2024 Bareksa dengan isi konten yang dinamis dan animasi yang "wah ini bisa di-implement gak ya?".

  Bermodal css animation dan ngitungin animation delay, akhirnya task kelar, lolos QA, dan bisa deploy ke production 😄.
  
  hashtag#javascript hashtag#react hashtag#frontend hashtag#Bareksa hashtag#AmanPastiBisa`,
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7176895408705601536/?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A7176895408705601536%29',
  },
  {
    imgSrc: 'https://media.licdn.com/dms/image/D5605AQFAg-nSU0-7gg/videocover-high/0/1692199650606?e=2147483647&v=beta&t=T3qqoIXgRphXTdExa1l9EOLRgxfpXo2RCatrKMVgOTw',
    description: 'Dulu waktu sekolah, pernah jadi petugas pengibar bendera. Bendera yang dikibar sama lagu Indonesia Raya balap2an karna gk tau tempo nya. Akhirnya jadi inspirasi buat mini game ini, sekalian untuk memperingati hari kemerdekaan Indonesia ke 78 🇮🇩',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7097599814149836800/?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A7097599814149836800%29',
  },
  {
    imgSrc: 'https://media.licdn.com/dms/image/D5605AQHgThyB0O82Pw/videocover-high/0/1677738595762?e=2147483647&v=beta&t=U6WFCKPT9UurEvMFWn-LfDoJzCq_DGPglCqsUM33H9o',
    description: `Keresahan seorang bapak2. Anak saya lagi seneng main puzzle, kalo satu set udh bosen, minta beli set puzzle baru, lama2 boncos juga haha.
    Akhirnya saya coba buat game puzzle simple. Jadi ketika bosen, tinggal ubah set image nya. Alhamdulillah lolos QA oleh anak saya sendiri, anteng ketika lagi di suapin. Paling di atur screen time nya aja.`,
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7036945722738446337/?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A7036945722738446337%29',
  },
  {
    imgSrc: 'https://media.licdn.com/dms/image/C4D05AQH1wEvwtK96Qw/videocover-high/0/1654908146766?e=2147483647&v=beta&t=k47qg7fu_nfjU9gzYdX9plIrYjV7Gv_YRXP91qsyJDg',
    description: `Kemarin liat orang orang pada share di instagram stories list musik yang mereka dengar dengan bentuk diagram pie. Pas googling "Spotify Pie" (https://lnkd.in/dkfuezv4), ternyata viral juga dan masuk ke berita onlen. Penasaran akhirnya nyari Spotify API dan nyoba bikin sendiri Spotify Top List.

    List API nya lumayan lengkap sih untuk free user, ya paling minus nya kurang url preview musik nya aja biar bisa di play.`,
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:6941187905872621568/?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A6941187905872621568%29',
  },
  {
    imgSrc: 'https://media.licdn.com/dms/image/C5605AQEMW1FKbB8L7A/videocover-high/0/1642173474073?e=2147483647&v=beta&t=zkElpGBsSPYuh_QOL893BFW8B8u6tEE4Q-B26tVcSQo',
    description: `Mini game puzzle, mobile responsive dengan custom hook.
    Ohya, buah nya bisa beli di TaniHub ya haha`,
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:6887774836131803136/?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A6887774836131803136%29',
  },
  {
    imgSrc: 'https://media.licdn.com/dms/image/C5605AQGPyZ2gG0pbdg/videocover-high/0/1640966723852?e=2147483647&v=beta&t=Fqrsy4J1FU-sDcG-HuJXfEd8YAXFmnDC4qMoUTU5yNE',
    description: 'Fireworks using vanilla css and js',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:6882713344353144832/?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A6882713344353144832%29',
  },
  {
    imgSrc: 'https://media.licdn.com/dms/image/C5605AQEnG_JEVpHg6g/videocover-high/0/1639983563819?e=2147483647&v=beta&t=ulhcaFMC_NrC6-Gm4-GhYqwvRCixnhJz5lVjkzqD0HM',
    description: `Kemarin di beranda youtube ada video membuat ui keyboard (lebih tepat nya sih keycaps) dengan css (https://lnkd.in/g2VVwfut). Ya sambil ngisi waktu luang, saya tonton. Terus dapet ide, gimana kalo bikin full keyboard Keychron K2 pake css. Terus dapet ide lagi, coba deh ditambahin efek backlight.

    Kurang puas, mau nambah lagi efek typing. Ini lama2 bisa jadi kaya web typing speed haha`,
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:6878589670150819840/?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A6878589670150819840%29',
  },
  {
    imgSrc: 'https://media.licdn.com/dms/image/C5605AQGMa8IlSn260Q/videocover-high/0/1609072894854?e=2147483647&v=beta&t=mE77rI_XbIVA-Yb0qmLv9QswX7GJ7Dw2nJHSSHpGQ08',
    description: 'Seminggu terakhir 2020, dikasih task ngerjain tech debt yang bejibun. Hasil dari kebosanan, bermodal react hook, local storage dan jss, jadilah game card match. Semoga aja 2021 point nya bisa dituker jadi voucher belanja haha',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:6748941109151588352/?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A6748941109151588352%29',
  },
]

function App() {
  const [textIndex, setTextIndex] = useState(0)
  // const [repeatedTextIndex, setRepeatedTextIndex] = useState(0)
  const [texts, setTexts] = useState<string[]>([])
  const [repeatedText, setRepeatedText] = useState<string>('')
  const [isPaused, setIsPaused] = useState(false)

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  const truncate = (text: string, length = 150) => (text.length > length ? `${text.substring(0, length)}...` : text)

  const handleOpenLink = (link: string) => {
    window.open(link, '_blank')
  }

  const handleOpenSocial = (type: string) => {
    if (type === 'linkedin') {
      window.open('https://www.linkedin.com/in/faishalpasa/', '_blank')
    } else if (type === 'github') {
      window.open('https://github.com/faishalpasa/', '_blank')
    } else if (type === 'instagram') {
      window.open('https://www.instagram.com/faishalpasa/', '_blank')
    } else if (type === 'email') {
      window.open('mailto:mfaishalpasa@gmail.com', '_blank')
    }
  }

  const runTypeWriter = (text: string, index: number, callBack: any) => {
    let newWelcomeText = ''
    let i = 0

    function typeWriter() {
      if (i < text.length) {
        newWelcomeText += text.charAt(i)
        setTimeout(typeWriter, SPEED)
        callBack((prev: string[]) => {
          const newWelcomeTexts = [...prev]
          newWelcomeTexts[index] = newWelcomeText
          return newWelcomeTexts
        })

        i++
      } else {
        setIsPaused(true)
        setTimeout(() => {
          setTextIndex((prev) => prev + 1)
        }, index === 1 ? 1000 : 0)
      }
    }

    typeWriter()
  }

  const runTypeRepeatedText = () => {
    let i = 0
    let repeatedTextIndex = 0
    let newRepeatedText = ''

    function typing() {
      setIsPaused(false)

      const text = REPEATED_TEXTS[repeatedTextIndex]

      function eraseWriter() {
        if (i >= 0) {
          newRepeatedText = text.substring(0, i)
          setTimeout(eraseWriter, SPEED)
          setRepeatedText(newRepeatedText)

          i--
        } else {
          typing()
        }
      }

      if (i < text.length) {
        newRepeatedText += text.charAt(i)
        setTimeout(typing, SPEED)
        setRepeatedText(newRepeatedText)

        i++
      } else {
        setIsPaused(true)

        setTimeout(() => {
          eraseWriter()
          if (repeatedTextIndex < REPEATED_TEXTS.length - 1) {
            repeatedTextIndex++
          } else {
            repeatedTextIndex = 0
          }
        }, repeatedTextIndex < REPEATED_TEXTS.length - 1 ? 700 : 2000)
      }
    }

    typing()
  }

  useEffect(() => {
    if (textIndex < TEXTS.length) {
      setIsPaused(false)
      runTypeWriter(TEXTS[textIndex], textIndex, setTexts)
    }

    if (textIndex === TEXTS.length) {
      runTypeRepeatedText()
    }
  }, [textIndex])

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />

        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-[150px] mb-8">
              <Lottie
                options={defaultOptions}
                width="100%"
                isStopped={isPaused}
                speed={2}
              />
            </div>

            <div className="text-white space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500" dangerouslySetInnerHTML={{ __html: texts?.[0] }} />
                <span className="text-orange-400" dangerouslySetInnerHTML={{ __html: texts?.[1] }} />
                {textIndex <= 1 && (
                  <span className="animate-typeCarret">|</span>
                )}
              </h1>
              <p className="text-xl md:text-2xl text-gray-300">
                <span dangerouslySetInnerHTML={{ __html: texts?.[2] }} />
                <span className="text-blue-400" dangerouslySetInnerHTML={{ __html: repeatedText }} />
                {textIndex > 1 && (
                  <span className="animate-typeCarret">|</span>
                )}
              </p>
            </div>

            <div className="mt-12 flex gap-6">
              {['email', 'linkedin', 'github', 'instagram'].map((social) => (
                <motion.span
                  key={social}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="[&>svg]:h-6 [&>svg]:w-6 text-white/80 hover:text-white cursor-pointer"
                  onClick={() => handleOpenSocial(social)}
                  role="presentation"
                >
                  {/* ... existing social icons ... */}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">My Skills</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILLS.map((skill) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6"
              >
                <div className="flex justify-between mb-2">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-gray-400">
                    {skill.level}
                    %
                  </span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Featured Projects</span>
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
                <div className="relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm">
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
      </main>

      <footer className="bg-gray-900/50 backdrop-blur-sm py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">
            ©
            {' '}
            {new Date().getFullYear()}
            {' '}
            Faishal Pasa
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
