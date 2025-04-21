import React, { useState } from "react";

const ControlledField = () => {
  const [password, setPassword] = useState("secret");
  const [error, setError] = useState("");

  const handleSumbit = (e) => {
    e.preventDefault();
    console.log("Submitted");
    if (password.length < 6) {
      setError("6 or More");
    } else {
      setError("");
    }
  };

  const handlePasswordOnChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
    if (password.length < 6) {
      setError("Pass must be 6 or more character");
    } else {
      setError("");
    }
  };
  return (
    <div>
      <form onSubmit={handleSumbit}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          required
        />
        <br />
        <input
          type="password"
          name="password"
          id="password"
          required
          placeholder="password"
          defaultValue={password}
          onChange={handlePasswordOnChange}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p style={{ color: "red" }}>
        <small>{error}</small>
      </p>
    </div>
  );
};

export default ControlledField;
