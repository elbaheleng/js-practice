// wap to display 'fizz' when a number is divisible by 3, 'buzz' when a number is divisible by 5 and 'fizzbuzz' when a number is divisible by 15
num = 18
if (num == 0) {
    console.log(`give a number other than zero`);
}
else {
    if (num % 15 == 0) {
        console.log('fizzbuzz');

    }
    else if (num % 5 == 0) {
        console.log('buzz');

    }
    else if (num % 3 == 0) {
        console.log('fizz');

    }
    else {
        console.log(`not divisible by 3,5 or 15`);
    }
}