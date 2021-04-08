import React from "react";

function dsboptions() {
  function arotate() {
    let element = document.getElementById("arrowchange1");
    element.classList.toggle("aniarrowchange");
    document.getElementById("dsbuserdoul").classList.toggle("aniarrowchangeul");
  }
  return (
    <>
      <div className=" bg-light dsboption">
        <div className="dsbuser">
          <div className="dsbudiv row">
            <div className="cuserimg float-start">
              <img src="phonebook/user-male.png"></img>
            </div>
            <div className="cuserun float-end">
              Atul.Solanki<br></br>
              <span className="fs-6">Atulsolanki@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="dsbuseroption">
          <div className="dsbuserdo " id="dsbuserdoul">
            <a onClick={arotate}>
              <span className="dsbuserdospan">Dashboard</span>
              <span className="material-icons float-end" id="arrowchange1">
                chevron_right
              </span>
            </a>
            <ul className="dsbuserdoul">
              <li>
                <a>Admin</a>
              </li>
              <li>
                <a>Hr</a>
              </li>
              <li>
                <a>Employee</a>
              </li>
            </ul>
          </div>
          <div className="dsbadminop ">
            <a>
              <span className="dsbadmindospan">Admin</span>
              <span class="material-icons float-end">chevron_right</span>
            </a>
            <ul className="dsbadmindoul">
              <li>
                <a>add</a>
              </li>
              <li>
                <a>Hr</a>
              </li>
              <li>
                <a>Employee</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default dsboptions;
