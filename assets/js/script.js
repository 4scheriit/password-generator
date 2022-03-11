// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Array of user input character options
var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "~"];

// Inform user on how to use password gen
window.alert("Generate a random password based on your criteria, press \"generate password\" to start!")

//Function for password length
var passLength = function()
{
  // Prompt user for password length
  var userLength = window.prompt("Choose password length between 8 and 128 characters");

  // Convert user input to int
  userLength = parseInt(userLength);

  // Check if user has input the proper conditions
  if (userLength === "" || userLength === null) 
  {
    window.alert("You need to provide a number! Please try again.");
    return passLength();
  }
  else if (userLength < 8 || userLength > 128)
  {
    window.alert("You need to provide a number between 8 and 128! Please try again.");
    return passLength();
  }
  else if (!Number.isInteger(userLength))
  {
    window.alert("You need to provide a number! Please try again.");
    return passLength();
  }

  return userLength
}

// Write password to the #password input
function writePassword() 
{
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
