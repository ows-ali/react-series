import React from "react";
import ButtonComponent from "./ButtonComponent";

const FunctionProps = () => {
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <div>
      {/* <button onClick={handleClick}>Click me</button> */}
      <ButtonComponent handleClickProp={handleClick} />
    </div>
  );
};

export default FunctionProps;
