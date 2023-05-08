import React from "react";

const fruits = [
  { id: 1, name: "apple" },
  { id: 2, name: "mango" },
  { id: 3, name: "orange" },
];

const MapTest2 = () => {
  return (
    <div>
      MapTest2 (loop over array of objects)
      <ul>
        {fruits.map((fruit, index) => {
          return (
            <li key={fruit.id}>
              <span>Fruit # {fruit.id}: </span>
              <span>{fruit.name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MapTest2;
