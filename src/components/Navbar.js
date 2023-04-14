import React from "react";
import logo from "../components/../image/airbnb-lg.png";
import "./components_css/Navbar.css"

export default function Navbar(){
    return(
      <nav>
          <img
              className="Nav--logo"
              src={logo}
              alt={"logo"}
          />
      </nav>
    );
}
