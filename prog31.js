// w a p to find out whether the given number is odd or even using function

function odd_even(a){
  return a % 2 == 0 ? 'Even' : 'Odd'
}

console.log(`-3 is ${odd_even(3)}`) 
console.log(`2 is ${odd_even(2)}`)
console.log(`-2 is ${odd_even(-2)}`)
console.log(`-3 is ${odd_even(-3)}`)


// wap to find whether thw given number is positive or negative using function

function pos_neg(a){
     return a > 0 ? 'Positive' : a == 0? 'Neither positive nor negative': 'Negative'
   }
   
   console.log(pos_neg(-2))
   console.log(pos_neg(0))
   console.log(pos_neg(2))


   // wap to find the cube of given number using function using function

   function cube (a){
    return a**3
    
   }
   console.log(cube(2))