function generateRandomNumber(digit) {
    return parseInt(Math.random() * 10 ** digit);
    
}


// Recursive function

// function hello(intialValue) {
//     if (intialValue == 100) return 0;
//     {
//         let count = intialValue;
        
//         console.log("Hello World")
//         count++;
//         hello(count);
        
//     }
    
// }


// for factorial function
// When a recursive procedure gets repeated, it is called recursion.
// A function which calls itself from its previous value to generate subsequent value.
// A function that calls itself during its execution.

// function factorial(number) {
//     if (number == 0) return 1;// base condition
//     return number * factorial(number - 1);
    
// }
// let num = 2n + 5;
// function factorial(num) {
//     if (num == 5) return 1;
//     return factorial(num - 1) + 2;
// }

// ternary operator

// let age = 12;

// let isEligible = condition ? true : false;
// let isEligible = age > 18 ? "Eligible" : "Not Eligible";

// for Loop

// let age = 20;
// let hasAdhar = true;
// let country = "India";
// for (let i = 0; i <= 5; i++)
// {
//     // input from user
//     let age = prompt("Enter Your age");
//     let hasAdhar = confirm("Adhar status");
//     let country = prompt("Enter your Country");
//     if (age>20 && hasAdhar && country =="India") {
//         alert("You are Eligible");
        
//     } else {
//         alert("You are not Eligible");
        
//     }
// }



let num, count, sum = 0;
prompt("Enter a positive integer: " + num);
for (count = 1; count <= num; ++count) {
    sum += count;
}
prompt(sum);