import React from "react";
import AllartandcraftTable from "../../Components/AllartandcraftTable/AllartandcraftTable";
import { useLoaderData } from "react-router-dom";

const AllartandCraft = () => {
    const allItems = useLoaderData();
    console.log(allItems)
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center space-y-4">
        <h2 className="text-xl md:text-3xl font-bold">All Art & Crafts</h2>
      </div>
      
    </div>
  );
};

export default AllartandCraft;
