import React from "react";

const Cards = ({ img, heading, para }) => {
  return (
    <div className="single-cards">
      <div className="container">
        <img src={img} alt="" />
      </div>
      <h1>{heading}</h1>
      <p>{para}</p>
    </div>
  );
};

export default Cards;
