import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData();

    /* const [data, setData] = useState([]);
    useEffect(() => {
        const url = 'https://api.github.com/users/hiteshchoudhary';

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data);
            })
    }, []); */
    
    return  (
        <div className="flex justify-center flex-col bg-gray-700 text-white w-[50%] p-4 mx-auto m-5 text-3xl gap-3">
            Github Followers : {data.followers}
            <br />
            Github ID : {data.login}

            <img className="w-60" src={data.avatar_url} alt="Github Photo" />
        </div>
    )
}

export default Github;

// Why This is not working? ---> index.js me "default import" krr rha tha
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary');
    return response.json();
}