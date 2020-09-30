import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div>
      <div id="sidebarProfileImageContainer">
        <img className="sidebarProfileImage" src="" alt="" />
      </div>
      <hr />
      <div>
        <ul>
          <li>
            <Link to="/">Profile</Link>
          </li>
          <li>
            <Link to="/detailbook">My Library</Link>
          </li>
          <li>Add Book</li>
        </ul>
      </div>
      <hr />
      <button>Logout</button>
    </div>
  );
}

export default Sidebar;
