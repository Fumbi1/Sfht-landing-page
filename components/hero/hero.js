"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"

const Hero = () => {
  return (
    <div className="w-full">
      <div className="my-16 md:my-32 w-full px-4 sm:px-6 md:w-[95%] mx-auto md:pl-[2.5%] md:flex md:flex-row md:justify-between md:items-center md:gap-8">
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-fit flex flex-row gap-2 bg-[#FFFFFF1A] px-4 py-2 text-xs rounded-full"
          >
            <Image src={"/Barbell.svg"} alt="*" width={12} height={12} />
            <p className="font-medium">Simple, flexible shift scheduling for teams</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="w-fit h-fit mt-7 mb-8"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 md:mb-6 leading-tight">
              Fastest Shift
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              Swaps in Seconds
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-sm md:text-base font-normal leading-relaxed max-w-xl"
            >
              Upload schedules, handle swaps, and send real-time alerts—no
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              spreadsheets, no messy group chats, no missed shifts.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-3 mb-12 md:mb-0"
          >
            <Link href="https://waitlist.shftapp.info/" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="w-full sm:w-auto whitespace-nowrap rounded-full bg-[#FBE9F5] px-6 md:px-8 py-3 border-2 border-[#FBE9F5] text-[#010015] text-sm font-medium leading-5"
              >
                Join our journey now
              </motion.button>
            </Link>
            <Link href="#how-it-works">
              <motion.button
                whileHover={{ scale: 1.02, y: -2, borderColor: "#FFFFFF" }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="w-full sm:w-auto whitespace-nowrap rounded-full bg-transparent px-6 md:px-8 py-3 border border-[#FFFFFF66] text-sm font-medium leading-5"
              >
                See how it works
              </motion.button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex-1 relative mt-8 md:mt-0"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <Image
              src={"/hero-phones.png"}
              width={731}
              height={541}
              alt="phones"
              loading="eager"
              className="w-full h-auto max-w-full"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
