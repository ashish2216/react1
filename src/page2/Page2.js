import React from "react";
import Mylist from "./mylist";

function Page2(props) {
  return (
    <>
      <div className="p2main">
        <div className="p2maindiv">
          <h1>15 Stunning Sci-Fi Movies on NETFLIX in Hindi</h1>
        </div>
      </div>
      <div className="listcon">
      <div className="listcarddiv container">
        <div className="row">
          <Mylist />
        </div>
      </div>
      </div>
    </>
  );
}
export default Page2;
