import React, { useState } from "react";
import "../Filter/Filter.css"; // Import the CSS file

const FilterByPrice = () => {
  const [priceRange, setPriceRange] = useState({ from: 99, to: 10000 });

  // Handle the price range change
  const handleRangeChange = (event) => {
    const value = event.target.value;

    // Update the "To" value based on the slider position
    setPriceRange({
      from: 99, // "From" value is always 99
      to: value, // "To" value is set dynamically based on the slider value
    });
  };

  return (
    <div className="filter-container">
      <div className="range-container">
        <input
          className="range-input"
          max="10000"
          min="99"
          type="range"
          value={priceRange.to}
          onChange={handleRangeChange}
        />
        <div className="range-labels">
          <span>
            From:
            <span className="price-label">Rs 99</span>
          </span>
          <span>
            To:
            <span className="price-label">Rs {priceRange.to}</span>
          </span>
        </div>
      </div>

      <h3 className="section-title">Color</h3>
      <div className="filter-section flex">
        <div>
          <div className="checkbox-container">
            <input className="checkbox" id="red" type="checkbox" />
            <label className="checkbox-label" htmlFor="red">
              Red (56)
            </label>
          </div>
          <div className="checkbox-container">
            <input className="checkbox" id="green" type="checkbox" />
            <label className="checkbox-label" htmlFor="green">
              Green (78)
            </label>
          </div>
          <div className="checkbox-container">
            <input className="checkbox" id="blue" type="checkbox" />
            <label className="checkbox-label" htmlFor="blue">
              Blue (54)
            </label>
          </div>
        </div>
        <div>
          <div className="checkbox-container">
            <input className="checkbox" id="black" type="checkbox" />
            <label className="checkbox-label" htmlFor="black">
              Black (78)
            </label>
          </div>
          <div className="checkbox-container">
            <input className="checkbox" id="yellow" type="checkbox" />
            <label className="checkbox-label" htmlFor="yellow">
              Yellow (56)
            </label>
          </div>
          <div className="checkbox-container">
            <input className="checkbox" id="pink" type="checkbox" />
            <label className="checkbox-label" htmlFor="pink">
              Pink (54)
            </label>
          </div>
        </div>
      </div>

      <div className="filter-section mt-4">
        <h3 className="section-title">Item Condition</h3>
        <div className="checkbox-container">
          <input className="checkbox" id="new" type="checkbox" />
          <label className="checkbox-label" htmlFor="new">
            New (1506)
          </label>
        </div>
        <div className="checkbox-container">
          <input className="checkbox" id="refurbished" type="checkbox" />
          <label className="checkbox-label" htmlFor="refurbished">
            Refurbished (27)
          </label>
        </div>
        <div className="checkbox-container">
          <input className="checkbox" id="used" type="checkbox" />
          <label className="checkbox-label" htmlFor="used">
            Used (45)
          </label>
        </div>
      </div>

      <button className="filter-button">
        <i className="fas fa-filter filter-icon"></i>
        Filter
      </button>
    </div>
  );
};

export default FilterByPrice;
