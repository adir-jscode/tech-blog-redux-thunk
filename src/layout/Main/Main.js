import React from "react";
import { Outlet } from "react-router-dom";
import Home from "../../pages/Main/Home";
import Navbar from "./Navbar";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
