import * as React from "react";
import "./styles.css";

const Survival = () => (
  <section>
    <div className="same-line">
      <h3>2D Platform Prototype</h3>
      <a
        href="https://david-heynen.itch.io/2d-platform-prototype"
        target="_blank"
        rel="noreferrer"
      >
        Play game
      </a>
    </div>
    <h5>Unity, C#</h5>

    <div className="same-line" id="small-font">
      <h5>Status:</h5>
      <p>Prototype</p>
      <p>|</p>
      <h5>Role:</h5>
      <p>Solo Developer</p>
      <p>|</p>
      <h5>Year:</h5>
      <p>2021</p>
    </div>

    <p>
      This was one of my first Unity projects and helped me learn the basics of game development, C# scripting, and Unity workflows.
    </p>

    <div>
      <h4>What I Built</h4>

      <ul>
        <li>Created a playable 2D prototype using Unity and C#.</li>
        <li>Implemented basic player movement and collision behavior.</li>
        <li>Experimented with level layout, object interaction, and gameplay flow.</li>
        <li>Practiced debugging Unity issues and improving gameplay reliability.</li>
      </ul>
    </div>

    <div>
      <h4>What I Learned</h4>
      <p>
        This project introduced me to Unity development and helped build the foundation for my later game projects.
      </p>
    </div>
  </section>
)

export default Survival;