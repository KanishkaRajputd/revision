
async function getData2(){
    var Input=JSON.parse(localStorage.getItem("input"))||"";
    var url2=`https://api.unsplash.com/search/photos/?query=${Input}&client_id=CiUHdv8t1CZ0RdkGWvepkPXZAFaWvFZNgM7IyR5o0ME`
    var res=await fetch(url2);
    var data=await res.json();
    
    
      console.log(Input);
    var data1=data.results;
    if(data1.length==0){
        console.log(data1);
        return false;
    }
    showData2(data1);
    // console.log(data1);
}

function showData2(d){
    console.log(1)
    document.querySelector(".lowerbox").innerHTML="";
d.map((e)=>{
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
getData2();


function getData1(){
    var Input=document.querySelector("#inputval").value;
    localStorage.setItem("input",JSON.stringify(Input));
    window.location.href="search.html";
    
    }


    function display(fun , delay){

        setTimeout(()=>{
        fun();
        },delay)
    }
    