// Menu Toggle

const menu = document.querySelector('.menu').addEventListener("click", ()=>{
    document.querySelector('nav').classList.toggle("left-6");
    document.querySelector('nav').classList.toggle("-left-24");
    document.querySelector('.menu').classList.toggle('fa-angle-left')
})