// ====== HAMBURGER MENU ======
document.addEventListener("DOMContentLoaded", function () {
    const hamIcon = document.querySelector('.ham-icon');
    const navBar = document.querySelector('.nav-menu');

    if (hamIcon && navBar) {
        hamIcon.addEventListener('click', () => {
        navBar.classList.toggle("active");
        });
    }
});


const tabs = document.querySelectorAll(".tab");
    const contents = document.querySelectorAll(".content");

    tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
    // deactivate all tabs
    tabs.forEach((t) => t.classList.remove("active"));
    // hide all content
    contents.forEach((c) => c.classList.remove("content-active"));

    // activate clicked tab
    tab.classList.add("active");
    // show matching content
    const target = document.getElementById(tab.dataset.target);
    if (target) {
        target.classList.add("content-active");
    }
    });
    });

    // form submit
    document.getElementById("consultationForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Your consultation request has been submitted successfully!");
    e.target.reset();
    });