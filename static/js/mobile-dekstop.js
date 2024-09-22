import { content_dekstop, content_mobile, info_mobile, info_dekstop, image_mobile, image_dekstop } from "./global_var.js";

// "Height" "Width" "Margin Top" "Margin Right" "Margin Bottom" "Margin left"

const header_CSS = document.querySelector('header');
const footer_CSS = document.querySelector('footer');

/*
    set_parameters : to easyly set parameters to deal with mobile/dekstop display
        arg: HTML element + array ("Height" "Width" "Margin Top" "Margin Right" "Margin Bottom" "Margin left")
*/

function set_parameters(elem, array) {
    elem.style.height = array[0];
    elem.style.width = array[1];
    elem.style.top = array[2];
    elem.style.right = array[3];
    elem.style.bottom = array[4];
    elem.style.left = array[5];

}

/*
    set_display_info:
        - arg: none
        - To display content section whenn info section is here by dealing with mobile/dekstop display
*/

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

/*
    set_display_info:
        - arg: none
        - To display content section whenn info section is NOT here by dealing with mobile/dekstop display
*/

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

/*
    set_mobile: Set all parameters for mobile display
*/

const picture = document.getElementById("photo");
const info = document.getElementById("main-content");
const photo = document.getElementById("photo");

function set_mobile() {
    window.is_dekstop = false;
    set_parameters(info, info_mobile);
    info.style.flexDirection = 'row';
    info.style.justifyContent = 'center';
    document.querySelectorAll('.elem_info').forEach(function(elem_info) {
        elem_info.style.paddingLeft = '5vw';
        elem_info.style.paddingRight = '5vw';
        elem_info.style.paddingTop = '0';
        elem_info.style.paddingBottom = '0';
    });

    if (window.is_info_open) {
        info.style.display = 'flex';
        set_display_info();
    }
    else {
        info.style.display = 'none';
        set_close_info();
    }
    set_parameters(picture, image_mobile);
}

/*
    set_dekstop: Set all parameters for dekstop display
*/

function set_dekstop() {
    window.is_dekstop = true;
    set_parameters(info, info_dekstop);
    info.style.flexDirection = 'column';
    info.style.justifyContent = 'start';
    document.querySelectorAll('.elem_info').forEach(function(elem_info) {
        elem_info.style.paddingLeft = '0';
        elem_info.style.paddingRight = '0';
        elem_info.style.paddingTop = '5vh';
        elem_info.style.paddingBottom = '5vh';
    });

    if (window.is_info_open) {
        info.style.display = 'flex';
        set_display_info();
    }
    else {
        info.style.display = 'none';
        set_close_info();
    }

    set_parameters(picture, image_dekstop);
}

export {
    set_parameters,
    set_display_info,
    set_close_info,
    set_dekstop,
    set_mobile
}