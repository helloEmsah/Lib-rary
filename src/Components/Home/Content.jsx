import React from "react";
import { Container } from "react-bootstrap";
import homeHeroImage from "../../Images/homeHeroImage.png";

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
          <div id="contentWrapper">
            <h1>Test</h1>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Content;
