// wap to find pairs that give pairsum as 6 from the given array with less number of iterations
// a = [2, 3, 4, 5]
// pairsum = 7
// nopair = true
// a.sort((a, b) => a - b)
// i = 0
// j = a.length - 1
// while (i < j){
//     if (a[i] + a[j] == pairsum){
//         console.log(`(${a[i]},${a[j]})`);
//         i++
//         j--
//         nopair = false
//     }
//     else if (a[i] + a[j] > pairsum)
//         j--
//     else
//         i++
// }

// nopair && console.log(`No pair`);

//foreach() - to access each item from a given array
a = [1, 4, 2, 14, 25]
// wap to find square of each element in the given array
// console.log(`square of each element`);

a.forEach(num => {
    console.log(num ** 2);
});

sq = a.map((num) => num ** 2)
console.log(sq);

// wap to find the cube of given array using map
cube = a.map((num) => num ** 3)
console.log(cube);

// wap to return a new array with elements with following conditions
// if the parent array contains elemnt greater than or equal to 13 decrement with 1
// if the parent array contains elemnt less than 13 increment with 1
a = [10,11,12,13,14]
o = a. map((num) => num >= 13 ? --num : ++num)
console.log(o);

