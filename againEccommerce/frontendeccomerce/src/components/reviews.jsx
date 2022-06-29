import { useState } from "react"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"

export const Reviews=()=>{
    const navigate=useNavigate();
    const state=useSelector((s)=>s.state.state);
    // console.log(state)
    const style1={
    
        height:"40px",
        width:"200px",
         margin:"10px"
    
    }

    const user=JSON.parse(localStorage.getItem("user"));
    const product=JSON.parse(localStorage.getItem("product"));
    const [Form,setForm]=useState({
        userId:user,
        description:"",
        rating:"",
        productId:product

    })
    
    function handleChange(e){
        const {id,value}=e.target;
        
        setForm({
            ...Form,
            [id]:value
        })
        
        
    }
  function handleSubmit(e){

    e.preventDefault();

    if(!state){
        alert("Login First");
        navigate("/login",{replace:true})

    }
    const productId=JSON.parse(localStorage.getItem("product"));

    fetch(`http://localhost:5000/products/${productId}/reviews`,{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(Form)

    })

    
  }




    return (<div onSubmit={handleSubmit}>
    
         <form>
         <input onChange={handleChange}  id="description" style={style1} type ="text" placeholder="Description"/>
         <br/>
        <input onChange={handleChange}  id="rating" style={style1} type="number" placeholder="Rate us"/>
        <br/>
        <input style={style1} type="submit" value="Submit"/>    
         </form>
    
    
    </div>)
}