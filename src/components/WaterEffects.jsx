import React, { useEffect, useRef, useState } from 'react'

const WaterEffects = ({ variant = 'waves' }) => {
  const canvasRef = useRef(null)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768)
    }
    checkDesktop()
    window.addEventListener('resize', checkDesktop, { passive: true })
    return () => window.removeEventListener('resize', checkDesktop)
  }, [])

  // Animated water waves using canvas (Active only on desktop >= 768px for fast mobile score)
  useEffect(() => {
    if (!isDesktop) return

    if (variant === 'waves' && canvasRef.current) {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d', { alpha: true })
      let animationFrameId
      let time = 0
      let isVisible = false

      const resizeCanvas = () => {
        if (!canvas) return
        canvas.width = canvas.offsetWidth || window.innerWidth
        canvas.height = canvas.offsetHeight || 300
      }

      resizeCanvas()
      window.addEventListener('resize', resizeCanvas, { passive: true })

      const drawWaves = () => {
        if (!isVisible) return

        ctx.clearRect(0, 0, canvas.width, canvas.height)
        time += 0.02

        // Multiple wave layers for depth
        for (let i = 0; i < 2; i++) {
          ctx.beginPath()
          ctx.moveTo(0, canvas.height / 2)
          
          const amplitude = 18 + i * 8
          const frequency = 0.008 + i * 0.004
          const speed = time * (0.4 + i * 0.2)
          const step = 10
          
          for (let x = 0; x < canvas.width + step; x += step) {
            const y = canvas.height / 2 + 
              Math.sin(x * frequency + speed) * amplitude * Math.sin(time * 0.4) +
              Math.cos(x * frequency * 1.4 + speed * 1.1) * amplitude * 0.4
            ctx.lineTo(x, y)
          }
          
          ctx.lineTo(canvas.width, canvas.height)
          ctx.lineTo(0, canvas.height)
          ctx.closePath()
          
          const gradient = ctx.createLinearGradient(0, canvas.height / 2, 0, canvas.height)
          const opacity = 0.12 - i * 0.03
          gradient.addColorStop(0, `rgba(59, 130, 246, ${opacity})`)
          gradient.addColorStop(1, `rgba(37, 99, 235, ${opacity * 0.4})`)
          
          ctx.fillStyle = gradient
          ctx.fill()
        }

        animationFrameId = requestAnimationFrame(drawWaves)
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            isVisible = entry.isIntersecting
            if (isVisible) {
              cancelAnimationFrame(animationFrameId)
              drawWaves()
            } else {
              cancelAnimationFrame(animationFrameId)
            }
          })
        },
        { threshold: 0.05 }
      )

      observer.observe(canvas)

      return () => {
        window.removeEventListener('resize', resizeCanvas)
        observer.disconnect()
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [variant, isDesktop])

  if (!isDesktop) return null

  if (variant === 'waves') {
    return (
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      />
    )
  }

  return null
}

export default WaterEffects
