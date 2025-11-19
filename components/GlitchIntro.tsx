/* GlitchIntro.tsx
 * Full-screen 4s glitch intro overlay that shows the tagline
 * "Creative Technologist & Product Designer" before revealing the homepage.
 */
'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './GlitchIntro.module.css'

type GlitchIntroProps = {
  onComplete?: () => void
}

export default function GlitchIntro({ onComplete }: GlitchIntroProps) {
  const [isActive, setIsActive] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsActive(false)
      if (onComplete) {
        onComplete()
      }
    }, 4000)

    return () => clearTimeout(timeout)
  }, [onComplete])

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <div className={styles.noise} />
          <div className={styles.content}>
            <motion.p
              className={styles.glitch}
              data-text="Creative Technologist & Product Designer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              Creative Technologist &amp; Product Designer
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}


