"use client";
import Image from "next/image";
import Block from "./Block";
import Link from "next/link";


const Header1 = () => {

  
  return (
    <div className="flex items-center justify-between h-24 px-10 border-b-2 border-gray-300">
      <Image
        src={"/logo.png"}
        alt="logo"
        width={200}
        height={200}
        className=" w-28 h-28"
      />
      <div className="flex h-full ">
        <Block title={"Become a member"} para={"Additional 10% off on stays."} />
        <Block
          title={"OYO for business"}
          para={"Trusted by 5000 corporates."}
        />
        <Block title={"List your property"} para={"Start earning in 30 min."} />
        <Block title={"987654321"} para={"Call us to book now."} />
        <div className="flex items-center px-3 ">
          <Image
            src={"/demo.svg"}
            alt="demo"
            width={200}
            height={200}
            className="w-10 h-10 mr-5 rounded-full "
          />
          
           (
            <Link href={"/login"} className="font-bold ">
              Login / Signup
            </Link>
          )
        </div>
      </div>
    </div>
  );
};

export default Header1;