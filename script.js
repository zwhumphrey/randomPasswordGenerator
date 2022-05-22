// Assignment code here


// 1. prompt user for password criteria
//  a. password length between 8-128
//  b. lower case, upper case, number, special characters.
// 2. validate input
// 3. Generate password based on prompts
// 4. display password

// array of characters to select from in different variables
var lowerCaseArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
var upperCaseArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
var numberArr = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharArr = ["!","@","#","$","%","^","&","*","(",")","<",">","/","?","+","]","[","|","`","~"];


function getPrompts() {
    choiceArr = [];

    // a.  this defines pasword length
    passwordLength = parseInt(window.prompt("How long do you want your password to be? 8- 128 Characters."));

    if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128){
        // if you pick outside the allotted numbers alert individual to try again
      alert("Password length is required to be between 8 and 128.  Please try again.");
      return false;
    }

    //  do you want lower case, upper case, numbers, and special characters?
    if (confirm("Would you like lowercase letters in your password?")) {
      choiceArr = choiceArr.concat(lowerCaseArr);
    }
    if (confirm("Would you like uppercase letters in your password?")) {
      choiceArr = choiceArr.concat(upperCaseArr);
    }    
    if (confirm("Would you like numbers in your password?")) {
      choiceArr = choiceArr.concat(numberArr);
    }    
    if (confirm("Would you like special characters in your password?")) {
      choiceArr = choiceArr.concat(specialCharArr);
    }
    // this has to be true
    return true;
}

// generate password based on prompts
function generatePassword() {
 
    var password = "";
    for(var i = 0; i < passwordLength; i++){
      var randomcombo = Math.floor(Math.random() * choiceArr.length);
      password = password + choiceArr[randomcombo];
    }
    return password;

}
    
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
  
// Write password to the #password input
function writePassword() {
    //added variable 'correctPrompts' to make sure we validate the inputs
    var correctPrompts = getPrompts();

    if(correctPrompts) {
      var password = generatePassword();
      var passwordText = document.querySelector("#password");
      // if everything is correct will display random password
      passwordText.value = password;
    }
}
  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
  