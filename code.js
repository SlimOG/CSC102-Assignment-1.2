function declarewar()
{
    
    var warSound = new Audio("war.mp3");
    warSound.play();

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

// this function checks the student skill level
function checkSkillLevel()
{
    // gets the student name from the form
    var studentName = document.getElementById("studentName").value;

    // gets the concept count from the form
    var conceptCount = document.getElementById("conceptCount").value;

    // gets the message area from the page
    var skillsMessage = document.getElementById("skillsMessage");

    // gets the concept list area from the page
    var conceptList = document.getElementById("conceptList");

    // trims extra spaces from the student name
    studentName = studentName.trim();

    // changes the student name to uppercase
    var upperName = studentName.toUpperCase();

    // creates an object to store student information
    var student = {
        name: upperName,
        concepts: Number(conceptCount)
    };

    // checks if the name field is empty
    if (student.name == "")
    {
        // displays validation message using innerHTML
        skillsMessage.innerHTML = "Please enter your name.";

        // stops the form from refreshing
        return false;
    }

    // checks if the number is invalid
    if (isNaN(student.concepts) || student.concepts < 0 || student.concepts > 6)
    {
        // displays validation message using innerHTML
        skillsMessage.innerHTML = "Please enter a number from 0 to 6.";

        // stops the form from refreshing
        return false;
    }

    // checks if the student understands many concepts
    if (student.concepts >= 5)
    {
        // displays advanced message using innerHTML
        skillsMessage.innerHTML = student.name + ", you are showing strong programming understanding.";
    }

    // checks if the student understands some concepts
    else if (student.concepts >= 3)
    {
        // displays intermediate message using innerHTML
        skillsMessage.innerHTML = student.name + ", you are building a solid foundation.";
    }

    // runs if the student understands fewer concepts
    else
    {
        // displays beginner message using innerHTML
        skillsMessage.innerHTML = student.name + ", keep practicing the basics.";
    }

    // creates an array of programming concepts
    var concepts = ["Decision Logic", "Loops", "String Manipulation", "Validation", "Functions", "Objects"];

    // starts the concept list output
    var output = "<h4>Programming Concepts Used:</h4>";

    // loops through the programming concepts
    for (var i = 0; i < concepts.length; i++)
    {
        // adds each concept to the output
        output = output + "<p>" + concepts[i] + "</p>";
    }

    // displays the concept list using innerHTML
    conceptList.innerHTML = output;

    // stops the form from refreshing
    return false;
}

// connects the skills form to the function without addEventListener
document.getElementById("warButton").onclick = declarewar;