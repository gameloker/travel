'use client'

import { motion, useScroll, useSpring } from 'framer-motion'
import { Plane } from 'lucide-react'

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-blue-200 z-50 origin-left"
      style={{ scaleX }}
    >
      <motion.div
        className="absolute top-0 bottom-0 flex items-center"
        style={{
          left: `calc(${scrollYProgress.get() * 100}% - 12px)`,
          position: 'absolute'
        }}
        transition={{ type: "spring", stiffness: 100, damping: 30 }}
      >
      </motion.div>
    </motion.div>
  )
}