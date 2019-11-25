var step2 = document.querySelector("#step_2");

var companyNameToggleOn = document.querySelector("#company_name_toggle_on");
var companyNameToggleOff = document.querySelector("#company_name_toggle_off");

var companyNameWrap = document.querySelector("#company_name_wrap");
var companyNameInput = document.querySelector("#company_name_wrap > input");

var specialAccommodationsToggleOn = document.querySelector("#special_accommodations_toggle_on");
var specialAccommodationsToggleOff = document.querySelector("#special_accommodations_toggle_off");

var specialAccomodationsWrap = document.querySelector("#special_accommodations_wrap");
var specialAccomodationstexTarea = document.querySelector("#special_accommodations_wrap > textarea");

const initStep2 = () => {
    step2.setAttribute("disabled", true);

    companyNameInput.addEventListener('keyup', checkValidityStep2);
    specialAccomodationstexTarea.addEventListener('keyup', checkValidityStep2);

    companyNameToggleOn.addEventListener('change', activeCompanyName);
    companyNameToggleOff.addEventListener('change', deactiveCompanyName);
    specialAccommodationsToggleOn.addEventListener('change', activeSpecialAccomodations);
    specialAccommodationsToggleOff.addEventListener('change', deactiveSpecialAccomodations);
};

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
