// Assignment code here
function generatePassword() {
  var password = "";
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
      var alphabet = "abcdefghijklmnopqrstuvwxyz";
      var password_array = [];
      var i = 0;
      while (i < password_length) {
        if (lower_case && i < password_length) {
          i = i + 1;
          // add lowercase letter to password_array
          password_array.push(
            alphabet[Math.floor(Math.random() * alphabet.length)]
          );
        }
        if (upper_case && i < password_length) {
          i = i + 1;
          // add uppercase letter to password_array
          password_array.push(
            alphabet[Math.floor(Math.random() * alphabet.length)].toUpperCase()
          );
        }
        if (numbers && i < password_length) {
          i = i + 1;
          // add number to password_array
          password_array.push(Math.floor(Math.random() * 10));
        }
        if (special_characters && i < password_length) {
          i = i + 1;
          var special = [
            "`",
            "~",
            "!",
            "@",
            "'",
            '"',
            "#",
            "$",
            ".",
            ",",
            "%",
            "^",
            "&",
            "*",
            "(",
            ")",
            "-",
            "_",
            "=",
            "+",
            ";",
            ":",
            "[",
            "{",
            "]",
            "}",
            "|",
            "?",
            "/",
            "<",
            ">",
          ];
          // add special character to password_array
          password_array.push(
            special[Math.floor(Math.random() * special.length)]
          );
        }
      }
      //scramble password_array & convert to string "password"
      password = password_array.join("");
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
