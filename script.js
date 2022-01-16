// Given --> Assignment Code
var generateBtn = document.querySelector("#generate");

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Write password to the #password input

// Define Password Character Strings
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*+=-_~";


// Empy Password strings
var tempPasswordChar="";
var genPassword = ""


function generatePassword() {
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  var passwordLength = window.prompt("Choose a number of characters for your password (8 Min, 128 Max)"); 
  if (passwordLength<8 ||passwordLength>128){
    alert("Invalid number of characters");
    return generatePassword();
  }
  // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  var charLow = window.confirm("Does your password need to contain lowercase character?");
  var charUpp = window.confirm("Does your password need to contain uppercase characters?");
  var charNum = window.confirm("Does your password need to contain numeric characters?");
  var charSpec = window.confirm("Does your password need to contain special characters?");

  // THEN my input should be validated and at least one character type should be selected
  if(!charLow && !charUpp && !charNum && !charSpec )
  {
    alert("Atleast one character type should be selected")
    return generatePassword();

  } 
  // Check password characters type selected and add to selection if applicaple
   if(charLow === true)
    {
     tempPasswordChar += lowercaseChar;
    }

    if(charUpp === true)
    {
     tempPasswordChar += uppercaseChar;
    }
    if(charNum === true)
    {
     tempPasswordChar += numberChar;
    }
    if(charSpec === true)
    {
     tempPasswordChar += specialChar;
    }


// Iterate through available selction of characters randomly to generate appropriate length passsword
  for (let i=0; i<passwordLength; i++){

    genPassword += tempPasswordChar[Math.floor(Math.random() * tempPasswordChar.length )];

  }
  return genPassword;

}


// Given --> Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Given --> Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
