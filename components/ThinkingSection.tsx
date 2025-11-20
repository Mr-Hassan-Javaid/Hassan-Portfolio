'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './ThinkingSection.module.css'

export default function ThinkingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const fullText = `I know the fatigue of hollow portfolios. They show visuals but hide the thinking. My work is different. It's a journey from the chaos of a business problem to the clarity of a solution. I don't just decorate problems; I solve them through a relentless pursuit of clarity, craft, and tangible impact.`

  return (
    <section ref={ref} className={styles.section}>
      <div className={styles.thinkingAccents} aria-hidden="true"></div>
      <div className={styles.container}>
        <div className={styles.layout}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className={styles.stickyContent}
          >
            <motion.h2
              className={styles.heading}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Thinking, Emotion, and Craft
            </motion.h2>
            <motion.p
              className={styles.body}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
            >
              {fullText}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

