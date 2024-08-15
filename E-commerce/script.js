// Script.js
// open the "SIDE BAR"
var side_bar=document.querySelector(".side-bar")
function opensidebar(){
    side_bar.style.left="0%"
}
// close the "SIDE BAR"
function sidebarhide(){
    side_bar.style.left="-60%"
}
var product_container=document.getElementById("products")
var search=document.getElementById("search")
var productlist=product_container.querySelectorAll("div")
search.addEventListener("keyup",function(event){
    var enteredvalue=event.target.value.toUpperCase()
    for(var i=0;i<productlist.length;i++){
        var productname=productlist[i].querySelector("p").textContent.toUpperCase()
        if(productname.indexOf(enteredvalue)<0){
            productlist[i].style.display="none"
        }
        else{
            productlist[i].style.display="block"
        }
    }
})