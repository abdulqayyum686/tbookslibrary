import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { Array } from "./../utils/tabelsArrays";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import Link from "next/link";
import Header from "@/components/Header";
import { useQuery, useMutation } from "react-query";
import {
  fetchData,
  postData,
  updateData,
  deleteData,
} from "@/utils/apifunctions";
import { useUpdateSuperheroData, useDeleteSuperheroData } from "@/utils/hooks";

export default function Home() {
  const { isLoading: isBooksLoading, data: allBooks } = useQuery(
    "get-user-books",
    async () => {
      return fetchData(
        "/api/user/books/63d641b75e09e252d0d44346"
      );
    }
  );
  const { mutate: changeBookStatus } = useUpdateSuperheroData();
  const { mutate: deleteBookData } = useDeleteSuperheroData();

  const onChangeBookStatus = (data, id) => {
    changeBookStatus({
      type: data,
      _id: id,
    });
  };

  const deleteBook = (id) => {
    deleteBookData({
      _id: id,
    });
  };

  if (isBooksLoading) {
    return <h2>Loaging....</h2>;
  }
  return (
    <>
      <Header />
      <div className="min-h-full">
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Dashboard
            </h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              <div className="container mx-auto px-4 sm:px-8">
                <div className="py-8">
                  <div>
                    <h2 className="text-2xl font-semibold leading-tight">
                      Books
                    </h2>
                  </div>
                  <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                      <table className="min-w-full leading-normal">
                        <thead>
                          <tr>
                            {Array?.map(({ title }, index) => {
                              return (
                                <th
                                  key={index}
                                  className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                >
                                  {title}
                                </th>
                              );
                            })}
                          </tr>
                        </thead>
                        <tbody>
                          {allBooks?.data?.result?.map((item, index) => {
                            return (
                              <tr key={index}>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm cursor-pointer">
                                  <p className="text-gray-900 whitespace-no-wrap">
                                    {item?.title}
                                  </p>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm cursor-pointer">
                                  <p className="text-gray-900 whitespace-no-wrap">
                                    {item?.authorName}
                                  </p>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm cursor-pointer">
                                  <p className="text-gray-900 whitespace-no-wrap">
                                    {item?.publicationHouse}
                                  </p>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm cursor-pointer">
                                  <p className="text-gray-900 whitespace-no-wrap">
                                    {item?.createdAt}
                                  </p>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm cursor-pointer">
                                  <p className="text-gray-900 whitespace-no-wrap">
                                    {new Date(item?.createdAt).getFullYear()}
                                  </p>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm cursor-pointer">
                                  <p className="text-gray-900 whitespace-no-wrap">
                                    {item?.Genre}
                                  </p>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm cursor-pointer">
                                  <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                    <span className="relative">
                                      {item?.type}
                                    </span>
                                  </span>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm cursor-pointer">
                                  <select
                                    onChange={(e) =>
                                      onChangeBookStatus(
                                        e.target.value,
                                        item._id
                                      )
                                    }
                                  >
                                    <option value="ptr">Plan to Read</option>
                                    <option value="r">Reading</option>
                                    <option value="c">Completed</option>
                                  </select>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm cursor-pointer">
                                  <Link
                                    href={{
                                      pathname: "/addbook",
                                      query: {
                                        edit: true,
                                        book: JSON.stringify(item),
                                      },
                                    }}
                                  >
                                    <FiEdit className="text-green-500" />
                                  </Link>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm cursor-pointer ">
                                  <RiDeleteBinLine
                                    className="text-red-500"
                                    onClick={() => deleteBook(item._id)}
                                  />
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
