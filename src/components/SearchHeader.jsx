import { RxGear } from "react-icons/rx";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Searchbox from "./Searchbox";
import { TbGridDots } from "react-icons/tb";
import SeachHeaderOptions from "./SeachHeaderOptions";

export default function SearchHeader() {
  return (
    <header className={`sticky top-0`}>
      <div className="flex w-full p-6 items-center justify-between">
        <Link href={"/"}>
          <Image
            src={"/logo.png"}
            width={120}
            height={40}
            priority
            alt="photo"
          />
        </Link>
        <div className="flex-1">
          <Searchbox />
        </div>
        <div className="hidden md:inline-flex space-x-2">
          <RxGear
            className="bg-transparent hover:bg-gray-200 p-2 text-4xl
          rounded-full cursor-pointer"
          />
          <TbGridDots className="bg-transparent hover:bg-gray-200 p-2 text-4xl rounded-full cursor-pointer" />
        </div>
        <button className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-shadow ml-2">
          Sign in
        </button>
      </div>
      <SeachHeaderOptions />
    </header>
  );
}
