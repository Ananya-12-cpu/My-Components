"use client";

import Link from "next/link";
import React from "react";

function SideNav() {
  return (
    <div className="grid grid-cols-1 gap-1 border-r-2 border-blue-300 p-2">
     <Link href="/filter">
     <div className="hover:bg-blue-300 hover:rounded-lg text-white p-1">Filter</div>
     </Link> 
     <Link href="/pagination">
     <div className="hover:bg-blue-300 hover:rounded-lg text-white p-1">Pagination</div>
     </Link> 
     <Link href="/calculator">

      <div className="hover:bg-blue-300 hover:rounded-lg text-white p-1">Calculator</div>
      </Link>
     <Link href="/slider">

      <div className="hover:bg-blue-300 hover:rounded-lg text-white p-1">Slider</div>
      </Link>
     <Link href="/todo">

      <div className="hover:bg-blue-300 hover:rounded-lg text-white p-1">To Do Application</div>
      </Link>
     <Link href="/qr">

      <div className="hover:bg-blue-300 hover:rounded-lg text-white p-1">Qr Reader</div>
     </Link>
     
     <Link href="/stopwatch">

<div className="hover:bg-blue-300 hover:rounded-lg text-white p-1">Stop watch</div>
</Link>
    </div>
  );
}

export default SideNav;
