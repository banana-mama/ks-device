var servicesBtnWrappers = document.querySelectorAll(".services-button");
var servicesBtns = document.querySelectorAll(".services-button button");
var headerServicesLinks = document.querySelectorAll(".header .services-nav a")
var footerServicesLinks = document.querySelectorAll(".footer .services-nav a");
var serviceDel = document.querySelector(".services-desc-item-delivery");
var serviceWar = document.querySelector(".services-desc-item-warranty");
var serviceCr = document.querySelector(".services-desc-item-credit");

function deliveryActive() {
    serviceWar.classList.remove("services-desc-item-show");
    serviceCr.classList.remove("services-desc-item-show");
    serviceDel.classList.add("services-desc-item-show");

    servicesBtnWrappers[1].classList.remove("active");
    servicesBtnWrappers[2].classList.remove("active");
    servicesBtnWrappers[0].classList.add("active");
}

function warrantyActive(){
    serviceDel.classList.remove("services-desc-item-show");
    serviceCr.classList.remove("services-desc-item-show");
    serviceWar.classList.add("services-desc-item-show");

    servicesBtnWrappers[0].classList.remove("active");
    servicesBtnWrappers[2].classList.remove("active");
    servicesBtnWrappers[1].classList.add("active");
}

function creditActive(){
    serviceWar.classList.remove("services-desc-item-show");
    serviceDel.classList.remove("services-desc-item-show");
    serviceCr.classList.add("services-desc-item-show");

    servicesBtnWrappers[0].classList.remove("active");
    servicesBtnWrappers[1].classList.remove("active");
    servicesBtnWrappers[2].classList.add("active");
}

servicesBtns[0].addEventListener("click", function (){
    deliveryActive();
});

headerServicesLinks[0].addEventListener("click", function (){
    deliveryActive();
});

footerServicesLinks[0].addEventListener("click", function (){
    deliveryActive();
});

servicesBtns[1].addEventListener("click", function (){
    warrantyActive();
});

headerServicesLinks[1].addEventListener("click", function (){
    warrantyActive();
});

footerServicesLinks[1].addEventListener("click", function (){
    warrantyActive();
});

servicesBtns[2].addEventListener("click", function (){
    creditActive();
});