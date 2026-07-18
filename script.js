window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {
        nav.style.background = "#5a3a22";
    } else {
        nav.style.background = "rgba(0,0,0,.45)";
    }
});