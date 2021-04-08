import axios from "axios";
import { toast } from "react-toastify";
import React, { Suspense, useState, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import validation from "./validation";
import { useHistory } from "react-router-dom";

const Page6 = lazy(() => import("../page6/page6"));

toast.configure();
function Loginf() {
  let history = useHistory();
  const [logindata, setlogdata] = useState({
    lemail: "",
    lpass: "",
  });
  function lsend(e) {
    e.preventDefault();

    console.log(logindata.lemail);
    axios
      .post("http://192.168.100.95:3005/user/login", {
        email: logindata.lemail,
        password: logindata.lpass,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.status === true) {
          toast.success(res.data.message);
          history.push("/page6");

          // <Route path="/page" component={Page6} />;
        } else {
          toast.error(res.data.message);
        }
      });
  }
  function lodata(e) {
    const ldata = { ...logindata };
    ldata[e.target.id] = e.target.value;
    setlogdata(ldata);
    console.log(logindata);
  }
  const registerpage = () => {
    document.getElementById("logindiv").style.transform = "scale(1.1)";
    document.getElementById("loginback").style.transform = "scale(0)";
    setTimeout(function () {
      document.getElementById("logindiv").style.transform =
        "scale(1.1) rotateY(-180deg)";
    }, 1000);
    setTimeout(function () {
      document.getElementById("loginform").style.display = "none";
      document.getElementById("Register").style.display = "block";
    }, 1500);
    setTimeout(function () {
      document.getElementById("logindiv").style.transform = "rotateY(-180deg)";
      document.getElementById("loginback").style.transform = "scale(1)";
    }, 2500);
  };
  return (
    <div>
      <form className="loginform row" id="loginform" onSubmit={(e) => lsend(e)}>
        <h2 className="text-center">Login</h2>
        <div className="form-group ">
          <input
            type="email"
            id="loginmail"
            className="form-control forminput"
            placeholder=" Enter Your E-Mail"
            onChange={(e) => lodata(e)}
            id="lemail"
            value={logindata.lemail}
          ></input>
        </div>
        <div className="form-group ">
          <input
            type="password"
            className="form-control forminput"
            placeholder=" Enter Your Password"
            onChange={(e) => lodata(e)}
            id="lpass"
            value={logindata.lpass}
          ></input>
        </div>
        <div className="formbtndiv">
          <button className="formbtn btn btn-dark" type="submit">
            Login
          </button>
          <p className=" text-center">
            Forget
            <span>
              <b> Username/Password</b>
            </span>
          </p>
        </div>
        <div className="ltrbtn">
          <p id="ltrtag" onClick={registerpage}>
            Create Your Account ➡
          </p>
        </div>
      </form>
    </div>
  );
}

export default Loginf;
