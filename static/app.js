import { set_close_info, set_display_info } from "./js/mobile-dekstop.js";
import { set_dekstop, set_mobile } from "./js/mobile-dekstop.js";

/*
    First, we check if we have a dekstop/device display, and we display it
*/

if (window.innerWidth < window.innerHeight)
        window.is_dekstop = false;

window.is_dekstop ? set_dekstop() : set_mobile();

/*
    button_home.addEventListener: To trigger the home button et activate info section
*/

const button_home = document.getElementById("button_display_menu");
button_home.addEventListener("click", function() {
    if (window.is_info_open) {
        set_close_info()
    }
    else {
        set_display_info()
    }
});

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