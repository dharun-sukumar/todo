import React from "react";
import {NavLink} from "react-router-dom"

function Navbar() {
    return (
        <div className="navbar">
            <NavLink to="/" className="a" >All</NavLink>
            <NavLink to="/birtday" className="a" >Birthdays</NavLink>
            <NavLink to="/birtday" className="a" >Starred</NavLink>
            <NavLink to="/education" className="a" >Education</NavLink>
            {/* <NavLink to="/test" className="a" >TEst</NavLink> */}
        </div>
    )
}

export default Navbar