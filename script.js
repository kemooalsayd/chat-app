let ka=document.getElementById("k");
let mo=document.getElementById("m");
let bar=document.getElementById("nav");
let side=document.getElementById("sine");
let chat=document.getElementById("ul");
let inp=document.getElementById("input");
let send=document.getElementById("send");
let tit=document.getElementById("tit");
lll=document.querySelectorAll("#ul li .massage")

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
mo.onclick=()=>{
  
function previewImage() {
  var file = document.getElementById("file").files;
  if (file.length > 0) {
      var fileReader = new FileReader();
      fileReader.onload = function (event) {
         lo=`<img src="${event.target.result}"`
          img=`
         
<li>
<div class="message-data">
  <span class="message-data-name">mohamed</span>
  <span class="message-data-time">${time},Today</span>
</div>
<div class="message my-message">
${lo}
</div>
</li>`

        chat.innerHTML+=img
      };
      fileReader.readAsDataURL(file[0]);
    }}
    file.onchange=()=>{
      previewImage()
    }
  tit.innerText="mohamed"
send.onclick=(e)=>{
  e.preventDefault()
 if(inp.value.trim()!=""){
  masg=inp.value;
right=`
<li>
      <div class="message-data">
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
  file.onchange=()=>{
    previewImage()
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
    var file = document.getElementById("file").files;
    if (file.length > 0) {
        var fileReader = new FileReader();
        fileReader.onload = function (event) {
           lo=`<img src="${event.target.result}"`
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
        fileReader.readAsDataURL(file[0]);
      }}