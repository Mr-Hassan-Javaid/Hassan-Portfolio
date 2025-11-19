'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import styles from './ThinkingSection.module.css'

export default function ThinkingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const stepRef1 = useRef<HTMLDivElement | null>(null)
  const stepRef2 = useRef<HTMLDivElement | null>(null)
  const stepRef3 = useRef<HTMLDivElement | null>(null)

  // Center-based triggers so each \"screen\" of scroll clearly swaps the line
  const inViewStep1 = useInView(stepRef1, { margin: '-50% 0px -50% 0px' })
  const inViewStep2 = useInView(stepRef2, { margin: '-50% 0px -50% 0px' })
  const inViewStep3 = useInView(stepRef3, { margin: '-50% 0px -50% 0px' })

  const [activeStage, setActiveStage] = useState(0)

  useEffect(() => {
    if (inViewStep3) {
      setActiveStage(2)
    } else if (inViewStep2) {
      setActiveStage(1)
    } else if (inViewStep1) {
      setActiveStage(0)
    }
  }, [inViewStep1, inViewStep2, inViewStep3])

  const stages = [
    {
      id: 0,
      text: 'I know the fatigue of hollow portfolios.',
    },
    {
      id: 1,
      text: 'They show visuals but hide the thinking.',
    },
    {
      id: 2,
      text: `My work is different. It's a journey from the chaos of a business problem to the clarity of a solution. I don't just decorate problems; I solve them through a relentless pursuit of clarity, craft, and tangible impact.`,
    },
  ]

  return (
    <section ref={ref} className={styles.section}>
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
              {['Thinking,', 'Emotion,', 'and', 'Craft'].map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + index * 0.1,
                    ease: 'easeOut',
                  }}
                  style={{ display: 'inline-block', marginRight: '0.3em' }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h2>
            <AnimatePresence mode="wait">
              <motion.p
                key={stages[activeStage].id}
                className={`${styles.body} ${
                  activeStage === 0 ? styles.bodyEmphasis : ''
                }`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                {stages[activeStage].text}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          <div className={styles.scrollSteps}>
            <div ref={stepRef1} className={styles.step} />
            <div ref={stepRef2} className={styles.step} />
            <div ref={stepRef3} className={styles.step} />
          </div>
        </div>
      </div>
    </section>
  )
}

