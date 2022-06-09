import { useState } from "react"

export const Reviews=()=>{
    const style1={
    
        height:"40px",
        width:"200px",
         margin:"10px"
    
    }

    const user=JSON.parse(localStorage.getItem("user"));
    const [Form,setForm]=useState({
        userID:user,
        description:"",
        rating:""

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
    fetch("http://localhost:5000/reviews",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(Form)

    }).then((d)=>console.log(d));

    
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