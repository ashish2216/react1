import React from "react";
import Loginf from "./loginf";
import Registerf from "./registerf";
import Navl from "./navl";

function Page5() {
  return (
    <>
      <div className="page5main" id="page5main">
        {/* <Navl /> */}
        <div>
          <h1 className="text-center mt-4 page5heading" id="page5mainhead">
            Welcome To Login Page
          </h1>
        </div>
        <div className="row loginmain ">
          <div className="col-xl-5 ">
            <div className="meestlogo"></div>
          </div>
          <div className="loginmaindiv col-xl-7 ">
            <div className="ldivback" id="loginback"></div>
            <div className="logindiv" id="logindiv">
              <Loginf />
              <Registerf />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page5;
