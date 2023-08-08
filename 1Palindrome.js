/**
 * # **Problem 1: Palindrome Checker**

**Function Name: `isPalindrome`**

**Step-by-step description:**

1. **Define a function called `isPalindrome` that takes a string as an argument.**
2. **Validate that the input is a string and not empty. If it is not a string or empty, return an error message.**
3. **Remove any non-alphanumeric characters (e.g., spaces, punctuation) from the input string and convert it to lowercase.**
4. **Check if the modified string is a palindrome (reads the same backward as forward).**
5. **Return `true` if the string is a palindrome, otherwise return `false`.**

**Example:**

```
jsCopy code
console.log(isPalindrome("A man, a plan, a canal, Panama!")); // Output: true
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false
console.log(isPalindrome(12321)); // Output: "Invalid input! Please provide a valid string."

```
 */

function isPalindrome(element) {
    if (typeof element !== 'string' || element == '') {
        return "Invalid input! Please provide a valid string.";
    } else {
        let planeElement = element.toLowerCase().replace(/[^0-9a-z]/gi, '').split("");
        let reversePlaneElement = planeElement.reverse();
        reversePlaneElement = planeElement.join('');
        reversePlaneElement = planeElement;
        if (planeElement === reversePlaneElement) {
            return true;
        } else {
            return false;
        }
    }
}
console.log(isPalindrome("racecarss"));