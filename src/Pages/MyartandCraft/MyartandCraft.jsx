import React from "react";
import { useLoaderData } from "react-router-dom";

const MyartandCraft = () => {
  

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const category = form.category.value;
        const desc = form.description.value;
        const alldata = {image, category, desc}
        console.log(alldata)


        fetch('http://localhost:5000/craftcategory', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(alldata)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }


  return (
    <div>
      <h2 className="bg-blue-500">My art and craft</h2>
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">image</span>
          </label>
          <input
            type="text"
            name="image"
            placeholder="image"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">category</span>
          </label>
          <input
            type="text"
            name="category"
            placeholder="image"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">description</span>
          </label>
          <input
            type="text"
            name="description"
            placeholder="image"
            className="input input-bordered"
            required
          />
        </div>
       
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  );
};

export default MyartandCraft;
