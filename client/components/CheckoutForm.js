import React, { useState } from "react";

const CheckoutForm = () => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    address: "",
    email: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setState({ ...state, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Check Out Form</h1>

      <label>First Name</label>
      <input type="text" name="firstName" onChange={handleChange} />

      <label>Last Name</label>
      <input type="text" name="lastName" onChange={handleChange} />
      <label>Address</label>
      <input type="text" name="address" onChange={handleChange} />
      <label>email</label>
      <input type="text" name="email" onChange={handleChange} />

      <input type="submit" />
    </form>
  );
};

export default CheckoutForm;
