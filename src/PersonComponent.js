import React from "react";

const PersonComponent = (props) => {
  //   console.log("props are: ", props);
  //   console.log("name: ", props.name);

  // destucturing method
  //   const name = props.name;
  //   const city = props.city;

  // destucturing method

  const { name, city } = props;
  return (
    <div>
      <h2>Name</h2>
      <p>{name}</p>
      <h2>City</h2>
      <p>{city}</p>
    </div>
  );
};

export default PersonComponent;
