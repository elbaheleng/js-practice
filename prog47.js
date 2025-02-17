// wap to find sum of all numbers in a given array
arr = [[1,2],[3,4],[5,6]]
arr1d = arr.flat()
console.log(arr1d);

sum = 0
for ( x of arr)
    for( y of x)
        sum += y
console.log(`Sum of numbers in the array = ${sum}`);

//wap to find all even numbers from the given array
noeven = false
for ( x of arr)
    for( y of x)
        if ( y % 2 == 0){
            console.log(y);
            noeven = true
        } 
noeven == false && console.log(`No even numbers in the given array`);
