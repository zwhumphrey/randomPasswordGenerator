// Assignment code here


  // 1.prompt user for password criteria



      //a. password lenght between 8-128 


  
      //b. lower case, upper case, number, special characters.
      var lowerCaseArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
      var upperCaseArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
      var numberArr = ["0","1","2","3","4","5","6","7","8","9"];
      var specialCharArr = ["!","@","#","$","%","^","&","*","(",")","<",">","/","?","+","]","[","|","`","~"];
      
   
  //2. validate the input.

  function generatePassword() {
    // generate password based on prompts
    var password = "";
    for(var i = 0; i < passwordLength; i++){
      var randomcombo = Math.floor(Math.random() * choiceArr.length);
      password = password + choiceArr[randomcombo];
    }
    return password;

  }
  

 
  //4. display password


  
  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input
  function writePassword() {
    var correctprompts = getPrompts();

    if(correctprompts) {
      var password = generatePassword();
      var passwordText = document.querySelector("#password");
      passwordText.value = password;
   }
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  