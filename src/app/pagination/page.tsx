import React from "react";
import { PaginationService } from "../service/pagnationService";
import TablePage from "./RenderTable";
import BackLink from "../components/BackLink";

async function page() {
  const user = await PaginationService.getUser();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <BackLink />
        <h1 className="text-4xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
          Users
        </h1>
        <TablePage user={user.data} />
      </div>
    </div>
  );
}

export default page;
