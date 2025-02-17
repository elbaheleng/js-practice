// wap to find pairs that give pairsum as 6 from the given array with less number of iterations
a = [2, 3, 4, 5]
pairsum = 6
nopair = true
a.sort((a, b) => a - b)
i = 0
j = a.length - 1
while (i < j){
    if (a[i] + a[j] == pairsum){
        console.log(`(${a[i]},${a[j]})`);
        i++
        j--
        nopair = false
    }
    else if (a[i] + a[j] > pairsum)
        j--
    else
        i++
}

nopair && console.log(`No pair`);