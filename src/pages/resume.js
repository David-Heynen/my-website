import * as React from "react";
import Layout from "../components/layout";
import "./styles.css";

const ResumePage = () => (
  <Layout>
    <div>
      <h1>Resume</h1>
    </div>

    <p>
      I am currently seeking an entry-level software development position focused
      on C#, JavaScript, UI implementation, debugging, and reliable user-focused applications.
    </p>

    <p>My resume highlights my experience with:</p>

    <ul>
      <li>Unity and C# development</li>
      <li>JavaScript, TypeScript, Angular, and Ionic</li>
      <li>Mobile game development</li>
      <li>UI implementation</li>
      <li>Application logic and debugging</li>
      <li>Mobile and web application development</li>
      <li>Technical problem-solving and software troubleshooting</li>
    </ul>

    <div>
      <a href="/David Resume.pdf" download>
        Download resume
      </a>
    </div>
  </Layout>
);

export default ResumePage;