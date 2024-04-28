import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DetailsPage = () => {
    const {id} = useParams();
    const [Items, setItems] = useState({});
  

    useEffect(() => {
        fetch(`http://localhost:5000/singleItems/${id}`)
        .then(res => res.json())
        .then(data => {
            setItems(data)
            
        })
    },[id])


    return (
        <div className='max-w-6xl mx-auto '>
            <h2>{Items.item_name}</h2>
            <img className='p-10' src={Items.image} alt="" />
        </div>
    );
};

export default DetailsPage;