import React from "react";
import Togbtn from "./Togbtn";

function Nav() {
  return (
    <>
      <nav className="container-fluid  navmain" id="navmain">
        <div className="row nav">
          <div className="navlogo">
            <img src="./phonebook/logo.png" />
            <h6>Meest</h6>
          </div>
          <div className="navlist">
            <ul>
              <li>
                <a id="navlogin" href="#navlogin">
                  Login
                </a>
              </li>
              <li>{/* <Togbtn /> */}</li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <div className="navboarder"></div> */}
    </>
  );
}

export default Nav;
