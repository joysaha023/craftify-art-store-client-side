import React, { useEffect, useState } from "react";


const ArtandCraftCategory = () => {
const [allData, setAllData] = useState(null);
console.log(allData)


useEffect(() => {
    fetch('http://localhost:5000/craftcategory')
    .then(res => res.json())
    .then(data => {
        setAllData(data);
    })
    .catch(error => {
        console.error('error fetching data', error)
    })
})


  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center space-y-4">
        <h2 className="text-xl md:text-3xl font-bold">
          Art & Craft Categories
        </h2>
        <p className="w-full mx-auto px-3 md:w-[700px]">
          This section all card is art and craft category where you can select and chose your category wise items. this section help to a find this art craft items is shortly.
        </p>
      </div>
      <div>
        {
            
        }
      </div>
    </div>
  );
};

export default ArtandCraftCategory;
