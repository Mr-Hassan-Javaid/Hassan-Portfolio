'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import styles from './Hero.module.css'

export default function Hero() {
  const fullTagline =
    'I transform complex challenges into clear, intelligent, and impactful digital experiences'
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    let cancelled = false
    let interval: ReturnType<typeof setInterval> | null = null

    const startTyping = () => {
      interval = setInterval(() => {
        if (cancelled) return

        setDisplayedText(prev => {
          if (prev.length >= fullTagline.length) {
            if (interval) {
              clearInterval(interval)
            }
            return prev
          }
          return prev + fullTagline[prev.length]
        })
      }, 45)
    }

    const delayTimeout = setTimeout(() => {
      if (!cancelled) {
        startTyping()
      }
    }, 600)

    return () => {
      cancelled = true
      if (interval) {
        clearInterval(interval)
      }
      clearTimeout(delayTimeout)
    }
  }, [fullTagline])

  return (
    <section className={styles.hero}>
      <div className={styles.networkBackground} aria-hidden="true">
        <svg
          className={styles.networkSvg}
          viewBox="0 0 800 400"
          preserveAspectRatio="xMidYMid slice"
        >
          <g className={styles.networkLines}>
            <line x1="80" y1="60" x2="260" y2="120" />
            <line x1="260" y1="120" x2="420" y2="80" />
            <line x1="420" y1="80" x2="620" y2="140" />
            <line x1="180" y1="220" x2="340" y2="170" />
            <line x1="340" y1="170" x2="520" y2="230" />
            <line x1="120" y1="320" x2="280" y2="260" />
            <line x1="280" y1="260" x2="480" y2="300" />
          </g>
          <g className={styles.networkDots}>
            <circle cx="80" cy="60" r="3" />
            <circle cx="260" cy="120" r="3" />
            <circle cx="420" cy="80" r="3" />
            <circle cx="620" cy="140" r="3" />
            <circle cx="180" cy="220" r="3" />
            <circle cx="340" cy="170" r="3" />
            <circle cx="520" cy="230" r="3" />
            <circle cx="120" cy="320" r="3" />
            <circle cx="280" cy="260" r="3" />
            <circle cx="480" cy="300" r="3" />
          </g>
        </svg>
      </div>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className={styles.content}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={styles.name}
          >
            Muhammad Hassan
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={styles.title}
            whileHover={{ scale: 1.05, color: 'var(--color-terracotta)' }}
            whileTap={{ scale: 0.95 }}
          >
            Creative Technologist & Product Designer
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className={styles.tagline}
          >
            <span>{displayedText}</span>
            <span className={styles.caret}>|</span>
          </motion.p>
          
          <motion.a
            href="#process"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className={styles.ctaButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            See the Transformation
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

