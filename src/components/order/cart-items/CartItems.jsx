import React, { useContext } from "react";
import AddToCartButton from "../../../helper/AddToCartButton";
import { ProductContext } from "../../../context/ProductContext";
import { FaTrashAlt } from "react-icons/fa";
import { empty_cart } from "../../../../public/assets";
import { FaArrowLeftLong } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

const CartItems = () => {
  const { Products, cartItems, removeFromCart } = useContext(ProductContext);

  console.log("Products", Products);
  console.log("Products", ProductContext);
  console.log("Product Id", Products.id);

  // Check if cart is empty
  const isEmptyCart = Object.values(cartItems).every(
    (quantity) => quantity === 0
  );

  // If cart is empty, display a message
  if (isEmptyCart) {
    return (
      <div className="flex justify-center items-center">
        <div className="flex flex-col mt-[50px]">
          <Image src={empty_cart} alt="empty cart" />
          <div className="w-full flex flex-col justify-center">
            <p className="font-[590] text-[25px] text-amber-500">
              Your cart is empty.
            </p>
            <p className="mt-2 font-[500]">
              Explore categories for tasty options!
            </p>
            <Link href={"/"}
              className="cursor-pointer p-[10px] rounded-md gap-3 mt-[20px] bg-amber-500 hover:bg-[#ecb858ec] duration-300 text-white flex justify-center items-center drop-shadow-xl shadow-[0px_4px_10px_#00000026]"
            >
              <FaArrowLeftLong />
              <p className="font-[590]">Start shopping</p>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {Products.map((product) => {
        if (cartItems[product.id] > 0) {
          return (
            <div
              key={product.id}
              className="bg-white drop-shadow-xl w-full shadow-[0px_4px_10px_#00000026] lg:gap-2 gap-3 flex mt-[20px] h-auto sm:h-[150px]"
            >
              <Image src={product.img} alt="product" className="w-[30%] h-auto" />
              <div className="sm:p-6 p-4 w-full flex flex-col gap-2">
                <p className="font-h-3 w-full font-[number:var(--h-3-font-weight)] text-black text-[length:var(--h-3-font-size)] tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]">
                  {product.title}
                </p>
                <div className="flex justify-start">
                  <AddToCartButton product={product} />
                </div>
                <div className="sm:w-[60%] w-full flex py-1 px-2 justify-between drop-shadow-xl shadow-[0px_4px_10px_#00000026] rounded-md">
                  <p className="font-h-3 font-[number:var(--h-3-font-weight)] text-black text-[length:var(--h-3-font-size)] tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]">
                    N{product.price.toLocaleString()}
                  </p>
                  <button
                    className="flex justify-center items-center"
                    onClick={() => {
                      removeFromCart(product.id);
                    }}
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default CartItems;
