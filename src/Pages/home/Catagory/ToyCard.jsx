import React, { useContext, useEffect } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useNavigate } from "react-router-dom";
import { AuthContest } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";

const ToyCard = ({ toy }) => {
    const {user} = useContext(AuthContest)
    const navigate = useNavigate();
    const {name,price,availableQuantity,rating,photo,_id} = toy || {};
    const handleNavigate = () => {
        if(!user){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "You have to log in first to view details"
              })
            navigate('/login')
        }
        else{
            navigate(`/singleToy/${_id}`)
        }
    }
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl border border-[#ff6899]">
            <figure className="w-1/3 object-cover">
                <img
                    className=" h-[300px] object-contain p-5"
                    src={photo}
                    alt="Album"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className="text-lg"><span className="font-bold">Price: </span> ${price}</p>
                <p className="text-lg"><span className="font-bold">Available Quantity: </span> {availableQuantity} pies</p>
                <div className="text-lg flex gap-3 items-center">
                    <span className="font-bold">Rating: </span>   
                    <Rating className="inline" style={{ maxWidth: 100 }} value={rating} readOnly />
                </div>
                <div className="card-actions justify-end">
                    <button onClick={handleNavigate} className="jm_btn">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;
