const display = document.querySelector("#text");
const button = document.querySelector("#gen");
const sliderValue = document.querySelector("#slider");
const includeSymbols = document.querySelector("#includeSymbolsSwitch");
const includeNumbers = document.querySelector("#includeNumbersSwitch");
const includeUppercaseLetters = document.querySelector("#includeUppercaseLettersSwitch");

let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";

button.onclick = () => {
    if (!includeSymbols.checked && includeNumbers.checked && includeUppercaseLetters.checked) {
        chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    }

    if (!includeSymbols.checked && !includeNumbers.checked && includeUppercaseLetters.checked) {
        chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (includeSymbols.checked && includeNumbers.checked && includeUppercaseLetters.checked) {
        chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    }

    if (includeSymbols.checked && !includeNumbers.checked && includeUppercaseLetters.checked) {
        chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+~`|}{[]:;?><,./-=";
    }

    if (!includeSymbols.checked && includeNumbers.checked && !includeUppercaseLetters.checked) {
        chars = "abcdefghijklmnopqrstuvwxyzA0123456789";
    }

    if (!includeSymbols.checked && !includeNumbers.checked && !includeUppercaseLetters.checked) {
        chars = "abcdefghijklmnopqrstuvwxyz";
    }

    if (includeSymbols.checked && includeNumbers.checked && !includeUppercaseLetters.checked) {
        chars = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    }

    if (includeSymbols.checked && !includeNumbers.checked && !includeUppercaseLetters.checked) {
        chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+~`|}{[]:;?><,./-=";
    }

    

    let randomPassword = "";
    for (let i = 0; i < sliderValue.value; i++) {
        randomPassword = randomPassword + chars.charAt(
            Math.floor(Math.random() * chars.length)
        );
    }
    display.value = randomPassword;
}

function copy() {
    display.select();
    document.execCommand("copy");
}

