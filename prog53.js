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

