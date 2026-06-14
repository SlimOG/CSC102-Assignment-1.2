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

// timer variable for moving meme
var memeTimer;

// starts the meme movement
function startMeme()
{
    // disables the start button
    document.getElementById("startButton").disabled = true;

    // enables the stop button
    document.getElementById("stopButton").disabled = false;

    // shows message
    document.getElementById("memeMessage").innerHTML = "The meme is moving.";

    // starts moving meme
    memeTimer = setInterval(moveMeme, 500);
}

// stops the meme movement
function stopMeme()
{
    // enables the start button
    document.getElementById("startButton").disabled = false;

    // disables the stop button
    document.getElementById("stopButton").disabled = true;

    // shows message
    document.getElementById("memeMessage").innerHTML = "The meme has stopped.";

    // stops moving meme
    clearInterval(memeTimer);
}

// moves the meme image
function moveMeme()
{
    // gets the meme image
    var meme = document.getElementById("memeimage");

    // creates random left position
    var leftPosition = Math.floor(Math.random() * 600);

    // creates random top position
    var topPosition = Math.floor(Math.random() * 400);

    // allows the meme to move
    meme.style.position = "absolute";

    // moves meme left and right
    meme.style.left = leftPosition + "px";

    // moves meme up and down
    meme.style.top = topPosition + "px";
}
// function checks if user input is a palindrome
function checkPalindrome()
{
    // gets the user input
    var userText = document.getElementById("palindromeInput").value;

    // gets the message area
    var message = document.getElementById("palindromeMessage");

    // gets the history area
    var history = document.getElementById("palindromeHistory");

    // checks if the user entered nothing
    if (userText == "")
    {
        // shows validation message
        message.innerHTML = "Please enter a word or phrase.";

        // stops the form from refreshing
        return false;
    }

    // removes spaces and makes text lowercase
    var cleanText = userText.replaceAll(" ", "").toLowerCase();

    // creates an empty reverse word
    var reverseText = "";

    // loop goes backward through the clean text
    for (var i = cleanText.length - 1; i >= 0; i--)
    {
        // adds each letter to reverse text
        reverseText = reverseText + cleanText[i];
    }

    // checks if clean text equals reverse text
    if (cleanText == reverseText)
    {
        // shows palindrome message
        message.innerHTML = userText + " is a palindrome.";
    }

    // runs if text is not a palindrome
    else
    {
        // shows not palindrome message
        message.innerHTML = userText + " is not a palindrome.";
    }

    // adds the checked word to the page history
    history.innerHTML = history.innerHTML + "<p>You checked: " + userText + "</p>";

    // clears the input box so user can enter another word
    document.getElementById("palindromeInput").value = "";

    // stops the form from refreshing
    return false;
}

// connects the palindrome form to the function without addEventListener
document.getElementById("palindromeForm").onsubmit = checkPalindrome;