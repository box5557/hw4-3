/* Q2
2.	Function – Convert Fahrenheit to Celsius 
Create a function per the following:
Input: Fahrenheit temperature
Return: Fahrenheit temperature converted to Celsius

Notes:
a.	You must return the Celsius equivalent.  Do not display it in the body of the function.  
The user may want to display it in a custom format or display it to an HTML page vs. the console.
b.	Fahrenheit to Celsius conversion formula is:
C = (F – 32) * 5/9
Example
212 Fahrenheit.  
Celsius = (212 – 32) * 5/9 =  100

Test it with the following input.  
Input: 32, 98.7, 212
Output: Use three different output formats (calling the function three different times).  For example (you may modify these):
•	32 degrees Fahrenheit = 0 degrees Celsius
•	Temperature of 98.7 Fahrenheit is equivalent to 37 degrees Celsius
•	Water boiling temperate is 212 Fahrenheit or 100 Celsius

*/

var farenheit_input = prompt("Input your Farenheit number and I will convert it to Celcius");
var celcius_conversion = (parseInt(farenheit_input) - 32) * 5/9
var celcius_conversion = celcius_conversion.toFixed(1)
console.log(celcius_conversion)
console.log(farenheit_input + " degrees Fahrenheit = " + celcius_conversion + " degrees Celsius")
console.log("Temperature of " + farenheit_input + " Fahrenheit is equivalent to " + celcius_conversion + " degrees Celsius")
console.log("You input: " + farenheit_input + "F.\nThis is equivalent to: " + celcius_conversion + "C")
