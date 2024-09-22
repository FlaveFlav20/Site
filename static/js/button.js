import { get_lang_file, set_lang } from "./language.js";
import { find_content } from "./language.js";

/*
    button_home.addEventListener: To trigger the home button and activate info section
*/

window.is_info = false;

const info = document.getElementById("main-content");

const button_network = document.getElementById("network button");
button_network.addEventListener("click", async function() {

    if (window.is_info) {
        window.is_info = false;
        button_network.innerHTML = await find_content("network button");
        info.innerHTML = await find_content("main-content");
        return;
    }
    else {
        window.is_info = true;
        button_network.innerHTML = await find_content("main button");
        info.innerHTML = await find_content("network-content");
        return;
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
    lang_win.style.display = 'none';
});

const lang_en_EN = document.getElementById("en_EN");
lang_en_EN.addEventListener("click", async function() {
    if (window.lang === "en_EN") {
        return;
    }
    window.lang = "en_EN";
    await get_lang_file();
    await set_lang();
    lang_win.style.display = 'none';
});