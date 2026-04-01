import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

import {
  python,
  javascript,
  typescript,
  docker,
  tailwind,
  reactjs,
  postgresql,
  nodejs,
  aws,
  azure,
  nextjs,
  sql,
  powerbi,
  plotly,
  d3js,
  streamlit,
  bigquery,
  gcp,
  pandas,
  claude,
  sklearn,
  xgboost,
  powerapps,
  powerautomate,
  dynamics365,
  dbt,
} from "../assets";

const languagesAndFrameworks = [
  { name: "Python", icon: python },
  { name: "SQL", icon: sql },
  { name: "TypeScript", icon: typescript },
  { name: "JavaScript", icon: javascript },
  { name: "React", icon: reactjs },
  { name: "Node.js", icon: nodejs },
  { name: "Next.js", icon: nextjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Docker", icon: docker },
];

const dataAndCloud = [
  { name: "Power BI", icon: powerbi },
  { name: "Plotly", icon: plotly },
  { name: "D3.js", icon: d3js },
  { name: "Streamlit", icon: streamlit },
  { name: "PostgreSQL", icon: postgresql },
  { name: "BigQuery", icon: bigquery },
  { name: "AWS", icon: aws },
  { name: "GCP", icon: gcp },
  { name: "Azure", icon: azure },
  { name: "Pandas", icon: pandas },
];

const aiAndPlatforms = [
  { name: "Claude API", icon: claude },
  { name: "scikit-learn", icon: sklearn },
  { name: "XGBoost", icon: xgboost },
  { name: "Power Apps", icon: powerapps },
  { name: "Power Automate", icon: powerautomate },
  { name: "Dynamics 365", icon: dynamics365 },
  { name: "dbt", icon: dbt },
];

const Tech = () => {
  const [rows, setRows] = useState({
    languagesAndFrameworks: [],
    dataAndCloud: [],
    aiAndPlatforms: [],
  });

  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2
  });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const calculateRows = (width, techArray) => {
    let dynamicRows = [];
    let startIndex = 0;
    let rowSize = 6;

    if (width < 500) {
      dynamicRows = [
        techArray.slice(0, 3),
        techArray.slice(3, 5),
        techArray.slice(5, 8),
        techArray.slice(8, 10),
      ];
    } else {
      while (startIndex < techArray.length) {
        const endIndex = startIndex + rowSize;
        dynamicRows.push(techArray.slice(startIndex, endIndex));
        startIndex += rowSize;
        rowSize = rowSize === 6 ? 5 : 6;
      }
    }

    return dynamicRows;
  };

  useEffect(() => {
    const calculateRowsForAllCategories = () => {
      const rowsData = {
        languagesAndFrameworks: calculateRows(window.innerWidth, languagesAndFrameworks),
        dataAndCloud: calculateRows(window.innerWidth, dataAndCloud),
        aiAndPlatforms: calculateRows(window.innerWidth, aiAndPlatforms),
      };
      setRows(rowsData);
    };

    calculateRowsForAllCategories();

    const handleResize = () => {
      calculateRowsForAllCategories();
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const hexagonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: Math.random() * 1.5,
        duration: 0.5,
        type: "spring"
      }
    },
    hover: {
      scale: 1.05,
      zIndex: 2,
      transition: { duration: 0.3 }
    }
  };

  const renderCategory = (categoryName, categoryRows) => (
    <motion.div
      key={categoryName}
      className="category-container"
      initial="hidden"
      animate={mainControls}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
      }}
    >
      <motion.h2
        className="category-title top"
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
        style={{
          fontFamily: "'', cursive",
          fontSize: "26px",
          background: "linear-gradient(90deg, #915EFF, #00BFFF)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          textFillColor: "transparent",
          filter: "drop-shadow(0 0 10px #915EFF)",
        }}
      >{`<${categoryName}>`}</motion.h2>
      <div className="honeycomb-grid">
        {categoryRows?.map((row, rowIndex) => (
          <div
            key={`${categoryName}-row-${rowIndex}`}
            className={`honeycomb-row ${rowIndex % 2 === 1 ? "staggered-row" : ""}`}
          >
            {row.map((tech) => (
              <motion.div
                key={tech.name}
                className="hexagon"
                variants={hexagonVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                title={tech.name}
                style={{ position: "relative" }}
              >
                <img src={tech.icon} alt={tech.name}  style={{ userSelect: "none" }} draggable="false"/>
                <span style={{
                  position: "absolute",
                  bottom: "-28px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  fontSize: "11px",
                  color: "#aaa6c3",
                  whiteSpace: "nowrap",
                  fontFamily: "system-ui, sans-serif",
                  fontWeight: 500,
                  opacity: 0.8,
                }}>{tech.name}</span>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
      <motion.h2
        className="category-title bottom"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
        style={{
          fontFamily: "'', cursive",
          fontSize: "26px",
          background: "linear-gradient(90deg, #915EFF, #00BFFF)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          textFillColor: "transparent",
          filter: "drop-shadow(0 0 10px #915EFF)",
        }}
      >{`</${categoryName}>`}</motion.h2>
    </motion.div>
  );

  return (
    <section className="skills" ref={ref}>
      <div className="container">
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-center`}>Technical Proficiencies</p>
          <h2 className={`${styles.sectionHeadText} text-center`}>Skills.</h2>
        </motion.div>
        {renderCategory("Languages & Frameworks", rows.languagesAndFrameworks)}
        {renderCategory("Data & Cloud", rows.dataAndCloud)}
        {renderCategory("AI & Platforms", rows.aiAndPlatforms)}
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "skills");
