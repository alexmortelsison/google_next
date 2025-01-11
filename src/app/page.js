import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <div className="flex flex-col items-center mt-24">
        <Image
          src={"https://www.logo.wine/a/logo/Google/Google-Logo.wine.svg"}
          width={700}
          height={100}
          priority
        />
        <HomeSearch />
      </div>
    </>
  );
}
