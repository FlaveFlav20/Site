import { content_dekstop, content_mobile, content_info_hide_dekstop, 
        content_info_hide_mobile, info_mobile, info_dekstop } from "./global_var.js";

// "Height" "Width" "Margin Top" "Margin Right" "Margin Bottom" "Margin left"

const header_CSS = document.querySelector('header');
const footer_CSS = document.querySelector('footer');

function set_parameters(elem, array) {
    elem.style.height = array[0];
    elem.style.width = array[1];
    elem.style.top = array[2];
    elem.style.right = array[3];
    elem.style.bottom = array[4];
    elem.style.left = array[5];

    //elem.style.fontSize = window.is_dekstop ? window.size_text_dekstop : window.size_text_mobile;
}

const content = document.getElementById("content");

function set_display_info() {
    window.is_info_open = true;
    info.style.display = 'flex';
    if (window.is_dekstop) {
        set_parameters(content, content_dekstop);
    }
    else {
        set_parameters(content, content_mobile);
    }
}

function set_close_info() {
    window.is_info_open = false;
    info.style.display == 'none'
    if (window.is_dekstop) {
        set_parameters(content, content_info_hide_dekstop);
    }
    else {
        set_parameters(content, content_info_hide_mobile);
    }
}

const info = document.getElementById("info");

function set_mobile() {
    /*info.style.fontSize = window.size_text_mobile;
    content.style.fontSize = window.size_text_mobile;
    header_CSS.fontSize = window.size_text_mobile;
    footer_CSS.fontSize = window.size_text_mobile;*/
    window.is_dekstop = false;
    set_parameters(info, info_mobile);

    if (window.is_info_open) {
        info.style.display = 'flex';
        set_display_info();
    }
    else {
        info.style.display = 'none';
        set_close_info();
    }
}

function set_dekstop() {
    /*info.style.fontSize = window.size_text_dekstop;
    content.style.fontSize = window.size_text_dekstop;
    header_CSS.fontSize = window.size_text_dekstop;
    footer_CSS.fontSize = window.size_text_dekstop;*/
    window.is_dekstop = true;
    set_parameters(info, info_dekstop);

    if (window.is_info_open) {
        info.style.display = 'flex';
        set_display_info();
    }
    else {
        info.style.display = 'none';
        set_close_info();
    }
}

export {
    set_parameters,
    set_display_info,
    set_close_info,
    set_dekstop,
    set_mobile
}