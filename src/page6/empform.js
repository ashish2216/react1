import React from "react";

function empform() {
  function typedate() {
    document.getElementById("typedate").nodeType = "date";
  }
  return (
    <div>
      <div className="container bg-warning mt-5">
        <form method="post">
          <div className="row">
            <div className=" col-sm-6 mt-2 form-group">
              <label className="col-form-label">First Name</label>
              <input className="form-control " type="text" name="first_name" />
            </div>

            <div className="form-group mt-2 col-sm-6">
              <label className="col-form-label">Last Name</label>
              <input className="form-control" type="text" name="last_name" />
            </div>

            <div className="form-group col-sm-6 mt-2">
              <label className="col-form-label">UserName</label>
              <input className="form-control " type="text" name="username" />
            </div>
            <div className="form-group col-sm-6 mt-2">
              <label className="col-form-label">Date Of Birth</label>
              <input
                className="form-control"
                name="dob"
                type="date"
                placeholder="Date Of Birth"
              />
            </div>

            <div className="form-group col-sm-6 mt-2">
              <label className="col-form-label">Gender</label>
              <select className="form-select">
                <option value="0">-select-</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
              </select>
            </div>

            <div className="form-group col-sm-6 mt-2">
              <label className="col-form-label">E-Mail</label>
              <input className="form-control" type="email" name="email" />
            </div>

            <div className="form-group col-sm-6 mt-2">
              <label className="col-form-label">Phone No.</label>
              <input className="form-control " type="number" name="phone" />
            </div>
            <div className="form-group col-sm-6 mt-2">
              <label className="col-form-label">Employee ID</label>
              <input className="form-control" type="text" name="Deskno" />
            </div>
            <div className="form-group col-sm-6 mt-2">
              <label className="col-form-label">Date Of Joining</label>
              <input className="form-control" type="date" name="joindate" />
            </div>
            <div className="form-group col-sm-6 mt-2">
              <label className="col-form-label">Department</label>
              <select className="form-select">
                <option value="0">-select-</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="form-group col-sm-6 mt-2">
              <label className="col-form-label">Designation</label>
              <select className="form-select">
                <option value="0">-select-</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="form-group col-sm-6 mt-2">
              <label className="col-form-label">Position</label>
              <select className="form-select">
                <option value="0">-select-</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div className="pt-3">
            <button className="btn btn-dark" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default empform;
