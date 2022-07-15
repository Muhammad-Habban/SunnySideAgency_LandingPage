// var x;
// x = document.getElementById('links');

// function toggle() {
//     if (x.style.display = "none") {
//         x.style.display = "flex";
//     };
//     if (x.style.display = "flex") {
//         x.style.display = "none";
//     };
// };

function toggle() {
    const navs = document.querySelectorAll('#links')

    navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
}