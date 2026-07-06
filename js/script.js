const toggler = document.querySelector(".navbar-toggler");
const collapse = document.getElementById("navbarNav");

collapse.addEventListener("shown.bs.collapse", function () {
    document.querySelector(".open-icon").style.display = "none";
    document.querySelector(".close-icon").style.display = "inline";
});

collapse.addEventListener("hidden.bs.collapse", function () {
    document.querySelector(".open-icon").style.display = "inline";
    document.querySelector(".close-icon").style.display = "none";
});