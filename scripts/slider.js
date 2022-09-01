var slides = document.querySelectorAll(".slide-wrapper");
var radio1 = document.querySelector(".slider-switcher [value=first-slide]");
var radio2 = document.querySelector(".slider-switcher [value=second-slide]");
var radio3 = document.querySelector(".slider-switcher [value=third-slide]");

radio1.addEventListener("click", function (){
    slides[1].classList.remove("slide-show");
    slides[2].classList.remove("slide-show");
    slides[0].classList.add("slide-show");
});

radio2.addEventListener("click", function (){
    slides[0].classList.remove("slide-show");
    slides[2].classList.remove("slide-show");
    slides[1].classList.add("slide-show");
});

radio3.addEventListener("click", function (){
    slides[0].classList.remove("slide-show");
    slides[1].classList.remove("slide-show");
    slides[2].classList.add("slide-show");
});