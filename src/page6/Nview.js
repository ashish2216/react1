import React from "react";

function Nview() {
  function Cvcard() {
    return (
      <>
        <div className="row">
          <div className="flaot-start cvcarddivimg">
            <img src="phonebook/user-male.png"></img>
          </div>
          <div className="float-end cvcarddiv">
            <h2 className="text-center">USERS</h2>
            {/* <p>asd</p> */}
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="container-fluid  nviewmain row">
        <div className="col-xl-3">
          <div className="nviewcard">
            <Cvcard />
          </div>
        </div>
        <div className="col-xl-3">
          <div className="nviewcard">
            <Cvcard />
          </div>
        </div>
        <div className="col-xl-3">
          <div className="nviewcard">
            <Cvcard />
          </div>
        </div>
        <div className="col-xl-3">
          <div className="nviewcard">
            <Cvcard />
          </div>
        </div>
      </div>
    </>
  );
}

export default Nview;
