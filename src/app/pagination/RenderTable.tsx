"use client";

import React, { useEffect, useState, useMemo } from "react";
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

interface UserProps {
  user: User[];
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  phone: string;
  website: string;
  company: {
    name: string;
  };
}

const TablePage: React.FC<UserProps> = ({ user }) => {
  const rowsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = useMemo(() => Math.ceil(user.length / rowsPerPage), [user]);
  
  const currentRows = useMemo(() => {
    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return user.slice(start, end);
  }, [user, currentPage]);

  const goToFirstPage = () => setCurrentPage(1);
  const goToLastPage = () => setCurrentPage(totalPages);

  if (!user || user.length == 0) {
    return <p className="text-gray-400 text-center">Loading...</p>;
  }

  return (
    <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-4 shadow-xl overflow-x-auto">
      <table
        cellPadding="10"
        cellSpacing="0"
        className="text-gray-200 text-sm text-center w-full border-collapse"
      >
        <thead>
          <tr className="border-b border-white/10 text-gray-400 uppercase text-xs tracking-wide">
            <th className="py-2">ID</th>
            <th className="py-2">Name</th>
            <th className="py-2">Username</th>
            <th className="py-2">Email</th>
            <th className="py-2">Address</th>
            <th className="py-2">Phone</th>
            <th className="py-2">Website</th>
            <th className="py-2">Company</th>
          </tr>
        </thead>
        <tbody>
          {currentRows.map((u) => (
            <tr key={u.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.username}</td>
              <td>{u.email}</td>
              <td>
                {u.address.street}, {u.address.suite}, {u.address.city},{" "}
                {u.address.zipcode}
              </td>
              <td>{u.phone}</td>
              <td>{u.website}</td>
              <td>{u.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex gap-2 mt-4 flex-wrap justify-center">
        <button
          onClick={goToFirstPage}
          className="text-white px-2 py-2 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-400/40 rounded-lg transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          disabled={currentPage === 1}
        >
          <MdOutlineKeyboardDoubleArrowLeft />
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-3 py-1.5 rounded-lg transition-all border ${
              currentPage === page
                ? "bg-purple-500/80 border-purple-400/60 text-white"
                : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-purple-400/40"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={goToLastPage}
          className="text-white px-2 py-2 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-400/40 rounded-lg transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          disabled={currentPage === totalPages}
        >
          <MdOutlineKeyboardDoubleArrowRight />
        </button>
      </div>
    </div>
  );
};

export default TablePage;
