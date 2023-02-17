/* Q1
Calculator
Create a function per the following requirements:
Input
Ask the user for the following
 Number1
 Number2
 Mathematical Operation (+, -, *, /)
Assume valid input
Return
The result of the mathematical operation in the following format:
Number1 operation Number2 = result.
Examples:
Input:  1, 2, +
Output: 1 + 2 = 3
Input: 12, 3, /
Output: 12 / 3 = 4
*/

let final_ans = 0
var input_1 = prompt("Give a number.");
var input_2 = prompt("Give a second number.");

var input_operator = prompt("Type a mathematical operator (+, -, *, /)");
if (input_operator == "+") {
    final_ans = parseInt(input_1) + parseInt(input_2)
}
else if (input_operator == "-") {
    final_ans = parseInt(input_1) - parseInt(input_2)
}
else if (input_operator == "*") {
    final_ans = parseInt(input_1) * parseInt(input_2)
}
else if (input_operator == "/") {
    final_ans = parseInt(input_1) / parseInt(input_2)
}
console.log("Your answer is " + final_ans)