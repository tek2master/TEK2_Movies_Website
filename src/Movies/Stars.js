import React from "react";
import { Link } from "react-router-dom";

const ratings = ["☆", "☆☆", "☆☆☆", "☆☆☆☆", "☆☆☆☆☆"];

const Stars = ({ message, id, handleSelect, rating }) => {
  return (
    <div>
      <p>
        {message}{" "}
        <select
          name={id}
          value={rating}
          onChange={event => {
            const rating = event.target.value;
            // handleSelect(id, rating);
          }}
        >
          {["", ...ratings].map(rating => (
            <option value={rating}>{rating}</option>
          ))}
        </select>
      </p>
    </div>
  );
};
export default Stars;
