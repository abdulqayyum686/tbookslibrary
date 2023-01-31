import React from "react";
import Link from "next/link";
import { useQuery, useMutation } from "react-query";
import { fetchData } from "@/utils/apifunctions";
import jwt_decode from "jwt-decode";
import Cookies from "universal-cookie";
import { headersArray } from "@/utils/headerArray";
const cookies = new Cookies();
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  let token = cookies.get("usertoken");
  if (token) {
    var decoded = jwt_decode(token);
  }
  const { isLoading, data: currentUser } = useQuery(
    "get-curentuser-user",
    async () => {
      return fetchData(
        `/api/user/get-current-user/${decoded?._id}`
      );
    }
  );
  console.log("currentuser===", currentUser);
  const moveNext = (url, title) => {
    if (title === "Logout") {
      cookies.remove("usertoken");
    }
    router.push(url);
  };
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-8 w-8"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {headersArray(currentUser?.data?.result?.userName)?.map(
                  ({ title, url }, index) => {
                    return (
                      <div
                        key={index}
                        className=" text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer hover:bg-gray-700 hover:text-white"
                        onClick={() => moveNext(url, title)}
                      >
                        {title}
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <div className="relative ml-3">
                <div className="text-white">
                  {currentUser?.data?.result?.userName}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
          {headersArray(currentUser?.data?.result?.userName)?.map(
            ({ title, url }, index) => {
              return (
                <div
                  key={index}
                  className=" text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer hover:bg-gray-700 hover:text-white"
                  onClick={() => moveNext(url, title)}
                >
                  {title}
                </div>
              );
            }
          )}
        </div>
        <div className="border-t border-gray-700 pt-4 pb-3">
          <div className="flex items-center px-5">
            <div className="ml-3">
              <div className="text-sm font-medium leading-none text-gray-400">
                {currentUser?.data?.result?.userName}
              </div>
            </div>
          </div>
          <div className="mt-3 space-y-1 px-2"></div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
