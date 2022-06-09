// var imgs=Array.from(document.querySelectorAll(".item img"));
// var outBox=document.getElementById("outBox")
// var innerBox = document.getElementById("innerBox")
// var close =document.getElementById("close")
// var next =document.getElementById("next")
// var perv=document.getElementById("prev")
// var currentIndex=0;
// for(var i=0 ; i<imgs.length; i++ ){
//     imgs[i].addEventListener("click",function(event){
//         outBox.style.display="flex";
//         var imgSrc = event.target.getAttribute("src")
//         innerBox.style.backgroundImage=`URL(${imgSrc})`
//         currentIndex=imgs.indexOf();
//     })
// }
// next.addEventListener("click",nextElement)
// function nextElement(){
//     currentIndex++;
//     if(currentIndex==imgs.length){
//         currentIndex=0;
//     }
//     var imgSrc = imgs[currentIndex].getAttribute("src")
//         innerBox.style.backgroundImage=`URL(${imgSrc})`
// }
// perv.addEventListener("click",prevElement)
// function prevElement(){
//     currentIndex--;
//     if(currentIndex<0){
//         currentIndex=imgs.length-1;
//     }
//     var imgSrc = imgs[currentIndex].getAttribute("src")
//         innerBox.style.backgroundImage=`URL(${imgSrc})`
// }
// close.addEventListener("click",closeElemen)
// function closeElemen(){
//     outBox.style.display="none";
// }
// document.addEventListener("keyup",function(event){
//     if(event.code=="ArrowRight"){
//         nextElement()
//     }
//     else if(event.code=="Arrowleft"){
//         prevElement()
//     }
//     else if(event.code=="Escape"){
//         closeElemen()
//     }
// })
// outBox.addEventListener("click",function(event){
//     if(event.target.getAttribute("id")=="outBox"){
//         closeElemen()
//     }
// })





var imgs = Array.from(document.querySelectorAll(".item img"));
var outBox = document.getElementById("outBox");
var inner = document.getElementById("innerBox");
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var close = document.getElementById("close");
var currentIndex;
var imgSrc;
for (var i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("click", function (e) {
        imgSrc = e.target.getAttribute("src")
        currentIndex = imgs.indexOf(e.target)
        inner.style.backgroundImage = `url(${imgSrc})`
        outBox.classList.replace("d-none", "d-flex");
    })
}
next.addEventListener("click", function () {
    nextElement();
})
function nextElement() {
    currentIndex++;
    if (currentIndex == imgs.length) {
        currentIndex = 0;
    }
    imgSrc = imgs[currentIndex].getAttribute("src");
    inner.style.backgroundImage = `url(${imgSrc})`
}


prev.addEventListener("click", function () {
    prevElement();
})
function prevElement() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = imgs.length - 1;
    }
    imgSrc = imgs[currentIndex].getAttribute("src");
    inner.style.backgroundImage = `url(${imgSrc})`
}
close.addEventListener("click", closeElement)
function closeElement() {
    outBox.classList.replace("d-flex", "d-none");
}

document.addEventListener("keyup", function (e) {
    if (e.key == "ArrowRight") {
        nextElement();
    }
    else if(e.key == "Arrowleft") {
        prevElement();
    }
    else if(e.key == "Escape") {
        closeElement();
    }
})
outBox.addEventListener("click",function(e){
    if(e.target.getAttribute("id")=="outBox"){
        closeElement()
    }
})

