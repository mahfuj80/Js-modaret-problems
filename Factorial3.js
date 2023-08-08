/**
 * ## **Problem 3: Factorial Calculation**

**Function Name: `factorial`**

**Step-by-step description:**

1. **Define a function called `factorial` that takes a positive integer as an argument.**
2. **Validate that the input is a positive integer. If it is not, return an error message.**
3. **Use recursion to calculate the factorial of the input number.**
4. **Return the factorial value.**

**Example:**

```
jsCopy code
console.log(factorial(5)); // Output: 120 (5! = 5 * 4 * 3 * 2 * 1 = 120)
console.log(factorial(0)); // Output: 1 (0! is defined as 1)
console.log(factorial(-7)); // Output: "Invalid input! Please provide a positive integer."

```
 */

function factorial(number) {
    if (typeof number !== 'number' || number < 0) {
        return 'Give me a positive number that greater than zero(0)';
    } else if (number === 0 || number === 1) {
        return "Factorial is 1";
    } else {
        let factorial = 1;
        for (number; 1 <= number; number--) {
            factorial = factorial * number;
        }
        return factorial;

    }
}
const num = 5;
console.log(factorial(num));