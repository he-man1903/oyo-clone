"use client";

import Image from "next/image";

const Header4 = () => {
  return (
    <div className="flex items-center justify-between px-5 border-2 border-gray-300 rounded-lg my-14">
      <div className="flex items-center">
        <Image
          src={"/fire.jpg"}
          alt="fire"
          width={200}
          height={200}
          className="w-32 h-32 mr-5 rounded-full "
        />
        <div className="text-xl ">
          <p className="font-bold ">Get access to exclusive deals</p>
          <p>Only the best deals reach your inbox</p>
        </div>
      </div>
        <div className="flex">
            <input type="email" className="h-16 px-6 py-3 mr-5 border border-gray-300 rounded-lg outline-none w-80" placeholder="e.g. john@gmail.com"/>
            <button type="submit" className="w-48 text-xl text-white bg-red-500 rounded-lg cursor-pointer  h-14">Notify</button>
        </div>
    </div>
  );
};

export default Header4;