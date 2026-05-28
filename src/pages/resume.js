import * as React from "react";
import Layout from "../components/layout";
import "./styles.css"
import Resume from "../images/Resume.png"

export default () => (
  <Layout>
    <div className="same-line">
      <h1>Resume</h1>
      <a href="/David Resume (3).pdf" download>
        Download my resume
      </a>
    </div>
    <p>I am currently seeking an entry-level game development position focused on Unity, C#, and gameplay programming.</p>
    <p>My resume highlights my experience with:</p>
    <ul>
      <li>Unity game development</li>
      <li>C# gameplay programming</li>
      <li>Mobile game development</li>
      <li>UI implementation</li>
      <li>Web/app development with Ionic and Angular</li>
      <li>Technical problem-solving and software troubleshooting</li>
    </ul>
    {/* <img id="resume" src={Resume} alt="David's resume" /> */}
  </Layout>
)
