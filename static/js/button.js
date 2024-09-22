import { set_close_info, set_display_info } from "./mobile-dekstop.js";
import { get_lang_file, set_lang } from "./language.js";

/*
    button_home.addEventListener: To trigger the home button and activate info section
*/


const button_home = document.getElementById("info button");
button_home.addEventListener("click", function() {
    if (window.is_info_open) {
        set_close_info()
    }
    else {
        set_display_info()
    }
});

/*
    lang_win.addEventListener: To trigger the lang button and display lang section
*/
const lang_button = document.getElementById("lang button");
const lang_win = document.getElementById("language");
lang_button.addEventListener("click", function() {
    if (lang_win.style.display === 'none' || lang_win.style.display === '') {
        lang_win.style.display = 'flex';
    } else {
        lang_win.style.display = 'none';
    }
});

const lang_fr_FR = document.getElementById("fr_FR");
lang_fr_FR.addEventListener("click", async function() {
    if (window.lang === "fr_FR") {
        return;
    }
    window.lang = "fr_FR";
    await get_lang_file();
    await set_lang();
});

const lang_en_EN = document.getElementById("en_EN");
lang_en_EN.addEventListener("click", async function() {
    if (window.lang === "en_EN") {
        return;
    }
    window.lang = "en_EN";
    await get_lang_file();
    await set_lang();
});