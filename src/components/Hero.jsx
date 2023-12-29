import React from "react";
import { FaPlus } from "react-icons/fa";

function Hero() {
  return (
        <div className="hero">
            <div className="hero-text">
                <h1>Hi <span className="name">Dharun</span></h1>
                <h5 className="thin-100">Welcome back</h5>
            </div>
            <button className="button"><FaPlus style={{height: "10px"}}/> Create Task  </button>
        </div>
  );
}

export default Hero;