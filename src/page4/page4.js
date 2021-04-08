import React from "react";
import Nav from "./Nav";
import Viewarea from "./viewarea";

function page4() {
  return (
    <>
      <div className="page4main" id="page4main">
        <Nav />
        {/* <div className="col-xl-1 bg-warning dsboption">1</div> */}
        <div className="">
          <div className="page4mainhead" id="page4mainhead">
            <h1>Welcome to Meest Office Phonebook </h1>
          </div>

          <Viewarea />
        </div>
      </div>
    </>
  );
}

export default page4;
