import { LOGO_URL } from "../utils.js/constants";
import { useState } from "react";
const Header =() =>
    {

        const [buttonReact , setbuttonReact]  = useState("Login");
        return(
            <div className="header">
                <div className="logo-container">
                    <img className="logo" src ={LOGO_URL} />

                </div>
                <div className="nav-items">
                  <ul>
                    <li>Home</li>
                    <li>Contact Us</li>
                    <li>About</li>
                    <li>Cart</li>
                    <button className="btn" onClick={() =>{
                       buttonReact === "Login" 
                       ? setbuttonReact("Logout" ) 
                       : setbuttonReact("Login" )
                    }}>
                        {buttonReact}

                    </button>
                  </ul>
                </div>
            </div>
        );
    };

    export default Header;