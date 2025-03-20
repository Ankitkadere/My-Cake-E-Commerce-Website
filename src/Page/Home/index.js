import React from "react";
import "../Home/index.css";
import Slideshow from "../Home/Carousels/carousels";
import FeaturedCategories from "../Home/Catslide/index";
import "../../App.css";
import Cardbox from "../Home/Cardbox/cardbox";
import { FaAngleDoubleRight } from "react-icons/fa";
import "../Productlist/Small.css";
import PopularProducts from "../Productlist/Small";
 
function Home() {
  return (
    <>
        
      <Slideshow />
      <FeaturedCategories />
      <div className="containergrid popularproducts  ">
      <div className="flex justify-end space-x-4 mb-0 ms-4">
          <a className="text-green-600"  >
            Popular Products
          </a>
          </div>
        <div className="flex justify-end space-x-4 mb-4">
          <a className="text-green-600" href="#">
            All
          </a>
          <a className="text-gray-600" href="#">
            Milks & Dairies
          </a>
          <a className="text-gray-600" href="#">
            Coffees & Teas
          </a>
          <a className="text-gray-600" href="#">
            Pet Foods
          </a>
          <a className="text-gray-600" href="#">
            Meats
          </a>
          <a className="text-gray-600" href="#">
            Vegetables
          </a>
          <a className="text-gray-600" href="#">
            Fruits
          </a>
        </div>
      </div>    
      <PopularProducts /><br></br>
      <div className="containergrid popularproducts  ">
      <div className="flex justify-end space-x-4 mb-0 ms-4">
          <a className="text-green-600"  >
           Features
          </a>
          </div>
        <div className="flex justify-end space-x-4 mb-4">
          <a className="text-green-600" href="#">
            All
          </a>
          <a className="text-gray-600" href="#">
            Milks & Dairies
          </a>
          <a className="text-gray-600" href="#">
            Coffees & Teas
          </a>
          <a className="text-gray-600" href="#">
            Pet Foods
          </a>
          <a className="text-gray-600" href="#">
            Meats
          </a>
          <a className="text-gray-600" href="#">
            Vegetables
          </a>
          <a className="text-gray-600" href="#">
            Fruits
          </a>
        </div>
      </div>   
      <Cardbox />
      
    </>
  );
}
export default Home;
