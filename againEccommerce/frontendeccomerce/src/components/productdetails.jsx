import {useEffect, useState} from "react";
import { useParams,useNavigate } from "react-router-dom";
import { Reviews } from "./reviews";
import { useSelector } from "react-redux";

export const ProductDetails=()=>{

const [rev,setrev]=useState(false);
const [Data,setData]=useState({});
const {_id}=useParams();
const state=useSelector((state)=>state.state.state);
const navigate=useNavigate();
// const [user,setUser]=useState({});

// const [seuser,setSeeuser]=useState(false);
let arr=[];

    useEffect(()=>{
        getData();
    },[])
    async function getData(){
   
        const data=await fetch(`http://localhost:5000/products/${_id}`).then((d)=>d.json());
        setData(data);  
    
    }
    
//    async function handleuser(id){
//     setSeeuser(!seuser);
//      const data=await fetch(`http://localhost:5000/users/${id}`).then((d)=>d.json());
//      console.log(data);
//      setUser(data); 
    
//     }
   async function handleClick(productId){
    if(state==false){
    alert("Login first");
    navigate("/login",{replace:true});
    
    }else{
    const userId=JSON.parse(localStorage.getItem("user"));
  
   await fetch(`http://localhost:5000/users/${userId[0]}/products/${productId}`,{
     method:"POST",
     headers:{
         "content-type":"application/json"
     },
     body:JSON.stringify({productId})
 });
    }
   }

    
    arr.push(_id);
   localStorage.setItem("product",JSON.stringify(arr));
    return (<div >
       <div style={{display :"flex",margin:"10%"}}>
        <div><img src={Data.image}/></div>
        <div style={{marginLeft:"50px"}}><h2 style={{fontSize:"55px"}}>{Data.name}</h2>
        <h4> Price {Data.price}</h4>
        <select>
<option>Sizes</option>
 {Data.size!==undefined? Data.size.map((e)=>(<option key={e}>{e}</option>)):"Loding..."}

        </select>
        <select>
<option>Colors</option>
{  Data.color!==undefined ? Data.color.map((e)=>(<option key={e}>{e}</option>)):"Loding..."}

        </select>
        <br/>
        <button onClick={()=>{handleClick(Data._id)}}>ADD TO CART</button>
        </div>
       </div>

<button onClick={()=>{setrev(!rev)}}  >{rev?"Hide Reviews":"Show Reviews"}</button>
{rev?<div style={{margin:"5%"}}>{Data && Data.reviewsId.map((e)=>
(<div style={{border:"2px solid grey"}} key={e._id}>
    <h3>{e.description}</h3>
    <h4> {e.rating} ⭐️</h4>
    <h4>Date - {e.createdAt.split("T")[0]}</h4>
    <button  onClick={()=>{handleuser(e.userId)}}>{seuser?"Hide User":"Show User"}</button>
     {seuser?<div ><h4 style={{border:"2px dotted red"}} >{user.name}</h4> 

  </div>:""}
    </div>))}
</div>:""}

<h4>Write a review</h4>
<Reviews/>

    </div>)
}