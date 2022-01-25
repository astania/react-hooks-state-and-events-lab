import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, addToCart] = useState(false)

  function handleAddToCart() {
    return addToCart(!inCart)
  }

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCart}>{inCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
