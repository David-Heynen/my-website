import * as React from "react";
import Layout from "../components/layout";
import Survivalist from "../images/survivalist.png"
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
  </Layout>
)
