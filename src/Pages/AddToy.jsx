import React, { useContext, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { AuthContest } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const AddToy = () => {
    const { user } = useContext(AuthContest);
    const { register, handleSubmit, reset } = useForm();
    useEffect(()=> {
        document.title = "Add Toy | Jm Toy Mart" 
    },[])
    const onSubmit = (data) => {
        data.price = parseFloat(data.price);
        fetch("https://toy-mart-server-rho.vercel.app/addToy", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data?.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "Success",
                        text: "Toy added successful",
                    });
                    reset();
                }
            });
    };
    return (
        <div className="my-10">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex w-full gap-8 my-8">
                    <input
                        required
                        type="text"
                        placeholder="Enter Toy Name"
                        className="jm_input"
                        {...register("name")}
                    />
                    <input
                        required
                        type="url"
                        placeholder="Enter Toy Photo Url"
                        className="jm_input"
                        {...register("photo")}
                    />
                </div>
                <div className="flex w-full gap-8 my-8">
                    <input
                        readOnly
                        defaultValue={user?.displayName}
                        type="text"
                        placeholder="Seller Name"
                        className="jm_input"
                        {...register("sellerName")}
                    />
                    <input
                        readOnly
                        type="email"
                        defaultValue={user?.email}
                        placeholder="Seller Email"
                        className="jm_input"
                        {...register("sellerEmail")}
                    />
                </div>

                <div className="flex w-full gap-8 my-8">
                    <input
                        required
                        type="text"
                        placeholder="Enter Toy Price"
                        className="jm_input"
                        {...register("price")}
                    />
                    <input
                        required
                        type="number"
                        placeholder="Available quantity"
                        className="jm_input"
                        {...register("availableQuantity")}
                    />
                    <input
                        required
                        type="text"
                        placeholder="Toy Rating.."
                        className="jm_input"
                        {...register("rating")}
                    />
                    <select
                        className="w-full jm_input"
                        {...register("category")}
                    >
                        <option value="Baby doll">Baby doll</option>
                        <option value="Barbie Doll">Barbie doll</option>
                        <option value="American Girl">
                            American girl doll
                        </option>
                    </select>
                </div>
                <textarea
                    className="jm_input min-h-[150px]"
                    placeholder="description"
                    {...register("description")}
                ></textarea>
                <input type="submit" className="jm_btn w-1/2 mx-auto" />
            </form>
        </div>
    );
};

export default AddToy;
