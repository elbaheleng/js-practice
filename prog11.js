//wap to check whether a given number is positive or negative

x = 2
if (x == 0){
    console.log("Zero is neither positive nor negative");
}
else if(x < 0){
    console.log("Negative number");
}
else{
    console.log("Positive number");
}

console.log(`------------------------`);

console.log(x == 0 ?'Zero is neither positive nor negative':x < 0 ? `Negative number`:`Positive number`);


