import * as React from "react";
import "./styles.css";

const SpaceShooter = () => (
  <section>
    <h3>2D Roguelike Space Shooter</h3>
    <h5>Unity Engine, C#</h5>

    <div className="same-line" id="small-font">
      <h5>Status:</h5>
      <p>In Development</p>
      <p>|</p>
      <h5>Role:</h5>
      <p>Solo Developer / Gameplay Programmer</p>
      <p>|</p>
      <h5>Year:</h5>
      <p>2025-Present</p>
    </div>

    <p>
      This project is a 2D arcade-style roguelike space shooter inspired by classic Space Invaders gameplay. The player moves and shoots while surviving waves of enemies, choosing upgrades, and fighting bosses with different attack patterns and phases.

      Although the project is still in development, it includes several gameplay systems that demonstrate my experience with Unity and C#.
    </p>

    <div>
      <h4>What I Built</h4>

      <ul>
        <li>Developed player movement and shooting mechanics.</li>
        <li>Programmed projectile behavior for player and enemy bullets.</li>
        <li>Created enemy wave spawning systems.</li>
        <li>Built upgrade selection systems for player progression.</li>
        <li>Implemented upgrade synergies such as multi-shot, pierce, rail gun, split shot, and fire-rate modifiers.</li>
        <li>Created enemy role systems, including shield nodes, buffers, and spawners.</li>
        <li>Developed boss phase logic with changing attacks and behaviors.</li>
        <li>Used object pooling for projectiles and enemies to improve runtime performance.</li>
        <li>Built systems for run progression, upgrade rarity, and replayability.</li>
      </ul>
    </div>

    <div>
      <h4>What I Am Currently Working On</h4>

      <ul>
        <li>Expanding enemy types and wave variety.</li>
        <li>Improving upgrade balance and synergy progression.</li>
        <li>Adding more boss behaviors and phase transitions.</li>
        <li>Polishing UI, feedback, and player experience.</li>
        <li>Continuing to organize and improve the codebase.</li>
      </ul>
    </div>

    <div>
      <h4>What I Learned</h4>
      <p>This project has helped me practice larger gameplay architecture, system design, object pooling, enemy AI, upgrade design, and balancing multiple gameplay systems together.</p>
    </div>
  </section>
)

export default SpaceShooter;