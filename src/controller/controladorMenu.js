let menu = document.getElementById("menu")

window.addEventListener("scroll", function(){
     
    if(document.documentElement.scrollTop > 100){
       menu.classList.add("menuSecundario")
       menu.classList.remove("menuPricipal")
    }else{
        menu.classList.remove("menuPrincipal")
        menu.classList.add("menuSecundario")
    }
     
})
