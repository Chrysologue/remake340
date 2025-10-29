const DESKTOP_BREAKPOINT = 450;
let resizeTimeOut;

export function handleMobileMenu(header, hamburger, nav, body) {
    function toggleMenu() {
        header.classList.toggle("mobile-menu");
        body.classList.toggle("no-scroll", header.classList.contains("mobile-menu"))
    }
    hamburger.addEventListener('click', toggleMenu)
}

export function handleResize(header, body, nav) {
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeOut)
        body.classList.add("no-transition")
        header.classList.remove("mobile-menu")
        body.classList.remove("no-scroll");
        nav.classList.remove("menu-transition");
        resizeTimeOut = setTimeout(() => {
            body.classList.remove("no-transition")
        }, 250);
    })
    if (window.innerWidth >= DESKTOP_BREAKPOINT) {
        if (header.classList.contains("mobile-menu")) {
            header.classList.remove("mobile-menu")
            body.classList.remove("no-scroll")
        }
    }
}