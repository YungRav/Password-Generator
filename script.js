//DOM Elements
const passwordEl = document.getElementById('password');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numberEl = document.getElementById('numbers');
const specialEl = document.getElementById('special');
const generateBtn = document.getElementById('generate');

//randomLower function
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
console.log(getRandomLower());


//randomUpper function
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
console.log(getRandomUpper())

//randomNumber function
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
console.log(getRandomNumber())

//randomSpecial function
function getRandomSpecial() {
  return String.fromCharCode(Math.floor(Math.random() * 14) + 33);
}
console.log(getRandomSpecial());
//randomFunc
const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  special: getRandomSpecial
};

//generate event listen
//generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener('click', () => {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numberEl.checked;
  const hasSpecial = specialEl.checked;
  
  passwordEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSpecial, length);

});
// generate password function
function generatePassword(lower, upper, number, special, length) {
  //1.initialize password variable
  //2.filter out unchecked types
  //3.loop over length call generator function for each type
  //4. add final password to password var and return

  let generatePassword = ' ';

  const typesCount = lower + upper + number + special;

  const typesArr = [{lower}, {upper}, {number}, {special}].filter(
    item => Object.values(item)[0]);

  if(typesCount == 0){
    return '';
  }
  
  for(let i=0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];

      generatePassword += randomFunc[funcName]();
      console.log(generatePassword)
    });
  }

  const finalPassword = generatePassword.slice(0, length)

  //shuffle string
  //function getRandomInt(n) {
   // return Math.floor(Math.random() * n);
  //}
  //function shuffle(finalPassword) {
    //var arr = finalPassword.split('');
    //var n = arr.length;

    //for(var i=0; i<n-1; ++i){
     // var j = getRandomInt(n);
      
      //  var temp = arr[i];
      //  arr[i] = arr[j];
     //   arr[j] = temp;
  //  }
  //}
 // finalPassword = arr.join('');
  return finalPassword;
  
  
 
};

// Assignment Code
//var generateBtn = document.querySelector("#generate");





// var lowercaseCheckbox = document.querySelector('#lowercaseCheckbox')



//sees whether checkbox is checked
//function generatePassword() {
  //var x = document.getElementById("checkbox1").checked;
  //document.getElementById("apple").innerHTML = x;
//}



// Variables for the character options


// Write password to the #password input
//function writePassword() {
  
 // var charTypes = prompt("Please write which character types you would like: lowercase, capital, numeric, and/or special.")
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;

//}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);


//