// "Height" "Width" "Margin Top" "Margin Right" "Margin Bottom" "Margin left"

const info_dekstop = ['85vh', '20%', '10vh', '90%', '10vh', '0%'];
const info_mobile = ['15vh', '100%', '10vh', '0%', '80vh', '0%'];

const content_dekstop = ['85vh', '80%', '10vh', '0%', '10vh', '20%'];
const content_mobile = ['75vh', '100%', '20vh', '0%', '10vh', '0%'];

const content_info_hide_dekstop = ['85vh', '100%', '10vh', '0%', '10vh', '0%'];
const content_info_hide_mobile = ['85vh', '100%', '10vh', '0%', '10vh', '0%'];

/*
    Those array will be used with the function set_parameters -> less code to write
*/

window.is_dekstop = true;
window.is_info_open = true;

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