function pushHandler(obj) {
    let nav = document.querySelector(".nav-extended");
    nav.classList.toggle("fade-out");
    nav.classList.toggle("fade-in");

    let hamburger = document.querySelector(".hamburger");
    hamburger.classList.toggle("is-active");

    // document.querySelector(".view-container").classList.toggle("fade-in");
}