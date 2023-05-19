import React, { useContext, useEffect, useState } from "react";
import { AuthContest } from "../../Provider/AuthProvider";
import ToyRow from "./ToyRow";
import Swal from "sweetalert2";

const MyToy = () => {
    const { user } = useContext(AuthContest);
    const [toys, setToys] = useState([]);
    const [control,setControl] = useState(false);
    useEffect(() => {
        fetch(`http://localhost:5000/myToy?email=${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setToys(data);
            });
    }, [control,user]);
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
        <div>
            <div className="overflow-x-auto my-10">
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
                                handleDelete = {handleDelete}
                            ></ToyRow>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToy;
