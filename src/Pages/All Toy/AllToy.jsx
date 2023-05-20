import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ToyRow from "./ToyRow";
import { FaSearch } from "react-icons/fa";

const AllToy = () => {
    const loadedToys = useLoaderData();
    const [toys, setToys] = useState(loadedToys);
    useEffect(()=> {
        document.title = "All Toy | Jm Toy Mart"
    },[])
    const handleSearch = (event) => {
        fetch(
            `http://toy-mart-server-rho.vercel.app/search?text=${event.target.value}`
        )
            .then((res) => res.json())
            .then((data) => {
                setToys(data);
            });
    };
    return (
        <div>
            <div className="form-control mx-auto w-fit">
                <div className="input-group">
                    <input
                        type="text"
                        placeholder="Search…"
                        onChange={handleSearch}
                        className="input border-2 border-[#ff6898b0]"
                    />
                    <button className="btn btn-square bg-[#ff6898be]">
                        <FaSearch className="text-xl" />
                    </button>
                </div>
            </div>
            <div className="overflow-x-auto my-10">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Toy Name</th>
                            <th>Seller</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {toys.map((toy, idx) => (
                            <ToyRow
                                key={toy._id}
                                toy={toy}
                                idx={idx + 1}
                            ></ToyRow>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToy;
