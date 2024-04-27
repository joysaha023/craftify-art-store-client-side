import React  from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useAuth from "../../Hooks/useAuth";

const UpdateProfile = () => {
  const { user, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const {name, image} = data;
    updateUserProfile(name, image)
        .then(() => {
            toast.success("Update Changes")
            navigate('/profile')
        })
  };

  return (
    <div className="max-w-6xl mx-auto">
      
      <div className="">
        <div className="flex flex-col items-center ">
          <img
            className="rounded-full"
            src={user?.photoURL || "https://i.ibb.co/6JyZF0K/user.png"}
            alt="pic"
          />
          <h2 className="my-5 font-medium text-4xl">{user?.displayName}</h2>
          <p className="text-lg mb-2">{user?.email}</p>
        </div>
        <div className="flex flex-col items-center">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body lg:w-[30%] border">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                defaultValue={user?.displayName}
                className="input input-bordered rounded-none"
                {...register("name", { required: true })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                className="input input-bordered rounded-none"
                {...register("image")}
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#0077be] text-white hover:text-black rounded-none ">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;