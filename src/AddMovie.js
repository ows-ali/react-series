import React, { useState } from "react";

const AddMovie = ({ addMovie }) => {
  const [imgSrc, setImgSrc] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [link, setLink] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    addMovie({ name, imgSrc, category, link });
  };

  return (
    <div className="addForm">
      <form onSubmit={(e) => handleAdd(e)}>
        <input
          placeholder="enter image url"
          value={imgSrc}
          onChange={(e) => {
            setImgSrc(e.target.value);
          }}
        />
        <input
          placeholder="enter movie name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          placeholder="enter movie category"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        />
        <input
          placeholder="enter movie url"
          value={link}
          onChange={(e) => {
            setLink(e.target.value);
          }}
        />

        <button type="submit" className="addBtn">
          Add Movie
        </button>
      </form>
    </div>
  );
};

export default AddMovie;
