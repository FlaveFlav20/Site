const info_CSS = document.querySelector('.info');
const content_CSS = document.querySelector('.content');
const header_CSS = document.querySelector('header');
const footer_CSS = document.querySelector('footer');

const info = document.getElementById("info");
info.style.display ='none'
const content = document.getElementById("content");
const button_menu = document.getElementById("button_display_menu");

export function set_display_info()
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

export function set_close_info()
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

export function set_dekstop() {
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

export function set_mobile() {
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