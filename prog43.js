// wap to find pairs that give pairsum as 6 from the given array
// a = [2, 3, 4, 5]
// pairsum = 10
// nopair = true
// for (i = 0; i <= a.length - 1; i++)
//     for (j = i + 1; j <= a.length - 1; j++)
//         if (a[i] + a[j] == pairsum) {
//             console.log(`(${a[i]},${a[j]})`);
//             nopair = false
//         }
// // if (nopair)
// //     console.log(`No pair`);
// nopair && console.log(`No pair`);

//wap to print common numbers from the given arrays
p = [10, 11, 12, 20, 30]
q = [11, 20, 25, 30, 33]
common = false
for (x of p)
    for (y of q) {
        if (x == y){
            console.log(x);
            common = true
        }

    }
!common && console.log(`No common number`);


