import { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import { Address } from "./Address";

export const User=()=>{
    const navigate=useNavigate();
const [Data,setData]=useState({});
useEffect(()=>{
getUser();
},[]);

async function getUser(){
    const userID=JSON.parse(localStorage.getItem("user"));

const data=await fetch(`http://localhost:5000/users/${userID[0]}`).then((d)=>d.json());
setData(data);
}

    return (<div style={{fontFamily:"cursive",color:"grey"}}>
        <h1>Hey,  {Data.name}</h1>
        <h4>Your Login Email  -{Data.email}</h4>
        <h4>Phone  -{Data.phone}</h4>
    <h4> Address-  {Data.addressId.length!==0?<h4>{Data.addressId.map((e)=>(<h4>{e.city} {e.district} {e.state}</h4>))}</h4>:<button onClick={()=>{
        navigate("/address",{replace:true})
     }}>Add Address</button>}</h4>

     {Data.addressId.length!==0?<button onClick={()=>{
        navigate("/address",{replace:true})
     }}>Add more Address</button>:""}
    </div>);
}