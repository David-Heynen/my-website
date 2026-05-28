import * as React from "react";
import Layout from "../components/layout";
import Survivalist from "../images/survivalist.png"
import Logo from "../images/icon-512x512.png"
import "./styles.css"

export default () => (
  <Layout>
    <h1>Projects</h1>
    <br></br>
    <br></br>
    <div>
      <h3>Word Bombardment</h3>
      <h5>Unity Engine, C# | iOS Mobile Game</h5>
      <div className="same-line" id="small-font">
        <h5>Status: </h5>
        <p>Completed / Released</p>
        <p>|</p>
        <h5>Role: </h5>
        <p>Solo Developer / Gameplay Programmer</p>
        <p>|</p>
        <h5>Year: </h5>
        <p>2024-2025</p>
      </div>
      <p>
        Word Bombardment is a fast-paced mobile typing game where players type falling words to defuse bombs before they reach and destroy a village. The game challenges players to think quickly, type accurately, and survive as the difficulty increases.
      </p>
      <div>
        <h4>What I Built</h4>
        <ul>
          <li>Developed an iOS mobile typing game using Unity and C#.</li>
          <li>Programmed the core word spawning system.</li>
          <li>Implemented typing input validation to detect correct player entries.</li>
          <li>Created scoring, lives, damage, and game-over systems.</li>
          <li>Designed power-ups such as Freeze time, Barrier, adn extra starting hit points.</li>
          <li>Added multiple modes, including Endless Survival and Impossible Mode.</li>
          <li>Built mobile-friendly UI, menus, and gameplay flow.</li>
          <li>Tested and balanced gameplay pacing, challenge, and replayability</li>
        </ul>
      </div>
      <div>
        <h4>What I Learned</h4>
        <p>
          This project helped me improve my understanding of mobile game development, player feedback, difficulty balancing, UI flow, and building a complete game loop from start to finish.
        </p>
      </div>
    </div>
    <br></br>
    <br></br>
    <div>
      <div className="same-line">
        <h3>CalvinRoomFinder</h3>
        <a href="https://calvinroomfinder.web.app" target="_blank">
          Click here
        </a>
      </div>
      <h5>Ionic, Angular, TypeScript</h5>
      <div className="same-line" id="small-font">
        <h5>Status: </h5>
        <p>Completed Senior Project</p>
        <p>|</p>
        <h5>Role: </h5>
        <p>Front-End / App Developer</p>
        <p>|</p>
        <h5>Year: </h5>
        <p>September 2022 - April 2023</p>
      </div>
      <img id="logo" src={Logo} alt="app icon for calvin room finder"></img>
      <p>
        CalvinRoomFinder is a room-finding application designed to help Calvin students and visiters navigate building spaces more easily. The project was built using Ionic and Angular as port of a senior project at Calvin University.
      </p>
      <div>
        <h4>What I Built</h4>
        <ul>
          <li>Developed application features using Ionic and Angular.</li>
          <li>Contributed to front-end UI and application routing.</li>
          <li>Helped implement user-facing functionality for finding rooms.</li>
          <li>Worked with a team to plan, build, and complete project features.</li>
          <li>Gained experience with collaborative software development and project planning.</li>
        </ul>
      </div>
      <div>
        <h4>What I Learned</h4>
        <p>
          This project helped me improve my front-end development skills, teamwork, communication, and experience building a larger software project over multiple months.
        </p>
      </div>
    </div>
    <br></br>
    <br></br>
    {/* <a href="https://david-heynen.itch.io/2d-platform-prototype" target="_blank">2D Platform Prototype — Unity Engine, C#</a>
    <br></br>
    <img id="survival" src={Survivalist} alt="Thumbnail of the 2D survival game"></img>
    <p>• Built a playable 2D survival/platform prototype while learning Unity and C#.</p>
    <p>• Implemented player movement, collision behavior, object interactions, animations, and basic gameplay flow.</p> */}
  </Layout>
)
