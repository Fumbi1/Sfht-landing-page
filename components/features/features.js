"use client"

import React from "react"

import { motion, scale, useInView } from "motion/react"
import Image from "next/image"
import { useRef } from "react"

const features = [
    {
        id: 1,
        icon: "/feed-circle.png",
        title: "Smart Shift Scheduling",
        description: "Build weekly/monthly rosters in minutes with templates and drag-drop.",
        position: "top-left",
    },
    {
        id: 2,
        icon: "/goal-circle.png",
        title: "Shift Notes & Handover",
        description: "Attach checklists, files, and instructions to each shift—no messy group chats.",
        position: "top-right",
    },
    {
        id: 3,
        icon: "/fitness-circle.png",
        title: "Swap, Give & Take",
        description: "Employees request swaps or give away shifts; managers approve in one tap.",
        position: "left",
    },
    {
        id: 4,
        icon: "/progress-circle.png",
        title: "Skills, Roles & Rules",
        description: "Let only qualified staff claim shifts; set overtime and rest limits automatically.",
        position: "right",
    },
    {
        id: 5,
        icon: "/bell-circle.png",
        title: "Availability & Time-Off",
        description: "See who's free, manage PTO, and prevent conflicts before they happen.",
        position: "bottom-left",
    },
    {
        id: 6,
        icon: "/people-circle.png",
        title: "Time Tracking & Timesheets",
        description: "Clock-in/out with geofencing and auto-generated timesheets ready for payroll.",
        position: "bottom-right",
    },
    {
        id: 7,
        icon: "/nutrition-circle.png",
        title: "Real-Time Alerts",
        description: "Instant push/email notifications for new shifts, changes, and approvals.",
        position: "bottom-left-2",
    },
    {
        id: 8,
        icon: "/carbon_integration.png",
        title: "Calendar & Payroll Integrations",
        description: "Sync with Google/Outlook and send hours to payroll; optional Slack/Teams alerts.",
        position: "bottom-right-2",
    },
]

export default function Features() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })

    return (
        <section ref={ref} className="relative w-full bg-[#1A1A1A] py-16 px-4 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
            {/* Decorative curved lines - SVG */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <motion.ellipse
                    cx="50%"
                    cy="50%"
                    rx="575"
                    ry="575"
                    fill="none"
                    stroke="#A1A2A1"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                    transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                />
                <motion.ellipse
                    cx="50%"
                    cy="50%"
                    rx="350"
                    ry="350"
                    fill="none"
                    stroke="#A1A2A1"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                    transition={{ duration: 2.5, ease: "easeInOut", delay: 0.7 }}
                />
                <motion.ellipse className={'hidden lg:block'}
                    cx="50%"
                    cy="50%"
                    rx="200"
                    ry="200"
                    fill="#A7A3B0"
                    opacity="10%"
                    stroke="#A1A2A1"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                    transition={{ duration: 2.5, ease: "easeInOut", delay: 0.7 }}
                />
            </svg>

            <div className="relative max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-12 sm:mb-16 lg:mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-3 sm:mb-4">
                        Features built for your shift team
                    </h2>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto">
                        Everything you need to plan, swap, and track shifts in one place—fast.
                    </p>
                </motion.div>

                {/* Features Grid - Mobile/Tablet */}
                <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-12">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.id}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 sm:p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        >
                            <div className="flex items-start gap-3 mb-3">
                                {/* Icon placeholder */}
                                <Image src={feature.icon} alt="icon" width={16} height={16} />
                                <h3 className="text-base sm:text-lg font-medium text-white leading-tight">{feature.title}</h3>
                            </div>
                            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed pl-8">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Desktop Circular Layout */}
                <div className="hidden lg:block relative h-[800px]">
                    {/* Center phone mockup */}
                    <motion.div
                        className="absolute top-1/5 left-1/2 -translate-x-1/2 -translate-y-1/5 z-10"
                        initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                        animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                        style={{ perspective: 1000 }}
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
                        >
                            {/* Phone mockup */}
                            <Image src={'/iphone.png'} alt="phone" width={954} height={875} />
                        </motion.div>
                    </motion.div>

                    {/* Feature cards in circular layout */}
                    {/* Top Left */}
                    <motion.div
                        className="absolute top-[0%] left-[8%] w-96 shadow-lg"
                        initial={{ opacity: 0, x: -50, y: -50 }}
                        animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        whileHover={{ y: -8, transition: { duration: 0.2 } }}
                    >
                        <FeatureCard
                            icon={"/feed-circle.png"}
                            title="Smart Shift Scheduling"
                            description="Build weekly/monthly rosters in minutes with templates and drag-drop."
                        />
                    </motion.div>

                    {/* Top Right */}
                    <motion.div
                        className="absolute top-[0%] right-[8%] w-96 shadow-lg"
                        initial={{ opacity: 0, x: 50, y: -50 }}
                        animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        whileHover={{ y: -8, transition: { duration: 0.2 } }}
                    >
                        <FeatureCard
                            icon={"/goal-circle.png"}
                            title="Shift Notes & Handover"
                            description="Attach checklists, files, and instructions to each shift—no messy group chats."
                        />
                    </motion.div>

                    {/* Left */}
                    <motion.div
                        className="absolute top-[25%] left-[2%] w-96 shadow-lg"
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        whileHover={{ y: -8, transition: { duration: 0.2 } }}
                    >
                        <FeatureCard
                            icon={"/fitness-circle.png"}
                            title="Swap, Give & Take"
                            description="Employees request swaps or give away shifts; managers approve in one tap."
                        />
                    </motion.div>

                    {/* Right */}
                    <motion.div
                        className="absolute top-[25%] right-[2%] w-96 shadow-lg"
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.9 }}
                        whileHover={{ y: -8, transition: { duration: 0.2 } }}
                    >
                        <FeatureCard
                            icon={"/progress-circle.png"}
                            title="Skills, Roles & Rules"
                            description="Let only qualified staff claim shifts; set overtime and rest limits automatically."
                        />
                    </motion.div>

                    {/* Bottom Left */}
                    <motion.div
                        className="absolute bottom-[30%] left-[2%] w-96 shadow-lg"
                        initial={{ opacity: 0, x: -50, y: 50 }}
                        animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 1.0 }}
                        whileHover={{ y: -8, transition: { duration: 0.2 } }}
                    >
                        <FeatureCard
                            icon={"/bell-circle.png"}
                            title="Availability & Time-Off"
                            description="See who's free, manage PTO, and prevent conflicts before they happen."
                        />
                    </motion.div>

                    {/* Bottom Right */}
                    <motion.div
                        className="absolute bottom-[30%] right-[2%] w-96 shadow-lg"
                        initial={{ opacity: 0, x: 50, y: 50 }}
                        animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 1.1 }}
                        whileHover={{ y: -8, transition: { duration: 0.2 } }}
                    >
                        <FeatureCard
                            icon={"/people-circle.png"}
                            title="Time Tracking & Timesheets"
                            description="Clock-in/out with geofencing and auto-generated timesheets ready for payroll."
                        />
                    </motion.div>

                    {/* Bottom Left 2 */}
                    <motion.div
                        className="absolute bottom-[0%] left-[8%] w-96 shadow-lg"
                        initial={{ opacity: 0, x: -50, y: 50 }}
                        animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 1.2 }}
                        whileHover={{ y: -8, transition: { duration: 0.2 } }}
                    >
                        <FeatureCard
                            icon={"/nutrition-circle.png"}
                            title="Real-Time Alerts"
                            description="Instant push/email notifications for new shifts, changes, and approvals."
                        />
                    </motion.div>

                    {/* Bottom Right 2 */}
                    <motion.div
                        className="absolute bottom-[0%] right-[8%] w-96 shadow-lg"
                        initial={{ opacity: 0, x: 50, y: 50 }}
                        animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 1.3 }}
                        whileHover={{ y: -8, transition: { duration: 0.2 } }}
                    >
                        <FeatureCard
                            icon={"/carbon_integration.png"}
                            title="Calendar & Payroll Integrations"
                            description="Sync with Google/Outlook and send hours to payroll; optional Slack/Teams alerts."
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

function FeatureCard({
    icon,
    title,
    description,
}) {
    return (
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
            <div className="flex items-start gap-3 mb-3">
                <Image src={icon} alt="icon" width={16} height={16} />
                <h3 className="text-lg font-medium text-white leading-tight">{title}</h3>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed pl-8">{description}</p>
        </div>
    )
}

function CheckIcon() {
    return (
        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
    )
}
