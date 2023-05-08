import React from "react";

const fruits = ["apple", "mango", "orange"];
const MapTest = () => {
  return (
    <div>
      MapTest (loop over array of strings)
      <ul>
        {fruits.map((fruitName, index) => {
          return (
            <li key={fruitName}>
              Fruit # {index}: {fruitName}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MapTest;
