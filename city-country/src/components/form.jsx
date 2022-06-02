import Input from '@mui/material/Input';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddCity } from '../redux/AddCity/action';
export const Form=()=>{

const [Form,setForm]=useState({
  country:"",
  city:"",
  population:""
})
const dispatch=useDispatch();

function handleChange(e){
const {id,value}=e.target;
if(e.target.value.length>2){
setForm({
  ...Form,
  [id]:value
})
}

}


 async function handleSubmit(event){
 event.preventDefault();
 fetch("http://localhost:8080/city",{
  method:"POST",
  headers:{
    "content-type":"application/json"
  },
  body:JSON.stringify(Form)
})
dispatch(AddCity(Form));
  }
return (<div style={{marginTop:"30px"}}>


<form onSubmit={handleSubmit} >
  <Input type='text' onChange={handleChange} id="country" placeholder='India'/>
  <br/>
  <Input type='text' onChange={handleChange} id="city" placeholder='Delhi'/>
  <br/>
  <Input type='text'onChange={handleChange} id="population" placeholder="10000000"/>
  <br/>
  <Input type='submit' value="Submit"/>

</form>


</div>)


}