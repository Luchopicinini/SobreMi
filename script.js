document.addEventListener("DOMContentLoaded", function () {

    const faders = document.querySelectorAll('.fade-in');

    function revealOnScroll() {
        const triggerBottom = window.innerHeight - 100;

        faders.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < triggerBottom) {
                section.classList.add('show');
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    const header = document.querySelector("header");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    const techItems = document.querySelectorAll(".tech-item");

    techItems.forEach(function (item) {
        item.addEventListener("click", function () {

            techItems.forEach(function (el) {
                if (el !== item) {
                    el.classList.remove("active");
                }
            });

            item.classList.toggle("active");
        });
    });

});