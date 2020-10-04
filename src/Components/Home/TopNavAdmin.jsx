import React from "react";
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { TiDocumentAdd } from "react-icons/ti";
import { AiFillFileAdd } from "react-icons/ai";
import { MdLibraryBooks } from "react-icons/md";
import { RiLogoutBoxRFill } from "react-icons/ri";
import iconHeader from "../../Images/iconHeader.png";
import fakePicture from "../../Dummy/Profile.json";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";

function TopNavAdmin() {
  return (
    <div>
      <Navbar className="justify-content-between">
        <Link to="/home">
          <img src={iconHeader} alt="" />
        </Link>
        <Navbar.Brand>
          <iconHeader />
        </Navbar.Brand>

        <Dropdown>
          <DropdownToggle variant="white">
            {fakePicture.map((data) => (
              <div id="adminNavbarProfilePicture">
                <img
                  className="adminNavbarProfilePicture"
                  src={data.picture}
                  alt=""
                />
              </div>
            ))}
          </DropdownToggle>
          <Dropdown.Menu>
            <Dropdown.Item>
              <TiDocumentAdd /> Add Book
            </Dropdown.Item>
            <hr />
            <Dropdown.Item>
              <RiLogoutBoxRFill /> Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar>
    </div>
  );
}

export default TopNavAdmin;
