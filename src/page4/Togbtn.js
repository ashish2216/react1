import React, { useState } from "react";

function Togbtn() {
  const [navtheme, changetheme] = useState("Light");
  const [btnvalue, changebvalue] = useState(0);

  function Tougletheme() {
    let tvar = btnvalue;
    if (tvar === 0) {
      changebvalue(1);
      changetheme("Dark");
      console.log(navtheme);
      console.log(btnvalue);
      document.getElementById("tougleview").style.color = "white";
      document.getElementById("page4main").style.backgroundColor = "#212529";
      document.getElementById("navlogin").style.color = "white";
      document.getElementById("page4mainhead").style.color = "white";
      document.getElementById("areamain").style.backgroundColor = "slategrey";
      document.getElementById("navmain").style.backgroundColor = "slategrey";
      document.getElementById("maintable").className =
        "table  table-hover table-dark";
      document.getElementById("filterbtn").className = "btn btn-outline-light";
      document.getElementById("filterbtn1").className = "btn btn-outline-light";
      document.getElementById("filterbtn2").className = "btn btn-outline-light";
      document.getElementById("filterbtn3").className = "btn btn-outline-light";
      document.getElementById("filterbtn4").className = "btn btn-outline-light";
      document.getElementById("filterbtn5").className = "btn btn-outline-light";
      document.getElementById("filterbtn6").className = "btn btn-outline-light";
      document.getElementById("filterbtn7").className = "btn btn-outline-light";
    } else {
      changebvalue(0);
      changetheme("Light");
      console.log(navtheme);
      console.log(btnvalue);
      document.getElementById("tougleview").style.color = "black";
      document.getElementById("page4main").style.backgroundColor = "white";
      document.getElementById("navlogin").style.color = "black";
      document.getElementById("areamain").style.backgroundColor = "lavender";
      document.getElementById("navmain").style.backgroundColor = "lavender";
      document.getElementById("page4mainhead").style.color = "black";
      document.getElementById("maintable").className = "table table-hover";
      document.getElementById("filterbtn").className = "btn btn-outline-dark";
      document.getElementById("filterbtn1").className = "btn btn-outline-dark";
      document.getElementById("filterbtn2").className = "btn btn-outline-dark";
      document.getElementById("filterbtn3").className = "btn btn-outline-dark";
      document.getElementById("filterbtn4").className = "btn btn-outline-dark";
      document.getElementById("filterbtn5").className = "btn btn-outline-dark";
      document.getElementById("filterbtn6").className = "btn btn-outline-dark";
      document.getElementById("filterbtn7").className = "btn btn-outline-dark";
    }

    return <></>;
  }
  return (
    <div>
      <label className="switch">
        <input type="checkbox" id="touglebtn" onClick={Tougletheme} />
        <span className="slider"></span>
        <p id="tougleview">{navtheme}</p>
      </label>
    </div>
  );
}

export default Togbtn;
