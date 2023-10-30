import React, { useState } from "react";
import styled from "styled-components"; // Import styled-components library

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulate a basic login check (replace with your actual authentication logic)
    if (email === "user@example.com" && password === "password123") {
      setLoginSuccess(true);
      setError("");
    } else {
      setLoginSuccess(false);
      setError("Invalid email or password");
    }
  };

  return (
    <LoginWrapper>
      <h2>Login</h2>
      {loginSuccess && <p>Login successful!</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          className="mail"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
        className="pass"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="login-btn">Login</button>
      </form>
    </LoginWrapper>
  );
};

// Define a styled component for the form container
const LoginWrapper = styled.div`
  max-width: 300px;
  font-family: 'Lora', serif;
  margin: 0 auto; /* Center horizontally */
  margin-top: 150px; /* Adjust the top margin to center vertically */
  padding: 20px;
  height: 400px;
  border: 1px;
  border-radius: 10px;
  box-shadow: rgba(128, 0, 128, 0.15) 0px 16px 12px -2px, rgba(0, 0, 0, 0.2) 0px 3px 7px -3px;
  background-color: lavender;

  display: flex; /* Enable flex layout */
  flex-direction: column; /* Stack child elements vertically */
  align-items: center; /* Center child elements horizontally */

  .pass{
    border: 1px;
    border-radius: 10px;
    padding: 6px 16px;
    margin-top: 55px;
    font-family: 'Lora', serif;
    display: flex; /* Enable flex layout */
    flex-direction: column; /* Stack child elements vertically */
    align-items: center;
  }

  .mail{
    border: 1px;
    border-radius: 10px;
    padding: 6px 16px;
    margin-top: 55px;
    font-family: 'Lora', serif;
    display: flex; /* Enable flex layout */
    flex-direction: column; /* Stack child elements vertically */
    align-items: center;
  }

  .login-btn{
    border: 1px solid var(--clr-black);
    border-radius: 10px 100px;
    padding: 6px 16px;
    margin-top: 50px;
    margin-left: 55px;
    font-family: 'Lora', serif;
    display: flex; /* Enable flex layout */
    flex-direction: column; /* Stack child elements vertically */
    align-items: center;
    transition: var(--transition);
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

    &:hover{
        background-color: black;
        color: var(--clr-purple);
    }

  }
`;



export default LoginPage;
