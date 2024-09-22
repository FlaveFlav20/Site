import { lang_url,elem_to_change_id } from "./global_var.js"

window.lang = "fr_FR"

let file_lang = []

async function get_lang_file() {
    try {
        let response = await fetch(lang_url + window.lang);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        let buffer = "";
        try {
            buffer = await response.text();
        } catch {
            console.error(error.message);
            return;
        }
        file_lang = buffer.split('\n');
    } catch (error) {
    console.error(error.message);
  }
}

async function find_content(id) {
    for (let i = 0; i < file_lang.length; i++) {
        let line = file_lang[i].split(":");
        if (line.length != 3) {
            return;
        }
        else if (line[0] === id && line[1] === "raw") {
            return line[2]; 
        }
        else if (line[0] === id && line[1] === "file") {
            try {
                let response = await fetch(lang_url + "file/" + id + "_" + window.lang + ".html");
                try {
                    return await response.text();
                } catch {
                    return;
                }
            } catch {
                return;
            }
        }
        else if (line[0] == id) {
            return;
        }
    }
}

/*
    set_lang:
        - arg: file_lang + elem_to_change_id
*/

async function set_lang() {
    if (file_lang.length === 0) {
        console.error("No lang found");
        return;
    }
    for (let i = 0; i < elem_to_change_id.length; i++) {
        const elem = document.getElementById(elem_to_change_id[i]);
        let response = await find_content(elem_to_change_id[i]);
        elem.value = response;
        elem.innerHTML = response;
    }
}

export {
    get_lang_file,
    set_lang,
    find_content
}