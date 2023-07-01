function show_section(id) {
    document.querySelectorAll('.form-section').forEach(e => {
        e.classList.remove('current');
    });

    document.querySelector('#part-' + id).classList.add('current');
}

function update_step(id) {
    document.querySelectorAll(".form-progress-step").forEach(e => {
        e.classList.remove("current-step")
    })


    document.querySelector("#step-" + id).classList.add("current-step")
}

function validationCurrentSection() {
    // let current_part = document.querySelector(".form.current")
}

if (localStorage.getItem("sign_mode")) {
}
else {
    localStorage.setItem("sign_mode", "mode0")
}
switch_sign_mode(localStorage.getItem("sign_mode"))

function switch_sign_click() {
    var sign_mode = localStorage.getItem("sign_mode")
    if (sign_mode == "mode0") {
        sign_mode = "mode1"
    }
    else {
        sign_mode = "mode0"
    }

    localStorage.setItem("sign_mode", sign_mode)
    switch_sign_mode(sign_mode)
}

function switch_sign_mode(mode) {
    let sign_up = document.getElementById("multi-part")
    let sign_in = document.getElementById("sign-in-form")
    let greeting = document.getElementById("greeting")
    let sign_in_btn = document.getElementById("sign-in-btn")

    if (mode == "mode0") {
        sign_in.classList.remove("sign-here")
        sign_up.classList.add("sign-here")
        greeting.innerText = "Welcome!"
        sign_in_btn.innerText = "Sign in"
    }
    else {
        sign_up.classList.remove("sign-here")
        sign_in.classList.add("sign-here")
        greeting.innerText = "Welcome Back!"
        sign_in_btn.innerText = "Sign up"
    }
}

export { show_section, update_step, switch_sign_click }