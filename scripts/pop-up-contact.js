var contactBtn = document.querySelector(".contacts .button");
var contactPopup = document.querySelector(".pop-up-contact");
var contactPopupCloseBtn = contactPopup.querySelector(".close-button");
var contactForm = contactPopup.querySelector("form");

var contactName = contactPopup.querySelector(".pop-up-contact-form-name input");
var contactEmail = contactPopup.querySelector(".pop-up-contact-form-email input");
var contactMessage = contactPopup.querySelector(".pop-up-contact-form-message textarea");

contactForm.noValidate = true;

contactBtn.addEventListener("click", function (evt){
    contactPopup.classList.add("pop-up-show");
    contactName.focus();
});

contactPopupCloseBtn.addEventListener("click", function (){
    contactPopup.classList.remove("pop-up-show");
    contactPopup.classList.remove("pop-up-error");
});

window.addEventListener("keydown", function (evt){
    if (evt.key === "Esc" || evt.key === "Escape") {
        if (contactPopup.classList.contains("pop-up-show")){
            evt.preventDefault();
            contactPopup.classList.remove("pop-up-show");
            contactPopup.classList.remove("pop-up-error");
        }
    }
});

contactForm.addEventListener("submit", function (evt){
    if (!contactName.value || !contactEmail.value || !contactMessage.value) {
        evt.preventDefault();
        contactPopup.classList.remove("pop-up-error");
        contactPopup.offsetWidth = contactPopup.offsetWidth;
        contactPopup.classList.add("pop-up-error");
        if (!contactName.value) { contactName.focus(); }
        else { if (!contactEmail.value) { contactEmail.focus(); }
        else { contactMessage.focus(); } }
    }
});