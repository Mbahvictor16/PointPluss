'use client'

import React, { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";

const AddToCartButton = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart, cartItems, removeFromCart } = useContext(ProductContext);

  const increaseQuantity = () => {
    addToCart(product.id);
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      removeFromCart(product.id);
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex font-h-3 w-full font-[number:var(--h-3-font-weight)] text-black text-[length:var(--h-3-font-size)] tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]">
      <div
        className="btn1 bg-[#ffa5004c] rounded-s-md cursor-pointer border duration-300 active:bg-amber-600 border-black text-black px-2 py-1"
        onClick={decreaseQuantity}
      >
        -
      </div>
      <div className="px-3 py-1 border border-black bg-white">
        {cartItems[product.id]}
      </div>

      <div
        className="btn1 bg-[#ffa5004c] cursor-pointer rounded-e-md border duration-300 active:bg-amber-600 border-black text-black px-2 py-1"
        onClick={increaseQuantity}
      >
        +
      </div>
    </div>
  );
};

export default AddToCartButton;
