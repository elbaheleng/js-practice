//wap to check whether 2 is present in the given array
arr = [10, 11, 12, 3, 4]
count = 0
searchitem = 2
for (x of arr) {
    if (x == searchitem) {
        count++
        break
    }
}
console.log(count > 0 ? `${searchitem} is present`: `${searchitem} is not present`);
