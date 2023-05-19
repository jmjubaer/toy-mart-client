import React from "react";

const ToyRow = ({toy,idx}) => {
    return (
        <tr>
            <th>{idx}</th>
            <td>{toy?.name}</td>
            <td>{toy?.sellerName}</td>
            <td>{toy?.category}</td>
            <td>${toy?.price}</td>
            <td>{toy?.availableQuantity}</td>
            <td><button className="btn bg-[#ff6899]">Details</button></td>
        </tr>
    );
};

export default ToyRow;
