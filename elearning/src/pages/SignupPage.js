import React, { useState } from "react";
import styled from "styled-components";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    // Simulate a successful signup if both email and password are provided
    if (email && password) {
      setSignupSuccess(true);
      setError("");
    } else {
      setSignupSuccess(false);
      setError("Please provide both email and password.");
    }
  };

  return (
    <SignupWrapper>
      <h2>Signup</h2>
      {signupSuccess && <p>Signup successful!</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSignup}>
        <input
          type="email"
          className="mail"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="pass"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="signup-btn">Signup</button>
      </form>
    </SignupWrapper>
  );
};

const SignupWrapper = styled.div`

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

  .signup-btn{
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

export default SignupPage;
