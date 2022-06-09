import { useEffect, useState } from "react"

export const Product=()=>{
    const [Options,setOption]=useState([]);
    const [Form ,setForm]=useState({
      name:"",
     image:"",
     price:"",
     color:[],
     size:[],
     categories:[],
     brandId:"",

    })
    

    useEffect(()=>{
     getData()
    },[])
    
async function getData(){

    const data=await fetch("http://localhost:5000/brands").then((d)=>d.json());
    setOption(data);
    console.log(data);
       
}

    const style1={
    
        height:"40px",
        width:"200px",
        margin:"10px"
    }
    
    function handleChange(e){
        const {id,value}=e.target;
        setForm({
            ...Form,
            [id]:value
        })
    }
  function handleSubmit(e){
    e.preventDefault();
    fetch("http://localhost:5000/products",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(Form)

    }).then((d)=>console.log(d));

    
  }

    
    return (<div>
    
         <form onSubmit={handleSubmit}>
         <input id="name" onChange={handleChange} style={style1} type="text" placeholder="Name"/>
         <br/>
         <input id="image" onChange={handleChange} style={style1} type ="text" placeholder="Image"/>
         <br/>
         <input id="price" onChange={handleChange} style={style1} type="text"  placeholder="Price"/>
         <br/>
         <input id="color" onChange={handleChange} style={style1} type="text" placeholder="Color saperated by ,"/>
         <br/>
         <input id="size" onChange={handleChange} style={style1} type="text" placeholder="Size saperated by ,"/>
         <br/>
         <input id="categories" onChange={handleChange} style={style1}  type="text"  placeholder=" Categories saperated by ," />
         <br/>
         <select  id="brandId" onChange={handleChange} style={style1}>
             <option key="1">Select Brand</option>
             {Options.map((e)=>(
                 <option key={e.id} id="BrandId" value={e._id}>{e.name}</option>
             ))}
         </select>
         <br/>
        <input style={style1} type="submit" value="Submit"/>    
         </form>
    
    
    </div>)
    
    
    }