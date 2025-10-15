"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import * as motion from "motion/react-client"

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div id="home" className="w-full pt-12 md:pt-0">
      <div className="fixed w-full top-0 left-0 bg-[#1A1A1A] z-50">
        <div className="hidden py-6 md:px-[5%] md:w-full md:flex md:flex-row md:justify-between md:items-center">
          <div>
            <Image src={"/logo.svg"} alt="logo" width={94} height={29} />
          </div>
          <div className="md:flex md:flex-row md:gap-6 text-base leading-6">
            <Link href="#home">Home</Link>
            <Link href="#features">Features</Link>
            <Link href="#how-it-works">How It Works</Link>
            <Link href="#testimonials">Testimonials</Link>
          </div>
          <div>
            <Link href="https://waitlist.shftapp.info/" target="_blank" rel="noopener noreferrer">
              <button className="w-fit h-fit cursor-pointer rounded-full bg-[#FBE9F5] px-8 py-3 border-2 text-[#010015] text-sm leading-5">
                Join Waitlist
              </button>
            </Link>
          </div>
        </div>
        {/*mobile setup*/}
        <div className="md:hidden py-6 relative z-20">
          <div className="w-11/12 mx-auto flex flex-row justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Image src={"/logo.svg"} alt="logo" width={94} height={29} />
            </motion.div>
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.9 }}
              className="relative w-[29px] h-[29px]"
            >
              <motion.div
                initial={false}
                animate={{
                  opacity: isMenuOpen ? 0 : 1,
                  rotate: isMenuOpen ? 90 : 0,
                  scale: isMenuOpen ? 0.8 : 1,
                }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image src={"/icons8-menu.svg"} alt="menu" width={29} height={29} />
              </motion.div>
              <motion.div
                initial={false}
                animate={{
                  opacity: isMenuOpen ? 1 : 0,
                  rotate: isMenuOpen ? 0 : -90,
                  scale: isMenuOpen ? 1 : 0.8,
                }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image src={"/icons8-close.png"} alt="close" width={29} height={29} />
              </motion.div>
            </motion.button>
          </div>
        </div>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden w-full fixed top-[60px] left-0 z-10 bg-[#1A1A1A] h-[50dvh] overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col h-full text-base overflow-y-auto leading-6 p-8 space-y-4">
              {[
                {
                  name: "Home",
                  link: "#"
                },
                {
                  name: "Features",
                  link: "#features"
                },
                {
                  name: "How It Works",
                  link: "#how-it-works"
                },
                {
                  name: "Testimonials",
                  link: "#testimonials"
                }
              ].map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                >
                  <Link
                    href={item.link}
                    onClick={() => setIsMenuOpen(false)}
                    className="block hover:text-[#FBE9F5] transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                className="pt-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 0.4,
                  ease: "easeOut",
                }}
              >
                <Link href="https://waitlist.shftapp.info/" target="_blank" rel="noopener noreferrer">
                  <button className="w-fit h-fit rounded-full bg-[#FBE9F5] px-8 py-3 border-2 text-[#010015] text-sm leading-5 hover:bg-[#f5d4ea] transition-colors duration-200">
                    Join Waitlist
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default NavBar
