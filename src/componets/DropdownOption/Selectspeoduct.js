import React, { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ".././DropdownOption/Dropoption.css";

function ProductOption() {
  // Initialize state to keep track of the selected item
  const [selectedItem, setSelectedItem] = useState("Browse All Category");

  // Retrieve selected item from localStorage if available
  useEffect(() => {
    const savedSelection = localStorage.getItem("selectedItem");
    if (savedSelection) {
      setSelectedItem(savedSelection);
    }
  }, []);

  // Handle selection of a dropdown item
  const handleSelect = (eventKey) => {
    setSelectedItem(eventKey);  // Update the selected item
    localStorage.setItem("selectedItem", eventKey); // Save the selected item to localStorage
  };

  return (
    <DropdownButton
      className="cateoption"
      id="dropdown-basic-button-product-op"
      title={selectedItem}  // Dynamically update title based on selected item
      onSelect={handleSelect}  // Add the onSelect handler
    >
      <Dropdown.Item eventKey="Vanilla Cake" href="/Vanilla">Vanilla Cake</Dropdown.Item>
      <Dropdown.Item eventKey="Chocolate Cake" href="/Chocolate">Chocolate Cake</Dropdown.Item>
      <Dropdown.Item eventKey="White Cake" href="/White">White Cake</Dropdown.Item>
      <Dropdown.Item eventKey="Strawberry Cake" href="/Strawberry">Strawberry Cake</Dropdown.Item>
      <Dropdown.Item eventKey="Raspberry Cake" href="/Raspberry">Raspberry Cake</Dropdown.Item>
    </DropdownButton>
  );
}

export default ProductOption;
