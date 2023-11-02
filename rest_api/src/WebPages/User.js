import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function User(){
    const {id}=useParams();

    const [error,setError]=useState("");
    const [isLoaded,setIsLoaded]=useState(true);
    const [user,setUser]=useState([]);
    const [userAddress,setUserAddress]=useState([]);
    const [userCompany,setUserCompany]=useState([]);


    useEffect(()=>{
        fetch("http://jsonplaceholder.typicode.com/users/"+id)
        .then(res=>res.json())
        .then(
            (data)=>{
                console.log(data);
                setUser(data);
                setIsLoaded(true);
                setUserAddress(data.address);
                setUserCompany(data.company);
            },
            (error)=>{
                setIsLoaded(true);
                setError(error);
            }
        )
    },[])
    if(error){
        return(
            <div>Error: {error.message}</div>
        )
    }
    if(!isLoaded){
        return<div>Loading...</div>

    }
    if(user){
        return(
            <>
                <center>
                <h1>{user.name}</h1>
                <div>Email: {user.email}</div>
                <div>Phone: {user.phone}</div>
                <div>Website: {user.website}</div>
                <div>Company: {userCompany.name}</div>
                <div>Email: {userAddress.street},{userAddress.suite},{userAddress.city},{userAddress.zipcode}</div>
                </center>
            </>
        )
    }
}

export default User;