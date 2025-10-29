const header = document.querySelector("header")
const hamburger = document.querySelector(".hamburger-lines")
hamburger.addEventListener('click', () => {
    header.classList.toggle("mobile-menu")
})