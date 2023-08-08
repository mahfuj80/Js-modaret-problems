/**
 * ## **Problem 5: FizzBuzz**

**Function Name: `fizzBuzz`**

**Step-by-step description:**

1. **Define a function called `fizzBuzz` that takes a number `n` as an argument.**
2. **Validate that the input is a positive integer. If it is not, return an error message.**
3. **Use a loop to iterate from 1 to `n`.**
4. **For each number, check the following conditions:**
    - **If the number is divisible by 3, print "Fizz".**
    - **If the number is divisible by 5, print "Buzz".**
    - **If the number is divisible by both 3 and 5, print "FizzBuzz".**
    - **Otherwise, print the number itself.**

**Example:**

```
jsCopy code
fizzBuzz(15);
// Output:
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
console.log(fizzBuzz(-5)); // Output: "Invalid input! Please provide a positive integer."

Save to grepper

```
 */

function fizzBuzz(number) {
    if (number < 0 || typeof number !== 'number') {
        return "Invalid input! Please provide a positive integer.";
    } else {
        // for (number; number >= 0; number--) {
        //     if (number % 3 === 0 && number % 5 === 0) {

        //         console.log('FizzBuzz');
        //     } else if (number % 3 === 0) {
        //         console.log('Fizz');
        //     } else if (number % 5 === 0) {
        //         console.log('Buzz');
        //     } else {
        //         console.log(number);
        //     }
        // }

        // ---------------Alternative Way---------------------
        for (let i = 0; i <= number; i++) {
            if (i % 3 === 0 && i % 5 === 0) {

                console.log('FizzBuzz');
            } else if (i % 3 === 0) {
                console.log('Fizz');
            } else if (i % 5 === 0) {
                console.log('Buzz');
            } else {
                console.log(i);
            }
        }
        return '';
    }
}

const n = 15;
console.log(fizzBuzz(n));

