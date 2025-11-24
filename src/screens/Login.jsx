import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./Login.css";
import { Link } from "react-router-dom";
import Forgot from "./Forgot";

export default function Login() {
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  console.log(username, password, phone);

  return (
    <div>
      <Navbar />
      <div className="login-page">
        <div className="center-box">
          <div className="login-card">
            <form>
              <h1>Login Form</h1>

              <label>
                Username
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter username"
                />
              </label>

              <label>
                Phone no
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter phone number"
                />
              </label>

              <label>
                Password
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                />
              </label>

              <div class="btn-group">
                <button type="submit" formaction="#">
                  Login
                  <i class="fa-brands fa-linkedin"></i>
                </button>
                <button type="submit" formaction="./Register">
                  Register
                  <i class="fa-brands fa-linkedin"></i>
                </button>
              </div>

              <Link to='/Forgot'>Forgot password</Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
