import React from "react";
import Togleadmin from "./Togleadmin";
import { useHistory } from "react-router-dom";

function Nava() {
  let history = useHistory();
  function logoutaction() {
    history.push("/page5");
  }
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
                <a id="navlogin" href="" onClick={logoutaction}>
                  Logout
                </a>
              </li>
              <li>{/* <Togleadmin /> */}</li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <div className="navboarder"></div> */}
    </>
  );
}

export default Nava;
