import { set_mobile, set_dekstop } from "./mobile-dekstop";

var viewportWidth = window.innerWidth;
var viewportHeight = window.innerHeight;

export function get_size(winWidth, winHeight, number) {
    console.log(is_dekstop)
    if (is_dekstop) {
        return Math.trunc(500 * number / winHeight) + 'vh'
    }
    return Math.trunc(500 * number / winWidth) + 'vw'
}

function handleResize() {
    viewportWidth = window.innerWidth;
    viewportHeight = window.innerHeight;

    if (is_dekstop && viewportWidth < viewportHeight) {
        is_dekstop = false;
        set_mobile();
        console.log("kjfezhbezk")
    }
    else if (!is_dekstop && viewportWidth > viewportHeight) {
        is_dekstop = true;
        set_dekstop();
    }
    let size = get_size(viewportWidth, viewportHeight, 3)
    console.log("Mé")
    //console.log('Window width:', viewportWidth);
    //console.log('Window height:', viewportHeight);
    document.querySelectorAll('.menu').forEach(function(menu) {
        menu.style.fontSize = 10 + (is_dekstop ? 'vh' : 'vw');
        menu.style.paddingLeft = size;
        menu.style.paddingRight = size;
    });
}

window.addEventListener('resize', handleResize);
window.onload = handleResize;