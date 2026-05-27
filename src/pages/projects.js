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
    <a href="https://david-heynen.itch.io/2d-platform-prototype" target="_blank">2D Platform Prototype — Unity Engine, C#</a>
    <br></br>
    <img id="survival" src={Survivalist} alt="Thumbnail of the 2D survival game"></img>
    <p>• Built a playable 2D survival/platform prototype while learning Unity and C#.</p>
    <p>• Implemented player movement, collision behavior, object interactions, animations, and basic gameplay flow.</p>
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
