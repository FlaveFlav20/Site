import { set_dekstop, set_mobile } from "./mobile-dekstop.js";
import { get_lang_file, set_lang } from "./language.js";
import "./button.js"
/*
    First, we check if we have a dekstop/device display, and we display it
*/

if (window.innerWidth < window.innerHeight)
        window.is_dekstop = false;

window.is_dekstop ? set_dekstop() : set_mobile();

await get_lang_file();
await set_lang();

if (window.is_dekstop) {
    document.querySelectorAll('.elem_info').forEach(function(elem_info) {
        elem_info.style.paddingLeft = '0';
        elem_info.style.paddingRight = '0';
        elem_info.style.paddingTop = '5vh';
        elem_info.style.paddingBottom = '0';
    });
}
else {
    document.querySelectorAll('.elem_info').forEach(function(elem_info) {
        elem_info.style.paddingLeft = '5vw';
        elem_info.style.paddingRight = '5vw';
        elem_info.style.paddingTop = '0';
        elem_info.style.paddingBottom = '0';
    });
}
/*
    handleResize: To check if we mobil/dekstop when changing display
*/

function handleResize() {
    if (window.is_dekstop && window.innerWidth < window.innerHeight) {
      //  console.log("Hey")
        set_mobile();
    }
    else if (!window.is_dekstop && window.innerWidth > window.innerHeight) {
        //console.log("JHo")
        set_dekstop();
    }
}

window.addEventListener('resize', handleResize);
window.onload = handleResize;