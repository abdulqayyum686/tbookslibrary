import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { useQuery, useMutation } from "react-query";
import axios from "axios";
import { fetchData, postData, updateData } from "@/utils/apifunctions";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const UserLogin = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { mutate, isLoading } = useMutation(
    (data) => {
      return postData("http://localhost:3000/api/user/login", data);
    },
    {
      onSuccess: (data) => {
        console.log(data);
        cookies.set("usertoken", data.data.token);
        alert("success");
        router.push("/");
      },
      onError: () => {
        alert("there was an error");
      },
    }
  );

  const onSubmit = (data) => {
    mutate(data);
  };

  if (isLoading) {
    return <h2>Loaging....</h2>;
  }

  return (
    <>
      <div className="h-[90vh] w-full flex items-center justify-center flex-col gap-4">
        <h1 className="text-[2rem] text-[#E2703A] theme-font text-center mx-auto">
          User Login
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
              login
            </button>
            <span onClick={() => router.push("/signup")} className="cursor-pointer text-blue-700">
              Want to Register?
            </span>
          </div>
        </form>
      </div>
      <ToastContainer position="top-right" />
    </>
  );
};

export default UserLogin;
