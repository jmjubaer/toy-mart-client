import React, { useContext, useEffect, useState } from "react";
import { AuthContest } from "../../Provider/AuthProvider";
import ToyRow from "./ToyRow";
import Swal from "sweetalert2";

const MyToy = () => {
    const { user } = useContext(AuthContest);
    const [toys, setToys] = useState([]);
    const [control, setControl] = useState("");
    const [sort,setSort] = useState('Ascending');
    useEffect(() => {
        fetch(`http://localhost:5000/myToy?email=${user?.email}&sort=${sort}`)
            .then((res) => res.json())
            .then((data) => {
                setToys(data);
            });
    }, [control, user,sort]);
    const handleDelete = (_id) => {
        fetch(`http://localhost:5000/deleteToy/${_id}`, {
            method: "Delete",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount > 0) {
                    Swal.fire({
                        icon: "success",
                        title: "Success",
                        text: "Deleted successful",
                    });
                    setControl(!control);
                }
            })
            .catch((err) => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${err.message}`,
                });
            });
    };
    return (
        <div className="relative">
            <div className="form-control absolute z-50 right-0 -top-12">
                <label className="input-group outline-none">
                    <span className="bg-gray-100">Sort By</span>
                    <select onChange={(e)=> setSort(e.target.value)} className="w-fit p-2 border-8 border-gray-100 outline-none  text-lg">
                        <option value="Ascending">Ascending</option>
                        <option value="Descending ">Descending</option>
                    </select>
                </label>
            </div>
            <div className="overflow-x-auto my-20">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Toy Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {toys.map((toy, idx) => (
                            <ToyRow
                                key={toy._id}
                                toy={toy}
                                idx={idx + 1}
                                handleDelete={handleDelete}
                            ></ToyRow>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToy;
