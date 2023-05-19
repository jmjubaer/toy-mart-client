import React from "react";
import { useLoaderData } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const SingleToy = () => {
    const toyDetails = useLoaderData();
    console.log(toyDetails);
    const {
        availableQuantity,
        category,
        description,
        name,
        photo,
        price,
        rating,
        sellerEmail,
        sellerName,
    } = toyDetails;
    return (
        <div className="card w-1/2 bg-base-100 shadow-xl mx-auto my-10 border-2 border-[#ff6899]">
            <figure className="px-10 pt-10">
                <img src={photo} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body   ">
                <h2 className="card-title">{name}</h2>
                <p className="w-fit text-lg mt-2"><span className="text-lg font-bold">Seller Name</span>: {sellerName}</p>
                <p className="w-fit text-lg mt-2"><span className="text-lg font-bold">Seller Email</span>: {sellerEmail}</p>
                <div className="flex flex-wrap justify-between text-lg mt-2">
                    <p className="w-fit"><span className="text-lg font-bold">Price</span>: ${price}</p>
                    <p className="w-fit">
                        <span className="text-lg font-bold">Available Quantity</span>: {availableQuantity} pies
                    </p>
                </div>
                <div className="flex flex-wrap justify-between mt-2">
                    <p className="w-fit text-lg"><span className="text-lg font-bold">Category</span>:  {category}</p>
                    <p className="w-fit flex gap-3">
                        <span className="text-lg font-bold">Rating</span>: 
                        <Rating className="inline" style={{ maxWidth: 100 }} value={rating} readOnly />
                    </p>
                </div>
                <p className="text-lg mt-2">
                    <span className="font-bold">description: </span> 
                    {description}
                </p>
            </div>
        </div>
    );
};

export default SingleToy;
