import React, { useRef } from "react";

const UncontrolledField = () => {
  const passref = useRef("");
  const emailref = useRef("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(emailref.current.value, passref.current.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          ref={emailref}
          type="email"
          name="email"
          id="email"
          placeholder="Email"
        />
        <br />
        <input
          ref={passref}
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default UncontrolledField;
