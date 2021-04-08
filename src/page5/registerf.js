import React, { useState } from "react";
import Axios from "axios";

function Registerf() {
  const [regdata, setregdata] = useState({
    name: "",
    email: "",
    phone: "",
    pass: "",
  });

  function rsend(e) {
    e.preventDefault();
    Axios.post("http://192.168.100.95:3005/user/register", {
      name: regdata.name,
      email: regdata.email,
      phoneNumber: regdata.phone,
      password: regdata.phone,
    }).then((res) => {
      console.log(res.data);
    });
  }
  function registerdata(e) {
    const rdata = { ...regdata };
    rdata[e.target.id] = e.target.value;
    setregdata(rdata);
  }
  const loginpage = () => {
    document.getElementById("logindiv").style.transform =
      "scale(1.1) rotateY(-180deg)";
    document.getElementById("loginback").style.transform = "scale(0)";
    setTimeout(function () {
      document.getElementById("logindiv").style.transform = "scale(1.1)";
    }, 1000);
    setTimeout(function () {
      document.getElementById("loginform").style.display = "block";
      document.getElementById("Register").style.display = "none";
    }, 1500);
    setTimeout(function () {
      document.getElementById("logindiv").style.transform = "scale(1.0)";
      document.getElementById("loginback").style.transform = "scale(1)";
    }, 2500);
  };
  return (
    <div>
      <form
        className="registerform row disnone"
        id="Register"
        onSubmit={(e) => rsend(e)}
      >
        <h2 className="text-center">Register</h2>
        <div className="form-group ">
          <input
            type="text"
            className="form-control forminput"
            placeholder=" Enter Your Name"
            onChange={(e) => registerdata(e)}
            id="name"
            value={regdata.name}
          ></input>
        </div>
        <div className="form-group ">
          <input
            type="email"
            className="form-control forminput"
            placeholder=" Enter Your E-Mail"
            onChange={(e) => registerdata(e)}
            id="email"
            value={regdata.email}
          ></input>
        </div>
        <div className="form-group ">
          <input
            type="number"
            className="form-control forminput"
            placeholder=" Enter Your Phone Number"
            onChange={(e) => registerdata(e)}
            id="phone"
            value={regdata.phone}
          ></input>
        </div>
        <div className="form-group ">
          <input
            type="password"
            className="form-control forminput"
            placeholder=" Enter Your Password"
            onChange={(e) => registerdata(e)}
            id="pass"
            value={regdata.pass}
          ></input>
        </div>
        <div className="formbtndiv">
          <button className="formbtn btn btn-dark" type="submit">
            Register
          </button>
          {/* <p className=" text-center">
                    Forget
                    <span>
                      <b> Username/Password</b>
                    </span>
                  </p> */}
        </div>
        <div className="ltrbtn1">
          <p id="ltrtag1" onClick={loginpage}>
            ⬅ I Am Already Registerd
          </p>
        </div>
      </form>
    </div>
  );
}

export default Registerf;
