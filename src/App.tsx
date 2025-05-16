/* eslint-disable react/no-danger */
import { useEffect, useState } from 'react'
import Lottie from 'react-lottie'
import { motion } from 'framer-motion'

import * as animationData from './lottie/keyboard.json'
import './App.css'

const SPEED = 50
const TEXTS = ['Hi, I\'m Faishal Pasa', ' (Uje)', 'I\'m a frontend developer and I build ']
const REPEATED_TEXTS = ['web application', 'mobile application', 'games', 'anythings using code.']

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

  console.log(textIndex)

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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500" dangerouslySetInnerHTML={{ __html: texts?.[0] }} />
                <span className="text-orange-400" dangerouslySetInnerHTML={{ __html: texts?.[1] }} />
                {textIndex <= 1 && (
                  <span className="animate-typeCarret">|</span>
                )}
              </h1>
              <div>
                <p className="text-xl md:text-2xl text-gray-300">
                  <span dangerouslySetInnerHTML={{ __html: texts?.[2] }} />
                  {textIndex > 1 && textIndex <= 2 && (
                  <span className="animate-typeCarret">|</span>
                  )}
                </p>
                <p className="text-xl md:text-2xl text-gray-300">
                  <span className="text-blue-400" dangerouslySetInnerHTML={{ __html: repeatedText }} />
                  {textIndex === 3 && (
                  <span className="animate-typeCarret">|</span>
                  )}
                </p>
              </div>
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
                  {social === 'email' && (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  )}
                  {social === 'linkedin' && (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                      <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                    </svg>
                  )}
                  {social === 'github' && (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 496 512">
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                    </svg>
                  )}
                  {social === 'instagram' && (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg>
                  )}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">My Skills</span>
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
                    className="h-full bg-gradient-to-r from-blue-300 to-blue-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

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
