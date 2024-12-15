"use client";

import React from "react";
import SideNav from "./components/SideNav";
import Image from "next/image";

function LayoutProvider({ children }: any) {
  return (
    <>
      <div className="grid grid-cols-1 gap-1 border-b-2 border-blue-300 p-2">
        <div>
          <Image src={"/connection.gif"} alt="" width={80} height={50} />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 mx-5">
        <div className="col-span-3">
          <SideNav />
        </div>

        <div className="col-span-9">{children}</div>
      </div>
    </>
  );
}

export default LayoutProvider;
