// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(i, j, k, l) {

}

// Variables for the character options
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numeric = '1234567890';
var special = '!@#$%^&*()-_=+?.,';
var pass = "";

var bool1 = true;
var bool2 = false;
var bool3 = true;
var bool4 = true;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
