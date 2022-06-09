import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";
export const Main=()=>{
    const  [searchParams, setSearchParams] = useSearchParams();
  const [Data,setData]=useState([]);
  const [page, setPage] = useState(Number(searchParams.get("page")||1));
  const [query,setQuery]=useState("");
  const [filter, setfilter] = useState([]);
   const [sort, setSort] = useState("");
   const [count,setCount]=useState(0);

  useEffect(() => {
    getData();
   
    setSearchParams({
        page,sort,
        query,filter
    })
  }, [page,filter,setSearchParams,query,sort]);

async  function  getData(){

const data= await fetch(`http://localhost:5000/restaurant?page=${page}&sort=${sort}&filter=${filter}`).then((d)=>d.json());
setData(data.products);
setCount(data.count);

}
async function handleClick(e){
    e.target.id === ""
    ?setfilter(["_id",1])
    :setfilter(["tag",e.target.id])
   
} 


return (<div>


<div style={{border:"2px solid none",height:"60px",display:"grid",fontFamily:"monospace",gridTemplateColumns:"50% 10% 10% 10% 10% 10%",backgroundColor:"black",fontWeight:"bolder",color:"white"}}>


<div style={{textAlign:"left",padding:"13px",fontSize:"25px",color:"red"}}>KHUSHIYA</div>
<div></div>
<div></div>
<div style={{textAlign:"left",padding:"16px"}}> Cart</div>
<div style={{textAlign:"left",padding:"16px"}}> Signin</div>
<div style={{textAlign:"left",padding:"16px"}}>Signout</div>


</div>
<div style={{textAlign:"left",paddingLeft:"120px",paddingRight:"120px",fontSize:"25px",fontFamily:"monospace"}}>
<h1>WELCOME TO KHUSHIYA !</h1>
<h1>BROWSE CATEGORIES</h1>
</div>
<div style={{height:"400px",display:"grid",gridTemplateColumns:"20% 20% 20% 20%",gridTemplateRows:"300px",justifyContent:"space-around"}}>
    <div key="1" onClick={handleClick}><img id="chikan_buckets" style={{height:"50%"}} src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT86.jpg?ver=15.6"/>
    <h3>CHIKAN BUCKETS</h3></div>
    <div key="2"
    onClick={handleClick}
    >
    <img style={{height:"50%"}}  id="chikan_rolls" src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT170.jpg?ver=15.6"/>
    <h3>CHIKAN ROLLS</h3>
    </div>
    <div key="3"
     onClick={handleClick}
     >
    <img style={{height:"50%"}} id="biryani_buckets" src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT190.jpg?ver=15.6"/>
    <h3>BIRYANI BUCKETS</h3>
    </div>
    <div  key="4"
    onClick={handleClick}
    >
    <img style={{height:"50%"}}  id="burger" src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT99.jpg?ver=15.6"/>
    <h3>BURGERS</h3>
    </div>
</div>


<div>
    <select onChange={(e) => {
            {
              e.target.value === ""
                ? setSort(["_id", 1])
                : setSort(["price", e.target.value]);
            }
          }}>
        <option value="">Sorting</option>
        <option value="1">Low To High</option>
        <option value="-1">High To Low</option>
    </select>
</div>
<div style={{display:"grid",gridTemplateColumns:"20% 20% 20% ",gridTemplateRows:"repeat(3,300px)",justifyContent:"space-around"}} >
    {Data.map((e)=>(

        <div key={e.id}>
           <img style={{height:"60%",width:"100%"}} src={e.image}/>
           <h4>{e.title}</h4>
           <h4>{e.price}</h4>
            </div>
    ))}
</div>
<button onClick={()=>{""
    if(page<=0){
        return setPage(1);
       
    }
    setPage(page-1);
}}>pre</button>
<button onClick={()=>{
    
    if(page>=Math.ceil(count/9)){
        return setPage(Math.ceil(count));
    }
    setPage(page+1);
}}>next</button>
</div>)


}