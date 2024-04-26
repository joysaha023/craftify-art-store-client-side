import React from "react";
import { useLoaderData } from "react-router-dom";
import CraftitemCard from "../../CraftitemCard/CraftitemCard";

const CraftItemSec = () => {
const itemsData = useLoaderData();
console.log(itemsData)


  return (
    <div>
      <div className="max-w-6xl mx-auto mt-6">
        <div className="text-center space-y-4">
          <h2 className="text-xl md:text-3xl font-bold">
            Popular Craft Items
          </h2>
          <p className="w-full mx-auto px-3 md:w-[700px]">
            This form is use only added your art and craft item where you can
            show your creativity item and you make you can add our website and
            show it's a public.
          </p>
        </div>
        <div>
            {/* {
                itemsData.map(item=> <CraftitemCard key={item._id} item={item}></CraftitemCard> )
            } */}
        </div>
      </div>
    </div>
  );
};

export default CraftItemSec;
