// Assignment Code
var generateBtn = document.querySelector("#generate");

//checkbox1
var checkbox1 = document.createElement('input');
checkbox1.type = "checkbox"; 
checkbox1.name = "name"; 
checkbox1.value = "value"; 
checkbox1.id = "id";
var label = document.createElement('label'); 
label.htmlFor = "id";
label.appendChild(document.createTextNode('Lowercase'));
checkBox1.appendChild(checkbox1); 
checkBox1.appendChild(label);

//checkbox2
var checkbox2 = document.createElement('input');
checkbox2.type = "checkbox"; 
checkbox2.name = "name"; 
checkbox2.value = "value"; 
checkbox2.id = "id";
var label = document.createElement('label'); 
label.htmlFor = "id";
label.appendChild(document.createTextNode('Uppercase'));
checkBox2.appendChild(checkbox2); 
checkBox2.appendChild(label);

//checkbox3
var checkbox3 = document.createElement('input');
checkbox3.type = "checkbox"; 
checkbox3.name = "name"; 
checkbox3.value = "value"; 
checkbox3.id = "id";
var label = document.createElement('label'); 
label.htmlFor = "id";
label.appendChild(document.createTextNode('Numerals'));
checkBox3.appendChild(checkbox3); 
checkBox3.appendChild(label);

//checkbox4
var checkbox4 = document.createElement('input');
checkbox4.type = "checkbox"; 
checkbox4.name = "name"; 
checkbox4.value = "value"; 
checkbox4.id = "id";
var label = document.createElement('label'); 
label.htmlFor = "id";
label.appendChild(document.createTextNode('Special Characters'));
checkBox4.appendChild(checkbox4); 
checkBox4.appendChild(label);


// var lowercaseCheckbox = document.querySelector('#lowercaseCheckbox')




//sees whether checkbox is checked
//function generatePassword() {
  //var x = document.getElementById("checkbox1").checked;
  //document.getElementById("apple").innerHTML = x;
//}

function generatePassword() {

  lowercaseCheckbox = document.querySelector('#lowercaseCheckbox')

}

// Variables for the character options
var withLowerCase = 'abcdefghijklmnopqrstuvwxyz';
var withUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var withNumeric = '1234567890';
var withSpecial = '!@#$%^&*()-_=+?.,';
var pass = "";


var bool1 = true;
var bool2 = false;
var bool3 = true;
var bool4 = true;

// Write password to the #password input
function writePassword() {
  
  //var charTypes = prompt("Please write which character types you would like: lowercase, capital, numeric, and/or special.")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
