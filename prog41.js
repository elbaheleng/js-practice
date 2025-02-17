
// wap to display the following output
// input = [4,5,6]
//output = [ 11, 10 ,9]


input = [4,5,6]
output = []
sum = 0
for (x of input) 
    sum += x
for (i of input){
    output.push(sum - i)
}
console.log(output);




    


