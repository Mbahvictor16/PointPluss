"use client";

import React, { useContext, useRef, useState } from "react";
import { TiShoppingCart } from "react-icons/ti";
import Link from "next/link";
import Point from "../../../../helper/Point";
import { RiArrowDownSFill } from "react-icons/ri";
import Dropdown from "../drop-down/Dropdown";
import { MenuItems } from "../drop-down/menu-items/MenuItems";
import { RxHamburgerMenu } from "react-icons/rx";
import AvatarContext from "../../../../context/AvatarContext";
import Image from "next/image";
import { MdOutlinePerson } from "react-icons/md";
import { TbLogout2 } from "react-icons/tb";

export default function NavLinks({ handleOpenModal, handleToggleModal }) {
  const [click, setClick] = useState(false);
  // const [dropdown, setDropdown] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Customer");
  const [open, setOpen] = useState(false);
  const menuRef = useRef();
  const imgRef = useRef();
  const { avatar } = useContext(AvatarContext);

  window.addEventListener("click", (e) => {
    console.log(e.target === menuRef.current);
    if (e.target !== menuRef.current && e.target !== imgRef.current) {
      setOpen(false);
    }
  });

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSelect = (item) => {
    setSelectedItem(item);
    setClick(false);
  };

  const handleClick = () => setClick(!click);
  console.log(handleClick);

  return (
    <div className="w-full NavLink pb-[20px] px-[50px] h-20 left-0 sticky top-0 z-50 bg-transparent drop-shadow-xl tracking-wide shadow-[0px_4px_10px_#00000026]">
      <div className="flex flex-col h-20 items-center justify-center">
        <div className="text-gray-600 body-font flex justify-between items-center w-full">
          <div className="flex items-center gap-[15px]">
            <div
              onClick={handleToggleModal}
              className="menu bg-amber-500 ml-[10px] hover:bg-[#ecb858ec] duration-300 rounded-full cursor-pointer md:hidden p-[7px] mt-[10px] text-white"
            >
              <RxHamburgerMenu size={"1.2rem"} />
            </div>
            <div className="w-[50%] cursor-pointer flex justify-center items-center">
              <Link href={"/"} className="sm:block hidden">
                <Point />
              </Link>
              <p className="font-logo-text block sm:hidden font-[number:var(--logo-text-font-weight)] text-[#ffa500] text-[length:var(--logo-text-font-size)] tracking-[var(--logo-text-letter-spacing)] leading-[var(--logo-text-line-height)] whitespace-nowrap [font-style:var(--logo-text-font-style)]">+</p>
            </div>
          </div>
          <div className="flex gap-4 p-4 items-center">
            <div
              onClick={handleOpenModal}
              className="bg-amber-500 p-[10px] px-[30px] rounded-[30px] text-white drop-shadow-xl shadow-[0px_4px_10px_#00000026] transform transition-transform duration-300 hover:scale-105 cursor-pointer"
            >
              <p className="font-[590] drop-shadow-xl">Get Started</p>
            </div>
            <div
              className="flex services cursor-pointer hover:bg-amber-500 hover:text-white p-[10px] rounded-[30px] px-[20px] border-2 border-amber-500  text-white items-center"
              onClick={toggleDropdown}
            >
              <p className="font-[590]">{selectedItem}</p>
              <RiArrowDownSFill />
              {/* Render dropdown if open */}
              {dropdownOpen && (
                <Dropdown
                  menuItems={MenuItems}
                  defaultItem={selectedItem}
                  handleSelect={handleSelect}
                />
              )}
            </div>
            <Link href={"/orders"} className="cart-icon">
              <div className="relative w-11 pt-3">
                <TiShoppingCart size={"2rem"} className="text-amber-500" />
                <span className="absolute rounded-xl bg-red-600 text-white border num w-4 top-1 right-0 text-sm flex items-center justify-center font-[590]">
                  7
                </span>
              </div>
            </Link>
            <div className=" flex imgs flex-col relative gap-[10px] justify-center items-center">
              <div className="flex cursor-pointer gap-2 items-center">
                <div className="w-[50px] border-2 border-gray-400 cursor-pointer h-[50px] rounded-full flex justify-center items-center">
                  <img onClick={() => setOpen(!open)} ref={imgRef}
                    src={avatar}
                    className="w-full h-full object-cover rounded-full"
                    alt="avatar"
                  />
                </div>
                <p className="text-white name font-medium text-sm">Stephanie</p>
              </div>
              {open && (
                <div
                  ref={menuRef}
                  className="dashboard dropdown-img hidden lg:block rounded-lg absolute top-[60px] p-[10px] w-[150px] drop-shadow-xl shadow-[0px_4px_10px_#00000026]"
                >
                  <ul>
                    <li
                      onClick={() => setOpen(false)}
                      className="p-1 px-2 hover:bg-[#ffa5004c] flex items-center gap-[10px] font-[590] text-black hover:text-white rounded cursor-pointer"
                    >
                      <MdOutlinePerson size={"1.2rem"} />
                      <Link href={"/person"}>
                        Profile
                      </Link>
                    </li>
                    <li
                      onClick={() => setOpen(false)}
                      className="p-1 px-2 hover:bg-[#ffa5004c] flex items-center gap-[10px] text-black hover:text-white font-[590] rounded cursor-pointer"
                    >
                      <TbLogout2 size={"1.2rem"} />
                      <Link href={"/"}>
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
