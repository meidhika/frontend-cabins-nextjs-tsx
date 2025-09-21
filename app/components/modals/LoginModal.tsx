"use client";

import Modal from "./Modal";
import { useState } from "react";
import useLoginModal from "@/app/hooks/useLoginModal";
import CustomButton from "../forms/CustomButton";
const LoginModal = () => {
  const loginModal = useLoginModal();

  const content = (
    <>
      <form className="space-y-4">
        <input
          type="email"
          className="w-full h-[54px] px-4 border border-gray-100 rounded-xl"
          placeholder="Your Email Address"
        />
        <input
          type="password"
          className="w-full h-[54px] px-4 border border-gray-100 rounded-xl"
          placeholder="Your Password"
        />
        <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
          The Error Message
        </div>
        <CustomButton label="Login" onClick={loginModal.close} />
      </form>
    </>
  );

  return (
    <Modal
      isOpen={loginModal.isOpen}
      close={loginModal.close}
      label="Login"
      content={content}
    />
  );
};
export default LoginModal;
