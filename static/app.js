// "Height" "Width" "Margin Top" "Margin Right" "Margin Bottom" "Margin left"

const info_dekstop = ['80vh', '20%', '10vh', '90%', '10vh', '0%'];
const info_mobile = ['10vh', '100%', '10vh', '0%', '80vh', '0%'];

const content_dekstop = ['80vh', '80%', '10vh', '0%', '10vh', '20%'];
const content_mobile = ['70vh', '100%', '20vh', '0%', '10vh', '0%'];

const content_info_hide_dekstop = ['80vh', '100%', '10vh', '0%', '10vh', '0%'];
const content_info_hide_mobile = ['80vh', '100%', '10vh', '0%', '10vh', '0%'];

var viewportWidth = window.innerWidth;
var viewportHeight = window.innerHeight;

var is_dekstop = true
var is_info_display = false

if (viewportHeight > viewportWidth) {
    is_dekstop = false
}

const info_CSS = document.querySelector('.info');
const content_CSS = document.querySelector('.content');
const header_CSS = document.querySelector('header');
const footer_CSS = document.querySelector('footer');

const info = document.getElementById("info");
info.style.display ='none'
const content = document.getElementById("content");
const button_menu = document.getElementById("button_display_menu");

function set_display_info()
{
    is_info_display = true
    console.log("Bahahaha1");
    if (is_dekstop) {
        content_CSS.style.width = content_dekstop[1];
        content_CSS.style.left = content_dekstop[5];
        return;
    }
    content_CSS.style.top = content_mobile[2];
    content_CSS.style.height = content_mobile[0];
}

function set_close_info()
{
    is_info_display = false
    console.log("Bahahaha");
    if (is_dekstop) {
        content_CSS.style.width = content_info_hide_dekstop[1];
        content_CSS.style.left = content_info_hide_dekstop[5];
        return;
    }
    content_CSS.style.height = content_info_hide_mobile[0];
    content_CSS.style.top = content_info_hide_mobile[2];
}

button_menu.addEventListener("click", function() {
    if (info.style.display == 'none') {
        info.style.display = 'flex';
        set_display_info()
        return;
    }
    info.style.display ='none';
    set_close_info()
});

function set_dekstop() {
    var size = Math.trunc(get_size(viewportWidth, viewportHeight, 3)) + 'vh'
    document.querySelectorAll('.menu').forEach(function(menu) {
        menu.style.fontSize = size;
        menu.style.paddingLeft = size;
        menu.style.paddingRight = size;
    });
    info_CSS.style.fontSize = size;
    content_CSS.style.fontSize = size;
    header_CSS.style.fontSize = size;
    footer_CSS.style.fontSize = size;
    console.log("Dekstop");

    info_CSS.style.height = info_dekstop[0];
    info_CSS.style.width = info_dekstop[1];
    info_CSS.style.top = info_dekstop[2];
    info_CSS.style.right = info_dekstop[3];
    info_CSS.style.bottom = info_dekstop[4];
    info_CSS.style.left = info_dekstop[5];

    content_CSS.style.height = content_dekstop[0];
    content_CSS.style.width = content_dekstop[1];
    content_CSS.style.top = content_dekstop[2];
    content_CSS.style.right = content_dekstop[3];
    content_CSS.style.bottom = content_dekstop[4];
    content_CSS.style.left = content_dekstop[5];

    if (is_info_display) {
        set_display_info()
    }
    else {
        set_close_info()
    }
}

function set_mobile() {
    var size = Math.trunc(get_size(viewportWidth, viewportHeight, 3)) + 'vw'
    document.querySelectorAll('.menu').forEach(function(menu) {
        menu.style.fontSize = size;
        menu.style.paddingLeft = size;
        menu.style.paddingRight = size;
    });
    info_CSS.style.fontSize = size;
    content_CSS.style.fontSize = size;
    header_CSS.style.fontSize = size;
    footer_CSS.style.fontSize = size;
    console.log("Mobile");

    info_CSS.style.height = info_mobile[0];
    info_CSS.style.width = info_mobile[1];
    info_CSS.style.top = info_mobile[2];
    info_CSS.style.right = info_mobile[3];
    info_CSS.style.bottom = info_mobile[4];
    info_CSS.style.left = info_mobile[5];

    content_CSS.style.height = content_mobile[0];
    content_CSS.style.width = content_mobile[1];
    content_CSS.style.top = content_mobile[2];
    content_CSS.style.right = content_mobile[3];
    content_CSS.style.bottom = content_mobile[4];
    content_CSS.style.left = content_mobile[5];

    if (is_info_display) {
        set_display_info()
    }
    else {
        set_close_info()
    }
}

function get_size(winWidth, winHeight, number) {
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