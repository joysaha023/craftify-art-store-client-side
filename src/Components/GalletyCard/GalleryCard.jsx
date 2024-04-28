import React from "react";

const GalleryCard = ({item}) => {
  return (
    <div>
      <div className="card w-full bg-base-100 rounded-md shadow-xl ">
        <figure>
          <img
            src={item.image}
            alt={item.item_name}
            className="rounded-md"
          />
        </figure>
        
      </div>
    </div>
  );
};

export default GalleryCard;
