

var url="https://api.unsplash.com/photos/random?count=100&client_id=CiUHdv8t1CZ0RdkGWvepkPXZAFaWvFZNgM7IyR5o0ME";


async function getData(){
    let res=await fetch(url);
    let data=await res.json();
    console.log(data);
    showData(data); 
}
getData();
let container=document.querySelector(".lowerbox");


function showData(data)
{
container.innerHTML="";
data.map((e)=>{
    let div1=document.createElement("div");
    let image=document.createElement("img");
    image.src=e.urls.small;
    image.style.width="100%";
    image.style.height="300px";
    const Likes=`❤️ ${e.likes}`;
    div1.append(image,Likes);
    document.querySelector(".lowerbox").append(div1);
})
}
function getData2(){
var Input=document.querySelector("#inputval").value;
localStorage.setItem("input",JSON.stringify(Input));
window.location.href="search.html";

}

function display(fun , delay){
    
    setTimeout(()=>{
    fun();
    },delay)
}


