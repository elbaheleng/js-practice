// //wap to check a given number is prime or not
// num = 7
// count = 0
// if ( num < 0){
//     console.log(`${num} is not a natural number. Enter a positive number`);
// }
// else if  (num == 1){
//     console.log(`${num} is neither prime nor composite`);
// }
// else {
//     for ( i = 2; i <= (num/2); i++){
//         if (num % i == 0){
//             count++
//             break
//         }
//     }

//     console.log(count > 0 ? `${num} is not prime` : `${num} is prime`);


// }

// wap to display all prime numbers between 1 - 50
//console.log(`Prime numbers between 1 and 50 are`);
// for (i = 2; i <= 50; i++) {
//     count = 0
//     for (j = 2; j <= Math.sqrt(i); j++) {
//         if (i % j == 0) {
//             count++
//             break
//         }
//     }
//     if (count == 0) {
//         console.log(i);

//     }
// }

// wap to print all amstrong numbers bet 8 to 500
//console.log(`Armstrong numbers between 8 and 500 are`);
// for ( i = 1; i <= 500  ; i++){
// n = i
// n1 = i
// n3 = i
// sum = 0
// count = 0
// n2 = 0
// while (n > 0){
//     r = n % 10
//     n2 = (n2 * 10) + r
//     n = Math.floor(n / 10)
//     count++
// }

// while (n1 > 0){
//     r = n1 % 10
//     sum = sum + (r**count)
//     n1 =  Math.floor(n1 / 10)
// }

// if ( sum == n3 && n3 > 8 && n3 < 500){
//     console.log(`${n3}`);
// }
// }
// console.log(`-----------------`);
console.log(`Armstrong numbers between 8 and 500 are`);

for ( i = 1; i <= 500  ; i++){
n = i
str = n + ''
count = str.length
sum = 0
while (n > 0){
    r = n % 10
    sum = sum + (r**count)
    n =  Math.floor(n / 10)
} 

if (sum == str && sum > 8 && sum < 500)  {
    console.log(`${str}`);
}
}







//wap to find hcf of given two numbers
// factors of 12 - 1 2 3 4 6 12
//factors of 28 - 1 2 4 7 14 28
//common factors - 1 2 4 
//hcf - 1 2 4
// n1 = 12
// n2 = 28
// hcf = 0
// if (n1 > 0 && n2 > 0) {
//     for (i = 1; (i < n1 && i < n2); i++) {
//         if ((n1 % i == 0) && (n2 % i == 0)) {
//             hcf = i
//         }
//     }
//     console.log(`HCF of ${n1} and ${n2} is ${hcf}`);
// }
// else {
//     console.log(`Enter numbers greater than zero`);

// }



//wap to find lcm of given two numbers

// n1 = 12
// n2 = 30
// lcm = 0
// if (n1 > 0 && n2 > 0) {
//     for ((n1 > n2 ? i = n1 : i = n2); ; i++) {
//         if ((i % n1 == 0) && (i % n2 == 0)) {
//             lcm = i
//             break
//         }
//     }
//     console.log(`LCM of of ${n1} and ${n2} is ${lcm}`);
// }
// else {
//     console.log(`Enter numbers greater than zero`);

// }