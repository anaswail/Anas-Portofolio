// Menu Toggle

const menu = document.querySelector('.menu').addEventListener("click", ()=>{
    document.querySelector('nav').classList.toggle("left-6");
    document.querySelector('nav').classList.toggle("-left-24");
    document.querySelector('.menu').classList.toggle('fa-angle-left')
})

// window onscroll

window.onscroll = ()=>{
    if(scrollY < 600){
        document.querySelector('.left-nav').classList.add("remove")
    }
    else if(scrollY >= 600){
        document.querySelector('.left-nav').classList.remove("remove");
        if(scrollY >= 600 && scrollY < 1200) {
            document.querySelector('.fa-circle-info').classList.add('text-[#b6b5ca]');
        }
        else{
            document.querySelector('.fa-circle-info').classList.remove('text-[#b6b5ca]');
            
        }
    }
    
    console.log(scrollY)
}
if(scrollY < 600){
    document.querySelector('.left-nav').classList.add("remove")
}
else if(scrollY >= 600){
    document.querySelector('.left-nav').classList.remove("remove")

}