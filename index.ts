//*********************************************** class number 3 *******************************************//

// any ********************************************************************/

let test1: any = false;
test1 = 2567;
test1 = "summai shah";
test1 = true;

console.log(typeof test1);

// unknown **********************************************************/

// This prints the datatype of the value as undefined:

let test2: unknown;
test2 = 2567;
test2 = "summai shah";
test2 = true;

console.log(typeof test2);

// function *************************************************************/

function first(var1: string) {
    return (
        console.log(`${var1}`)
    );
}

first("summai shah");

// arrow function **********************************************************/

const first2 = (var2: string) => {
    return (
        console.log(`${var2}`)
    );
}

first2("mhummad nadeem khan");

// split **********************************************************/

// Split only accesses numbers:
// Before returning, the function's return type is void.
// And when we define any datatype in the return statement, the return type changes accordingly.

const variable1 = (palian: string): boolean => {
    let variable2 = palian.split("").reverse().join("");
    return variable2 === palian;
};

console.log(variable1("12345"));

// default parameters ***************************************************/
// example No.1

const greet1 = (userName: string, userEmail: string = "1"): string => {
    return `welcome, ${userName} and your id is ${userEmail}`;
};

console.log(greet1("summai shah"));

// example No.2

const greet2 = (userName: string, userEmail: string): string => {
    return `welcome, ${userName} and your id is ${userEmail}`;
};

console.log(greet2("summai shah", "2"));

// example No.3
// Function with if, elseif, and else conditions:

const greet3 = (userName: string, userEmail: string) => {
    if (!userName) {
        console.log("Name not found");
        return;
    }
    if (!userEmail) {
        console.log("Email not found");
        return;
    }
    console.log(`User: ${userName}, Email: ${userEmail}`);
};

greet3("summaishah", "summ@ishahgmail.com");

// Array

// In TypeScript, an array is a datatype that can store multiple values of different datatypes sequentially.

// example no.1

const number1: number[] = [1, 2, 3, 4, 5];

// example no.2

const number2: number[] = new Array(1, 2, 3, 4, 5);

// example no.3

const number3: string[] = Array.of("first", "second", "third", "fourth", "fifth");

// console.log(number3.length);
console.log(number3[4]);
