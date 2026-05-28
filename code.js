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
// This function changes the text of the heading element to "I DECLARE WAR!" when called./