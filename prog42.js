// wap to find the duplicate number from a given array

a = [10, 20, 30, 30, 20, 10, 10]
//o = [10,20,30]
o = []

for (i = 0; i < a.length; i++) {
    for (j = i + 1; j <= a.length - 1; j++) {
        if (a[i] == a[j]) {
            count = 0
            for (x of o) {
                if (x == a[j])
                    count++
            }
            if (count < 1)
                o.push(a[i])
        }
    }
}

if (o.length > 0)
    console.log(o);
else
    console.log(`no duplicate elements`);

