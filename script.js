let ka=document.getElementById("k");
let mo=document.getElementById("m");
let bar=document.getElementById("nav");
let side=document.getElementById("sine");
let chat=document.getElementById("ul");
let inp=document.getElementById("input");
let send=document.getElementById("send");
let tit=document.getElementById("tit");
let imgt=document.getElementById("img-t");
let img=document.getElementById("img");
let video=document.getElementById("video");
let vt=document.getElementById("video-t");
let btn=document.getElementById("btn");
btn.onclick=(e)=>{
  e.preventDefault()
}
function t(e,w){
  e.onclick=()=>{
    
    w.click()
  }
}
t(imgt,img)
t(vt,video)
tit.innerText="kareem"
bar.onclick=()=>{
    side.classList.toggle("y")
}






o= new Date()
time=o.getHours()+":"+o.getMinutes()
send.onclick=(e)=>{
  e.preventDefault()
  

 


 if(inp.value.trim()!=""){
  masg=inp.value;
left=`
<li>
<div class="message-data align-right">

  <span  class="message-data-time" >${time},Today</span> &nbsp; &nbsp;
  <span class="message-data-name" >kareem</span>
</div>
<div class="message other-message float-right">
  ${masg}
</div>
</li>
`
chat.innerHTML+=left;
inp.value=""


     
    
       

}else{
  alert("please insert massage")
 }
}
mo.onclick=()=>{
  tit.innerText="mohamed"
  inp.value=""
  chat.classList.add("boy")
  document.documentElement.style.setProperty("--my","#80cf61")
  document.documentElement.style.setProperty("--mu","#7bb6ed")
  function previeImage() {
    var imtg = document.getElementById("img").files;
    if (imtg.length > 0) {
        var fileReader = new FileReader();
        fileReader.onload = function (event) {
           lp=`<img src="${event.target.result}">`
           //lm=`<video controls src="${event.target.result}"></video>`
            imgm=`
            <li>
      <div class="message-data g">
        <span class="message-data-name">mohamed</span>
        <span class="message-data-time">${time},Today</span>
      </div>
      <div class="message my-message">
      ${lp}
      </div>
    </li>`
          chat.innerHTML+=imgm
        };
        fileReader.readAsDataURL(imtg[0]);
      }}

      function previeVideo() {
        var imop = document.getElementById("video").files;
        if (imop.length > 0) {
            var fileReader = new FileReader();
            fileReader.onload = function (event) {
               lom=`<video controls src="${event.target.result}"></video>`
               //lm=`<video controls src="${event.target.result}"></video>`
                imgt=`
                <li>
      <div class="message-data g">
        <span class="message-data-name">mohamed</span>
        <span class="message-data-time">${time},Today</span>
      </div>
      <div class="message my-message">
      ${lom}
      </div>
    </li>`
              chat.innerHTML+=imgt
            };
            fileReader.readAsDataURL(imop[0]);
          }}
          img.onchange=()=>{
            previeImage()
          }
          video.onchange=()=>{
            previeVideo()
          }
     
send.onclick=(e)=>{
  e.preventDefault()
 if(inp.value.trim()!=""){
  masg=inp.value;
right=`
<li>
      <div class="message-data g">
        <span class="message-data-name">mohamed</span>
        <span class="message-data-time">${time},Today</span>
      </div>
      <div class="message my-message">
      ${masg}
      </div>
    </li>
`
chat.innerHTML+=right;
inp.value=""


}else{
  alert("please insert massage")
 }
}
}
ka.onclick=()=>{
  tit.innerText="kareem"
  inp.value=""
  chat.classList.remove("boy")
  document.documentElement.style.setProperty("--my","#7bb6ed")
  document.documentElement.style.setProperty("--mu","#80cf61")






  
  function previewImage() {
    var im = document.getElementById("img").files;
    if (im.length > 0) {
      var fileReader = new FileReader();
      fileReader.onload = function (event) {
         lo=`<img src="${event.target.result}">`
         //lm=`<video controls src="${event.target.result}"></video>`
          img=`
          <li >
                <div  class="message-data  align-right">
                <span class="message-data-time" >${time},Today</span> &nbsp; &nbsp;
                <span class="message-data-name" >kareem</span>
                </div>
                <div  class="message other-message float-right">
                 ${lo}
                </div>
              </li>`
        chat.innerHTML+=img
      };
      fileReader.readAsDataURL(im[0]);
    }}
      
     function previewVideo() {
      var im = document.getElementById("video").files;
      if (im.length > 0) {
          var fileReader = new FileReader();
          fileReader.onload = function (event) {
             lo=`<video controls src="${event.target.result}"></video>`
             //lm=`<video controls src="${event.target.result}"></video>`
              img=`
              <li >
                    <div  class="message-data  align-right">
                    <span class="message-data-time" >${time},Today</span> &nbsp; &nbsp;
                    <span class="message-data-name" >kareem</span>
                    </div>
                    <div  class="message other-message float-right">
                     ${lo}
                    </div>
                  </li>`
            chat.innerHTML+=img
          };
          fileReader.readAsDataURL(im[0]);
        }}
    







  img.onchange=()=>{
    previewImage()
  }
  video.onchange=()=>{
    previewVideo()
  }
  send.onclick=(e)=>{
    e.preventDefault()
   if(inp.value.trim()!=""){
    masg=inp.value;
  left=`
  <li>
  <div class="message-data align-right">
    <span class="message-data-time" >${time},Today</span> &nbsp; &nbsp;
    <span class="message-data-name" >kareem</span>
  </div>
  <div class="message other-message float-right">
    ${masg}
  </div>
  </li>
  `
  chat.innerHTML+=left;
  inp.value=""


  }else{
    alert("please insert massage")
   }
  }
  }
 
 
    
  
   function previewImage() {
var im = document.getElementById("img").files;
if (im.length > 0) {
  var fileReader = new FileReader();
  fileReader.onload = function (event) {
     lo=`<img src="${event.target.result}">`
     //lm=`<video controls src="${event.target.result}"></video>`
      img=`
      <li >
            <div  class="message-data  align-right">
            <span class="message-data-time" >${time},Today</span> &nbsp; &nbsp;
            <span class="message-data-name" >kareem</span>
            </div>
            <div  class="message other-message float-right">
             ${lo}
            </div>
          </li>`
    chat.innerHTML+=img
  };
  fileReader.readAsDataURL(im[0]);
}}
  
 function previewVideo() {
  var im = document.getElementById("video").files;
  if (im.length > 0) {
      var fileReader = new FileReader();
      fileReader.onload = function (event) {
         lo=`<video controls src="${event.target.result}"></video>`
         //lm=`<video controls src="${event.target.result}"></video>`
          img=`
          <li >
                <div  class="message-data  align-right">
                <span class="message-data-time" >${time},Today</span> &nbsp; &nbsp;
                <span class="message-data-name" >kareem</span>
                </div>
                <div  class="message other-message float-right">
                 ${lo}
                </div>
              </li>`
        chat.innerHTML+=img
      };
      fileReader.readAsDataURL(im[0]);
    }}
