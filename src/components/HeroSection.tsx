/* eslint-disable react/no-danger */
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import LottieLib from "react-lottie"

import {
  REPEATED_TEXT_SPEED,
  REPEATED_TEXTS,
  TEXT_SPEED,
  TEXTS,
} from "@/constants/app"
import * as animationData from "@/lottie/keyboard.json"

const Lottie =
  (LottieLib as unknown as { default: typeof LottieLib }).default ?? LottieLib

const SOCIAL_LINKS: Record<string, string> = {
  linkedin: "https://www.linkedin.com/in/faishalpasa/",
  github: "https://github.com/faishalpasa/",
  instagram: "https://www.instagram.com/faishalpasa/",
  email: "mailto:mfaishalpasa@gmail.com",
}

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
}

const HeroSection = () => {
  const [textIndex, setTextIndex] = useState(0)
  const [texts, setTexts] = useState<string[]>([])
  const [repeatedText, setRepeatedText] = useState<string>("")
  const [isPaused, setIsPaused] = useState(false)

  const handleOpenSocial = (type: string) => {
    const url = SOCIAL_LINKS[type]
    if (url) window.open(url, "_blank")
  }

  const runTypeWriter = (
    text: string,
    index: number,
    callBack: React.Dispatch<React.SetStateAction<string[]>>,
  ) => {
    let newWelcomeText = ""
    let i = 0

    function typeWriter() {
      if (i < text.length) {
        newWelcomeText += text.charAt(i)
        setTimeout(typeWriter, TEXT_SPEED)
        callBack((prev) => {
          const newWelcomeTexts = [...prev]
          newWelcomeTexts[index] = newWelcomeText
          return newWelcomeTexts
        })
        i++
      } else {
        setIsPaused(true)
        setTimeout(
          () => {
            setTextIndex((prev) => prev + 1)
          },
          index === 1 ? 2000 : 0,
        )
      }
    }

    typeWriter()
  }

  const runTypeRepeatedText = () => {
    let i = 0
    let repeatedTextIndex = 0
    let newRepeatedText = ""

    function typing() {
      setIsPaused(false)

      const text = REPEATED_TEXTS[repeatedTextIndex]

      function eraseWriter() {
        if (i >= 0) {
          newRepeatedText = text.substring(0, i)
          setTimeout(eraseWriter, REPEATED_TEXT_SPEED)
          setRepeatedText(newRepeatedText)
          i--
        } else {
          typing()
        }
      }

      if (i < text.length) {
        newRepeatedText += text.charAt(i)
        setTimeout(typing, REPEATED_TEXT_SPEED)
        setRepeatedText(newRepeatedText)
        i++
      } else {
        setIsPaused(true)
        setTimeout(
          () => {
            eraseWriter()
            if (repeatedTextIndex < REPEATED_TEXTS.length - 1) {
              repeatedTextIndex++
            } else {
              repeatedTextIndex = 0
            }
          },
          repeatedTextIndex < REPEATED_TEXTS.length - 1 ? 700 : 2000,
        )
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
            <h1 className="text-3xl md:text-6xl font-bold">
              <span
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500"
                dangerouslySetInnerHTML={{ __html: texts?.[0] }}
              />
              <span
                className="text-orange-400"
                dangerouslySetInnerHTML={{ __html: texts?.[1] }}
              />
              {textIndex <= 1 && <span className="animate-typeCarret">|</span>}
            </h1>
            <div className="text-lg md:text-2xl text-gray-300">
              <p>
                <span dangerouslySetInnerHTML={{ __html: texts?.[2] }} />
                {textIndex > 1 && textIndex <= 2 && (
                  <span className="animate-typeCarret">|</span>
                )}
              </p>
              <p>
                <span
                  className="text-blue-400"
                  dangerouslySetInnerHTML={{ __html: repeatedText }}
                />
                {textIndex === 3 && (
                  <span className="animate-typeCarret">|</span>
                )}
              </p>
            </div>
          </div>

          <div className="mt-12 flex gap-6">
            {["email", "linkedin", "github", "instagram"].map((social) => (
              <motion.span
                key={social}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="[&>svg]:h-6 [&>svg]:w-6 text-white/80 hover:text-white cursor-pointer"
                onClick={() => handleOpenSocial(social)}
                role="presentation"
              >
                {social === "email" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                )}
                {social === "linkedin" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 448 512"
                  >
                    <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                  </svg>
                )}
                {social === "github" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 496 512"
                  >
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                  </svg>
                )}
                {social === "instagram" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 448 512"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                )}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </header>
  )
}

export default HeroSection
