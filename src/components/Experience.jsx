import React, { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence, useAnimation, useInView } from "framer-motion";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const ExperienceCard = React.memo(({ experience, onClick, index, isLast }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.1, 0.5)}
      className="relative"
    >
      {/* Timeline connector line */}
      {!isLast && (
        <div className="absolute left-8 top-[76px] w-[2px] h-[calc(100%-32px)] bg-gradient-to-b from-[var(--accent)] to-[var(--accent)33]" />
      )}
      <div
        className="flex items-center p-4 rounded-lg cursor-pointer transition-all duration-300 bg-primary hover:bg-tertiary hover:border hover:border-[var(--accent)44] border border-transparent"
        onClick={onClick}
        onKeyDown={(e) => e.key === 'Enter' && onClick()}
        role="button"
        tabIndex={0}
        aria-label={`${experience.title} at ${experience.company_name}`}
      >
        <div
          className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden mr-4 relative z-10 border-2 border-[var(--accent)55]"
          style={{ backgroundColor: experience.iconBg || 'transparent' }}
        >
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-white text-[18px] font-bold">{experience.title}</h3>
          <p className="text-secondary text-[14px]">{experience.company_name}</p>
          <p className="text-[var(--accent)] text-[12px] mt-1 font-medium">{experience.date}</p>
        </div>
      </div>
    </motion.div>
  );
});

const ExperienceLightbox = ({ experience, onClose }) => {
  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="relative bg-tertiary border border-[var(--accent)33] rounded-2xl p-8 max-w-lg w-full max-h-[80vh] overflow-y-auto shadow-[0_0_40px_rgba(145,94,255,0.15)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-secondary hover:text-white transition-colors text-2xl leading-none w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10"
        >
          &times;
        </button>

        {/* Header */}
        <div className="flex items-center mb-6">
          <div
            className="flex-shrink-0 w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-[var(--accent)55]"
            style={{ backgroundColor: experience.iconBg || 'transparent' }}
          >
            <img
              src={experience.icon}
              alt={experience.company_name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-white text-[22px] font-bold">{experience.title}</h3>
            <p className="text-secondary text-[15px]">{experience.company_name}</p>
            <p className="text-[var(--accent)] text-[13px] mt-1 font-medium">{experience.date}</p>
          </div>
        </div>

        {/* Points */}
        <ul className="list-disc ml-5 space-y-3">
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-white-100 text-[14px] pl-1 tracking-wider leading-relaxed"
            >
              {point}
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

const Experience = () => {
  const [activeExperience, setActiveExperience] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const mainControls = useAnimation();

  const handleExperienceClick = useCallback((index) => {
    setActiveExperience(index);
  }, []);

  const handleClose = useCallback(() => {
    setActiveExperience(null);
  }, []);

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={sectionRef}>
      <motion.div
        initial="hidden"
        animate={mainControls}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <p className={`${styles.sectionSubText} text-center`}>
          My Professional Journey
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={mainControls}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience
        </h2>
      </motion.div>

      <div className="mt-20 max-w-2xl mx-auto">
        <div className="flex flex-col space-y-4">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              onClick={() => handleExperienceClick(index)}
              index={index}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {activeExperience !== null && (
          <ExperienceLightbox
            experience={experiences[activeExperience]}
            onClose={handleClose}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default SectionWrapper(Experience, "work");
