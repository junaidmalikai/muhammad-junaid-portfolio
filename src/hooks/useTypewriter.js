import { useState, useEffect } from 'react'

export function useTypewriter(words, { typeMs = 80, deleteMs = 40, pauseMs = 2000 } = {}) {
  const [text, setText] = useState(words[0] ?? '')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || words.length === 0) return

    let wordIndex = 0
    let charIndex = words[0].length
    let deleting = false
    let timeoutId

    setText(words[0])

    const tick = () => {
      const currentWord = words[wordIndex]

      if (!deleting && charIndex === currentWord.length) {
        timeoutId = setTimeout(() => {
          deleting = true
          tick()
        }, pauseMs)
        return
      }

      if (deleting && charIndex === 0) {
        deleting = false
        wordIndex = (wordIndex + 1) % words.length
        timeoutId = setTimeout(tick, typeMs)
        return
      }

      charIndex += deleting ? -1 : 1
      setText(currentWord.substring(0, charIndex))
      timeoutId = setTimeout(tick, deleting ? deleteMs : typeMs)
    }

    timeoutId = setTimeout(() => {
      deleting = true
      tick()
    }, pauseMs)

    return () => clearTimeout(timeoutId)
  }, [mounted, words, typeMs, deleteMs, pauseMs])

  return { text, mounted }
}
