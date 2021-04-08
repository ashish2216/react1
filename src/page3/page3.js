import React, { useState } from "react";

function Page3(props) {
  var [bcolor, setcolor] = useState("rbg(70,80,96)");

  const changecolor = (props) => {
    var c1 = Math.round(Math.random() * 100);
    var c2 = Math.round(Math.random() * 100);
    var c3 = Math.round(Math.random() * 100);

    console.log(bcolor);
    const newcolor = `#${c1}${c2}${c3}`;
    document.getElementById("asd").style.backgroundColor = newcolor;
  };
  return (
    <>
      <div className="page3" id="asd">
        <div className="page3main">
          <h1>Click On Button To Change The Background Color!!!</h1>
          <button className="btn btn-warning mt-3" onClick={changecolor}>
            Click
          </button>
        </div>
      </div>
    </>
  );
}

export default Page3;
