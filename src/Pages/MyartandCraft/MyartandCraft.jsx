import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";


const MyartandCraft = () => {
  const {user} = useAuth();
  const [items, setItems] = useState([]);
  
    useEffect(() => {
      fetch(`http://localhost:5000/mylistitems/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data)
      })
    },[user])
    console.log(items)

  return (
    <div className="max-w-6xl mx-auto">
      {
       items.map(data => <p key={data._id}>{data.item_name}</p>)
      }
     
    </div>
  );
};

export default MyartandCraft;
