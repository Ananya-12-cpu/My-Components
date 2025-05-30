import axios from "axios";

async function getUser(){
const data= await axios.get("https://jsonplaceholder.typicode.com/users");
return data
}

export const PaginationService = { 
  getUser,
  
};
