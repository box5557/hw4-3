/* Q4
4.	Arrays 
Write a program the creates the following array, then calculates and shows the following:
•	Sum of all array values
•	Minimum value
•	Maximum value

const values = [3, 11, 7, 2, 9, 10];
	
Note:
Don't use array methods to compute the above.
Iterate through the array to compute the requested values.	

*/
var values = [3, 11, 7, 2, 9, 10];
console.log("This is my array: " + values)


const values2 = [3, 11, 7, 2, 9, 10].reduce(add, 0); // with initial value to avoid when the array is empty


function add(accumulator, a) {
  return accumulator + a;
}
console.log("The sum of the array numbers is " + values2);

var max_num = Math.max(...values)
var min_num = Math.min(...values)
console.log("The minimum number is " + min_num);
console.log("The max number is " + max_num);

