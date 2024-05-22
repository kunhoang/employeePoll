import "../assest/login.css";
import image from "../image/image.jpg";
import { useNavigate, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { useState } from "react";
import { handleLogin } from "../actions/authedUser";
const Login = ({ dispatch, loggedIn }) => {
  const [username, setUsername] = useState("sarahedo");
  const [password, setPassword] = useState("password123");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const navigate = useNavigate();
  const urlParams = new URLSearchParams(window.location.search);
  const redirectUrl = urlParams.get('redirectTo');
  if (loggedIn) {
    return <Navigate to={redirectUrl ? redirectUrl : "/"}/>;
}

  const handleSubmit = () => {
    console.log(redirectUrl)
    dispatch(handleLogin(username, password));
    setUsername("");
    setPassword("");
    // navigate("/");
  };

  return (
    <div className="main" data-testid="login">
      <div className="title">Employee Polls</div>
      <div className="logo">
        <img src={image} className="img" />
      </div>
      <div className="form">
        <div className="form-title">Login</div>
        <div className="form-user">
          <span className="form-user-text">User</span>
          <input
            type="text"
            className="text-user"
            value={username}
            onChange={handleUsername}
            data-testid = "username"
          />
        </div>
        <div className="form-password">
          <span className="form-password-text">Password</span>
          <input
            type="password"
            className="text-password"
            value={password}
            onChange={handlePassword}
            data-testid = "password"
          />
        </div>
        <button className="btn-submit" onClick={handleSubmit} data-testid = "submit">
          Submit
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  loggedIn: !!authedUser,
});

export default connect(mapStateToProps)(Login);
