// Assignment code here
function generatePassword() {
  let password_length = prompt(
    "What length should you password be? Enter a number between 8 and 128:"
  );
  // validate that password length is an INT and not outside of range 8-128
  if (
    password_length < 8 ||
    password_length > 128 ||
    password_length % 1 != 0
  ) {
    alert(
      "Your password must be no less than 8 and no more than 128 characters. It cannot be a decimal. Try Again."
    );
    // validate password length is a number, or throw error
  } else if (isNaN(password_length)) {
    alert(
      "Enter a number for length. No letters, special characters, or decimals."
    );
  } else {
    // ask what characters to use for password
    let lower_case = confirm(
      "Would you like to use lowercase letters in your password?"
    );
    let upper_case = confirm(
      "Would you like to use uppercase letters in your password?"
    );
    let numbers = confirm("Would you like to use numbers in your password?");
    let special_characters = confirm(
      "Would you like to use special characters in your password?"
    );

    let yeses = [lower_case, upper_case, numbers, special_characters];
    console.log(yeses);
    if (yeses.includes(true)) {
      alert("generate a password");
    } else
      alert(
        "You must include at least one character set to generate a password."
      );
    return password;
  }
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
