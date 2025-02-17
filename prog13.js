//wap to display the largest among the 2 given numbers
num1 = 200
num2 = 100
if (num1>num2){
    console.log(`Largest is ${num1}`);
    
}
else if (num1 == num2){
    console.log(`Both are equal`);
}
else{
    console.log(`Largest is ${num2}`);
}


//wap to display the largets number amoung 3 given numbers
// n1 = 1
// n2 = 2
// n3 = 3
// if( n1 > n2 && n1 > n3){
//     console.log(`Largest is ${n1}`);

// }
// else if (n2 > n1 && n2 > n3){
//     console.log(`Largest is ${n2}`);
// }
// else if(n3 > n1 && n3 > n2){
//     console.log(`Largest is ${n3}`);
// }
// else{
//     console.log(`equal`);
// }

//wap to display the second number amoung 3 given numbers

// n1 = 2
// n2 = 5
// n3 = 3

// if ((n1 > n2 && n1 < n3) || (n1 > n3 && n1 < n2)) {

//     console.log(`Second largest is ${n1}`);
// }
// if ((n2 > n1 && n2 < n3) || (n2 > n3 && n2 < n1)) {


//     console.log(`Second largest is ${n2}`);
// }
// else if ((n3 > n1 && n3 < n2) || (n3 > n2 && n3 < n1)) {

//     console.log(`Second largest is ${n3}`);
// }

//wap to display the second number amoung 3 given numbers and arrange in descending order

// n1 = 2
// n2 = 1
// n3 = 5

// if ( n2 > n1 ){
//     n1 = n1 + n2;
//     n2 = n1 - n2;
//     n1 = n1 - n2; 
// }
// if ( n3 > n2 ){
//     n2 = n2 + n3;
//     n3 = n2 - n3;
//     n2 = n2 - n3; 
// }
// if ( n3 > n1 ){
//     n1 = n1 + n3;
//     n3 = n1 - n3;
//     n1 = n1 - n3; 
// }
// if ( n2 > n1 ){
//     n1 = n1 + n2;
//     n2 = n1 - n2;
//     n1 = n1 - n2; 
// }
// console.log(`Second largest number is ${n2}`);


/////----------------------or


n1 = 2
n2 = 3
n3 = 1
if( n1 > n2 && n1 > n3){
    if (n2 > n3){
        console.log(`Second largest number is ${n2}`);
        console.log(`${n1} > ${n2} > ${n3}`);
    }
    else{
        console.log(`Second largest number is ${n3}`);
        console.log(`${n1} > ${n3} > ${n2}`);
    }
}
else if (n2 > n1 && n2 > n3){
    if (n1 > n3){
        console.log(`Second largest number is ${n1}`);
        console.log(`${n2} > ${n1} > ${n3}`);
    }
    else{
        console.log(`Second largest number is ${n3}`);
        console.log(`${n2} > ${n3} > ${n1}`);
    }
}
else if (n3 > n1 && n3 > n2){
    if (n1 > n2){
        console.log(`Second largest number is ${n1}`);
        console.log(`${n3} > ${n1} > ${n2}`);
    }
    else{
        console.log(`Second largest number is ${n2}`);
        console.log(`${n3} > ${n2} > ${n1}`);
    }
}
else{
    console.log(`equal`);
    
}

