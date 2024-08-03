import Footr from "@/components/Footr";
import Header1 from "@/components/Header1";
import Header2 from "@/components/Header2";
import Header3 from "@/components/Header3";
import Header4 from "@/components/Header4";
import Head from "next/head";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      <Head>
        <title> OYO: India's best online Hotel booking site for stay</title>
        <link rel='icon' href="/icon.png"></link>
      </Head>
      <Header1/>
      <Header2/>
      <Header3/>
      <div className="mx-20">
      <div className=" my-14">
       <img
        src="/banner1.avif"
        alt="banner1"
        width={200}
        height={400}
        className="w-full h-80"
       />
      </div>
      <div className="mb-14">
      <img
        src="/banner2.avif"
        alt="banner2"
        width={200}
        height={200}
        className="w-full h-40"
       />
        </div>
       <Header4/>
    </div>
     <Footr/>
    </div>
  
  );
};

export default Home;
