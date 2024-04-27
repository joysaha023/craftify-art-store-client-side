import React from "react";
import Slider from "../../Components/Slider/Slider";
import { Link, useLoaderData } from "react-router-dom";
import CraftitemCard from "../../CraftitemCard/CraftitemCard";
import ArtandCraftCategory from "../ArtandCraftCategory/ArtandCraftCategory";

const Home = () => {
  const itemdata = useLoaderData();

  return (
    <div>
      <Slider></Slider>
      <div className="max-w-6xl mx-auto mt-6">
        <div className="text-center space-y-4">
          <h2 className="text-xl md:text-3xl font-bold">
            Popular Art & Craft Items
          </h2>
          <p className="w-full mx-auto px-3 md:w-[700px]">
            This section where you can find get a popular art and craft and if
            you find your requirement art so you can click our view more button
            and you can get our all craft and art items.
          </p>
        </div>
        <div className="grid grid-cols-1 px-3 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {itemdata.slice(0, 6).map((item) => (
            <CraftitemCard key={item._id} item={item}></CraftitemCard>
          ))}
        </div>
        <div className="text-center my-6">
          <Link to={"/allartandcraft"} className="btn btn-accent">
            View More
          </Link>
        </div>
      </div>
      <ArtandCraftCategory></ArtandCraftCategory>
    </div>
  );
};

export default Home;
