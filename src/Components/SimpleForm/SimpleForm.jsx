import React from "react";

const SimpleForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
  };
  return (
    <div>
      <form onSubmit={() => handleSubmit(event)}>
        <input type="text" name="name" id="name" placeholder="Your Name" />
        <br />
        <input type="email" name="email" id="email" placeholder="example@example.com" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SimpleForm;
