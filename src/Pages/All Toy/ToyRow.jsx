import React from "react";
import { Link } from "react-router-dom";

const ToyRow = ({ toy, idx }) => {
    return (
        <tr>
            <th>{idx}</th>
            <td>{toy?.name}</td>
            <td>{toy?.sellerName}</td>
            <td>{toy?.category}</td>
            <td>${toy?.price}</td>
            <td>{toy?.availableQuantity}</td>
            <td>
                <Link to={`/singleToy/${toy?._id}`} className="btn btn-outline text-[#ff6999] hover:bg-[#ff6899]">
                    Details
                </Link>
            </td>
        </tr>
    );
};

export default ToyRow;
