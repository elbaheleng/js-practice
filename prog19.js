// wap to check whether a given number is palindrome or not

n = 4554
n1 = n
n2 = 0
while (n > 0) {
    r = n % 10
    n2 = (n2 * 10) + r
    n = Math.floor(n / 10)
}

if(n1 == n2){
    console.log(`The number is palindrome`);
}
else{
    console.log(`The number is not palindrome`);
}
