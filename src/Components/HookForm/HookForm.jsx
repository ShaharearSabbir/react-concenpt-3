import React from "react";
import useInputField from "../../Hooks/useInputHook";

const HookForm = () => {
  const [name, nameOnChange] = useInputField("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted", name);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" defaultValue={name} onChange={nameOnChange} />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;
