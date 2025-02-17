// wap to display the reverse of a given num


// x=1234
// sum=0
// while (x > 0) {
//     r=x%10
//     sum=sum*10+r
//     x=(x-r)/10   
// }
// console.log(sum);


// n = 321
// n2 = 0
// while (n > 0) {
//     r = n % 10
//     n2 = (n2 * 10) + r
//     n = Math.floor(n / 10)
// }
// console.log(n2);



// wap to print factorial of a given number

n = 6 
fact = 1
i = 1
while (i <= n){
    fact = fact * i
    i++
}
console.log(`the factorial of ${n} is ${fact}`);
