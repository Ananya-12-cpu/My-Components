import Image from "next/image";
import SideNav from "./components/SideNav";
import FilterPage from "./filter/page";

export default function Home() {
  return (
    <>
     <FilterPage/>
    {/* <p  className="text-white">Filter component</p> */}
    </>
  );
}
