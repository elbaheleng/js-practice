// w ap to find sum of 2 numbers using function using arrow function
const sum = (a,b) => a + b


// const sum = (a,b) => {
//     return (a + b)
// }
console.log(`Sum of 3 and 5 is ${sum(3,5)}`);

const cube = (a) => a ** 3
console.log(`Cube of 3 is ${cube(3)}`);

//hw other problems in arrow functions
 

const sign = (a) =>  a > 0 ? 'Positive' : a == 0? 'Neither positive nor negative': 'Negative'  
console.log(sign(-2))

const oddoreven = (a) => a % 2 == 0 ? 'Even' : 'Odd'
console.log(oddoreven(3));
