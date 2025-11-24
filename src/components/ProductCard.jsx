import React from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

export default function ProductCard({
  image,
  title,
  description,
  rating,
  spice,
  price,
}) {
    const navigate = useNavigate();
  return (
    <div className="product-card-3d">

      <img src={image} alt={title} />

      <h5 className="product-title">{title}</h5>

      <p className="food-desc">{description}</p>

      <div className="rating-wrapper">
        <span className="rating-value">{rating}</span>
      </div>

      <div className="spice-level">
        <span>{spice}</span>
      </div>

      <div className="card-footer">
        <span className="product-price">₹{price}</span>
        <button
          className="add-btn" onClick={() => navigate("/login")}>
          Add to Cart
      </button>
      </div>
    </div>
  );
}
