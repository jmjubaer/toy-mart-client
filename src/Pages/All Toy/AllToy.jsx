import React from "react";
import { useLoaderData } from "react-router-dom";
import ToyRow from "./ToyRow";

const AllToy = () => {
    const toys = useLoaderData();
    console.log(toys);
    return (
        <div>
            <div className="overflow-x-auto">
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
                        {
                            toys.map((toy,idx) => <ToyRow
                                 key={toy._id} 
                                 toy = {toy}
                                 idx={idx + 1}
                                 ></ToyRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToy;
