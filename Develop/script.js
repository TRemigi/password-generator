// Assignment code here
var selectedChars = [];
var userPassword = {
  length: " ",
  characters: " "
}
var lowerChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numericChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var specialChars = ['!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '^', '_', '`', '{', '|', '}', '~', ];

var generatePassword = function () {
  selectedChars = [];
  userPassword.length = 0;
  userPassword.characters = " ";
  userPassword.length = window.prompt("Choose length of password. Please enter a number from 8 to 128.");
  userPassword.length = parseInt(userPassword.length);
  console.log(userPassword.length);

  if (userPassword.length > 7 && userPassword.length < 129) {
    var lowerConfirm = window.confirm("Would you like to include lower-case characters?");
    console.log(lowerConfirm);

    if (lowerConfirm) {
      selectedChars = selectedChars.concat(lowerChars);
      console.log(selectedChars);
    }
    var upperConfirm = window.confirm("Would you like to include upper-case characters?");
    if (upperConfirm) {
      selectedChars = selectedChars.concat(upperChars);
      console.log(selectedChars);
    }
    var numericConfirm = window.confirm("Would you like to include numbers?");
    if (numericConfirm) {
      selectedChars = selectedChars.concat(numericChars);
      console.log(selectedChars);
    }
    var specialConfirm = window.confirm("Would you like to include special characters?");
    if (specialConfirm) {
      selectedChars = selectedChars.concat(specialChars);
      console.log(selectedChars);
    }
    if (
      (!lowerConfirm) &&
      (!upperConfirm) &&
      (!numericConfirm) &&
      (!specialConfirm)) {
      window.alert("You must choose at least one character type.");
      return writePassword();
    }
  } else {
    window.alert("You must enter a number between 8 and 128.");
    return writePassword();
  }
  for (i = 0; i < userPassword.length; i++) {
    var passChar = [selectedChars[Math.floor(Math.random() * selectedChars.length)]];
    userPassword.characters = userPassword.characters.concat(passChar);
    console.log(userPassword.characters);
  }
  console.log(userPassword.characters);
  return userPassword.characters;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);