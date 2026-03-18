import React, { useState } from "react";

function Register() {
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // registration logic here
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <input placeholder="Username" value={userName}
        onChange={(e) => setUserName(e.target.value)} />
      <input placeholder="First Name" value={firstName}
        onChange={(e) => setFirstName(e.target.value)} />
      <input placeholder="Last Name" value={lastName}
        onChange={(e) => setLastName(e.target.value)} />
      <input placeholder="Email" value={email}
        onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password}
        onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}

export default Register;