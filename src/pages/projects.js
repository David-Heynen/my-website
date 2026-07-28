import * as React from "react";
import Layout from "../components/layout";
import WordBombardment from "./WordBombardment";
import SpaceShooter from "./SpaceShooter";
import CalvinRoomFinder from "./CalvinRoomFinder";
import Survival from "./Survival";

const ProjectsPage = () => (
  <Layout>
    <CalvinRoomFinder></CalvinRoomFinder>
    <WordBombardment></WordBombardment>
    <SpaceShooter></SpaceShooter>
    <Survival></Survival>
  </Layout>
);

export default ProjectsPage;