let kila= document.querySelector(".kila");
let seven=document.querySelector(".seven");
console.log(seven);
var img=document.querySelector(".image");
console.log(img)
seven.onclick =function(){
    kila.style.display="block";
    kila.toggle();
}
kila.onclick =function(){
    kila.style.display="none";
    
}

window=onscroll=function (){
    if( window.scrollY>= 150){
       kila.style.display='none';
    }
}
window=onscroll=function(){
    if( window.scrollY>=150){
        img.style.display="block";
    }else{
        img.style.display="none";
    }
}
img.onclick= function(){
    window.scrollTo({
       let:0,
       top:0,
       behavior:'smooth',
    })
 };
 
 