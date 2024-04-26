import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllartandCraft = () => {
  const allItems = useLoaderData();

  return (
    <div className="max-w-6xl mx-auto my-4">
      <div className="text-center space-y-4">
        <h2 className="text-xl md:text-3xl font-bold">All Art & Crafts</h2>
      </div>
      <div className="overflow-x-auto mt-6">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Stock</th>
              <th>Processing Time</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {allItems.map((item, idx) => (
              <tr key={item._id}>
                <th>{idx + 1}</th>
                <td>{item.item_name}</td>
                <td>${item.price}</td>
                <td>{item.rating}</td>
                <td>{item.stock_status}</td>
                <td>{item.processing_time}</td>
                <td>
                  <Link to={`/details/${item._id}`} className="btn btn-sm btn-accent text-white rounded-full">
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllartandCraft;
