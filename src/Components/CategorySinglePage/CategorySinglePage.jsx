import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CategorySinglePage = () => {
const {id} = useParams();
const [category, setCategory] = useState([]);
console.log(category)

useEffect(() => {
    fetch(`http://localhost:5000/categoryItems/${id}`)
    .then(res => res.json())
    .then(data => {
        setCategory(data)
        
    })
},[id])

    return (
        <div className='max-w-6xl mx-auto'>
            <h2>Category single page </h2>
        </div>
    );
};

export default CategorySinglePage;