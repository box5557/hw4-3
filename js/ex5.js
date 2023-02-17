/* Q5
5.	List of words
Write a program that asks the user for a word until the user types "stop" (case insensitive: e.g.: STOP, stop, Stop, StOp, …).  The program then shows each of these words, except "stop".  If "stop" is the first word entered, display an appropriate message.
Notes:
•	Use a loop to accept user input and exit when "stop" is entered (case insensitive)
•	If "stop" is not entered, add the words to an array
•	When "stop" is entered, display the words in the array.

Examples:
Input: hello, goodbye, JavaScript, stop
Output:
You entered the following words:
hello
goodbye
JavaScript

Input: Stop
Output (below or similar):
No words to display, Stop was the first word entered.

*/
const words = [];
var user_input_num_1 = prompt("Type in any word you want. Or type 'stop'");
if (user_input_num_1 == "stop") {
    console.log("You stopped it before entering any words.")
}
else {
    while (user_input_num_1 != "stop") {
        words.push(user_input_num_1);
        var user_input_num_1 = prompt("Type in any word you want. Or type 'stop'");
        if (user_input_num_1.toLowerCase() === "stop") {
            user_input_num_1 = "stop"
        }
    }
    console.log(words)
}