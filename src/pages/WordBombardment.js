import * as React from "react";
import Video from "../components/video";
import Icon from "../images/WordBombardment_Icon.png"
import "./styles.css"

const WordBombardment = () => (
  <section>
    <h3>Word Bombardment</h3>
    <h5>Unity, C# | iOS Mobile Application / Game</h5>

    <div className="same-line" id="small-font">
      <h5>Status:</h5>
      <p>Completed / Released</p>
      <p>|</p>
      <h5>Role:</h5>
      <p>Solo Developer / Gameplay Programmer</p>
      <p>|</p>
      <h5>Year:</h5>
      <p>2024–2025</p>
    </div>

    <div>
      <img id="logo" src={Icon} alt="WordBombardment app icon" />
      <Video
        src="/videos/WBDemo.mp4"
        title="Word Bombardment Demo" />
    </div>

    <p>
      Word Bombardment is a fast-paced mobile typing game where players type
      falling words to defuse bombs before they reach and destroy a village.
      The game challenges players to think quickly, type accurately, and
      survive as the difficulty increases.
    </p>

    <div>
      <h4>What I Built</h4>

      <ul>
        <li>Developed an iOS mobile typing game using Unity and C#.</li>
        <li>Programmed the core word-spawning system.</li>
        <li>
          Implemented typing input validation to detect correct player
          entries.
        </li>
        <li>Created scoring, lives, damage, and game-over systems.</li>
        <li>
          Designed power-ups such as Freeze Time, Barrier, and extra starting
          hit points.
        </li>
        <li>
          Added multiple modes, including Endless Survival and Impossible
          Mode.
        </li>
        <li>Built mobile-friendly UI, menus, and gameplay flow.</li>
        <li>
          Tested and balanced gameplay pacing, challenge, and replayability.
        </li>
      </ul>
    </div>

    <div>
      <h4>What I Learned</h4>

      <p>
        This project helped me improve my understanding of mobile game
        development, player feedback, difficulty balancing, UI flow, and
        building a complete game loop from start to finish.
      </p>
    </div>
  </section>
)

export default WordBombardment;