function reverseString(s) {
    try {
        let reversed = s.split('').reverse().join('');
        console.log(reversed)
    } catch (error) {
        console.log(error.message)
        console.log(s)
    }  
}


//hackerrank 10 days of javascript tutorial'ının try, catch challenge için

/*Objective

In this challenge, we learn about strings and exceptions. Check out the attached tutorials for more details.

Task

Complete the reverseString function; it has one parameter, . You must perform the following actions:

Try to reverse string  using the split, reverse, and join methods.
If an exception is thrown, catch it and print the contents of the exception's  on a new line.
Print  on a new line. If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string.
Input Format

Locked stub code in the editor reads variable  from stdin and passes it to the function.

Output Format

You must write two print statements using console.log():

Print the contents of a caught exception's  on a new line. If no exception was thrown, this line should not be printed.
Print  on a new line. If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string.
Sample Input 0

"1234"
Sample Output 0

4321

Sample Input 1

Number(1234)
Sample Output 1

s.split is not a function
1234*/
