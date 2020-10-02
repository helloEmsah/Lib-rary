import React from "react";
import { Card, CardDeck, CardGroup, Container } from "react-bootstrap";
import homeHeroImage from "../../Images/homeHeroImage.png";
import profileIcon from "../../Images/profileIcon.png";
import CardBook from "./CardBook";

function Content() {
  return (
    <div>
      <Container>
        <div id="homeHeroImageContainer">
          <img class="homeHeroImage" src={homeHeroImage} alt="" />
        </div>
        <br />
        <div id="mainContent">
          <h1>List Book</h1>
          {/* <div id="contentWrapper"></div> */}
        </div>
      </Container>
    </div>
  );
}

export default Content;
