import {
  mobile,
  backend,
  web,
  fullstack,
  javascript,
  typescript,
  reactjs,
  tailwind,
  nodejs,
  postgresql,
  mongodb,
  docker,
  python,
  aws,
  azure,
  git,
  nextjs,
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
  sql,
  brown,
  bellevue,
  witcc,
  seaboard,
  cogwheel,
  google,
  microsoft,
  ibm,
  oracle,
  datacamp,
  umich,
  ssyb,
  unbarredLabsImg,
  unbarredAiImg,
  collegeSafetyImg,
  cjDataQualityImg,
  cogwheelTechImg,
  porkAnalyticsImg,
  bigrigbuddyImg,
  staffabilityImg,
  projectPivotImg,
  enterprisePowerImg,
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "education", title: "Education" },
  { id: "work", title: "Work" },
  { id: "extracurricular", title: "Certifications" },
  { id: "skills", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "Builder", icon: fullstack },
  { title: "Data Scientist", icon: web },
  { title: "Dynamics 365 Wiz", icon: backend },
  { title: "Technologist", icon: mobile },
];

const education = [
  {
    title: "Sc.M., Data Science: Policy, Governance & Society",
    company_name: "Brown University",
    icon: brown,
    iconBg: "#fff",
    date: "2025 - Present",
    points: [
      "Focus on data science applied to public policy, governance, and social impact",
      "Combining technical expertise with policy research methodology",
    ],
  },
  {
    title: "B.S., Computer Information Systems",
    company_name: "Bellevue University",
    icon: bellevue,
    iconBg: "#fff",
    date: "2021 - 2025",
    points: [
      "Comprehensive study of enterprise systems, databases, and software development",
    ],
  },
  {
    title: "Network Administration & Cybersecurity",
    company_name: "Western Iowa Tech Community College",
    icon: witcc,
    iconBg: "#fff",
    date: "2019 - 2021",
    points: [
      "Foundation in networking, systems administration, and cybersecurity principles",
    ],
  },
];

const technologies = [
  { name: "Python", icon: python },
  { name: "SQL", icon: sql },
  { name: "TypeScript", icon: typescript },
  { name: "JavaScript", icon: javascript },
  { name: "React", icon: reactjs },
  { name: "Node.js", icon: nodejs },
  { name: "Next.js", icon: nextjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Docker", icon: docker },
  { name: "PostgreSQL", icon: postgresql },
  { name: "AWS", icon: aws },
  { name: "Azure", icon: azure },
];

const itTools = [
  { name: "Power BI", icon: powerbi },
  { name: "Plotly", icon: plotly },
  { name: "D3.js", icon: d3js },
  { name: "Streamlit", icon: streamlit },
  { name: "BigQuery", icon: bigquery },
  { name: "GCP", icon: gcp },
  { name: "Pandas", icon: pandas },
];

const cybersecurityTools = [
  { name: "Claude API", icon: claude },
  { name: "scikit-learn", icon: sklearn },
  { name: "XGBoost", icon: xgboost },
  { name: "Power Apps", icon: powerapps },
  { name: "Power Automate", icon: powerautomate },
  { name: "Dynamics 365", icon: dynamics365 },
  { name: "dbt", icon: dbt },
];

const designTools = [];

const experiences = [
  {
    title: "Programmer / Dynamics 365 Developer",
    company_name: "Enterprise Agriculture",
    icon: cogwheel,
    iconBg: "#fff",
    date: "2025 - Present",
    points: [
      "Developing and customizing Dynamics 365 solutions for dealership operations",
      "Building integrations, automations, and data workflows across enterprise systems",
      "Shipping justice tech platforms and data science projects in parallel",
    ],
  },
  {
    title: "Director of IT / Data Analyst",
    company_name: "Seaboard Triumph Foods",
    icon: seaboard,
    iconBg: "#fff",
    date: "Feb 2023 - Sept 2025",
    points: [
      "Promoted to Director of IT (Feb 2025) leading a 23-person org spanning development, data, networking, OT/SCADA, and enterprise IT",
      "Built 11 production dashboards tracking 50+ KPIs across yield, throughput, labor efficiency, and quality",
      "Designed SQL data pipelines (Azure SQL, Dataverse) feeding near-real-time analytics and operational reporting",
      "Shipped 13+ Model-Driven and Canvas apps with Dynamics 365 / Dataverse and 100+ Power Automate flows",
      "Created USDA/FDA compliance dashboards for audit readiness and regulatory reporting",
    ],
  },
  {
    title: "Founder / Technical Consultant",
    company_name: "Cogwheel Tech (est. 2000)",
    icon: cogwheel,
    iconBg: "#fff",
    date: "2000 - Present",
    points: [
      "Founded web development consultancy building full-stack solutions (PHP, .NET, JavaScript, MySQL) for businesses across multiple industries",
      "Evolved practice into data analytics, BI dashboards, and AI integration",
      "Built BI dashboards using Looker, Tableau, and Power BI across GCP, Azure, and AWS",
      "Developed data pipelines with BigQuery, PostgreSQL, and Google Apps Script; automated workflows reducing client cycle times by 25-35%",
      "Managed ERP implementations across Dynamics 365, Sage, and JD Edwards",
    ],
  },
];

const extracurricular = [
  {
    title: "Generative AI Professional",
    type: "Professional Certificate",
    icon: oracle,
    iconBg: "#C74634",
    date: "2025",
    points: ["Generative AI, Prompt Engineering, LLM Architecture, AI Ethics"],
    credential: "",
  },
  {
    title: "Power Platform Solutions Architect",
    type: "Professional Certificate",
    icon: microsoft,
    iconBg: "#000000",
    date: "2024",
    points: ["Power Platform, Dynamics 365, Dataverse, Solution Architecture, Enterprise Integration"],
    credential: "",
  },
  {
    title: "SQL Associate",
    type: "Professional Certificate",
    icon: datacamp,
    iconBg: "#000000",
    date: "2024",
    points: ["SQL Queries, Joins, Aggregation, Subqueries, Window Functions"],
    credential: "",
  },
  {
    title: "Data Analyst Associate",
    type: "Professional Certificate",
    icon: datacamp,
    iconBg: "#000000",
    date: "2024",
    points: ["Data Analysis, Statistical Methods, Data Cleaning, Visualization, Reporting"],
    credential: "",
  },
  {
    title: "Data Engineer Associate",
    type: "Professional Certificate",
    icon: datacamp,
    iconBg: "#000000",
    date: "2024",
    points: ["ETL Pipelines, Data Warehousing, SQL, Python, Data Modeling"],
    credential: "",
  },
  {
    title: "AI Engineer for Data Scientists Associate",
    type: "Professional Certificate",
    icon: datacamp,
    iconBg: "#000000",
    date: "2024",
    points: ["Machine Learning, Deep Learning, NLP, Model Deployment, AI Pipelines"],
    credential: "",
  },
  {
    title: "Applied Machine Learning in Python",
    type: "Course Certificate",
    icon: umich,
    iconBg: "#00274C",
    date: "2024",
    points: ["scikit-learn, Classification, Regression, Model Evaluation, Feature Engineering"],
    credential: "",
  },
  {
    title: "Applied Plotting & Data Representation",
    type: "Course Certificate",
    icon: umich,
    iconBg: "#00274C",
    date: "2024",
    points: ["matplotlib, Data Visualization, Chart Design, Interactive Plots"],
    credential: "",
  },
  {
    title: "Exploratory Data Analysis for Machine Learning",
    type: "Course Certificate",
    icon: ibm,
    iconBg: "#052FAD",
    date: "2024",
    points: ["EDA, Feature Selection, Data Cleaning, Statistical Analysis, Python"],
    credential: "",
  },
  {
    title: "Supervised Machine Learning — Classification",
    type: "Course Certificate",
    icon: ibm,
    iconBg: "#052FAD",
    date: "2024",
    points: ["Decision Trees, Random Forests, SVM, KNN, Logistic Regression"],
    credential: "",
  },
  {
    title: "Supervised Machine Learning — Regression",
    type: "Course Certificate",
    icon: ibm,
    iconBg: "#052FAD",
    date: "2024",
    points: ["Linear Regression, Polynomial Regression, Ridge, Lasso, Model Evaluation"],
    credential: "",
  },
  {
    title: "Project Management",
    type: "Professional Certificate",
    icon: google,
    iconBg: "#050C18",
    date: "2023",
    points: ["Agile, Scrum, Project Planning, Risk Management, Stakeholder Communication"],
    credential: "",
  },
  {
    title: "Six Sigma Yellow Belt",
    type: "Professional Certificate",
    icon: ssyb,
    iconBg: "#FFD700",
    date: "2023",
    points: ["Process Improvement, DMAIC, Lean Principles, Quality Control, Root Cause Analysis"],
    credential: "",
  },
];

// ── Justice Tech ──────────────────────────────────────────────
const justiceTechProjects = [
  {
    name: "Unbarred Labs",
    description:
      "14 interactive research labs analyzing criminal justice data across 51 U.S. jurisdictions. D3.js visualizations, scenario modeling, and policy analysis. Three labs live: Voting Rights (5.9M disenfranchised), Juvenile Justice, and Criminal Records (70M Americans, 93.5% relief gap).",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "D3.js", color: "green-text-gradient" },
      { name: "PostgreSQL", color: "pink-text-gradient" },
      { name: "Justice Tech", color: "orange-text-gradient" },
    ],
    image: unbarredLabsImg,
    source_code_link: "https://github.com/kbdevopz",
    live_project_link: "https://unbarred.us",
  },
  {
    name: "Unbarred.ai",
    description:
      "AI-powered reentry resource discovery connecting returning citizens with 3,505+ resources across 52 jurisdictions. Privacy-first design with intelligent matching, guided reentry journeys, and directories covering housing, employment, legal aid, health services, and more.",
    tags: [
      { name: "AI/LLM", color: "blue-text-gradient" },
      { name: "React", color: "green-text-gradient" },
      { name: "TypeScript", color: "pink-text-gradient" },
      { name: "Justice Tech", color: "orange-text-gradient" },
    ],
    image: unbarredAiImg,
    source_code_link: "https://github.com/kbdevopz",
    live_project_link: "https://unbarred.ai",
  },
  {
    name: "CJ Data Quality Toolkit",
    description:
      "Data quality profiling for criminal justice data — built as a companion to Recidiviz's corrections platform. Statistical tests (KS, chi-squared, Z-score, IQR) profile 52 state datasets, grading them A-F on completeness, consistency, timeliness, validity, and equity.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Streamlit", color: "green-text-gradient" },
      { name: "scipy", color: "pink-text-gradient" },
      { name: "Justice Tech", color: "orange-text-gradient" },
    ],
    image: cjDataQualityImg,
    source_code_link: "https://github.com/kbdevopz/CJ-Data-Quality-Toolkit",
    live_project_link: "https://cjdataquality.streamlit.app",
  },
  {
    name: "CollegeSafetyData.org",
    description:
      "Campus crime transparency dashboard transforming 9 years of Clery Act data into searchable, comparable analytics. Rankings, trends, and breakdowns across 8,683 U.S. colleges with per-student rate calculations and side-by-side school comparisons.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Recharts", color: "green-text-gradient" },
      { name: "TanStack Table", color: "pink-text-gradient" },
      { name: "Justice Tech", color: "orange-text-gradient" },
    ],
    image: collegeSafetyImg,
    source_code_link: "https://github.com/kbdevopz",
    live_project_link: "https://collegesafetydata.org",
  },
  {
    name: "BigRigBuddy",
    description:
      "CDL career pathway app for returning citizens. AI-powered career coaching via Claude, state-specific licensing requirements for all 50 states, and gamification elements for progress tracking toward trucking careers.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Claude AI", color: "green-text-gradient" },
      { name: "TypeScript", color: "pink-text-gradient" },
      { name: "Justice Tech", color: "orange-text-gradient" },
    ],
    image: bigrigbuddyImg,
    source_code_link: "https://github.com/kbdevopz",
    live_project_link: "https://bigrigbuddy.com",
  },
  {
    name: "StaffAbility",
    description:
      "Workforce development platform connecting justice-involved individuals with employment. AI-powered career coaching, technology training pathways, and employer partnership networks.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "TypeScript", color: "green-text-gradient" },
      { name: "Drizzle ORM", color: "pink-text-gradient" },
      { name: "Justice Tech", color: "orange-text-gradient" },
    ],
    image: staffabilityImg,
    source_code_link: "https://github.com/kbdevopz",
    live_project_link: "https://staffability.org",
  },
  {
    name: "Project Pivot",
    description:
      "Reentry support platform featuring justice system statistics visualization, personalized user journeys, and a community partnership model to help returning citizens navigate their path forward.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Recharts", color: "green-text-gradient" },
      { name: "TypeScript", color: "pink-text-gradient" },
      { name: "Justice Tech", color: "orange-text-gradient" },
    ],
    image: projectPivotImg,
    source_code_link: "https://github.com/kbdevopz",
    live_project_link: "https://projectpivot.org",
  },
];

// ── Data & Enterprise ────────────────────────────────────────
const otherProjects = [
  {
    name: "Cogwheel.tech",
    description:
      "25+ years of technical consulting — evolved from Coyote Web Solutions (2000) through 1TechDigital to Cogwheel Tech. Full-stack web, BI dashboards, data pipelines, ERP implementations, and AI integration across industries.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Python", color: "green-text-gradient" },
      { name: "Power BI", color: "pink-text-gradient" },
      { name: "BigQuery", color: "blue-text-gradient" },
    ],
    image: cogwheelTechImg,
    source_code_link: "https://github.com/kbdevopz",
    live_project_link: "https://cogwheel.tech",
  },
  {
    name: "Pork Industry Analytics",
    description:
      "11 interactive Plotly/Dash dashboards built from real-world experience in pork processing. Production analytics, supply chain, quality control, carcass yield optimization, USDA/FDA compliance, and labor efficiency KPIs.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Plotly/Dash", color: "green-text-gradient" },
      { name: "Flask", color: "pink-text-gradient" },
      { name: "Pandas", color: "blue-text-gradient" },
    ],
    image: porkAnalyticsImg,
    source_code_link: "https://github.com/kbdevopz/porkdemos",
    live_project_link: "https://porkdemos.onrender.com/",
  },
  {
    name: "Enterprise Power Platform",
    description:
      "20+ Model-Driven and Canvas apps with 100+ Power Automate flows across multiple organizations. Built on Dynamics 365, Dataverse, and Azure SQL — covering deal workflows, safety management, vendor compliance, operational analytics, and ERP integrations.",
    tags: [
      { name: "Power Apps", color: "blue-text-gradient" },
      { name: "Power Automate", color: "green-text-gradient" },
      { name: "Dynamics 365", color: "pink-text-gradient" },
      { name: "Azure SQL", color: "blue-text-gradient" },
    ],
    image: enterprisePowerImg,
    source_code_link: "https://github.com/kbdevopz",
    live_project_link: "",
  },
];

const projects = [...justiceTechProjects, ...otherProjects];

const testimonials = [];

export {
  services,
  technologies,
  itTools,
  cybersecurityTools,
  designTools,
  experiences,
  extracurricular,
  projects,
  education,
  testimonials,
};
