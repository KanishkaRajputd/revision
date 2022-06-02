import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState,useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Input from '@mui/material/Input';
import { useNavigate} from "react-router-dom";
import {useDispatch, useSelector } from "react-redux"
import { store } from '../redux/store';
import { AddallCity, DeleteCity, EditCity, getCityData } from '../redux/AddCity/action';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid green',
  boxShadow: 24,
  p: 4,
};




const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));



const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export default function CustomizedTables() {
  

const city=useSelector((store)=>store.addCity.addCity);

const navigate=useNavigate();
const dispatch=useDispatch();

const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);
const [Country,setCountry]=useState("");
const [City,setCity]=useState("");
const [Population ,setPopulation]=useState(0);
const [Id,setId]=useState(0);


  useEffect(()=>{
    getData();    
  },[]);
  
  
  function getData(){
  
    fetch("http://localhost:8080/city")
    .then((d)=>d.json())
    .then((data)=>{
    dispatch(AddallCity(data));
    });
   
  }

function handleClick(a,b,c){
setCountry(a);
setCity(b);
setPopulation(c);
  }


function handleChange(e){
if(e.target.id=="country")
{
  setCountry(e.target.value);
}
if(e.target.id=="city"){
  setCity(e.target.value);
}
if(e.target.id=="population"){
  setPopulation(e.target.value);
}
}
function handleDelete(id,ele){
  
  fetch(`http://localhost:8080/city/${id}`,{
          method:"DELETE",
    })

getData();
dispatch(DeleteCity(ele));
}

  return (

    <>

    
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          < StyledTableCell align="left">id</StyledTableCell>
            <StyledTableCell>Country</StyledTableCell>
            <StyledTableCell align="center">City</StyledTableCell>
            <StyledTableCell align="center">Population</StyledTableCell>
            <StyledTableCell  ><Stack direction="row" spacing={2}>
                <Button >Edit</Button></Stack>
               </StyledTableCell>
              <StyledTableCell align="right"><Stack direction="row" spacing={2}>
                <Button variant="contained" color="success">Delete</Button></Stack>
               </StyledTableCell>
    
   </TableRow>
        </TableHead>
        <TableBody>
          {city.map((e) => (

            <StyledTableRow key={e.id}>
              < StyledTableCell align="left">{e.id}</StyledTableCell>
              <StyledTableCell component="th" scope="e">{e.country}</StyledTableCell>
              <StyledTableCell align="center">{e.city}</StyledTableCell>
              <StyledTableCell align="center">{e.population}</StyledTableCell>
              <StyledTableCell align="left">
              <Button   onClick={()=>{
                handleOpen();
               handleClick(e.country,e.city,e.population);
               setId(e.id);
              }}>Edit</Button>
               </StyledTableCell>
               
     
              <StyledTableCell align="right"><Stack direction="row" spacing={2}>
                <Button variant="contained" color="success"  onClick={()=>{
                  handleDelete(e.id,e);
                }}>Delete</Button></Stack>
               </StyledTableCell>   
               
                          
            </StyledTableRow>
          
          ))}
        
        </TableBody>
      </Table>


      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
         <Input  onChange={handleChange}  id="country" type="text" defaultValue={Country}   placeholder='Country'/>
         <Input onChange={handleChange} id="city" type="text" defaultValue={City} placeholder='City' />
         <Input onChange={handleChange}  id="population" type="number" defaultValue={Population} placeholder="population" />
      <Button  variant="contained" color="success"  
     onClick={()=>{
       const payload={
        country:Country,
        city:City,
        population:Population
       }

  fetch(`http://localhost:8080/city/${Id}`,{
  method:"PATCH",
  headers:{
              "content-type":"application/json"        
            },
  body:JSON.stringify(payload)
})
dispatch(EditCity(payload))
getData()

     }}
       >Submit</Button>
         </Box>
      </Modal>
    </TableContainer>
  
<Button variant="contained" color="success" style={{marginTop:"20px"}} onClick={()=>{
navigate("/form")
}}
>Add City</Button> 
<Button variant="contained" color="success" style={{marginTop:"20px"}} onClick={()=>{
navigate("/country")
}}
>Add Country</Button>

    </>
  );
}
