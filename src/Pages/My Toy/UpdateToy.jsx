import React from "react";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToy = () => {
    const { register, handleSubmit, reset } = useForm();
    const toyInfo = useLoaderData();
    const { availableQuantity, description,name,photo, price,_id} = toyInfo || {};
    const navigate = useNavigate()
    const handleUpdate = (data) => {
        fetch(`http://localhost:5000/updateToy/${_id}`,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Toy Details updated successful', 
                  })
                  reset();
                  navigate("/myToy")
            }
        })
        .catch(err => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${err.message}`
              })
        })

    };
    return (
        <div className="my-10">
            <form onSubmit={handleSubmit(handleUpdate)}>

                <div className="flex w-full gap-8 my-8">
                    <label className="input-group">
                        <span className="bg-[#ff689887] w-1/4 text-lg">Toy Name</span>
                        <input required defaultValue={name} type="text" placeholder="Enter Toy name" className="border-2 px-3 border-[#ff689887] outline-none w-full" {...register("name")} />
                    </label>
                    <label className="input-group">
                        <span className="bg-[#ff689887] w-1/4 text-lg">Photo URL</span>
                        <input required defaultValue={photo} type="url" placeholder="Enter Toy Photo url" className="border-2 p-3 border-[#ff689887] outline-none w-full" {...register("photo")} />
                    </label> 
                </div>

                <div className="flex w-full gap-8 my-8">
                    <label className="input-group">
                        <span className="bg-[#ff689887] w-1/4 text-lg">Price</span>
                        <input required defaultValue={price} type="text" placeholder="Enter Toy Price" className="border-2 px-3 border-[#ff689887] outline-none w-full" {...register("price")} />
                    </label>
                    <label className="input-group">
                        <span className="bg-[#ff689887] w-1/4 text-lg">Quantity</span>
                        <input required defaultValue={availableQuantity} type="number" placeholder="Enter Toy available Quantity" className="border-2 p-3 border-[#ff689887] outline-none w-full" {...register("availableQuantity")} />
                    </label> 
                </div>
                <textarea defaultValue={description} className="jm_input min-h-[150px]" placeholder="description" {...register("description")}></textarea>
                <input type="submit" className="jm_btn w-1/2 mx-auto"/>
            </form>
        </div>
    );
};

export default UpdateToy;
