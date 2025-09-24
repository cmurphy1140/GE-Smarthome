'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import {
  Home,
  Smartphone,
  Wifi,
  Lightbulb,
  Monitor,
  Battery,
  Cloud,
  CheckCircle,
  Play,
  Pause,
  SkipBack,
  SkipForward
} from 'lucide-react'

interface IntegrationStep {
  id: string
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  position: { x: number; y: number }
  connections?: string[]
  type: 'hardware' | 'software' | 'process'
  details: string[]
}

const integrationSteps: IntegrationStep[] = [
  {
    id: 'home',
    title: 'Customer Home',
    description: 'Starting point - existing home infrastructure',
    icon: Home,
    position: { x: 10, y: 50 },
    connections: ['devices'],
    type: 'hardware',
    details: [
      'Existing electrical infrastructure',
      'Standard wall switches and fixtures',
      'Home WiFi network',
      'Electrical panel access'
    ]
  },
  {
    id: 'devices',
    title: 'GE Proseo Devices',
    description: 'Smart lighting and control devices',
    icon: Lightbulb,
    position: { x: 30, y: 30 },
    connections: ['wifi', 'app'],
    type: 'hardware',
    details: [
      'Smart bulbs with Direct Connect',
      'Smart switches (neutral/no-neutral)',
      'Light strips and panels',
      'Motion sensors and keypads'
    ]
  },
  {
    id: 'wifi',
    title: 'WiFi Network',
    description: '2.4GHz connection for remote control',
    icon: Wifi,
    position: { x: 50, y: 15 },
    connections: ['cloud'],
    type: 'process',
    details: [
      '2.4GHz WiFi connectivity',
      'Bluetooth for initial pairing',
      'Local network communication',
      'Internet gateway access'
    ]
  },
  {
    id: 'app',
    title: 'Proseo App',
    description: 'User control interface',
    icon: Smartphone,
    position: { x: 30, y: 70 },
    connections: ['cloud', 'savant'],
    type: 'software',
    details: [
      'iOS and Android compatibility',
      'Intuitive lighting controls',
      'Scene and schedule management',
      'Device pairing and setup'
    ]
  },
  {
    id: 'cloud',
    title: 'Cloud Services',
    description: 'Remote access and processing',
    icon: Cloud,
    position: { x: 70, y: 30 },
    connections: ['savant'],
    type: 'process',
    details: [
      'Secure cloud infrastructure',
      'Remote device management',
      'Voice assistant integration',
      'Over-the-air updates'
    ]
  },
  {
    id: 'savant',
    title: 'Savant Integration',
    description: 'Professional automation platform',
    icon: Monitor,
    position: { x: 70, y: 70 },
    connections: ['energy'],
    type: 'software',
    details: [
      'Whole-home automation control',
      'Professional-grade features',
      'Third-party device integration',
      'Advanced scene programming'
    ]
  },
  {
    id: 'energy',
    title: 'Energy Management',
    description: 'Power backup and efficiency',
    icon: Battery,
    position: { x: 90, y: 50 },
    connections: [],
    type: 'hardware',
    details: [
      'Grid-independent backup power',
      'Intelligent load management',
      'Energy usage monitoring',
      'Battery system integration'
    ]
  }
]

const slideContent = [
  {
    title: "Installation Planning",
    description: "Professional assessment of existing home infrastructure and electrical requirements",
    activeSteps: ['home'],
    narrative: "Every GE Smart Home integration begins with a thorough assessment of the customer's existing infrastructure. Our certified partners evaluate electrical systems, WiFi coverage, and identify optimal device placement for seamless operation."
  },
  {
    title: "Device Installation",
    description: "Strategic placement of GE Proseo smart lighting devices throughout the home",
    activeSteps: ['home', 'devices'],
    narrative: "GE Proseo devices are installed with retrofit-friendly design in mind. Smart switches work with or without neutral wires, and bulbs feature Direct Connect technology for immediate functionality out of the box."
  },
  {
    title: "Network Connection",
    description: "Connecting smart devices to home WiFi network for remote capabilities",
    activeSteps: ['devices', 'wifi'],
    narrative: "Devices connect to the home's 2.4GHz WiFi network, enabling remote control and advanced features. Bluetooth pairing ensures quick setup, while WiFi provides the backbone for cloud-connected functionality."
  },
  {
    title: "App Setup & Control",
    description: "Customer onboarding with the intuitive Proseo mobile application",
    activeSteps: ['devices', 'app', 'wifi'],
    narrative: "The Proseo App provides an intuitive interface for controlling all smart lighting. Customers can create custom scenes, set schedules, and manage their entire lighting system from anywhere."
  },
  {
    title: "Cloud Integration",
    description: "Secure cloud services enable advanced features and remote management",
    activeSteps: ['app', 'wifi', 'cloud'],
    narrative: "Secure cloud infrastructure powers voice control integration, over-the-air updates, and remote troubleshooting capabilities. This ensures the system stays current with the latest features and security protocols."
  },
  {
    title: "Savant Platform Integration",
    description: "Premium customers can integrate with Savant's professional automation platform",
    activeSteps: ['cloud', 'savant', 'app'],
    narrative: "For customers seeking premium automation, the same Proseo devices seamlessly integrate with Savant's professional platform. This enables whole-home control, advanced scene programming, and integration with other home systems."
  },
  {
    title: "Complete Smart Home Ecosystem",
    description: "Full integration with energy management and backup power solutions",
    activeSteps: ['savant', 'energy', 'cloud'],
    narrative: "The complete ecosystem includes Savant's energy management capabilities, providing grid-independent backup power, intelligent load management, and comprehensive energy monitoring for true home resilience."
  }
]

export function IntegrationDiagram() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const diagramRef = useRef(null)
  const isInView = useInView(diagramRef, { once: true, amount: 0.3 })

  const SLIDE_DURATION = 5000 // 5 seconds per slide

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setCurrentSlide(prevSlide => (prevSlide + 1) % slideContent.length)
            return 0
          }
          return prev + (100 / (SLIDE_DURATION / 100))
        })
      }, 100)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPlaying])

  const currentContent = slideContent[currentSlide]
  const activeStepIds = new Set(currentContent.activeSteps)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideContent.length)
    setProgress(0)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideContent.length) % slideContent.length)
    setProgress(0)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setProgress(0)
  }

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  }

  const deviceVariants = {
    hidden: { scale: 0, opacity: 0, rotate: -180 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 15,
        rotate: { duration: 0.6, ease: "easeOut" as const }
      }
    },
    active: {
      scale: 1.15,
      boxShadow: "0 0 40px rgba(59, 130, 246, 0.6)",
      transition: { duration: 0.3, type: "spring" as const, stiffness: 200 }
    }
  }

  const connectionVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 0.6,
      transition: { duration: 1, delay: 0.5 }
    },
    active: {
      opacity: 1,
      stroke: "#3b82f6",
      strokeWidth: 3,
      transition: { duration: 0.3 }
    }
  }

  const renderConnections = () => {
    const connections: React.ReactElement[] = []

    integrationSteps.forEach(step => {
      if (step.connections) {
        step.connections.forEach(connectionId => {
          const targetStep = integrationSteps.find(s => s.id === connectionId)
          if (targetStep) {
            const isActive = activeStepIds.has(step.id) && activeStepIds.has(connectionId)
            const startX = step.position.x
            const startY = step.position.y
            const endX = targetStep.position.x
            const endY = targetStep.position.y

            connections.push(
              <motion.line
                key={`${step.id}-${connectionId}`}
                x1={`${startX}%`}
                y1={`${startY}%`}
                x2={`${endX}%`}
                y2={`${endY}%`}
                stroke={isActive ? "#3b82f6" : "#e2e8f0"}
                strokeWidth={isActive ? "3" : "2"}
                strokeDasharray={isActive ? "0" : "5,5"}
                variants={connectionVariants}
                initial="hidden"
                animate={isInView ? (isActive ? "active" : "visible") : "hidden"}
                className="transition-all duration-500"
              />
            )
          }
        })
      }
    })

    return connections
  }

  const getDeviceColor = (type: string, isActive: boolean) => {
    if (!isActive) return 'border-slate-200 bg-slate-50 text-slate-400 shadow-sm'

    switch (type) {
      case 'hardware': return 'border-green-400 bg-green-50 text-green-700 shadow-lg shadow-green-100'
      case 'software': return 'border-blue-400 bg-blue-50 text-blue-700 shadow-lg shadow-blue-100'
      case 'process': return 'border-purple-400 bg-purple-50 text-purple-700 shadow-lg shadow-purple-100'
      default: return 'border-slate-400 bg-slate-100 text-slate-600 shadow-sm'
    }
  }

  return (
    <section ref={diagramRef} className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-blue-950">
            Integration Process
          </span>
          <h2 className="text-3xl font-semibold text-blue-950 md:text-4xl">
            GE Smart Home Integration Journey
          </h2>
          <p className="mx-auto max-w-3xl text-base text-slate-600 md:text-lg">
            Follow the complete integration process from initial installation to full smart home automation
          </p>
        </motion.div>
      </div>

      <div className="grid gap-8 xl:grid-cols-[2fr,1fr] lg:grid-cols-1">
        {/* Main Diagram */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 p-6 shadow-2xl backdrop-blur-sm sm:p-8"
        >
          {/* SVG Diagram */}
          <div className="relative h-80 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 via-slate-50 to-purple-50/30 sm:h-96">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            <svg className="h-full w-full" viewBox="0 0 100 100">
              {/* Background Grid */}
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#e2e8f0" strokeWidth="0.5" opacity="0.3"/>
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />

              {/* Connection Lines */}
              <g>{renderConnections()}</g>

              {/* Device Nodes */}
              {integrationSteps.map((step) => {
                const StepIcon = step.icon
                const isActive = activeStepIds.has(step.id)

                return (
                  <g key={step.id}>
                    <motion.circle
                      cx={`${step.position.x}%`}
                      cy={`${step.position.y}%`}
                      r="6"
                      fill={isActive ? "#3b82f6" : "#e2e8f0"}
                      stroke={isActive ? "#1d4ed8" : "#94a3b8"}
                      strokeWidth="2"
                      variants={deviceVariants}
                      initial="hidden"
                      animate={isInView ? (isActive ? "active" : "visible") : "hidden"}
                      className="transition-all duration-500"
                    />
                    <motion.foreignObject
                      x={`${step.position.x - 2}%`}
                      y={`${step.position.y - 2}%`}
                      width="4%"
                      height="4%"
                      variants={deviceVariants}
                      initial="hidden"
                      animate={isInView ? (isActive ? "active" : "visible") : "hidden"}
                      className="pointer-events-none"
                    >
                      <div className="flex h-full w-full items-center justify-center">
                        <StepIcon
                          className={`h-4 w-4 ${isActive ? 'text-white' : 'text-slate-400'}`}
                        />
                      </div>
                    </motion.foreignObject>
                  </g>
                )
              })}
            </svg>
          </div>

          {/* Device Legend */}
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {integrationSteps.map((step) => {
              const StepIcon = step.icon
              const isActive = activeStepIds.has(step.id)

              return (
                <motion.div
                  key={step.id}
                  variants={deviceVariants}
                  className={`group flex items-center gap-3 rounded-xl border p-3 transition-all duration-300 hover:scale-105 ${getDeviceColor(step.type, isActive)}`}
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                    transition: { duration: 0.2, type: "spring", stiffness: 300 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg transition-all group-hover:scale-110 ${isActive ? 'bg-current/15' : 'bg-current/5'}`}>
                    <StepIcon className="h-5 w-5 transition-transform group-hover:rotate-12" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-sm font-semibold truncate">{step.title}</h4>
                    <p className="text-xs opacity-75 line-clamp-2 lg:line-clamp-none">{step.description}</p>
                  </div>
                  {isActive && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="flex h-4 w-4 items-center justify-center rounded-full bg-current/20"
                    >
                      <CheckCircle className="h-3 w-3" />
                    </motion.div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Slide Content & Controls */}
        <div className="space-y-6">
          {/* Slide Controls */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg"
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-blue-950">
                Step {currentSlide + 1} of {slideContent.length}
              </h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition-all hover:border-slate-300 hover:bg-slate-50"
                  disabled={currentSlide === 0}
                >
                  <SkipBack className="h-4 w-4" />
                </button>
                <button
                  onClick={togglePlay}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-blue-200 bg-blue-50 text-blue-600 transition-all hover:border-blue-300 hover:bg-blue-100"
                >
                  {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </button>
                <button
                  onClick={nextSlide}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition-all hover:border-slate-300 hover:bg-slate-50"
                  disabled={currentSlide === slideContent.length - 1}
                >
                  <SkipForward className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-6 h-1 overflow-hidden rounded-full bg-slate-100">
              <motion.div
                className="h-full bg-blue-600"
                style={{ width: `${((currentSlide + progress / 100) / slideContent.length) * 100}%` }}
                transition={{ ease: "linear" }}
              />
            </div>

            {/* Slide Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-4"
              >
                <div>
                  <h4 className="text-xl font-bold text-blue-950">
                    {currentContent.title}
                  </h4>
                  <p className="mt-2 text-sm text-slate-600">
                    {currentContent.description}
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-sm leading-relaxed text-slate-700">
                    {currentContent.narrative}
                  </p>
                </div>

                {/* Active Step Details */}
                <div className="space-y-2">
                  <h5 className="text-sm font-semibold text-slate-900">Active Components:</h5>
                  {currentContent.activeSteps.map(stepId => {
                    const step = integrationSteps.find(s => s.id === stepId)
                    if (!step) return null

                    return (
                      <div key={stepId} className="flex items-start gap-2 text-xs">
                        <CheckCircle className="mt-0.5 h-3 w-3 text-green-600" />
                        <div>
                          <span className="font-medium text-slate-900">{step.title}</span>
                          <ul className="mt-1 space-y-0.5 text-slate-600">
                            {step.details.slice(0, 2).map((detail, index) => (
                              <li key={index}>• {detail}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Slide Navigation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-2xl border border-slate-200 bg-white p-4 shadow-lg"
          >
            <h5 className="mb-3 text-sm font-semibold text-slate-900">Jump to Step:</h5>
            <div className="grid grid-cols-1 gap-1">
              {slideContent.map((slide, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`rounded-lg p-2 text-left text-xs transition-all ${
                    index === currentSlide
                      ? 'bg-blue-100 text-blue-900'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <span className="font-medium">{index + 1}. {slide.title}</span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}