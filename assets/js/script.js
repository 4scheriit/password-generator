// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Array of user input character options
var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "~"];

// Inform user on how to use password gen
window.alert("Generate a random password based on your criteria, press \"generate password\" to start!");

//Function for password length
function getLength()
{
  // Prompt user for password length
  var setLength = window.prompt("Choose password length between 8 and 128 characters");

  // Convert user input to int
  setLength = parseInt(setLength);

  // Check if user has input the proper conditions
  if (setLength === "" || setLength === null) 
  {
    window.alert("You need to provide a number! Please try again.");
    return getLength();
  }
  else if (setLength < 8 || setLength > 128)
  {
    window.alert("You need to provide a number between 8 and 128! Please try again.");
    return getLength();
  }
  else if (!Number.isInteger(setLength))
  {
    window.alert("You need to provide a number! Please try again.");
    return getLength();
  }

  return setLength
}

// Function for user to select password criteria
function getCriteria()
{
  var userUpper = confirm("Add upper case letters to password? Cancel for no.");
  var userLower = confirm("Add lower case letters to password? Cancel for no.");
  var userNumeric  = confirm("Add numbers to password? Cancel for no");
  var userSpecial = confirm("Add special characters to password? Cancel for no");

  // Variable to store boolean values of user criteria
  var criteria =
  {
    userUpper: userUpper,
    userLower: userLower,
    userNumeric: userNumeric,
    userSpecial: userSpecial
  }
  
  // Check if user has selected at least one option
  if ((!userUpper) && (!userLower) && (!userNumeric) && (!userSpecial))
  {
    window.alert("You need to select at least one option!")
    return getCriteria();
  }

  return criteria;
}

// Function to generate password
function generatePassword() 
{
  
  var userLength = getLength();
  var userCriteria = getCriteria();

  // Create an empty array to fill with user criteria
  var passArray = [];
  var passString = "";

  // Check which user criteria was selected and add it to the password array
  if (userCriteria.userUpper) 
  {
    for (var i of upper)
    {
      passArray.push(i);
    }
  }

  if (userCriteria.userLower) 
  {
    for (var i of lower)
    {
      passArray.push(i);
    }
  }

  if (userCriteria.userNumeric) 
  {
    for (var i of numeric)
    {
      passArray.push(i);
    }
  }

  if (userCriteria.userSpecial) 
  {
    for (var i of special)
    {
      passArray.push(i);
    }
  }

  // Generate the password
  for (var i = 0; i < userLength; i++) 
  {
    passString += passArray[Math.floor(Math.random() * passArray.length)]; 
  }

  return passString;
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
