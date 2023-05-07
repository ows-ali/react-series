import React from "react";

const ButtonComponent = (props) => {
  return (
    <div>
      <button onClick={props.handleClickProp}>Click me Component</button>
    </div>
  );
};

export default ButtonComponent;
