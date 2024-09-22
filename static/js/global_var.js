// "Height" "Width" "Margin Top" "Margin Right" "Margin Bottom" "Margin left"

const info_dekstop = ['90vh', '20vw', '5vh', '90vw', '10vh', '0'];
const info_mobile = ['5vh', '100vw', '5vh', '0', '80vh', '0'];

const content_dekstop = ['90vh', '55vw', '5vh', '20vw', '10vh', '20vw'];
const content_mobile = ['85vh', '100vw', '11vh', '0', '5vh', '0'];

const image_dekstop = ["90vh", "15vw", "5vh", "0", "5vh", "80vw"]
const image_mobile = ["15vh", "100vw", "75vh", "0", "10vh", "30vw"]

const elem_to_change_id = ["main-content", "content", "bottom", "network button", "lang button"];

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
    lang_url,
    elem_to_change_id,
    image_dekstop,
    image_mobile
}