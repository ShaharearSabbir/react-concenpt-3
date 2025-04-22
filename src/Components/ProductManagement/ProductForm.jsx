import React, { useState } from "react";

const ProductForm = ({ handleAddProduct }) => {
  const [err, setErr] = useState("");
  const handleProductSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;

    if (name.length === 0) {
      setErr("Please provide a product name");
      return;
    } else if (price.length === 0) {
      setErr("Please provide a price");
      return;
    } else if (price < 0) {
      setErr("Please provide a price");
      return;
    } else {
      setErr("");
    }

    const newProduct = {
      name,
      price,
      quantity,
    };
    handleAddProduct(newProduct);
  };
  return (
    <div>
      <h3>Add Product</h3>
      <form onSubmit={handleProductSubmit}>
        <input type="text" name="name" id="name" placeholder="Product Name" />
        <br />
        <input
          type="text"
          name="price"
          id="price"
          placeholder="Product Price"
        />
        <br />
        <input
          type="text"
          name="quantity"
          id="quantity"
          placeholder="Product Quantity"
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p>
        <small style={{ color: "red" }}>{err}</small>
      </p>
    </div>
  );
};

export default ProductForm;
