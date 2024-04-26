import React from "react";
import Slider from "../../Components/Slider/Slider";
import { Link, useLoaderData } from "react-router-dom";
import CraftitemCard from "../../CraftitemCard/CraftitemCard";

const Home = () => {
  const itemdata = useLoaderData();
  

  return (
    <div>
      <Slider></Slider>
      {/* <CraftItemSec></CraftItemSec> */}
      <div className="max-w-6xl mx-auto mt-6">
        <div className="text-center space-y-4">
          <h2 className="text-xl md:text-3xl font-bold">Popular Craft Items</h2>
          <p className="w-full mx-auto px-3 md:w-[700px]">
            This form is use only added your art and craft item where you can
            show your creativity item and you make you can add our website and
            show it's a public.
          </p>
        </div>
        <div className="grid grid-cols-1 px-3 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {itemdata.slice(0, 6).map((item) => (
            <CraftitemCard key={item._id} item={item}></CraftitemCard>
          ))}
        </div>
        <div className="text-center my-6">
            <Link to={'/allartandcraft'} className="btn btn-accent">View More</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
