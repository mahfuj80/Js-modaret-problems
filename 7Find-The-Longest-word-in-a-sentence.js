/**
 * ## **Problem 7: Find the Longest Word in a Sentence**

**Function Name: `longestWord`**

**Step-by-step description:**

1. **Define a function called `longestWord` that takes a sentence as an argument.**
2. **Validate that the input is a string and not empty. If it is not a string or empty, return an error message.**
3. **Split the sentence into an array of words using the `split` method.**
4. **Find the longest word in the array using a loop or any array method.**
5. **Return the longest word.**

**Example:**

```
jsCopy code
console.log(longestWord("The quick brown fox jumps over the lazy dog")); // Output: "jumps"
console.log(longestWord("JavaScript is an awesome programming language")); // Output: "programming"
console.log(longestWord(123)); // Output: "Invalid input! Please provide a valid string."

```
 */

function longestWord(sentence) {
    if (typeof sentence !== 'string' || sentence.length < 0) {
        return "Invalid input! Please provide a valid string.";
    } else {

        // ------------------Sentence Immutable so sentence can't be change-----------
        /*         
        
                    for (let dot of sentence) {
                    if (dot == '.') {
                        console.log(dot);
                        let index = sentence.indexOf(dot);
                        console.log(index);
                        sentence[index] = '';
                    }
                }
                console.log(sentence); 
                
*/

        const words = sentence.split(' ')
        let letters = words[0].length;
        let bigLetter = words[0];
        for (let word of words) {
            if (word.length > letters) {
                bigLetter = word;
            }
        }
        return bigLetter;
    }

}

const s = 'the quick brown fox jumps over. the lazy dog aaaaaa';
console.log(longestWord(s));


/**
 *--------------- alternative way  --------------------

 */
// let num = [1, 2, 3, 3, 4, 4, 5, 5, 6];
// let filtered = num.filter((a, b) => num.indexOf(a) === b)
// console.log(filtered);