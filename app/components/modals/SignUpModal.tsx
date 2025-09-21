"use client";

import Modal from "./Modal";
import { useState } from "react";
import CustomButton from "../forms/CustomButton";
import useSignUpModal from "@/app/hooks/useSignUpModal";
const SignUpModal = () => {
  const signUpModal = useSignUpModal();

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
        <input
          type="password"
          className="w-full h-[54px] px-4 border border-gray-100 rounded-xl"
          placeholder="Confirm Your Password"
        />
        <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
          The Error Message
        </div>
        <CustomButton label="Login" onClick={signUpModal.close} />
      </form>
    </>
  );

  return (
    <Modal
      isOpen={signUpModal.isOpen}
      close={signUpModal.close}
      label="Sign Up"
      content={content}
    />
  );
};
export default SignUpModal;
