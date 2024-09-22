import { set_dekstop, set_mobile } from "./js/mobile-dekstop.js";
import { get_lang_file, set_lang } from "./js/language.js";
import "./js/button.js"
/*
    First, we check if we have a dekstop/device display, and we display it
*/

if (window.innerWidth < window.innerHeight)
        window.is_dekstop = false;

window.is_dekstop ? set_dekstop() : set_mobile();

await get_lang_file();
await set_lang();

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