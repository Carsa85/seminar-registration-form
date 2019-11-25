var step3 = document.querySelector("#step_3");

var rock = document.querySelector("#rock");
var submitButton = document.querySelector("#submit_button");


const initStep3 = () => {

    submitButton.setAttribute("disabled", true);
    step3.setAttribute("disabled", true);
    rock.addEventListener('change', setButtonStatus);
};

const setButtonStatus = (e) => {
    e.target.checked
        ? submitButton.removeAttribute("disabled")
        : submitButton.setAttribute("disabled", true)
}