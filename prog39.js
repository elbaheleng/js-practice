

// wap to find the highest expense
// wap to find the lowest expense
// wap to find the total expense
expense = [12000, 5000, 60000, 1200, 50]
low = expense[0]
high = expense[0]
total = 0
for ( i of expense){
    if (low > i)
        low = i
    if (high < i)
        high = i
    total += i
}
console.log(low, high, total);
