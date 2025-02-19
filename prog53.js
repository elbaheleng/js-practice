a = [1,2,3,4,5,6]
// wap to check whether the given array contains even numbers
console.log(a.some((num) => num % 2 == 0));
console.log(a.filter((num) => num % 2 == 0));
console.log(a.find((num) => num % 2 == 0));


//splice
colours = ['red', 'orange', 'blue', 'green']
console.log(colours);
colours.splice(2,1) // remove blue
console.log(colours);
colours.splice(-2,1) // remove orange
console.log(colours);
colours.splice(1,1, 'purple')
console.log(colours); // delete green and add purple
colours.splice(1,0, 'yellow')
console.log(colours); // delete green and add purple

console.log(colours.includes('red')); // red is there in array, so returns true

console.log(colours.indexOf('red')); // gives index of first occurance of red

x = colours.slice(0,2)
console.log(x);

