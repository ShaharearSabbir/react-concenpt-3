import React from "react";
import Cousin from "./Cousin";

const Aunt = () => {
  return (
    <div>
      <h3>Aunt</h3>
      <section className="flex">
        <Cousin name={"TomTom"}></Cousin>
        <Cousin name={"JoJo"}></Cousin>
      </section>
    </div>
  );
};

export default Aunt;
