"use client";

import Link from "next/link";
import { useState } from "react";

const Header3 = () => {
  const [city, setCity] = useState(" ");

  return (
    <div className=" bg-gradient-to-t from-gray-600 to-gray-400 h-60">
      <div className="p-5 ">
        <h2 className="text-4xl font-bold text-center text-white ">
          Over 157,000 hotels and homes across 35 countries
        </h2>
        <div className="flex justify-center mx-5 my-5">
          <input
            type="text"
            placeholder="Search..."
            className="w-6/12 h-16 px-3 text-lg border-r-2 border-gray-400 outline-none "
           
          />
           <input
            type="date"
            placeholder="Search..."
            className="h-16 col-span-1 px-3 text-lg border-r-2 border-gray-400 outline-none "
          />
          <input
            type="date"
            placeholder="Search..."
            className="h-16 col-span-1 px-3 text-lg outline-none "
          /> 

          <button
            type="submit"
            className="h-16 px-3 py-2 text-xl text-white bg-green-400 w-72 hover:cursor-pointer hover:bg-green-600"
          >
            <Link href={`/hotels?city=${city}`}>Search</Link>
          </button>
        </div>
        <div className="flex mx-5 font-bold my-15">
          <button
            type="submit"
            className="h-16 px-3 py-2 mr-5 text-white hover:cursor-pointer"
          >
            Continue your search
          </button>
          <button
            type="submit"
            className="h-16 px-3 py-2 mr-5 text-white border-2 border-white hover:cursor-pointer hover:bg-gray-500 rounded-xl"
          >
            Homestay in India hotels
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header3;