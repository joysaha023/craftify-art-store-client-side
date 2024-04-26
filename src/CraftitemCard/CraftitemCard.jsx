import React from "react";

const CraftitemCard = ({ item }) => {
    const {image, item_name, subcategory_Name, description, price, rating, customization, processing_time, stock_status, user_email, user_name} = item;
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure  className="h-[236]">
          <img
           
            src={image}
            alt={item_name}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{item_name}</h2>
          <p>Stock: {stock_status}</p>
          <p>Price: ${price}</p>
          <p>Rating: {rating}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CraftitemCard;
