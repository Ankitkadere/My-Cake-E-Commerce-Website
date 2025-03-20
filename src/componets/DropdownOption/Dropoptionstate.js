import React, { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import '.././DropdownOption/Dropoption.css';

function BasicButtonExample1() {
  // Initialize state to keep track of the selected item
  const [selectedItem, setSelectedItem] = useState("All Location");

  // Retrieve selected item from localStorage if available
  useEffect(() => {
    const savedSelection = localStorage.getItem("selectedLocation");
    if (savedSelection) {
      setSelectedItem(savedSelection);
    }
  }, []);

  // Handle selection of a dropdown item
  const handleSelect = (eventKey) => {
    setSelectedItem(eventKey);  // Update the selected item
    localStorage.setItem("selectedLocation", eventKey); // Save the selected item to localStorage
  };

  return (
    <DropdownButton
      id="dropdown-basic-button-second"
      title={selectedItem}  // Dynamically update title based on selected item
      onSelect={handleSelect}  // Add the onSelect handler
    >
      <Dropdown.Item eventKey="All" href="#/action-1">Location 1</Dropdown.Item>
      <Dropdown.Item eventKey="Location 2" href="#/action-2">Location 2</Dropdown.Item>
      <Dropdown.Item eventKey="Location 3" href="#/action-3">Location 3</Dropdown.Item>
    </DropdownButton>
  );
}

export default BasicButtonExample1;
