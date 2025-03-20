import React from "react";
import "./Footer.css"; // Import the custom CSS file
import { MdLocalOffer } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { FaWpforms } from "react-icons/fa";
import { VscTypeHierarchySuper } from "react-icons/vsc";
import { GiReturnArrow } from "react-icons/gi";

const Footers = () => {
  return (
    <div className="footer">
      {/* Features Section */}
      <div className="chips">
        <div className="flex">
          <MdLocalOffer className="footericon" />
          <h3>Best Prices & Offers</h3>
        </div>
        <div className="flex">
          <TbTruckDelivery className="footericon" />
          <h3>Free Delivery</h3>
        </div>
        <div className="flex">
          <FaWpforms className="footericon" />
          <h3>Great Daily Deal</h3>
        </div>
        <div className="flex">
          <VscTypeHierarchySuper className="footericon" />
          <h3>Wide Assortment</h3>
        </div>
        <div className="flex">
          <GiReturnArrow className="footericon" />
          <h3>Easy Returns</h3>
        </div>
      </div>

      {/* Company Info Section */}
      <div className="grid">
        <div>
          <h4 className="font-bold">My Cake's</h4>
          <p>MART & GROCERY</p>
          <p>Address: 5171 W Campbell Ave, Kent, Utah 53127, United States</p>
          <p>Call Us: (+91) 540-025-124553</p>
          <p>Email: sale@Nest.com</p>
          <p>Hours: 10:00 - 18:00, Mon - Sat</p>
        </div>

        <div>
          <h3 className="font-bold">Company</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Delivery Information</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Support Center</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold">Account</h3>
          <ul>
            <li><a href="#">Sign In</a></li>
            <li><a href="#">View Cart</a></li>
            <li><a href="#">My Wishlist</a></li>
            <li><a href="#">Track My Order</a></li>
            <li><a href="#">Help Ticket</a></li>
            <li><a href="#">Shipping Details</a></li>
            <li><a href="#">Compare Products</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold">Corporate</h3>
          <ul>
            <li><a href="#">Become a Vendor</a></li>
            <li><a href="#">Affiliate Program</a></li>
            <li><a href="#">Farm Business</a></li>
            <li><a href="#">Farm Careers</a></li>
            <li><a href="#">Our Suppliers</a></li>
            <li><a href="#">Accessibility</a></li>
            <li><a href="#">Promotions</a></li>
          </ul>
        </div>
 
      </div>

      {/* Footer Bottom Section */}
      <div className="footer .bottom flex">
        <p>© 2025 <a href="#">MyCake</a> All rights reserved</p>
        <div className="social-links">
          <a href="#" className="fa fa-facebook"></a>
          <a href="#" className="fa fa-twitter"></a>
          <a href="#" className="fa fa-instagram"></a>
        </div>
      </div>
    </div>
  );
};

export default Footers;
