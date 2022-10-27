import React from "react";
import { NavLink } from "react-router-dom";
import NavCss from "./navbar.module.css";

export default function Navbar()
{
    return (
        <div >
           <nav >
            <ul className={NavCss.navlist}>
                <li className={NavCss.list}>
                   <NavLink className={NavCss.navitem} to="/myteam/y19">y19</NavLink>
                </li>
                <li className={NavCss.list}>
                <NavLink  className={NavCss.navitem} to="/myteam/y20">y20</NavLink>
                </li>
            </ul>
           </nav>
           <hr className={NavCss.hr}></hr>
        </div>
           
    );
}