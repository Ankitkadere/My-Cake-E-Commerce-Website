import React, { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import '.././DropdownOption/Dropoption.css';

function BasicButtonExample() {
  // Initialize state to keep track of the selected item
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
    setSelectedItem(eventKey);  // Update the selected item
    localStorage.setItem("selectedCategory", eventKey); // Save the selected item to localStorage
  };

  return (
    <DropdownButton
      id="dropdown-basic-button"
      title={selectedItem}  // Dynamically update title based on selected item
      onSelect={handleSelect}  // Add the onSelect handler
    >
      <Dropdown.Item eventKey="Action" href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item eventKey="Another action" href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item eventKey="Something else" href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>
  );
}

export default BasicButtonExample;
