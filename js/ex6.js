/* Q6
6.	Strings and Functions
Write a program that asks the user for a word.  It then displays the following:
•	Number of vowels in the word (a, e, i, o, u, and y)
•	Whether your word is a palindrome or not
o	A palindrome is a word that is spelled the same way both forward and backwards (e.g. radar, level, madam)

Examples:
Input: Madam
Output: Madam contains 2 vowels and is a palindrome

Input: JavaScript
Output: JavaScript contains 3 vowels and is not a palindrome

Notes:  
a.	Create two functions per the following.
This can be solved many ways.  I want to make sure you know how to work with "black box" functions.  Given an input, the function returns an output.  The user is not concerned with the details of how the output is calculated or the function displaying output in a specific format.  The user gets the returned value and uses it as needed.
i.	Compute number of vowels.  Use the following
Input:  Word (given above)
Return: Number of vowels
ii.	Determine if the word is a palindrome.  Use the following
Input:  Word (given above)
Return: True/False or Yes/No or similar
b.	Program is case insensitive


*/

// program to count the number of vowels in a string

function countVowel(str) { 

    // find the count of vowels
    const count = str.match(/[aeiou]/gi).length;

    // return number of vowels
    return count;
}

// take input
const string = prompt('Enter a string: ');

const result = countVowel(string);

console.log(result);





// program to check if the string is palindrome or not

function checkPalindrome(string) {

    // find the length of a string
    const len = string.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            return 'The word you typed was not a palindrome';
        }
    }
    return 'The word you typed was a palindrome.';
}


// call the function
const value = checkPalindrome(string);

console.log(value);