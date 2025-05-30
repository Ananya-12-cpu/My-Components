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
    return <p className="text-white">Loading...</p>;
  }

  return (
    <div>
      <table
        cellPadding="10"
        cellSpacing="0"
        style={{ border: "1px solid white" }}
        className="text-white text-sm text-center w-full"
      >
        <thead className="bg-gray-700">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {currentRows.map((u) => (
            <tr key={u.id}>
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

      <div className="flex gap-2 mt-4 flex-wrap">
        <button
          onClick={goToFirstPage}
          className="text-white px-2 py-2 bg-gray-700 rounded"
          disabled={currentPage === 1}
        >
          <MdOutlineKeyboardDoubleArrowLeft />
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-3 py-1 rounded ${
              currentPage === page ? "bg-blue-500 text-white" : "bg-gray-700 text-white"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={goToLastPage}
          className="text-white px-2 py-2 bg-gray-700 rounded"
          disabled={currentPage === totalPages}
        >
          <MdOutlineKeyboardDoubleArrowRight />
        </button>
      </div>
    </div>
  );
};

export default TablePage;
