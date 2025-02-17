// wap to check a given number is armstrong or not

// n = 163
// n1 = n
// n3 = n
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

// if ( sum == n3){
//     console.log(`${n3} is an Armstrong number`);
// }
// else{
//     console.log(`${n3} is not an Armstrong number`);
// }


n = 1634
str = n + ''
count = str.length
sum = 0
while (n > 0){
    r = n % 10
    sum = sum + (r**count)
    n =  Math.floor(n / 10)
} 

if (sum == str)  {
    console.log(`${str} is an Armstrong number`);
}
else{
 console.log(`${str} is not an Armstrong number`);
}