const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".nav");
const contact_link = document.getElementById("#contact");

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navBar.classList.toggle("active");
    
    

})

document.querySelectorAll(".link").forEach(n => n.addEventListener("click", ()=>{
    hamburger.classList.remove("active");
    navBar.classList.remove("active");

}))
window.onscroll = function() {myFunction()};
function myFunction() {
    hamburger.classList.remove("active");
    navBar.classList.remove("active");
}
