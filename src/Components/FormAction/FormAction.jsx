import React from "react";

const FormAction = () => {
    const handleFormAction = (formData) => {
        console.log(formData.get('name'));
        console.log(formData.get('email'));
    }
  return (
    <div>
      <form action={handleFormAction}>
        <input type="text" name="name" id="name" placeholder="Name" value="Shaharear"/>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="youremail@example.com"
          value="reshan2012@gmail.com"
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default FormAction;
