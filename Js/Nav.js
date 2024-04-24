document.addEventListener("DOMContentLoaded", function(){
    const btnBurger = document.getElementById("btnburger");
    const baton = document.getElementById("center");
    const burger = document.getElementById("burger");
    baton.classList.add("dline");
    btnBurger.addEventListener("touchstart",function(){
        if(burger.classList.contains("show")){
            console.log("container")
            baton.classList.add("animBurgerNone");
            btnBurger.classList.add("scaleBurgerNone");
            baton.classList.remove("animBurger");
            btnBurger.classList.remove("scaleBurger");
            burger.classList.add("show1");
        }
        else{
            console.log("no collapse")
            baton.classList.add("animBurger");
            btnBurger.classList.add("scaleBurger");
            baton.classList.remove("animBurgerNone");
            btnBurger.classList.remove("scaleBurgerNone");
            burger.classList.remove("show1");
        }

    })
})