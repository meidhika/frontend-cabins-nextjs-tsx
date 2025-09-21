"use client";

import Modal from "./Modal";
import { useState } from "react";
import { useRouter } from "next/navigation";
import CustomButton from "../forms/CustomButton";
import useSignUpModal from "@/app/hooks/useSignUpModal";
import apiServices from "@/app/services/apiServices";
const SignUpModal = () => {
  // Variables
  const router = useRouter();
  const signUpModal = useSignUpModal();
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [errors, setErrors] = useState<string[]>([]);

  // Functions
  const submitSignUp = async () => {
    const formData = {
      email: email,
      password1: password1,
      password2: password2,
    };
    const response = await apiServices.post("/api/auth/register/", formData);
    if (response.success) {
      // handle login success
      signUpModal.close();
      router.push("/");
    } else {
      const tmpErrors: string[] = Object.values(response).map((error: any) => {
        return error;
      });
      setErrors(tmpErrors);
    }
  };

  const content = (
    <>
      <form action={submitSignUp} className="space-y-4">
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="w-full h-[54px] px-4 border border-gray-100 rounded-xl"
          placeholder="Your Email Address"
        />
        <input
          onChange={(e) => setPassword1(e.target.value)}
          type="password"
          className="w-full h-[54px] px-4 border border-gray-100 rounded-xl"
          placeholder="Your Password"
        />
        <input
          onChange={(e) => setPassword2(e.target.value)}
          type="password"
          className="w-full h-[54px] px-4 border border-gray-100 rounded-xl"
          placeholder="Confirm Your Password"
        />
        {errors.map((error, index) => {
          return (
            <div
              key={`error_${index}`}
              className="p-5 bg-airbnb text-white rounded-xl opacity-80"
            >
              {error}
            </div>
          );
        })}

        <CustomButton label="Login" onClick={submitSignUp} />
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
