console.log(`Start execution`);
try{
    exp = '*//10/2'
    result = eval(exp)
    console.log(result);
}
catch { // catch (error) { 
console.log(`Expression is wrong`);

}

try{
    num1 = 10
    num2 = 20
    sum = num1 + num2
    console.log(`Sum is ${sum}`);
}
catch {
    console.log(`Couldn't find sum`);

}

console.log(`End execution`);

