import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { signupUser } from "../utils/hooks";

const UserSignUp = () => {
  const router = useRouter();
  const { mutate: UserSignUp } = signupUser();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    UserSignUp(data);
    router.push("/login")
  };

  return (
    <>
      <div className="h-[90vh] w-full  bg-cover flex items-center justify-center flex-col gap-4">
        <h1 className="text-[2rem] text-[#E2703A] theme-font text-center mx-auto">
          User Signup
        </h1>
        <form
          autocomplete="off"
          className="flex items-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex-col gap-2 flex w-[26rem]">
            <div className="bg-black bg-opacity-30 rounded pr-3">
              <input
                placeholder="user email"
                {...register("email", { required: true, maxLength: 100 })}
                className="w-full autofill-none text-[#82354f] placeholder:text-[#82354f] bg-transparent outline-none p-3 required-cstm-inp"
              />
            </div>
            {errors?.email?.type === "required" && (
              <p className="text-[#82354f]">This field is required</p>
            )}
            <div className="bg-black bg-opacity-30 rounded pr-3">
              <input
                placeholder="user name"
                {...register("userName", { required: true, maxLength: 100 })}
                className="w-full autofill-none text-[#82354f] placeholder:text-[#82354f] bg-transparent outline-none p-3 required-cstm-inp"
              />
            </div>
            {errors?.userName?.type === "required" && (
              <p className="text-[#82354f]">This field is required</p>
            )}
            <div className="bg-black bg-opacity-30 rounded pr-3">
              <input
                placeholder="user password"
                {...register("password", { required: true, maxLength: 100 })}
                className="w-full autofill-none text-[#82354f] placeholder:text-[#82354f] bg-transparent outline-none p-3 required-cstm-inp"
              />
            </div>
            {errors?.password?.type === "required" && (
              <p className="text-[#82354f]">This field is required</p>
            )}

            <button
              type="submit"
              className="w-full rounded-3xl border py-3 italic bg-white"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
      {/* <ToastContainer position="top-right" /> */}
    </>
  );
};

export default UserSignUp;
