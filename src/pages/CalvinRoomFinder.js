import * as React from "react";
import Logo from "../images/icon-512x512.png"
import "./styles.css"

const CalvinRoomFinder = () => (
  <section>
    <div className="same-line">
      <h3>CalvinRoomFinder</h3>

      <a
        href="https://calvinroomfinder.web.app"
        target="_blank"
        rel="noreferrer"
      >
        View app
      </a>
    </div>

    <h5>Ionic, Angular, TypeScript</h5>

    <div className="same-line" id="small-font">
      <h5>Status:</h5>
      <p>Completed Senior Project</p>
      <p>|</p>
      <h5>Role:</h5>
      <p>Front-End / App Developer</p>
      <p>|</p>
      <h5>Year:</h5>
      <p>September 2022 – April 2023</p>
    </div>

    <img
      id="logo"
      src={Logo}
      alt="CalvinRoomFinder application icon"
    />

    <p>
      CalvinRoomFinder is a room-finding application designed to help Calvin
      students and visitors navigate campus buildings more easily. The
      application was built using Ionic and Angular as part of a senior
      project at Calvin University.
    </p>

    <div>
      <h4>What I Built</h4>

      <ul>
        <li>Developed application features using Ionic and Angular.</li>
        <li>Contributed to the front-end UI and application routing.</li>
        <li>
          Helped implement user-facing functionality for finding rooms.
        </li>
        <li>
          Worked with a team to plan, build, and complete project features.
        </li>
        <li>
          Gained experience with collaborative software development and
          project planning.
        </li>
      </ul>
    </div>

    <div>
      <h4>What I Learned</h4>

      <p>
        This project helped me improve my front-end development skills,
        teamwork, communication, and experience building a larger software
        project over multiple months.
      </p>
    </div>
  </section>
)

export default CalvinRoomFinder;