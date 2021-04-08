import React, { useState, useEffect, Component } from "react";
import Axios from "axios";
import { toast } from "react-toastify";

toast.configure();
function Viewarea() {
  const [view, setview] = useState("table");
  const [fdis, setfd] = useState(0);
  const [Alldata, setdata] = useState([]);
  const [srch, setsrch] = useState("");

  const todo = () => {
    return Axios.get("http://192.168.100.95:3005/user/getAll")
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    todo();
  }, []);
  function filteroption() {
    notify();
    if (fdis === 0) {
      setfd(1);
      document.getElementById("filterdiv").style.display = "flex";
    } else if (fdis === 1) {
      setfd(0);
      document.getElementById("filterdiv").style.display = "none";
    }
  }
  function notify() {
    toast.success("view changed");
  }
  function searchdata(e) {
    setsrch(e.target.value);
  }
  // console.log(srch);
  function Fulldata() {
    let fullviewdata = "";

    useEffect(() => {
      toast.info("Page Reloded");
    }, []);

    function trimlength(e) {
      let length = e.length;
      if (length < 25) {
        return e;
      } else {
        return (e = e.substr(0, 25) + "...");
      }
    }
    if (srch === "" || srch === " ") {
      if (view === "table") {
        fullviewdata = Alldata.map((doc, index) => (
          <>
            <tr key={doc.id}>
              <td className="tablewidth" scope="row">
                {index + 1}
              </td>
              <td className="tablewidth">{trimlength(doc.name)}</td>
              <td className="tablewidth">{doc.email}</td>
              <td className="tablewidth">{doc.phoneNumber}</td>
              <td className="tablewidth">{trimlength(doc.password)}</td>
              <td className="tablewidth">{doc.id}</td>
            </tr>
          </>
        ));

        return (
          <>
            <table className="table table-striped table-hover" id="maintable">
              <thead>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Name</th>
                  <th scope="col">E-mail</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Password</th>
                  <th scope="col">Option</th>
                </tr>
              </thead>
              <tbody>{fullviewdata}</tbody>
            </table>
          </>
        );
      } else if (view === "grid") {
        return <h3>this is grid view</h3>;
      } else if (view === "crusl") {
        return <h3>this is carousel view</h3>;
      }
    } else if (srch !== "" || srch !== " ") {
      let val = srch.toLowerCase();
      let matches = [];
      matches = Alldata.filter((v) => v.name.toLowerCase().includes(val));
      if (matches.length === 0) {
        return <p className="text-center pt-3 pb-3">No Result To Show</p>;
      } else {
        fullviewdata = matches.map((doc, index) => (
          <>
            <tr key={doc.id}>
              <td className="tablewidth" scope="row">
                {index + 1}
              </td>
              <td className="tablewidth">{trimlength(doc.name)}</td>
              <td className="tablewidth">{doc.email}</td>
              <td className="tablewidth">{doc.phoneNumber}</td>
              <td className="tablewidth">{trimlength(doc.password)}</td>
              <td className="tablewidth">{doc.id}</td>
            </tr>
          </>
        ));

        return (
          <>
            <table className="table table-striped table-hover" id="maintable">
              <thead>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Name</th>
                  <th scope="col">E-mail</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Password</th>
                  <th scope="col">Option</th>
                </tr>
              </thead>
              <tbody>{fullviewdata}</tbody>
            </table>
          </>
        );
      }
    } else {
      fullviewdata = <h1 className="text-center">Something gets wrong</h1>;
      return fullviewdata;
    }
  }
  return (
    <>
      <div className="container-fluid">
        <div className="areamain  mt-4" id="areamain">
          <div className="areamaindiv row ">
            <div className="col-xl-6">
              <input
                className="form-control"
                type="text"
                id="data"
                onChange={(e) => searchdata(e)}
                value={searchdata.sdata}
                placeholder="Search"
              />
            </div>
            <div className="col-xl-1"></div>
            <div className="col-xl-2 row">
              <button
                className="btn btn-outline-dark"
                onClick={filteroption}
                id="filterbtn"
              >
                Filter
              </button>
            </div>
            <div className="col-xl-1"></div>
            <div className="col-xl-2 changeviewdiv">
              <a
                onClick={() => {
                  setview("table");
                }}
              >
                <img
                  className="viewtable vbtnp"
                  src="phonebook/table.png"
                ></img>
              </a>
              <a
                onClick={() => {
                  setview("grid");
                }}
              >
                <img className="viewgrid vbtnp" src="phonebook/grid.png"></img>{" "}
              </a>
              <a
                onClick={() => {
                  setview("crusl");
                }}
              >
                <img
                  className="viewcrusl vbtnp"
                  src="phonebook/crusl.png"
                ></img>{" "}
              </a>
            </div>
          </div>

          <div className="areafilterdiv row  pt-4" id="filterdiv">
            <div className="areafilterbtndiv col-xl-2">
              <button className="btn btn-outline-dark" id="filterbtn2">
                Filter
              </button>
            </div>
            <div className="areafilterbtndiv col-xl-2">
              <button className="btn btn-outline-dark" id="filterbtn3">
                Filter
              </button>
            </div>
            <div className="areafilterbtndiv col-xl-2">
              <button className="btn btn-outline-dark" id="filterbtn4">
                Filter
              </button>
            </div>
            <div className="areafilterbtndiv col-xl-2">
              <button className="btn btn-outline-dark" id="filterbtn5">
                Filter
              </button>
            </div>
            <div className="areafilterbtndiv col-xl-2">
              <button className="btn btn-outline-dark" id="filterbtn6">
                Filter
              </button>
            </div>
            <div className="areafilterbtndiv col-xl-2">
              <button className="btn btn-outline-dark" id="filterbtn7">
                Filter
              </button>
            </div>
          </div>
        </div>
        <div></div>

        <div className="areatable mt-4">
          <div className="areatablediv container-fluid ">{Fulldata()}</div>
        </div>
      </div>
    </>
  );
  // console.log(srch);
}
export default Viewarea;
