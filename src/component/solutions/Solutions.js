import React from "react";
import Consulting from "./Consulting";
import Growth from "./Growth";

const Solutions = () => {
  return (
    <div>
      <Consulting />
      <div
        className="pl-3"
        style={{ paddingLeft: "1rem", paddingRight: "1rem" }}
      >
        <Growth />
      </div>
    </div>
  );
};

export default Solutions;
