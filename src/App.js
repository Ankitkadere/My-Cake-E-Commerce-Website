import React from "react";
import Header from "../src/componets/Header/header";
import "./App.css";
import { BrowserRouter, Routes, Router, Route } from "react-router-dom";
import Home from './Page/Home/index';
import About from './Page/About/index';
import Products from '../src/Page/Products/product';
import Vanilla from "./Page/Categery/Vanilla";
import White from "./Page/Categery/White";
import Strawberry from "./Page/Categery/Strawberry";
import Raspberry from "./Page/Categery/Raspberry";
import Chocolate from "./Page/Categery/Chocolate";
import Nav from "./componets/Navbar/nav";
import Footers from "./componets/Footer/footer";
function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Nav/>
      <Routes>
        <Route exact ={true} path="" element ={<Home/>} />
        <Route exact ={true} path="/Home" element ={<Home/>} />
        <Route exact ={true} path="/About" element ={<About/>} />
        <Route exact ={true} path="/Products" element ={<Products/>} />
        <Route exact ={true} path="/Vanilla" element ={<Vanilla/>} />
        <Route exact ={true} path="/White" element ={<White/>} />
        <Route exact ={true} path="/Strawberry" element ={<Strawberry/>} />
        <Route exact ={true} path="/Raspberry" element ={<Raspberry/>} />
        <Route exact ={true} path="/Chocolate" element ={<Chocolate/>} />
      </Routes>
      <Footers/>
      </BrowserRouter>
    </>
  );
}

export default App;
