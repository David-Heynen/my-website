import * as React from "react";
import Layout from "../components/layout";
import "./styles.css"
import Resume from "../images/Resume.png"

export default () => (
  <Layout>
    <h1>Resume</h1>
    <img id="resume" src={Resume} alt="David's resume" />
  </Layout>
)
