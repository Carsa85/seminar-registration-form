var step1 = document.querySelector("#step_1");
var step2 = document.querySelector("#step_2");
var step3 = document.querySelector("#step_3");

var attendeeNumberSelector = document.querySelector("#num_attendees");
var attendeeContainer = document.querySelector("#attendee_container");

var companyNameToggleOn = document.querySelector("#company_name_toggle_on");
var companyNameToggleOff = document.querySelector("#company_name_toggle_off");

var companyNameWrap = document.querySelector("#company_name_wrap");
var companyNameInput = document.querySelector("#company_name_wrap > input");

var specialAccommodationsToggleOn = document.querySelector("#special_accommodations_toggle_on");
var specialAccommodationsToggleOff = document.querySelector("#special_accommodations_toggle_off");

var specialAccomodationsWrap = document.querySelector("#special_accommodations_wrap");
var specialAccomodationstexTarea = document.querySelector("#special_accommodations_wrap > textarea");

var rock = document.querySelector("#rock");
var submitButton = document.querySelector("#submit_button");


const initForm = () => {
    submitButton.setAttribute("disabled", true);

    step2.setAttribute("disabled", true);
    step3.setAttribute("disabled", true);

    for (let i = 1; i <= attendeeNumberSelector.children.length - 1; i++) {
        let attendeeWrapInput = document.querySelector("#attendee_" + i + "_wrap > input");
        attendeeWrapInput.setAttribute("required", true);
        attendeeWrapInput.addEventListener('keyup', checkValidityStep1)
    }

    companyNameInput.addEventListener('keyup', checkValidityStep1);
    specialAccomodationstexTarea.addEventListener('keyup', checkValidityStep1);
};

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

const activeCompanyName = (e) => {

    if (e.target.checked) {
        companyNameWrap.setAttribute("class", "active")
        companyNameInput.setAttribute("required", true);
    }
    checkValidityStep2();
}

const deactiveCompanyName = (e) => {
    if (e.target.checked) {
        companyNameWrap.setAttribute("class", "")
        companyNameInput.removeAttribute("required");
        companyNameInput.value = "";
    }
    checkValidityStep2();
}


const activeSpecialAccomodations = (e) => {
    if (e.target.checked) {
        specialAccomodationsWrap.setAttribute("class", "active")
        specialAccomodationstexTarea.setAttribute("required", true);
    }
    checkValidityStep2();
}

const deactiveSpecialAccomodations = (e) => {
    if (e.target.checked) {
        specialAccomodationsWrap.setAttribute("class", "")
        specialAccomodationstexTarea.removeAttribute("required");
        specialAccomodationstexTarea.value = "";
    }
    checkValidityStep2();
}

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


const checkValidityStep2 = (e) => {
    let isValid = true;

    if (companyNameToggleOn.checked) {
        if (!companyNameInput.validity.valid) {
            isValid = false;
        }
    }

    if (specialAccommodationsToggleOn.checked) {
        if (!specialAccomodationstexTarea.validity.valid) {
            isValid = false;
        }
    }

    if (!companyNameToggleOn.checked && !companyNameToggleOff.checked) {
        isValid = false;
    }

    if (!specialAccommodationsToggleOn.checked && !specialAccommodationsToggleOff.checked) {
        isValid = false;
    }

    if (isValid) {
        document.querySelector("#step2_result").setAttribute("class", "completed");
        step3.removeAttribute("disabled");
    } else {
        document.querySelector("#step2_result").setAttribute("class", "");
        step3.setAttribute("disabled", true);
    }

}

const setButtonStatus = (e) => {
    e.target.checked
        ? submitButton.removeAttribute("disabled")
        : submitButton.setAttribute("disabled", true)
}

attendeeNumberSelector.addEventListener('change', changeAtendeeNumber);
companyNameToggleOn.addEventListener('change', activeCompanyName);
companyNameToggleOff.addEventListener('change', deactiveCompanyName);
specialAccommodationsToggleOn.addEventListener('change', activeSpecialAccomodations);
specialAccommodationsToggleOff.addEventListener('change', deactiveSpecialAccomodations);
rock.addEventListener('change', setButtonStatus);

initForm();

