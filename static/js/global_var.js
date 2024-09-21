// "Height" "Width" "Margin Top" "Margin Right" "Margin Bottom" "Margin left"

const info_dekstop = ['80vh', '20%', '10vh', '90%', '10vh', '0%'];
const info_mobile = ['10vh', '100%', '10vh', '0%', '80vh', '0%'];

const content_dekstop = ['80vh', '80%', '10vh', '0%', '10vh', '20%'];
const content_mobile = ['70vh', '100%', '20vh', '0%', '10vh', '0%'];

const content_info_hide_dekstop = ['80vh', '100%', '10vh', '0%', '10vh', '0%'];
const content_info_hide_mobile = ['80vh', '100%', '10vh', '0%', '10vh', '0%'];

/*
    Those array will be used with the function set_parameters -> less code to write
*/

window.is_dekstop = true;
window.is_info_open = false;

/*
    We must know if we have a dekstop or a mobile by displaying
    We must know if the info bar (left) is displaying
*/

export {
    info_dekstop,
    info_mobile,
    content_dekstop,
    content_mobile,
    content_info_hide_dekstop,
    content_info_hide_mobile,
}