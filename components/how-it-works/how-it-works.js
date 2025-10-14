"use client"

import { motion } from "motion/react"
import { useInView } from "motion/react"
import Image from "next/image"
import { useRef } from "react"

export default function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const steps = [
    {
      number: "01",
      title: "Create your team",
      description: "Invite staff or import a CSV. Set locations, roles, and pay rates.",
      position: "top-left",
    },
    {
      number: "02",
      title: "Set availability & policies",
      description: "Employees share availability/PTO while you define skills, overtime, and rest rules.",
      position: "top-right",
    },
    {
      number: "03",
      title: "Build & publish the schedule",
      description: "Drag-drop or auto-generate from templates, then publish to everyone at once.",
      position: "right",
    },
    {
      number: "04",
      title: "Swap, claim & approve",
      description: "Team members request swaps or claim open shifts; eligibility and approvals happen in one tap.",
      position: "bottom-right",
    },
    {
      number: "05",
      title: "Track time & sync payroll",
      description: "Clock-in/out with geofencing, auto-create timesheets, and export to payroll with real-time alerts.",
      position: "bottom",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const phoneVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.3,
      },
    },
  }

  return (
    <section ref={ref} className="relative bg-[#1A1A1A] py-20 md:py-32 overflow-hidden">
      {/* Decorative corner elements */}
      <motion.div
        initial={{ opacity: 0, x: -20, y: -20 }}
        animate={isInView ? { opacity: 0.3, x: 0, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48"
      >
        <Image
          src="/1.svg"
          width={402}
          height={415.4}
          loading="lazy"
          alt="Decorative grid pattern top-left"
          className="w-full h-full object-contain opacity-50"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20, y: 20 }}
        animate={isInView ? { opacity: 0.3, x: 0, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        className="absolute bottom-0 right-0 w-32 h-32 md:w-64 md:h-64"
      >
        <Image
          src="/66.svg"
          width={402}
          height={415.4}
          loading="lazy"
          alt="Decorative grid pattern bottom-right"
          className="w-full h-full object-contain opacity-50"
        />
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">How ShiftApp Works</h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-2">
            Plan, publish, and manage shifts without the chaos. Here's the 5-minute flow.
          </p>
        </motion.div>

        {/* Desktop Layout - Flowing design */}
        <div className="hidden lg:block relative">
          <div className="relative max-w-6xl mx-auto">
            {/* Step 01 - Top Left */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="absolute -top-20 left-1/2 max-w-xs scale-50 group cursor-default"
            >
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }} className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gray-600" />
                  <span className="text-gray-500 text-sm font-medium">{steps[0].number}</span>
                </div>
                <h3 className="text-[#A1A2A1] text-xl font-semibold">{steps[0].title}</h3>
                <p className="text-[#A1A2A1] text-sm leading-relaxed">{steps[0].description}</p>
              </motion.div>
            </motion.div>

            {/* Step 02 - Top Right */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 0.1 }}
              className="absolute top-0 right-12 max-w-xs group cursor-default"
            >
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }} className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gray-600" />
                  <span className="text-gray-500 text-sm font-medium">{steps[1].number}</span>
                </div>
                <h3 className="text-white text-xl font-semibold">{steps[1].title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{steps[1].description}</p>
              </motion.div>
            </motion.div>

            {/* Phone Mockups - Center */}
            <motion.div
              variants={phoneVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex justify-start items-center py-12 relative"
            >
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="relative w-full max-w-3xl h-[500px]"
              >
                <Image
                  src="/three-phones.png"
                  width={677}
                  height={502}
                  loading="lazy"
                  alt="ShiftApp phone mockups showing app interface"
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </motion.div>

            {/* Step 03 - Right */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 0.2 }}
              className="absolute top-1/2 -translate-y-1/2 right-0 max-w-sm group cursor-default"
            >
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }} className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-white" />
                  <span className="text-gray-400 text-lg font-medium">{steps[2].number}</span>
                </div>
                <h3 className="text-white text-2xl font-semibold">{steps[2].title}</h3>
                <p className="text-gray-400 text-base leading-relaxed">{steps[2].description}</p>
              </motion.div>
            </motion.div>

            {/* Step 04 - Bottom Right */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 0.3 }}
              className="absolute bottom-20 right-12 max-w-xs group cursor-default"
            >
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }} className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gray-600" />
                  <span className="text-gray-500 text-sm font-medium">{steps[3].number}</span>
                </div>
                <h3 className="text-white text-xl font-semibold">{steps[3].title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{steps[3].description}</p>
              </motion.div>
            </motion.div>

            {/* Step 05 - Bottom Center */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 0.4 }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 max-w-xs group cursor-default"
            >
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }} className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gray-600" />
                  <span className="text-gray-500 text-sm font-medium">{steps[4].number}</span>
                </div>
                <h3 className="text-white text-xl font-semibold">{steps[4].title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{steps[4].description}</p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Mobile/Tablet Layout - Stacked */}
        <div className="lg:hidden">
          {/* Phone Mockups */}
          <motion.div
            variants={phoneVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mb-12 flex justify-center"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="w-full max-w-md"
            >
              <Image
                src="/three-phones.png"
                  width={677}
                  height={502}
                  loading="lazy"
                alt="ShiftApp phone mockups showing app interface"
                className="w-full h-auto object-contain"
              />
            </motion.div>
          </motion.div>

          {/* Steps Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid gap-8 md:grid-cols-2 md:gap-10"
          >
            {steps.map((step, index) => (
              <motion.div key={step.number} variants={itemVariants} className="space-y-3 group">
                <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }} className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${index === 2 ? "bg-white" : "bg-gray-600"}`} />
                    <span
                      className={`text-sm font-medium ${index === 2 ? "text-gray-400 text-base" : "text-gray-500"}`}
                    >
                      {step.number}
                    </span>
                  </div>
                  <h3
                    className={`text-white font-semibold ${index === 2 ? "text-xl md:text-2xl" : "text-lg md:text-xl"}`}
                  >
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">{step.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center mt-16 md:mt-24"
        >
          <motion.button
            whileHover={{ scale: 1.05, borderColor: "rgba(255, 255, 255, 0.3)" }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="px-8 py-3 md:px-10 md:py-4 border border-gray-800 rounded-full text-white text-sm md:text-base font-medium hover:bg-white/5 transition-colors"
          >
            Join the Waitlist
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
