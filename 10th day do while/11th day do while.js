


// ///////////////// Do while loop///////////////////////

// let count = 0;
// do {
    
//     count++;
//     console.log("Hello world", count);

// }
// while (count < 100);


// ////////////   factorial with do while loop
function factorial(number) {
     let product = 1;
    do {
       
        product = product * number;
        number--;
    }
    while (number > 0);
    return product;
}








/////////////// arrow function////////////////////////
// Arrow function expressions
// An arrow function expression is a compact alternative to a traditional function expression, but is limited and can't be used in all situations.
// /////////////nfn shortcut key////////////////////



// const sum = (a, b) => {
//     let result = a + b;
//     return result;
// };

// /////////////jwng arrow function kwo mwnse line aonw define kalamnw hayw jerwi example a  gahayao hwnai jabai//////////


// const isEligiible = (age, hasPassport) =>  age > 18 && hasPassport;
    

// const trimLastDigit = (number) => parseInt(number / 10);