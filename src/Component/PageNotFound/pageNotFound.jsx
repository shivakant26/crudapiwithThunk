import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const PageNotFound = () =>{
    const navigate = useNavigate();
    // const [ count , setCount ] = useState(3);
    useEffect(()=>{
        setTimeout(()=>{
            navigate("/")
        },3000)
    },[])
    return(
        <div>
            <h2> 404 Page not found !</h2>
            <p>please wait {3} second .....</p>
        </div>
    )
}
export default PageNotFound ;