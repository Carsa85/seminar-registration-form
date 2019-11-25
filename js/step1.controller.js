var step1 = document.querySelector("#step_1");

var attendeeNumberSelector = document.querySelector("#num_attendees");
var attendeeContainer = document.querySelector("#attendee_container");

const initStep1 = () => {
    for (let i = 1; i <= attendeeNumberSelector.children.length - 1; i++) {
        let attendeeWrapInput = document.querySelector("#attendee_" + i + "_wrap > input");
        attendeeWrapInput.setAttribute("required", true);
        attendeeWrapInput.addEventListener('keyup', checkValidityStep1)
    }

    attendeeNumberSelector.addEventListener('change', changeAtendeeNumber);
};

const checkValidityStep1 = () => {
    let isValid = true;
    if (parseInt(attendeeNumberSelector.value, 10) === 0) {
        isValid = false;
    } else {
        for (let i = 1; i <= attendeeNumberSelector.children.length - 1; i++) {
            let attendeeWrap = document.querySelector("#attendee_" + i + "_wrap");
            let attendeeWrapInput = document.querySelector("#attendee_" + i + "_wrap > input");
            if (attendeeWrap && attendeeWrapInput) {
                if (!attendeeWrapInput.validity.valid) {
                    isValid = false;
                }
            }
        }

    }

    if (isValid) {
        document.querySelector("#step1_result").setAttribute("class", "completed");
        step2.removeAttribute("disabled");
        checkValidityStep2();
    } else {
        document.querySelector("#step1_result").setAttribute("class", "");
        step2.setAttribute("disabled", true);
        step3.setAttribute("disabled", true);
    }
}

const changeAtendeeNumber = (e) => {

    attendeeContainer.setAttribute("class", "");
    setTimeout(() => {
        for (let i = 1; i <= attendeeNumberSelector.children.length - 1; i++) {
            let attendeeWrap = document.querySelector("#attendee_" + i + "_wrap");
            let attendeeWrapInput = document.querySelector("#attendee_" + i + "_wrap > input");
            if (i <= e.target.value) {
                attendeeWrapInput.setAttribute("required", true);
                attendeeWrapInput.removeAttribute("disabled");
                attendeeWrap.setAttribute("class", "show");
            } else {
                attendeeWrapInput.removeAttribute("required");
                attendeeWrapInput.setAttribute("disabled", true);
                attendeeWrapInput.value = ''
                attendeeWrap.setAttribute("class", "hide");

            }
        }

        e.target.value === 0
            ? attendeeContainer.setAttribute("class", "")
            : attendeeContainer.setAttribute("class", "loaded")


        checkValidityStep1()

    }, 350)

}