// "Height" "Width" "Margin Top" "Margin Right" "Margin Bottom" "Margin left"

const info_dekstop = ['85vh', '20vw', '10vh', '90vw', '10vh', '0'];
const info_mobile = ['15vh', '100vw', '10vh', '0', '80vh', '0'];

const content_dekstop = ['85vh', '80vw', '10vh', '0', '10vh', '20vw'];
const content_mobile = ['75vh', '100vw', '20vh', '0', '10vh', '0'];

const content_info_hide_dekstop = ['85vh', '100vw', '10vh', '0%', '10vh', '0%'];
const content_info_hide_mobile = ['85vh', '100vw', '10vh', '0', '10vh', '0'];

const elem_to_change_id = ["name", "surname", "phone", "content", "bottom", "info button", "network button", "lang button"];

/*
    Those array will be used with the function set_parameters -> less code to write
*/

window.is_dekstop = true;
window.is_info_open = true;

const lang_url = "http://localhost:3000/content/"

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
    lang_url,
    elem_to_change_id
}