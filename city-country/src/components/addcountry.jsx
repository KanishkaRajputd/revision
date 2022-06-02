import Input from '@mui/material/Input';
import { useState } from 'react';
export const Country=()=>{

const [Form,setForm]=useState({
  country:"",
})


function handleChange(e){

setForm({
  country:e.target.value
})


}

  function handleSubmit(e){
   e.preventDefault();

fetch("http://localhost:8080/countryData",{
  method:"POST",
  headers:{
    "content-type":"application/json"
  },
  body:JSON.stringify(Form)
})

  }
return (<div style={{marginTop:"30px"}}>


<form onSubmit={handleSubmit} >
  <Input type='text' onChange={handleChange} id="country" placeholder='India'/>
  <br/>
  <Input type='submit' value="Submit"/>

</form>


</div>)


}