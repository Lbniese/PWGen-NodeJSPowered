// querySelectors
const display = document.querySelector('#text');
const button = document.querySelector('#gen');
const sliderValue = document.querySelector('#slider');
const includeSymbols = document.querySelector('#includeSymbolsSwitch');
const includeNumbers = document.querySelector('#includeNumbersSwitch');
const includeUppercaseLetters = document.querySelector('#includeUppercaseLettersSwitch');

// characters that will be used for a password
let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';

// behaviour for when button is clicked
// depending on the different switches the chars used to generate a password will change
button.onclick = () => {
  if (!includeSymbols.checked && includeNumbers.checked && includeUppercaseLetters.checked) {
    chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  }

  if (!includeSymbols.checked && !includeNumbers.checked && includeUppercaseLetters.checked) {
    chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  if (includeSymbols.checked && includeNumbers.checked && includeUppercaseLetters.checked) {
    chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
  }

  if (includeSymbols.checked && !includeNumbers.checked && includeUppercaseLetters.checked) {
    chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+~`|}{[]:;?><,./-=';
  }

  if (!includeSymbols.checked && includeNumbers.checked && !includeUppercaseLetters.checked) {
    chars = 'abcdefghijklmnopqrstuvwxyzA0123456789';
  }

  if (!includeSymbols.checked && !includeNumbers.checked && !includeUppercaseLetters.checked) {
    chars = 'abcdefghijklmnopqrstuvwxyz';
  }

  if (includeSymbols.checked && includeNumbers.checked && !includeUppercaseLetters.checked) {
    chars = 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
  }

  if (includeSymbols.checked && !includeNumbers.checked && !includeUppercaseLetters.checked) {
    chars = 'abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+~`|}{[]:;?><,./-=';
  }

  // for-loop that generates a psssword from chars by selecting random chars until it reaches defined slider/password length (sliderValue)
  let randomPassword = '';
  for (let i = 0; i < sliderValue.value; i++) {
    randomPassword += chars.charAt(
      Math.floor(Math.random() * chars.length),
    );
  }
  display.value = randomPassword;
};

// Select display and execute "Copy"
function copy() {
  display.select();
  document.execCommand('copy');
}
