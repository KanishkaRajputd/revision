import { useEffect,useState } from "react";
export const Address=()=>{
    const style1={
    
       
    height:"40px",
    width:"200px",
     margin:"10px"
    }

    const [Form,setForm]=useState({
         state:"",
         city:"",
         district:"",
         line:""

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
         const userId=JSON.parse(localStorage.getItem("user"));
         console.log(userId);
        
     fetch(`http://localhost:5000/users/${userId}/address`,{
          method:"POST",
          headers:{
               "content-type":"application/json"
          },
          body:JSON.stringify(Form)
     }).then(d=>d.json).then(d=>console.log(d));


    }
    return (<div>
    
         <form onSubmit={handleSubmit} >
         <input onChange={handleChange} id="state" style={style1} type="text" placeholder="State"/>
         <br/>
         <input onChange={handleChange} id="city" style={style1} type ="text" placeholder="City"/>
         <br/>
         <input onChange={handleChange} id="district" style={style1} type="text" placeholder="District"/>
         <br/>
         <input onChange={handleChange} id="line" style={style1} type ="text" placeholder="Line"/>
         <br/>
        <input style={style1} type="submit" value="Submit"/>    
         </form>
    
    
    </div>)
    
    
    }