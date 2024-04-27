import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { IoIosArrowDown } from "react-icons/io";
import MyartandcraftSingle from "../../Components/MyartandcraftSingle/MyartandcraftSingle";

const MyartandCraft = () => {
  const { user } = useAuth();
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/mylistitems/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, [user]);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center space-y-4">
        <h2 className="text-xl md:text-3xl font-bold">My Art & Craft List</h2>
      </div>
      <div className="text-center my-6">
        <div className="dropdown btn-accent ">
          <div tabIndex={0} role="button" className="btn m-1">
            Customization <IoIosArrowDown />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Customizable</a>
            </li>
            <li>
              <a>Not Customizable</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((data) => (
          <MyartandcraftSingle key={data._id} data={data}></MyartandcraftSingle>
        ))}
      </div>
    </div>
  );
};

export default MyartandCraft;
