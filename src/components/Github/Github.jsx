import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {

    //How to use Loader
    const data = useLoaderData();


    
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fetch("https://api.github.com/users/MouMandal");
    //         const newData = await response.json();
    //         setData(newData);
    //     };
    //     fetchData();
    // }, []);


    return (
        <div className='text-center m-4 bg-gray-600 text-white'>Github followers:{data.followers}
            <img src={data.avatar_url} alt='Git picture' width={300} />

        </div>
    )
}
export default Github



//How to use Loader

export const githubLoader = async () => {
    const response = await fetch("https://api.github.com/users/MouMandal");
    return response.json();
}