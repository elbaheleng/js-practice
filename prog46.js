//wap to print common numbers from the given arrays
p = [10, 11, 12, 20, 30]
q = [25, 33, 10, 20, 30]

p.sort((n1,n2) => n1 - n2)
q.sort((n1,n2) => n1 - n2)
i = 0
j = 0
found = false
while ((i<p.length) && (j<q.length)){
if (p[i] == q[j]){
    console.log(p[i]);
    i++
    j++ 
    found = true
}
else if (p[i] > q[j]){
   j++
}
else
    i++
}
found == false && console.log(`No common numbers`);


