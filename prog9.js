// write a program to swap between two given numbers
//num1 = 60, num2 = 40

num1 = 60
num2 = 40
console.log(`num1 = ${num1},num2 = ${num2}`);
num3 = num1
num1 = num2
num2 = num3
console.log(`num1 = ${num1},num2 = ${num2}`);

// swapping without temp varible
num1 = num1 + num2
num2 = num1 - num2
num1 = num1 - num2
console.log(`num1 = ${num1},num2 = ${num2}`);
