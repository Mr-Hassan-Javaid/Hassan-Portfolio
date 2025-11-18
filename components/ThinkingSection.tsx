'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './ThinkingSection.module.css'

export default function ThinkingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className={styles.section}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className={styles.content}
        >
          <motion.h2
            className={styles.heading}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {["Thinking,", "Emotion,", "and", "Craft"].map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + index * 0.1,
                  ease: 'easeOut'
                }}
                style={{ display: 'inline-block', marginRight: '0.3em' }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>
          <p className={styles.body}>
            I know the fatigue of hollow portfolios. They show visuals but hide the thinking. My work is different. It's a journey from the chaos of a business problem to the clarity of a solution. I don't just decorate problems; I solve them through a relentless pursuit of clarity, craft, and tangible impact.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

