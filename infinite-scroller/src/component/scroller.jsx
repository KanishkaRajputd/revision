import { useEffect, useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component"


export const Scroller=()=>{
     const [Data,setData]=useState([]);
     const [page,setPage]=useState(1);
  
       


 useEffect(()=>{
         getData();
     },[page]);
   



     function scrollToend(){
         console.log(page)
         setPage(page+1);
         
     }


     async function getData(){

        const data=await fetch(`http://localhost:8080/data?_page=${page}&_limit=5`).then((d)=>d.json());
        setData([...Data,...data]);
        
        
             }

window.onscroll=function (){
    if(window.innerHeight+document.documentElement.scrollTop === document.documentElement.offsetHeight){
        scrollToend();
    }
}

    return (<div>
        
        {Data.length>0 && Data.map((e,i)=>(<div  key={i} style={{height:"200px"}}>
            
            
            <h3>{e.name}</h3>
            </div>))} 
        
        </div>)
}