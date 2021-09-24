var lightControlBigbtn = document.getElementsByClassName('lightControlBigbtn')[0];
var lightControlbtn = document.getElementsByClassName('lightControlbtn');
var off = document.getElementById("off");
var on = document.getElementById("on");
var play = document.getElementById('play');

on.classList.add("onLightColor");

play.addEventListener("click",()=>{
    if(play.className.length==12){
        play.classList.add("fa-play");
    }else{
        play.classList.remove("fa-play");
    }
    

})
on.addEventListener("click",()=>{
    on.classList.add("onLightColor");
    on.classList.remove("offLightColor");
    off.classList.remove("onLightColor");
    off.classList.add("offLightColor");
});
off.addEventListener("click",()=>{
    off.classList.add("onLightColor");
    off.classList.remove("offLightColor");
    on.classList.remove("onLightColor");
    on.classList.add("offLightColor");
});

for(var i=0;i<lightControlbtn.length;i++){
    lightControlbtn[i].classList.add("onLightColor");
    lightControlbtn[i].addEventListener("click",lightClick)
}
lightControlBigbtn.classList.add("onLightColor");

lightControlBigbtn.addEventListener("click",()=>{
    big = lightControlBigbtn.className.length
    if(big==32){
        lightControlBigbtn.classList.remove("offLightColor");
        lightControlBigbtn.classList.add("onLightColor");
        for(var x=0;x<lightControlbtn.length;x++){
            lightControlbtn[x].classList.add("onLightColor");
            lightControlbtn[x].classList.remove("offLightColor");
        }
    }else{
        lightControlBigbtn.classList.remove("onLightColor");
        lightControlBigbtn.classList.add("offLightColor");
        for(var x=0;x<lightControlbtn.length;x++){
            lightControlbtn[x].classList.remove("onLightColor");
            lightControlbtn[x].classList.add("offLightColor");
        }
    }
})
function lightClick(){
    
  if(this.className.length==29){
    this.classList.remove("offLightColor");
    this.classList.add("onLightColor");
  }else{
    this.classList.remove("onLightColor");
    this.classList.add("offLightColor");
  }

  
    if(lightControlbtn[0].className.length==28 & 
        lightControlbtn[1].className.length==28 &
        lightControlbtn[2].className.length==28 &
        lightControlbtn[3].className.length==28
    ){
            lightControlBigbtn.classList.remove("offLightColor");
            lightControlBigbtn.classList.add("onLightColor");
    }else{
        lightControlBigbtn.classList.add("offLightColor");
            lightControlBigbtn.classList.remove("onLightColor");
    }
    
    
    
}

function clearLight(){
    for(var n=0;n<lightControlbtn.length;n++){
        lightControlbtn[n].style.background = "#EFEFEF";
    }
}