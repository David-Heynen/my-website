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
    <a href="https://david-heynen.itch.io/2d-platform-prototype" target="_blank">2D Survival Game</a>
    <br></br>
    <img id="survival" src={Survivalist} alt="Thumbnail of the 2D survival game"></img>
    <p>This was the first game I made on my own over the summer. I spent about a month teaching myself on how to use Unity by watching various tutorial videos and practice along. Then I spent about another month creating my own game. My goal was to make all the components that I needed to ensure that the game is playable.</p>
    <br></br>
    <br></br>
    <a href="https://calvinroomfinder.web.app" target="_blank">Calvin Room Finder</a>
    <br></br>
    <img id="logo" src={Logo} alt="app icon for calvin room finder"></img>
    <p>In my senior year at Calvin University, I helped in the development of an app called Calvin Room Finder. We used Ionic framework with Angular to create this app. The main functions of this app was to guide new students and visitors to classrooms on campus. I used Google Maps APIs to display the map, creating a path finding algorithm and displayed a graphic path on the map for user to follow, and created an user icon to track user's current location. I also participated in the development of the user interface to improve overall user experience. By the end of the year, we were able to get a working app that was ready to be used.</p>
    <br></br>
    <br></br>
    <br></br>
  </Layout>
)
