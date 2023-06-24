import { show_section, update_step } from "./register.js";

let form_section = document.querySelectorAll(".form-section");



function previous_section(prev_id) {
    show_section(prev_id)
    update_step(prev_id)
}

function next_section(next_id) {
    show_section(next_id)
    update_step(next_id)
}

document.querySelectorAll(".next-button").forEach((element, index) => {
    element.addEventListener("click", () => { next_section(index + 2) })
})
document.querySelectorAll(".back-button").forEach((element, index) => {
    element.addEventListener("click", () => { previous_section(index + 1) })
})
