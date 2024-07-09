import axios from "axios";
import styled from "styled-components";
import React from "react";

const Style = styled.div`
  .loginForm {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .acc-type {
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 7px;
    border-radius: 51px;
    background-color: #fff;
    box-shadow: 0 1px 7px 0 rgb(0 0 0 / 30%);
    align-items: center;
    font-weight: 700;
    cursor: pointer;
    text-align: center;
  }
  .acc-type > div {
    width: 50%;
  }
  .active-login {
    color: white;
    background: blue;
    padding: 5px 25px;
    border-radius: 51px;
  }
  .google-signup {
    display: flex;
    width: 100%;
    align-items: center;
    text-align: center border;
    font-weight: 600;
    font-size: 14px;
    border: 0.2px solid grey;
    border-radius: 5px;
    justify-content: center;
    cursor: pointer;
  }
  .g-logo {
    width: 10%;
  }
  .g-logo > img {
    width: 100%;
    border-radius: 50%;
  }
  .other-option {
    font-size: 14px;
    color: grey;
  }
  .other-option,
  .tc {
    text-align: center;
    text-decoration: none;
  }
  .tc > a {
    text-decoration: none;
  }
  .cbtn {
    width: 100%;
    margin: auto;
    padding: 2%;
    background: blue;
    color: white;
    font-size: 20px;
    font-weight: 600;
    border: 0;
    border-radius: 5px;
    box-shadow: 0 1px 7px 0 rgb(0 0 0 / 30%);
    cursor: pointer;
  }
  .indicate {
    color: red;
    font-size: 12px;
    margin: 0;
  }
  .hide {
    display: none;
  }
  .inp-wrap {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 20px;
  }
  .inp {
    width: 96%;
    padding: 2%;
    border: 0.5px solid blue;
    border-radius: 5px;
  }
  .inp > input {
    border: 0;
    outline: 0;
    font-size: 16px;
    width: 100%;
  }
`;

export const LoginForm = (props) => {
  const [value, setValue] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (name) => (event) => {
    setValue({ ...value, [name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/auth/Login", {
        email: value.email,
        password: value.password,
      })
      .then((res) => {
        alert("Login Success");
        localStorage.setItem("token", res.data.token);
        // window.location.reload();
      })
      .catch((err) => {
        alert(err.response.data.msg);
        // console.error(err.response.data.msg);
      });
  };

  return (
    <Style>
      <div className="loginForm">
        <div className="acc-type">
          <div className="active-login">PERSONAL ACCOUNT</div>
          <div>ADMIN ACCOUNT</div>
        </div>

        <h1>Login/signup </h1>

        <form onSubmit={handleSubmit}>
          <div className="inp-wrap">
            <label>Email</label>
            <div className="inp">
              <input
                type="email"
                onChange={handleChange("email")}
                placeholder="user@gmail.com"
                value={value.email}
                required
              />
            </div>
          </div>

          <div className="inp-wrap">
            <label>Password</label>
            <div className="inp">
              <input
                type="password"
                onChange={handleChange("password")}
                placeholder="*******"
                maxLength="10"
                value={value.password}
                required
              />
            </div>
          </div>

          <div>
            <input type="submit" className="cbtn" value="CONTINUE" />
          </div>
        </form>

        <div align="center">
          <a href="/SignUp">Or Signup</a>
        </div>
        <p className="tc">
          By proceeding, you agree to MakeMyTrip's{" "}
          <a href="#">Privacy Policy</a>, <a href="#">User Agreement</a> and{" "}
          <a href="#">T&Cs</a>
        </p>
      </div>
    </Style>
  );
};

export const getToken = () => {
  return localStorage.getItem("token");
};
