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

export { show_section, update_step }