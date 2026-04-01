import logo from "./logo0.png";
import backend from "./backend.png";
import mobile from "./mobile.png";
import web from "./web.png";
import fullstack from "./creator.png";
import github from "./github.png";
import menu from "./menu.svg";
import close from "./close.svg";

// Tech icons — existing
import docker from "./tech/docker.png";
import javascript from "./tech/javascript.png";
import reactjs from "./tech/reactjs.png";
import postgresql from "./tech/postgresql.png";
import mongodb from "./tech/mongodb.png";
import tailwind from "./tech/tailwind.png";
import python from "./tech/python.png";
import typescript from "./tech/typescript.png";
import threejs from "./tech/threejs.svg";
import aws from "./tech/aws.png";
import azure from "./tech/azure.png";
import nodejs from "./tech/nodejs.png";
import git from "./tech/git.png";

// Company icons — existing
import google from "./company/google.png";
import microsoft from "./company/microsoft.png";
import ibm from "./company/ibm.svg";

// SVG data-URL placeholder generator for missing assets
const placeholder = (text, bg = "#1d1836", fg = "#aaa6c3") =>
  `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><rect width="128" height="128" rx="16" fill="${bg}"/><text x="64" y="72" text-anchor="middle" fill="${fg}" font-size="13" font-family="system-ui,sans-serif" font-weight="600">${text}</text></svg>`
  )}`;

const projectPlaceholder = (text, bg = "#151030", fg = "#915EFF") =>
  `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="460" viewBox="0 0 800 460"><rect width="800" height="460" rx="12" fill="${bg}"/><text x="400" y="220" text-anchor="middle" fill="${fg}" font-size="28" font-family="system-ui,sans-serif" font-weight="700">${text}</text><text x="400" y="260" text-anchor="middle" fill="#aaa6c3" font-size="14" font-family="system-ui,sans-serif">Screenshot placeholder</text></svg>`
  )}`;

// Profile picture
import profilepic from "./pfp.png";

// Tech icons — real SVGs
import nextjs from "./tech/nextjs.svg";
import powerbi from "./tech/powerbi.svg";
import plotly from "./tech/plotly.svg";
import d3js from "./tech/d3js.svg";
import streamlit from "./tech/streamlit.svg";
import bigquery from "./tech/bigquery.svg";
import gcp from "./tech/gcp.svg";
import pandas from "./tech/pandas.svg";
import claude from "./tech/claude.svg";
import sklearn from "./tech/sklearn.svg";
import xgboost from "./tech/xgboost.svg";
import powerapps from "./tech/powerapps.svg";
import powerautomate from "./tech/powerautomate.svg";
import dynamics365 from "./tech/dynamics365.svg";
import dbt from "./tech/dbt.svg";
import sql from "./tech/sql.svg";
import flask from "./tech/flask.svg";
import vite from "./tech/vite.svg";
const drizzle = placeholder("Drizzle", "#C5F74F", "#000000");
const dash = placeholder("Dash", "#119DFF", "#ffffff");
const express = placeholder("Express", "#000000", "#ffffff");

// Company/education icons — real logos
import brown from "./company/brown.png";
import bellevue from "./company/bellevue.png";
import witcc from "./company/witcc.svg";
import seaboard from "./company/seaboard.svg";
import cogwheel from "./company/cogwheel.jpg";
import oracle from "./company/oracle.svg";
import datacamp from "./company/datacamp.svg";
import umich from "./company/umich.svg";
import ssyb from "./company/ssyb.svg";

// Project screenshots — real images where available, placeholders for rest
import unbarredLabsImg from "./projects/unbarred-labs.png";
import unbarredAiImg from "./projects/unbarred-ai.jpg";
import collegeSafetyImg from "./projects/college-safety.png";
import cjDataQualityImg from "./projects/cj-data-quality.png";
import porkAnalyticsImg from "./projects/pork-analytics.png";
import bigrigbuddyImg from "./projects/bigrigbuddy.png";
import staffabilityImg from "./projects/staffability.png";
import projectPivotImg from "./projects/project-pivot.png";
import cogwheelTechImg from "./projects/cogwheel-tech.jpg";
import enterprisePowerImg from "./projects/enterprise-power.png";

// Resume route
const resume = "/resume";

export {
  logo,
  backend,
  mobile,
  web,
  fullstack,
  github,
  menu,
  close,
  javascript,
  reactjs,
  tailwind,
  postgresql,
  mongodb,
  aws,
  python,
  typescript,
  nodejs,
  docker,
  azure,
  git,
  threejs,
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
  drizzle,
  flask,
  dash,
  express,
  vite,
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
  resume,
  profilepic,
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
};
