import React, { useContext, useEffect, useState } from "react";
import { AuthContest } from "../../Provider/AuthProvider";
import ToyRow from "./ToyRow";

const MyToy = () => {
    const { user } = useContext(AuthContest);
    const [toys, setToys] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/myToy?email=${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setToys(data);
            });
    }, [user]);
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
                            ></ToyRow>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToy;
