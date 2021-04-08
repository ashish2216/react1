import React from "react";
import Nava from "./nava";
import Nview from "./Nview";
import Viewarea from "../page4/viewarea";
import Empform from "./empform";
import Dsboptions from "./dsboptions";

function page6() {
  return (
    <div className="page6" id="page6main">
      <Nava />
      <Dsboptions />
      <div className="dsbview">
        <div>
          <h1 className="text-center" id="page6head">
            Admin Page
          </h1>
        </div>
        <Nview />
        <Viewarea />
        <Empform />
      </div>
    </div>
  );
}

export default page6;
