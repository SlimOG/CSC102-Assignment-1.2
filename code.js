function declarewar()


{
    
    var num1 = Math.floor(Math.random() * 13) + 1;

    var num2 = Math.floor(Math.random() * 13) + 1;

    var winner;

    if (num1 > num2)
   {

document.getElementById("warwinner").innerHTML = 
"Player 1 wins with a " + num1 + " against Player 2's " + num2 + "!";
 }
    else if (num2 > num1)
    {
        document.getElementById("warwinner").innerHTML = 
"Player 2 wins with a " + num2 + " against Player 1's " + num1 + "!";
    }
    else
    {
        document.getElementById("warwinner").innerHTML = 
"It's a tie!";
    }

}

function validateinput()
{
    // Gets first name from form
    var firstName = document.getElementById("fname").value;

    // Gets last name from form
    var lastName = document.getElementById("lname").value;

    // Gets zip code from form
    var zipCode = document.getElementById("zipcode").value;

    // Combines first and last name
    var fullName = firstName + " " + lastName;

    // Checks if full name is longer than 20 characters
    if (fullName.length > 20)
    {
        document.getElementById("validationmessage").innerHTML =
        "Warning: Full name cannot be more than 20 characters.";

        return false;
    }

    // Checks if zip code is exactly 5 digits
    if (!/^[0-9]{5}$/.test(zipCode))
    {
        document.getElementById("validationmessage").innerHTML =
        "Warning: Zip code must contain exactly 5 digits.";

        return false;
    }

    // Displays secret message if valid
    document.getElementById("validationmessage").innerHTML =
    "Welcome " + fullName +
    "! Secret Message: Never stop learning and building.";

    return false;
}
document.getElementById("myForm").onsubmit = validateinput;