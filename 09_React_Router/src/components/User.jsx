import React from "react";
import { useParams } from "react-router-dom";

function User() {
    const {userId} = useParams();
    return  (
        <div className="flex justify-center bg-gray-700 text-white w-[50%] p-4 mx-auto m-5 text-4xl">UserID : {userId} </div>
    )
}

export default User;