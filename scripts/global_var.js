/*
    Those array will be used with the function set_parameters -> less code to write
*/

// "Height" "Width" "Margin Top" "Margin Right" "Margin Bottom" "Margin left"

const info_dekstop = ['90vh', '20vw', '5vh', '90vw', '10vh', '0'];
const info_mobile = ['5vh', '100vw', '5vh', '0', '80vh', '0'];

const content_dekstop = ['90vh', '55vw', '5vh', '20vw', '10vh', '20vw'];
const content_mobile = ['90vh', '100vw', '11vh', '0', '5vh', '0'];

const image_dekstop = ["90vh", "15vw", "5vh", "0", "5vh", "80vw"]
const image_mobile = ["15vh", "20vw", "80vh", "10vw", "5vh", "75vw"]

const elem_to_change_id = ["main-content", "content", "bottom", "network button", "lang button"];

/*
    is_dekstop => To deal with dekstop/mobil view
    is_info_open => To deal with info/network section switching
*/

window.is_dekstop = true;
window.is_info_open = true;

/*
    lang_url => where the program will get traduction
*/

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