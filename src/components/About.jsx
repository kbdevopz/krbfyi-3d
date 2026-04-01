"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

import { styles } from "../styles"
import { SectionWrapper } from "../hoc"
import { fadeIn } from "../utils/motion"
import { profilepic } from "../assets"

const ServiceCard = ({ index, title, icon }) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="w-full xs:w-[250px]">
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col relative overflow-hidden">
        <motion.img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />

        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>

        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0"
          whileHover={{ opacity: 0.2 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  </motion.div>
)

const About = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

  return (
    <div ref={sectionRef} className="pt-[60px] md:pt-0 overflow-hidden">
      <motion.div
        initial="hidden"
        animate={mainControls}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <p className={styles.sectionSubText}>Introduction</p>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={mainControls}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className="mt-10 flex flex-col md:flex-row items-center md:items-start gap-10">
        <motion.div
          variants={fadeIn("right", "spring", 0.5, 0.75)}
          className="w-full md:w-1/3 flex flex-col items-center"
        >
          <div className="relative w-64 h-64 rounded-full p-[3px] bg-gradient-to-br from-[var(--accent)] via-[var(--accent-secondary)] to-[var(--accent-dark)] shadow-[0_0_30px_5px_rgba(145,94,255,0.3)]">
            <div className="w-full h-full rounded-full overflow-hidden bg-tertiary">
              <img
                src={profilepic || "/placeholder.svg"}
                alt="Karlis Baisden"
                className="w-full h-full object-cover"
                style={{
                  objectFit: "cover",
                  objectPosition: "50% 50%",
                }}
              />
            </div>
          </div>
          <div className="mt-10 flex gap-6 justify-center">
            <motion.a
              href="https://www.linkedin.com/in/karlis-baisden-132251191/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-700 flex items-center justify-center shadow-[0_4px_0_0_rgba(0,0,0,0.6)] hover:shadow-[0_2px_0_0_rgba(0,0,0,0.6)] hover:translate-y-[2px] active:translate-y-1 active:shadow-none transition-all duration-100"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              title="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </motion.a>

            <motion.a
              href="https://github.com/kbdevopz"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gradient-to-r from-gray-600 to-gray-800 flex items-center justify-center shadow-[0_4px_0_0_rgba(0,0,0,0.6)] hover:shadow-[0_2px_0_0_rgba(0,0,0,0.6)] hover:translate-y-[2px] active:translate-y-1 active:shadow-none transition-all duration-100"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              title="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            </motion.a>

            <motion.a
              href="https://x.com/KarlisBaisden"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gradient-to-r from-gray-800 to-black flex items-center justify-center shadow-[0_4px_0_0_rgba(0,0,0,0.6)] hover:shadow-[0_2px_0_0_rgba(0,0,0,0.6)] hover:translate-y-[2px] active:translate-y-1 active:shadow-none transition-all duration-100"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              title="X (Twitter)"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </motion.a>
          </div>
        </motion.div>

        <motion.div variants={fadeIn("left", "spring", 0.5, 0.75)} className="w-full md:w-2/3">
          <motion.ul
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl space-y-6 list-none"
          >
            <motion.li className="flex items-start" variants={fadeIn("up", "spring", 0.1, 0.75)}>
              <span className="mr-4 text-2xl flex-shrink-0">👨‍💻</span>
              <span>
                Builder with 25+ years shipping software — from PHP in 2000 to React, Python, Dynamics 365, Google Apps Script, and AI today. Currently building Dynamics 365 solutions and Google Workspace automations.
              </span>
            </motion.li>
            <motion.li className="flex items-start" variants={fadeIn("up", "spring", 0.2, 0.75)}>
              <span className="mr-4 text-2xl flex-shrink-0">🎓</span>
              <span>
                Pursuing my Sc.M. in Data Science (Policy, Governance &amp; Society) at Brown University. B.S. in Computer Information Systems from Bellevue University.
              </span>
            </motion.li>
            <motion.li className="flex items-start" variants={fadeIn("up", "spring", 0.3, 0.75)}>
              <span className="mr-4 text-2xl flex-shrink-0">⚖️</span>
              <span>
                Shipping justice tech platforms that make data accessible — Unbarred Labs (51 jurisdictions), Unbarred.ai (3,505+ reentry resources), CJ Data Quality Toolkit, CollegeSafetyData.org (8,683 colleges), and more.
              </span>
            </motion.li>
            <motion.li className="flex items-start" variants={fadeIn("up", "spring", 0.4, 0.75)}>
              <span className="mr-4 text-2xl flex-shrink-0">🛠</span>
              <span>
                Data science meets enterprise systems — built 11 production dashboards, 13+ Power Platform apps, 100+ automations, and data pipelines across Azure, AWS, and GCP.
              </span>
            </motion.li>
            <motion.li className="flex items-start" variants={fadeIn("up", "spring", 0.5, 0.75)}>
              <span className="mr-4 text-2xl flex-shrink-0">💡</span>
              <span>13 certifications across data, cloud, AI, and project management. Always building, always learning.</span>
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>
    </div>
  )
}

export default SectionWrapper(About, "about")
