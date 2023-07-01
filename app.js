import { show_section, update_step, switch_sign_click } from "./register.js";

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

document.getElementById("sign-in-btn").addEventListener("click", () => {
    switch_sign_click()
})

// let switch_mode_btn = document.getElementById('switch-mode')
// switch_mode_btn.addEventListener("click", () => {
//     const style = getComputedStyle(switch_mode_btn)
//     switch_mode_btn.style.rotate = '180deg'
// })

