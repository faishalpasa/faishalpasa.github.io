/* eslint-disable react/no-danger */
import { useEffect, useState, useCallback } from 'react'
import Lottie from 'react-lottie'

import * as animationData from './lottie/keyboard.json'
import './App.css'

const SPEED = 50
const TEXTS = ['Hi, I\'m Faishal Pasa', ' (Uje)', 'I\'m a frontend developer and I build ']
const REPEATED_TEXTS = ['web application', 'mobile application', 'anythings using code.']
const PORTFOLIOS = [
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
    <div className="min-h-screen flex flex-col bg-gray-600">
      <header className="bg-gray-950 p-4 md:p-6">
        <div className="flex gap-4 w-full md:max-w-screen-sm m-auto">
          <div className="w-[70px] sm:w-[150px]">
            <Lottie
              options={defaultOptions}
              width="100%"
              isStopped={isPaused}
              speed={2}
            />
          </div>
          <div className="text-white flex-1 h-[72px] sm:h-auto">
            <p>
              <span className="text-base md:text-2xl font-semibold" dangerouslySetInnerHTML={{ __html: texts?.[0] }} />
              <span className="text-base md:text-2xl font-semibold text-orange-400" dangerouslySetInnerHTML={{ __html: texts?.[1] }} />
              {textIndex <= 1 && (
                <span className="animate-typeCarret text-base md:text-2xl">|</span>
              )}
            </p>
            <p className="mt-1 sm:mt-2">
              <span className="text-sm md:text-xl font-normal" dangerouslySetInnerHTML={{ __html: texts?.[2] }} />
              <span className="text-sm md:text-xl font-normal" dangerouslySetInnerHTML={{ __html: repeatedText }} />
              {textIndex > 1 && (
                <span className="animate-typeCarret text-sm md:text-xl">|</span>
              )}
            </p>
          </div>
        </div>

        <div className="mt-4 flex gap-6 text-white w-full md:max-w-screen-sm m-auto justify-center">
          <span className="[&>svg]:h-5 [&>svg]:w-5 cursor-pointer transform transition duration-500 ease-in-out hover:scale-150" onClick={() => handleOpenSocial('email')} role="presentation">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
          </span>

          <span className="[&>svg]:h-5 [&>svg]:w-5 cursor-pointer transform transition duration-500 ease-in-out hover:scale-150" onClick={() => handleOpenSocial('linkedin')} role="presentation">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 448 512"
            >
              <path
                d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
              />
            </svg>
          </span>

          <span className="[&>svg]:h-5 [&>svg]:w-5 cursor-pointer transform transition duration-500 ease-in-out hover:scale-150" onClick={() => handleOpenSocial('github')} role="presentation">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 496 512"
            >
              <path
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
              />
            </svg>
          </span>

          <span className="[&>svg]:h-5 [&>svg]:w-5 cursor-pointer transform transition duration-500 ease-in-out hover:scale-150" onClick={() => handleOpenSocial('instagram')} role="presentation">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 448 512"
            >
              <path
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
              />
            </svg>
          </span>
        </div>
      </header>
      <main className="m-auto sm:p-6 p-0 flex-1 max-w-screen-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch gap-4 md:gap-6 bg-gray-700 sm:rounded-lg p-4 sm:p-6">
          {PORTFOLIOS.map((portfolio) => (
            <div key={portfolio.link} role="presentation" className="cursor-pointer card bg-gray-900 rounded-lg shadow-md transform transition duration-500 ease-in-out hover:scale-105" onClick={() => handleOpenLink(portfolio.link)}>
              <img src={portfolio.imgSrc} alt="portfolio" className="w-full h-36 md:h-48 object-cover rounded-lg" />
              <div className="p-2 md:p-4">
                <span className="text-white text-xs md:text-base">
                  {truncate(portfolio.description, 100)}
                </span>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="mt-6 bg-gray-700 grid grid-cols-3 items-stretch gap-4 rounded-lg p-4" /> */}
      </main>
      <footer className="bg-gray-950 p-4 text-white text-center">
        <p className="text-xs">
          ©
          {' '}
          {new Date().getFullYear()}
          {' '}
          Faishal Pasa
        </p>
      </footer>
    </div>
  )
}

export default App
