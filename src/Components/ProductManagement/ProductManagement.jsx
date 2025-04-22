import React, { useState } from "react";
import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const handleAddProduct = (newProduct) => {
    console.log(newProduct);
    const updatedProducts = [...products, newProduct];
    console.log(updatedProducts);
    setProducts(updatedProducts);
    console.log(products);
  };
  return (
    <div>
      <ProductForm handleAddProduct={handleAddProduct}></ProductForm>
      <ProductTable products={products}></ProductTable>
    </div>
  );
};

export default ProductManagement;
