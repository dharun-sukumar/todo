import React from "react";
import profile from "../assets/profile.jpg";

function Top() {

  return (
    <div>
        <div className="top">
            <div className="menu">
                <div className="bar1"></div>
                <div className="bar2"></div>
            </div>
            <div className="profile">
                <img src={profile} alt="profile" height="40px" style={{borderRadius: "50%"}}/>
            </div>
        </div>
    </div>
  );
}

export default Top;