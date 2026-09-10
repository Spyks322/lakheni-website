document.addEventListener("DOMContentLoaded", function () {

    console.log("Lakheni Technologies website loaded successfully.");


    /* MOBILE NAVIGATION */

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", function () {

            navLinks.classList.toggle("active");

            const menuIsOpen =
                navLinks.classList.contains("active");

            menuToggle.setAttribute(
                "aria-expanded",
                menuIsOpen
            );

        });

    }


    /* CONTACT / QUOTATION FORM */

    const quotationForm = document.querySelector("form");

    if (quotationForm) {

        quotationForm.addEventListener("submit", function (event) {

            event.preventDefault();

            /* Your form validation code goes here */

        });

    }

});