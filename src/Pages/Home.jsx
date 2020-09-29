import React from "react";
import iconHeader from "../Images/iconHeader.png";
import headerLanding from "../Images/headerLanding.png";
import subHeaderLanding from "../Images/subHeaderLanding.png";
import bookcaseLanding from "../Images/bookcaseLanding.png";

import Login from "../Components/Home/Login";
import Register from "../Components/Home/Register";

function Home() {
  return (
    <div id="landingPage">
      <div id="leftLanding">
        <div id="iconHeaderContainer">
          <img className="iconHeaderImage" src={iconHeader} alt="" />
        </div>
        <div id="headerLandingContainer">
          <img className="headerLandingImage" src={headerLanding} alt="" />
        </div>
        <div id="subHeaderLandingContainer">
          <img
            className="subHeaderLandingImage"
            src={subHeaderLanding}
            alt=""
          />
        </div>
        <div id="homeButtonContainer">
          <Register />
          <span></span>
          <Login />
        </div>
      </div>

      <div id="rightLanding">
        <div id="bookcaseLandingContainer">
          <img className="bookcaseLandingImage" src={bookcaseLanding} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
