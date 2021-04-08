import React from "react";

let greet = "";
let tate = new Date();
const head = {};
if (tate.getHours() >= 4 && tate.getHours() < 12) {
  greet = "Good Morning";
  head.color = "green";
} else if (tate.getHours() >= 12 && tate.getHours() < 19) {
  greet = "Good Afteernoon";
  head.color = "orange";
} else {
  greet = "Good Night";
  head.color = "black";
}
function greeting() {
  return (
    <>
      <div className="greetdiv">
        <h1>
          {" "}
          Hello Sir, <span style={head}>{`${greet}`}</span>
        </h1>
      </div>
    </>
  );
}
export default greeting;
