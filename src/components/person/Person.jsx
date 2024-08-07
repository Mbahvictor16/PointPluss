"use client";

import React, { useContext, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";
import ImageUploadModal from "./image-upload/ImageUploadModal";
import Headers from "../../helper/Headers";
import { img_avatar } from "@/public/assets";
import PersonalDetailsModal from "./personal-details/PersonalDetailsModal";
import ContactDetailsModal from "./contact-details/ContactDetailsModal";
import PassDetailsModal from "./password-details/PassDetailsModal";
import AvatarContext from "@/src/context/AvatarContext";
import Dashboard from "../home/dashboard/Dashboard";
import Link from "next/link";
import Image from "next/image";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Person = () => {
  const router = useRouter();
  const { avatar, setAvatar } = useContext(AvatarContext);
  const [isUploadModalOpen, setUploadModalOpen] = useState(false);
  const [isPersonalDetailsModalOpen, setIsPersonalDetailsModalOpen] =
    useState(false);
  const [isContactDetailsModalOpen, setIsContactDetailsModalOpen] =
    useState(false);
  const [isPassDetailsModalOpen, setIsPassDetailsModalOpen] = useState(false);
  const [isDashboardModalOpen, setIsDashboardModalOpen] = useState(false);
  const [open3, setOpen3] = useState(false);

  const toggle3 = () => {
    setOpen3(!open3);
  }

  const handlePersonalDetailsModal = () => {
    setIsPersonalDetailsModalOpen(true); // Always open the Dashboard
  };

  const handlePersonalDetailsModalClose = () => {
    setIsPersonalDetailsModalOpen(false); // Close the Dashboard
  };
  const handleContactDetailsModal = () => {
    setIsContactDetailsModalOpen(true); // Always open the Dashboard
  };

  const handleContactDetailsModalClose = () => {
    setIsContactDetailsModalOpen(false); // Close the Dashboard
  };
  const handlePassDetailsModal = () => {
    setIsPassDetailsModalOpen(true); // Always open the Dashboard
  };

  const handlePassDetailsModalClose = () => {
    setIsPassDetailsModalOpen(false); // Close the Dashboard
  };

  const handleViewAllClick = () => {
    router.push("/recentOrders");
  };

  const handleImageClick = () => {
    setUploadModalOpen(true);
  };

  const handleImageUpload = (file) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      setAvatar(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleToggleModal = () => {
    setIsDashboardModalOpen(true); // Always open the Dashboard
  };

  const handleToggleModalClose2 = () => {
    setIsDashboardModalOpen(false); // Close the Dashboard
  };

  return (
    <div className=" flex flex-col">
      <Headers handleToggleModal={handleToggleModal} />
      <PersonalDetailsModal
        isOpen={isPersonalDetailsModalOpen}
        onClose={handlePersonalDetailsModalClose}
      />
      <ContactDetailsModal
        isOpen={isContactDetailsModalOpen}
        onClose={handleContactDetailsModalClose}
      />
      <PassDetailsModal
        isOpen={isPassDetailsModalOpen}
        onClose={handlePassDetailsModalClose}
      />
      <div className="p-[30px]">
        <Link href="/">
          <FaChevronLeft size={"1.5rem"} />
        </Link>
      </div>
      <div className="flex flex-col lg:px-[50px] justify-center items-center p-[30px] pt-4 border-b-4 border-b-gray-300">
        <div
          onClick={handleImageClick}
          className=" w-[200px] flex rounded-full border-4 border-gray-300 h-[200px] justify-center mb-4 items-center"
          style={{ cursor: "pointer" }}
        >
          <Image
            src={avatar || img_avatar}
            className="w-full h-full rounded-full object-cover border drop-shadow-xl shadow-[0px_4px_10px_#00000026] border-hidden"
            alt="avatar"
          />
        </div>
        <p className="font-[number:var(--h-3-font-weight)] lg:text-4xl text-3xl text-black tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]">
          Welcome,
          <span className="font-[number:var(--h-3-font-weight)] lg:text-4xl text-3xl text-left text-black tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]">
            User.
          </span>
        </p>
      </div>
      <ImageUploadModal
        isOpen={isUploadModalOpen}
        onClose={() => setUploadModalOpen(false)}
        onUpload={handleImageUpload}
      />
      <form className="border-b-2 mb-7 border-b-black">
        <div className="my-5">
          <div className="flex items-center justify-between text-left lg:px-[50px] ml-[30px] mb-7 font-[590] text-lg">
            <p className="w-[50%]">Personal Details</p>
            <p
              onClick={handlePersonalDetailsModal}
              className="text-amber-500 pr-[20px] xl:w-[50%] lg:w-[50%] px-[10px] font-bold cursor-pointer"
            >
              Edit
            </p>
          </div>
          <div className="flex lg:px-[50px] w-full flex-col gap-[10px] text-left border-b-4 border-b-gray-300">
            <div className="font-[590] flex w-full justify-between">
              <p className="ml-[30px] w-[50%]">Name</p>
              <span className="pr-[20px] xl:w-[50%] lg:w-[50%] px-[10px]">
                User
              </span>
            </div>
            <div className="font-[590] flex w-full items-center justify-between">
              <p className="ml-[30px] w-[50%]">Email Address</p>
              <span className="pr-[20px] xl:w-[50%] lg:w-[50%] px-[10px]">
                User@gmail.com
              </span>
            </div>
            <div className="font-[590] flex mb-7 items-center w-full justify-between">
              <p className="ml-[30px] w-[50%]">Member Since</p>
              <span className="pr-[20px] xl:w-[50%] lg:w-[50%] px-[10px]">
                2nd, May, 2020
              </span>
            </div>
          </div>
          <div className="text-left lg:px-[50px] border-b-4 border-b-gray-300">
            <div className="flex items-center my-7 justify-between text-lg font-[590] ml-[30px]">
              <p className="w-[50%]">Other Details</p>
              <p
                className="text-amber-500 pr-[20px] xl:w-[50%] lg:w-[50%] px-[10px] font-bold cursor-pointer"
                onClick={handlePassDetailsModal}
              >
                Edit
              </p>
            </div>
            <div className="flex w-full mb-7 items-center justify-between">
              <p className="font-[590] ml-[30px] w-[50%]">Password</p>
              <div className="flex justify-start pr-[20px] xl:w-[50%] lg:w-[50%]">
                <div className="flex justify-between">
                  <input
                    type={open3 === false ? "password" : "text"}
                    readOnly
                    className="xl:text-left lg:text-left w-full text-right px-[10px] focus:outline-none focus:shadow-outline pr-[20px]"
                  />
                  <div className="flex justify-start items-center p-[4px] text-xl">
                    {open3 === false ? (
                      <FiEyeOff onClick={toggle3} />
                    ) : (
                      <FiEye onClick={toggle3} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between text-left lg:px-[50px] ml-[30px] my-7 font-[590] text-lg">
            <p className="w-[50%]">Contact Details</p>
            <p
              className="text-amber-500 pr-[20px] xl:w-[50%] lg:w-[50%] px-[10px] font-bold cursor-pointer"
              onClick={handleContactDetailsModal}
            >
              Edit
            </p>
          </div>
          <div className="flex w-full flex-col gap-[10px] lg:px-[50px] text-left">
            <div className="font-[590] flex w-full items-center justify-between">
              <p className="ml-[30px] w-[50%]">Phone Number</p>
              <span className="pr-[20px] xl:w-[50%] lg:w-[50%] px-[10px]">
                070476782937
              </span>
            </div>
          </div>
        </div>
      </form>

      <div>
        <div className="flex lg:px-[50px] justify-between mx-[30px]">
          <p className="text-left w-[50%] font-[590] text-lg">
            Review Orders
          </p>
          <p
            onClick={handleViewAllClick}
            className="text-left font-[590] pr-[20px] xl:w-[50%] lg:w-[50%] text-lg cursor-pointer"
          >
            View All
          </p>
        </div>
      </div>
      <Dashboard
        isOpen={isDashboardModalOpen}
        onClose={handleToggleModalClose2}
        handleToggleModal={handleToggleModal}
      />
    </div>
  );
};

export default Person;
