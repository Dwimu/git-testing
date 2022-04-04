

// function trimLastDigit(number) {
//     return parseInt(number / 10);   
// }
// trimlastdigt with while loop

// function totalDigitInNumber(number) {
//     let digits = 0;
//     while (number>0) {
//         number = trimLastDigit(number);
//         digits++;
//     }
//     return digits;
// }


// function totalDigit(number) {
//     if (number === 0) return number;
//     return number * totalDigit(trimLastDigit(number));
    
// }




//////// recursive funtion////////////////////

function hello(intialValue =0) {
    
        let count = intialValue;
         count++;
        console.log("Hello World")
       
    if (intialValue === 100) return ;
    
  
        hello(count);
        
    
}





//////////// factorial with while loop////////////////////

// function factorail(number) {
//     let product = 1;
//     while (number > 0) {
//         product = product * number;
//         // product *= number;
//         number--;
//         console.log('product', product);// shortcutkey clo
//         console.log('number', number);
//         console.log("............................")
//     }
//     return product;
// }







// factorial with recursion////////////

// function factorial(number) {
//     if (number === 0) return 1;//////////////////base dondition/////////////////
//     return number * factorial(number - 1);
// }





// factoiral with ternary

// function factorial(number) {
//     return (number === 0) ? 1 : number * factorial(number - 1);
// }




// factorial with if else statment

// function factoiral(n) {
//     // 0 != 1, 1 != 1
//     if (n > 0 && n <= 1) {
//         return 1;
//     }
//     else {
//         return n * factoiral(n - 1);
//     }
// }

let age = 10;
while (age > 20) {
    
    
}