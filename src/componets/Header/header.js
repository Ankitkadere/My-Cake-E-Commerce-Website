import React, { useEffect, useState, useRef } from "react";
import logo from "../Assets/cake.jpg";
import "../Header/header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BasicButtonExample from "../DropdownOption/Dropoption";
import BasicButtonExample1 from "../DropdownOption/Dropoptionstate";
import { FaUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function Headers() {
  const [selectedItem, setSelectedItem] = useState("All Category");

  // Retrieve selected item from localStorage if available
  useEffect(() => {
    const savedSelection = localStorage.getItem("selectedCategory");
    if (savedSelection) {
      setSelectedItem(savedSelection);
    }
  }, []);

  // Handle selection of a dropdown item
  const handleSelect = (eventKey) => {
    setSelectedItem(eventKey); // Update the selected item
    localStorage.setItem("selectedCategory", eventKey); // Save the selected item to localStorage
  };
  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-2 flex align-center">
              <img src={logo} alt="Logo" />
              <strong className="Name">My Cake</strong>
            </div>
            <div className="col-sm-5">
              <div className="headerSearch d-flex align-items-center">
                <div className="selectDrop">
                  <BasicButtonExample />
                </div>
                <div className="Search">
                  <input
                    type="text"
                    placeholder="search for items......"
                  ></input>
                </div>
              </div>
            </div>
            <div className="col-sm-2">
              <BasicButtonExample1 />
            </div>
            <div className="col-sm-2">
              <div className="icons">
                <a href="https://google.com">
                  <FaHeart />
                </a>
                <br />
                <a href="https://google.com">
                  <FaShoppingCart />
                </a>
                <br />  
                <a href="#" className="user">
                  <DropdownButton
                    id="user-sign-button"
                    title={"Sign In"} // Dynamically update title based on selected item
                    onSelect={handleSelect} // Add the onSelect handler
                  >
                    <Dropdown.Item eventKey="Sign In" href="#/action-1">
                      {" "}
                      <FaUserCircle /> Sign
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="Sign Up" href="#/action-2">
                      {" "}
                      <FaUserCircle /> Sign Up
                    </Dropdown.Item>
                  </DropdownButton>
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr className=" hr"></hr>
      </header>
    </>
  );
}

export default Headers;
