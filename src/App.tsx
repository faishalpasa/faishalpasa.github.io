/* eslint-disable react/no-danger */
import { useEffect, useState } from 'react'
import Lottie from 'react-lottie'

import * as animationData from './lottie/keyboard.json'
import './App.css'

const SPEED = 50
const TEXTS = ['Hi, I\'m Faishal Pasa', ' (Uje)', 'I\'m a frontend developer and I build things using code.']
const PORTFOLIOS = [
  {
    imgSrc: 'https://media.licdn.com/dms/image/D5605AQGQBrfrKcM-kg/videocover-low/0/1711075193915?e=1715252400&v=beta&t=Ucc1GbEbu4l2zi6SiEZYa58bHG822vUzwY5hikykhXE',
    description: `Awal tahun dikasih task yang "gak biasa". Ngebuat story ala instagram untuk campaign Ramadan 2024 Bareksa dengan isi konten yang dinamis dan animasi yang "wah ini bisa di-implement gak ya?".

  Bermodal css animation dan ngitungin animation delay, akhirnya task kelar, lolos QA, dan bisa deploy ke production 😄.
  
  hashtag#javascript hashtag#react hashtag#frontend hashtag#Bareksa hashtag#AmanPastiBisa`,
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7176895408705601536/?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A7176895408705601536%29',
  },
  {
    imgSrc: 'https://media.licdn.com/dms/image/D5605AQFAg-nSU0-7gg/videocover-high/0/1692199650606?e=1715252400&v=beta&t=nLAFeL8Eost2facTt6s1MBz-oeqcB95JA8984aikt4g',
    description: 'Dulu waktu sekolah, pernah jadi petugas pengibar bendera. Bendera yang dikibar sama lagu Indonesia Raya balap2an karna gk tau tempo nya. Akhirnya jadi inspirasi buat mini game ini, sekalian untuk memperingati hari kemerdekaan Indonesia ke 78 🇮🇩',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7097599814149836800/?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A7097599814149836800%29',
  },
  {
    imgSrc: 'https://media.licdn.com/dms/image/D5605AQHgThyB0O82Pw/videocover-high/0/1677738595762?e=1715252400&v=beta&t=BSEdyFGLOAdDj-DDl46KLfnrdUrOjGlOmtzqwIFJV30',
    description: `Keresahan seorang bapak2. Anak saya lagi seneng main puzzle, kalo satu set udh bosen, minta beli set puzzle baru, lama2 boncos juga haha.
    Akhirnya saya coba buat game puzzle simple. Jadi ketika bosen, tinggal ubah set image nya. Alhamdulillah lolos QA oleh anak saya sendiri, anteng ketika lagi di suapin. Paling di atur screen time nya aja.`,
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7036945722738446337/?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A7036945722738446337%29',
  },
  {
    imgSrc: 'https://media.licdn.com/dms/image/C4D05AQH1wEvwtK96Qw/videocover-high/0/1654908146766?e=1715252400&v=beta&t=vdNseU37sPJ6u2unGpHraSggGAUFI2pYwemnHwSgUL0',
    description: `Kemarin liat orang orang pada share di instagram stories list musik yang mereka dengar dengan bentuk diagram pie. Pas googling "Spotify Pie" (https://lnkd.in/dkfuezv4), ternyata viral juga dan masuk ke berita onlen. Penasaran akhirnya nyari Spotify API dan nyoba bikin sendiri Spotify Top List.

    List API nya lumayan lengkap sih untuk free user, ya paling minus nya kurang url preview musik nya aja biar bisa di play.`,
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:6941187905872621568/?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A6941187905872621568%29',
  },
  {
    imgSrc: 'https://media.licdn.com/dms/image/C5605AQEMW1FKbB8L7A/videocover-low/0/1642173474052?e=1715252400&v=beta&t=pqixf1_yMhVyNNLoYUiXgUnMu_O3RlpEVnp2lwF0ukY',
    description: `Mini game puzzle, mobile responsive dengan custom hook.
    Ohya, buah nya bisa beli di TaniHub ya haha`,
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:6887774836131803136/?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A6887774836131803136%29',
  },
  {
    imgSrc: 'https://media.licdn.com/dms/image/C5605AQGPyZ2gG0pbdg/videocover-low/0/1640966723821?e=1715252400&v=beta&t=qi7k5bsBmYNNt3f9LYqJgQNUWQ1V8M521wluB79VYQs',
    description: 'Fireworks using vanilla css and js',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:6882713344353144832/?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A6882713344353144832%29',
  },
  {
    imgSrc: 'https://media.licdn.com/dms/image/C5605AQEnG_JEVpHg6g/videocover-low/0/1639983563102?e=1715252400&v=beta&t=Ur8X_UyHDRtelvqu7ZGySReTSuJtjUShBMNdWQNE-yo',
    description: `Kemarin di beranda youtube ada video membuat ui keyboard (lebih tepat nya sih keycaps) dengan css (https://lnkd.in/g2VVwfut). Ya sambil ngisi waktu luang, saya tonton. Terus dapet ide, gimana kalo bikin full keyboard Keychron K2 pake css. Terus dapet ide lagi, coba deh ditambahin efek backlight.

    Kurang puas, mau nambah lagi efek typing. Ini lama2 bisa jadi kaya web typing speed haha`,
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:6878589670150819840/?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A6878589670150819840%29',
  },
  {
    imgSrc: 'https://media.licdn.com/dms/image/C5605AQGMa8IlSn260Q/videocover-low/0/1609072894695?e=1715252400&v=beta&t=uBKn3kO4oqPu07kQPDjgscmA-W4yw-B2FW1RP3iCxrg',
    description: 'Seminggu terakhir 2020, dikasih task ngerjain tech debt yang bejibun. Hasil dari kebosanan, bermodal react hook, local storage dan jss, jadilah game card match. Semoga aja 2021 point nya bisa dituker jadi voucher belanja haha',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:6748941109151588352/?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A6748941109151588352%29',
  },
]

function App() {
  const [textIndex, setTextIndex] = useState(0)
  const [texts, setTexts] = useState<string[]>([])
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
        }, 700)
      }
    }

    typeWriter()
  }

  useEffect(() => {
    if (textIndex < TEXTS.length) {
      setIsPaused(false)
      runTypeWriter(TEXTS[textIndex], textIndex, setTexts)
    }
  }, [textIndex])

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-950 p-4 md:p-6 flex justify-center">
        <div className="flex gap-4 w-full md:max-w-screen-sm">
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
              {textIndex > 1 && (
              <span className="animate-typeCarret text-sm md:text-xl">|</span>
              )}
            </p>
          </div>
        </div>
      </header>
      <main className="bg-gray-800 p-6 flex-1">
        <p className="text-white text-center md:text-2xl font-semibold">
          My creations:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 items-stretch gap-4 md:gap-6 mt-2 p-2 md:mt-6 md:p-6">
          {PORTFOLIOS.map((portfolio) => (
            <div key={portfolio.link} role="presentation" className="card bg-gray-900 rounded-lg shadow-md transform transition duration-500 ease-in-out hover:scale-105" onClick={() => handleOpenLink(portfolio.link)}>
              <img src={portfolio.imgSrc} alt="portfolio" className="w-full h-36 md:h-48 object-cover rounded-lg" />
              <div className="mt-2 p-2 md:mt-4 md:p-4">
                <span className="text-white text-xs md:text-base">
                  {truncate(portfolio.description)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
