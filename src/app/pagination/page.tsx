"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

function TablePage() {
  const rowsPerPage = 5;

  const [userState, setUserState] = useState<any[]>([]);
  const [pageNumber, setPageNumber] = useState<number[]>([]); // use state for page numbers
  const [currentPage, setCurrentPage] = useState(1);

  const getData = async () => {
    const { data } = await axios("https://jsonplaceholder.typicode.com/users");

    setUserState(data);
  };

  useEffect(() => {
    console.log("currentPage", currentPage);

    getData();
  }, [currentPage]);

  const totalPages = userState.length / rowsPerPage;

  // Create an array up to totalPages without using "_"
  useEffect(() => {
    const pageArray = Array.from(Array(totalPages).keys()).map((i) => i + 1); // create array from 1 to totalPages
    setPageNumber(pageArray);
  }, [totalPages]); // run effect when totalPages changes

  // when currentPage 1, we need data of index 0 to 5. currentPage 2, we need data of index 6 to 10.

  const indexOfLastRow = currentPage * rowsPerPage; // when currentPage 1 indexOfLastRow 5, when currentPage 2, indexOfLastRow 10,
  const indexOfFirstRow = indexOfLastRow - rowsPerPage; // when currentPage 1 indexOfFirstRow 5-5=0, when currentPage 2, indexOfFirstRow 10-5=5,
  const currentRows = userState.slice(indexOfFirstRow, indexOfLastRow);

  return (
    <div>
      <table
        cellPadding="10"
        cellSpacing="0"
        style={{ border: "1px solid white" }}
        className="text-white text-sm text-center"
      >
        <thead className="bg-gray-700 p-2">
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
          {currentRows.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                {user.address.street}, {user.address.suite}, {user.address.city}
                , {user.address.zipcode}
              </td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
              <td>{user.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button 
       className="text-white  px-2 py-2 m-1  mt-2"
      
      onClick={() => setCurrentPage(1)}>
        <MdOutlineKeyboardDoubleArrowLeft />
        
        {/* Move to 1st page */}
        </button>
      {pageNumber.map((number: any, i: any) => {
        return (
          <>
            <button className="text-white  px-2 py-2 m-1" onClick={() => setCurrentPage(number)}>{number}</button>
          </>
        );
      })}
      <button
       className="text-white  px-2 py-2 m-1  mt-2"
        onClick={() => {
          setCurrentPage(Number(pageNumber.length));
        }}
      >
        <MdOutlineKeyboardDoubleArrowRight />
        {/* Move to last page */}
      </button>
    </div>
  );
}

export default TablePage;
