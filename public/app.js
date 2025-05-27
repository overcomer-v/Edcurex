
const navBtn = document.getElementById("nav-btn");
const navMenu = document.getElementById("nav-menu");

navBtn.addEventListener("click",(e)=>{
    e.stopPropagation();
    navMenu.classList.toggle("hidden");
});

navBtn.addEventListener("click",(e)=>{
    e.stopPropagation();
})

document.addEventListener("click",()=>{
    if(!navMenu.classList.contains("hidden")){
        navMenu.classList.add("hidden");
    }
})