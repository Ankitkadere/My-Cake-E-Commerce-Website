import React from "react";
import "../Header/header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductOption from "../DropdownOption/Selectspeoduct";
import "../Navbar/Navbar.css";
import CollapsibleExample from "./Navbarsecond";
import Time from "../Navbar/Time";
 
function Nav() {


  return (
    <>
    
      <header className="StickyNav">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-2">
              <ProductOption />
            </div>
            <div className="col-sm-8">
              <CollapsibleExample />
            </div>
            <div className="col-sm-2">
              <Time />
            </div>
          </div>
        </div>
      </header>
    
    </>
  );
}

export default Nav;
