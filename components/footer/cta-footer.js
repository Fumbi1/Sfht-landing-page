"use client"

import { motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"

export default function CTAAndFooter() {
  return (
    <>
      {/* CTA Section */}
      <section id="testimonials" className="relative bg-[#1A1A1A] py-16 px-4 sm:px-6 lg:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 lg:space-y-8"
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Ready to end shift chaos?
              </h2>
              <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-xl">
                Ditch spreadsheets and group chats. ShiftApp lets you plan, publish, swap, and track shifts in
                minutes—with real-time alerts so every shift is covered.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-black px-8 py-4 rounded-full font-medium text-base sm:text-lg hover:bg-gray-100 transition-colors"
              >
                Download ShiftApp Now
              </motion.button>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-fit">
                {/* Decorative lines */}
                {/* <div className="absolute left-2 z-10 top-0 w-fit">
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: "395px", width: "18px", backgroundColor: "#06051A" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="w-fit"
                  />
                </div>
                <div className="absolute left-8 z-10 top-0 w-fit">
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: "395px", width: "18px", backgroundColor: "#06051A" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="w-fit"
                  />
                </div> */}

                {/* Image placeholder */}
                <div className="relative  overflow-hidden aspect-[4/3]">
                  <Image
                    src="/contact-img.png"
                    alt="contact"
                    width={464}
                    height={344}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] border-none py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
            {/* Logo and Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 space-y-4"
            >
              <div className="flex items-center gap-3">
                <Image src={"/Logo.svg"} alt="logo" width={94} height={29} />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                ShiftApp is the all-in-one platform for painless shift management. Build rosters in minutes, publish to
                everyone at once, and let staff swap, give, or claim shifts with the right approvals.
              </p>
            </motion.div>

            {/* Company Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider">Company</h3>
              <ul className="space-y-3">
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
                  <li key={index}>
                    <Link href={item.link} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources Links */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider">Resources</h3>
              <ul className="space-y-3">
                {[
                  "Blog post name goes here",
                  "Blog post name goes here",
                  "Blog post name goes here",
                  "See all resources",
                ].map((item, index) => (
                  <li key={index}>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div> */}

            {/* About Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-4"
            >
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider">About</h3>
              <ul className="space-y-3">
                {["Terms & Conditions", "Privacy Policy"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="pt-8 border-t border-gray-900 text-center"
          >
            <p className="text-gray-500 text-sm">Copyright © 2025 Product of Ethos Ltd</p>
          </motion.div>
        </div>
      </footer>
    </>
  )
}
