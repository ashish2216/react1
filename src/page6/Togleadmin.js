import React, { useState } from "react";

function Togleadmin() {
  const [navtheme, changetheme] = useState("Light");
  const [btnvalue, changebvalue] = useState(0);

  function Tougletheme() {
    let tvar = btnvalue;
    if (tvar === 0) {
      changebvalue(1);
      changetheme("Dark");
      console.log(navtheme);
      console.log(btnvalue);

      document.getElementById("page6main").style.backgroundColor = "#212529";
      document.getElementById("page6head").style.color = "white";
    } else {
      changebvalue(0);
      changetheme("Light");
      console.log(navtheme);
      console.log(btnvalue);

      document.getElementById("page6main").style.backgroundColor = "white";
      document.getElementById("page6head").style.color = "black";
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

export default Togleadmin;
