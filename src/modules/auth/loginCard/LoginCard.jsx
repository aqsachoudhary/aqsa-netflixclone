import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import "../../../styles/loginCard.css";
import users from "../../../helper/users";

const LoginCard = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "" || email.length <= 3) {
      setEmailError("Please enter your email");
      return;
    } else {
      setEmailError("");
    }
    if (password === "" || password.length <= 3) {
      setpasswordError("Please enter your password");
      return;
    } else {
      setpasswordError("");
    }
    const user = users.find((u) => u.email == email && u.password == password);
    if (user) {
      history.push("/home");
    } else {
      alert("invalid email r password");
    }
  };

  return (
    <>
      <div>
        <form action="" className="formContainer" onSubmit={handleSubmit}>
          <div className="logincontainer">
            <h2
              style={{
                display: "flex",
                justifyContent: "flex-start",
                color: "#fff",
                fontsize: "32px",
                fontweight: "700",
                marginbottom: "28px",
              }}
            >
              sign In
            </h2>
          </div>

          <div className="inputfields">
            <input
              placeholder="Email or phone number"
              className="inputfield"
              id="outlined-basic"
              label="Email Adress"
              variant="outlined"
              value={email}
              error={emailError}
              helperText={emailError || ""}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              onBlur={() => {
                if (email === "") {
                  setEmailError("Enter Your Email");
                } else {
                  setEmailError("");
                }
              }}
            />
            <input
              placeholder="password"
              className="inputfield"
              id="outlined-basic"
              label="Password"
              variant="outlined"
              value={password}
              error={passwordError}
              helperText={passwordError || ""}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              onBlur={() => {
                if (password === "") {
                  setpasswordError("Enter Your Password");
                } else {
                  setpasswordError("");
                }
              }}
            />
          </div>

          <button
            className="loginbutton"
            type="submit"
            variant="contained"
            onClick={() => {
              history.push("/home");
            }}
          >
            Sign In
          </button>

          <div className="checkbox">
            <div>
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
            </div>
            <label for="vehicle1" className="headingsss">
              Remember me
            </label>

            <p className="paragraph">Need help?</p>

            <br></br>
          </div>
          <div className="facebook">
            <img
              style={{
                display: "flex",
                width: "20px",
                height: "20px",
                objectFit: "content",
              }}
              class="icon-facebook"
              src="https://assets.nflxext.com/ffe/siteui/login/images/FB-f-Logo__blue_57.png"
            />
            <p className="paragraphs"> Login With Facebook</p>
          </div>
          <div className="signupinfo">
            <p>New to Netflix?</p>
            <p
              style={{ color: "#fff", fontSize: "15px", alignItems: "center" }}
            >
              <Link to="/signup" style={{ color: "white" }}>
                Sign up now
              </Link>
            </p>
          </div>
        </form>
      </div>
      <footer className="footer" style={{ marginTop: "30px" }}>
        {/* <div className="footerheadings"> */}
        <div className="footerheadingss">
          <p className="footerparagraph">Questions? Contact us.</p>
          <p className="footerparagraph">FAQ</p>
          <p className="footerparagraph">Cookie Preferences</p>
        </div>
        {/* </div> */}
        <div className="hkj">
          <p className="footerparagraph">Terms of Use</p>
          <p className="footerparagraph">Privacy</p>
        </div>
        <div className="ftrheading">
          <p className="footerparagraph">Help Center</p>
          <p className="footerparagraph">Corporate Information</p>
        </div>
      </footer>
    </>
  );
};
export default LoginCard;
