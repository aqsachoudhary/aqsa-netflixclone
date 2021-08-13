import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Users from "../../helper/users";
import "../../styles/SignUpCard.css";

const SignUp = (props) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  useEffect(() => {}, [email]);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "" || email.length <= 4) {
      setEmailError("please enter your name");
      return;
    } else {
      setEmailError("");
    }

    const newUser = {
      email,
    };
    Users.push(newUser);
    console.log("Users :>> ", Users);
    alert("Signup Successfully");
    history.push("/Login");
  };
  return (
    <div className="signupMaincontainer">
      <div className="signupineercontainer">
        <div className="heading">
          <h3 className="mainheading">Unlimited movies, TV shows, and more.</h3>
          <h5 className="optionheading">Watch anywhere. Cancel anytime.</h5>
          <p className="signupparagraph">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
        </div>
        <form className="signupform" onSubmit={handleSubmit}>
          <div className="mainfield">
            <input
              className="emailfield"
              type="email"
              placeholder="Email address"
              error={emailError}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              onBlur={() => {
                if (email === "") {
                  setEmailError("enter you Email");
                } else {
                  setEmailError("");
                }
              }}
            />
            <button type="submit" className="button">
              Get Started
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
