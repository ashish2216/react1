import React from "react";
import Count from "./count";
import { useState } from "react";

function Buttonf(props) {
  let [cno, setcount] = useState(0);
  const Countup = () => {
    setcount(cno + 1);
    // console.log(cno);
  };
  const Countdown = () => {
    setcount(cno - 1);
    // console.log(cno);
  };
  return (
    <div className="bodydiv">
      <button onClick={Countup}>Count Up</button>
      <Count cnois={cno} />
      <button onClick={Countdown}>Count Down</button>
    </div>
  );
}

export default Buttonf;
