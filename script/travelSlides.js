var travelSlides = document.getElementsByClassName('travelSlides');
var travelLeft = document.getElementsByClassName('travelBtn')[0];
var travelRight = document.getElementsByClassName('travelBtn')[1];
var idx = 0;
travelRight.addEventListener("click",()=>{
    idx++;
    for(var i=0;i<travelSlides.length;i++){
        if(idx>travelSlides.length-1){
            idx=0;
        }
        travelSlides[i].style.transform="translateX(-"+idx+"00%)";
    }
    
});
travelLeft.addEventListener("click",()=>{
    idx--;
    for(var i=0;i<travelSlides.length;i++){
        if(idx<0){
            idx=travelSlides.length-1;
        }
        travelSlides[i].style.transform="translateX(-"+idx+"00%)";
    }
    
})