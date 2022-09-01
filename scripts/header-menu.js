var menuBtn = document.querySelector(".catalog-opener");
var menu = document.querySelector(".header-catalog");

menuBtn.addEventListener("click", function (){
    menu.classList.toggle("header-catalog-show");
});

document.addEventListener("mouseup", function (evt){
    if (menu.classList.contains("header-catalog-show")){
        if ( !(menu === evt.target) && !(menu.contains(evt.target))
            && !(menuBtn === evt.target) ){
            menu.classList.remove("header-catalog-show");
        }
    }
});