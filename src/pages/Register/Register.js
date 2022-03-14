import React from "react";
import { useState } from "react";
import authService from "../../auth/authService";
import './Register.css';

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    authService.signup(email, password);
  };

  return (
    <div className="box">
      <div className="page-messages">
        <h1>Welcome</h1>
        <h2>Register here please !</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          className="register-input"
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          className="register-input"
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button>submit</button>
      </form>
    </div>
  );
}
