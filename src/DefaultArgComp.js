import React from "react";

const DefaultArgComp = ({ title = "Default Title" }) => {
  return (
    <div>
      <h1>Title</h1>
      <p>{title}</p>
    </div>
  );
};

export default DefaultArgComp;
