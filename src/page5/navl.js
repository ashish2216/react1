import React from "react";
import Toglbtn from "./toglelbtn";

function navl() {
  return (
    <>
      <nav className="container-fluid  navmain">
        <div className="row nav">
          <div className="navlogo">
            <img src="./phonebook/logo.png" />
            <h6>Meest</h6>
          </div>
          <div className="navlist">
            <ul>
              <li>
                <a id="navlogin" href="#navlogin">
                  Home
                </a>
              </li>
              <li>{/* <Toglbtn /> */}</li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <div className="navboarder"></div> */}
    </>
  );
}

export default navl;
