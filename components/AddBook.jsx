import React, { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

const AddBook = () => {
  const router = useRouter();
  const data = router.query;
  console.log(data);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="h-[90vh] w-full  bg-cover flex items-center justify-center flex-col gap-4">
      <h1 className="text-[2rem] text-[#E2703A] theme-font text-center mx-auto">
        {data.edit && "Edit Book"}
        {!data.edit && "Add Book"}
      </h1>
      <form
        autocomplete="off"
        className="flex items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex-col gap-2 flex w-[26rem]">
          <div className="bg-black bg-opacity-30 rounded pr-3">
            <input
              placeholder="book title"
              {...register("title", { required: true, maxLength: 100 })}
              className="w-full autofill-none text-[#82354f] placeholder:text-[#82354f] bg-transparent outline-none p-3 required-cstm-inp"
            />
          </div>
          {errors?.title?.type === "required" && (
            <p className="text-[#82354f]">This field is required</p>
          )}
          <div className="bg-black bg-opacity-30 rounded pr-3">
            <input
              placeholder="book author name"
              {...register("authorName", { required: true, maxLength: 100 })}
              className="w-full autofill-none text-[#82354f] placeholder:text-[#82354f] bg-transparent outline-none p-3 required-cstm-inp"
            />
          </div>
          {errors?.authorName?.type === "required" && (
            <p className="text-[#82354f]">This field is required</p>
          )}

          <div className="bg-black bg-opacity-30 rounded pr-3">
            <input
              placeholder="book  publication house"
              {...register("publicationHouse", {
                required: true,
                maxLength: 100,
              })}
              className="w-full autofill-none text-[#82354f] placeholder:text-[#82354f] bg-transparent outline-none p-3 required-cstm-inp"
            />
          </div>
          {errors?.publicationHouse?.type === "required" && (
            <p className="text-[#82354f]">This field is required</p>
          )}

          <div className="bg-black bg-opacity-30 rounded pr-3">
            <input
              placeholder="book genre"
              {...register("Genre", { required: true, maxLength: 100 })}
              className="w-full autofill-none text-[#82354f] placeholder:text-[#82354f] bg-transparent outline-none p-3 required-cstm-inp"
            />
          </div>
          {errors?.Genre?.type === "required" && (
            <p className="text-[#82354f]">This field is required</p>
          )}
          <div className="bg-black bg-opacity-30 rounded pr-3">
            <input
              placeholder="book publication date"
              {...register("publicationDate", {
                required: true,
                maxLength: 100,
              })}
              className="w-full autofill-none text-[#82354f] placeholder:text-[#82354f] bg-transparent outline-none p-3 required-cstm-inp"
            />
          </div>
          {errors?.publicationDate?.type === "required" && (
            <p className="text-[#82354f]">This field is required</p>
          )}

          <button
            type="submit"
            className="w-full rounded-3xl border py-3 italic bg-white"
          >
            {data.edit && "Edit Book"}
            {!data.edit && "Add Book"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
