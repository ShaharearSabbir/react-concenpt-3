import React, { useContext } from "react";
import { AssetContext } from "./FamilyTree";

const Myself = ({ asset }) => {
  const newAsset = useContext(AssetContext);
  return (
    <div>
      <h3>Myself</h3>
      <p>Asset: {asset}</p>
      <p>Asset: {newAsset}</p>
    </div>
  );
};

export default Myself;
