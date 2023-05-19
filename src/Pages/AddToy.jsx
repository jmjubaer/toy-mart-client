import React, { useRef } from "react";
import { useForm } from "react-hook-form";

const AddToy = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data)
        fetch('http://localhost:5000/addToy',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    };
    return (
        <div className="my-10">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex w-full gap-8 my-8">
                    <input type="text" placeholder="Enter Toy Name" className="jm_input" {...register("name")} />
                    <input type="url" placeholder="Enter Toy Photo Url" className="jm_input" {...register("photo")} />
                </div>
                <div className="flex w-full gap-8 my-8">
                    <input type="text" placeholder="Seller Name" className="jm_input" {...register("sellerName")} />
                    <input type="email" placeholder="Seller Email" className="jm_input" {...register("sellerEmail")} />
                </div>

                <div className="flex w-full gap-8 my-8">
                    <input type="number" placeholder="Enter Toy Price" className="jm_input" {...register("price")} />
                    <input type="number" placeholder="Available quantity" className="jm_input" {...register("availableQuantity")} />
                    <input type="number" placeholder="Toy Rating.." className="jm_input" {...register("rating")} />
                    <select className="w-full jm_input" {...register("category")}>
                        <option value="Baby doll">Baby doll</option>
                        <option value="Barbie doll">Barbie doll</option>
                        <option value="American girl doll">American girl doll</option>
                    </select>
                </div>
                <textarea className="jm_input min-h-[150px]" placeholder="description" {...register("description")}></textarea>
                <input type="submit" className="jm_btn w-1/2 mx-auto"/>
            </form>
        </div>
    );
};

export default AddToy;
