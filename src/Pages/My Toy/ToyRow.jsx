import React from "react";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ToyRow = ({ toy, idx }) => {
    return (
        <>
            <tr>
                <th>{idx}</th>
                <td>{toy?.name}</td>
                <td>{toy?.category}</td>
                <td>${toy?.price}</td>
                <td>{toy?.availableQuantity}</td>
                <td>
                    <Link to={`/updateToy/${toy?._id}`} className="text-[#ff6999] text-2xl">
                        <FaPencilAlt />
                    </Link>
                </td>
                <td>
                    <Link to={`/singleToy/${toy?._id}`} className="text-[#ff6999] text-2xl" >
                        <FaTrashAlt />
                    </Link>
                </td>
            </tr>
        </>
    );
};

export default ToyRow;
