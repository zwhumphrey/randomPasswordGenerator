// Assignment code here

function generatePassword() {
    console.log("Button clicked")
    
  // 1.prompt user for passwrod criteria
      //a. password lenght between 8-128 
  
      //b. lower case
  function lowerCase(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
  console.log(lowerCase());
  
      //c. uppercase
  function upperCase(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }
  console.log(upperCase());
      
    
      //d. numbers
  function num(){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }
  console.log(num());
          
         
  
  
      //e. special characters
  
  
   
  //2. validate the input.
  //3. generate password based on critreria
  
  
  
  //4. display password
    return "Generated Password here!";
  
  }
  
  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  