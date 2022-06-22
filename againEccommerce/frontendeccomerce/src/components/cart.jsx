import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Cart=()=>{
const [Data,setData]=useState([]);
const state=useSelector((state)=>state.state.state);

useEffect(()=>{
    getData();
},[]);
async function getData(){
    const userId=JSON.parse(localStorage.getItem("user"));
  const data= await fetch(`http://localhost:5000/users/${userId[0]}`).then((d)=>d.json());
   setData(data.cart)

}

async function handleDelete(productId){
   
    const userId=JSON.parse(localStorage.getItem("user"));
   await fetch(`http://localhost:5000/users/${userId[0]}/products/${productId}`,{
     method:"DELETE",
})
}

return (<div>
  <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gridTemplateRows:"repeat(2,400px)",border:"1px solid white",gap:"5%",margin:"10% 3% 3% 3%"}}>
{Data.length!==0?Data.map((e)=>(<div  key={e._id} style={{border:"5px solid black"}} >
<Link to={`/${e._id}`} > <img style={{height:"60%",width:"95%",border:"2px dotted red"}} src={e.image}/></Link>



<h3>{e.name}</h3>
<h4>Rs.{e.price}</h4>
<button onClick={()=>
    { handleDelete(e._id)
    getData();
    }
   
     }>Remove From Cart</button>


</div>)):<div><h1>Loding....</h1></div>}


    </div> 
    </div>)

}