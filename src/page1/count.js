import React from "react";

function count(props) {
  var cno = 0;
  cno = props.cnois;
  return (
    <>
      <p className="bodydiv1">{cno}</p>
    </>
  );
}
export default count;
