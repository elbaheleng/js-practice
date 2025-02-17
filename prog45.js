arr =[1,9,8,4,11,10]
arr.sort((n1,n2) => n1 - n2)
low = 0
up = arr.length - 1
item = 12
found = false
while (low<=up){
    mid = Math.floor((up+low)/2)
    if (arr[mid] == item){
        console.log(`${item} found`);
        found = true
        break
    }
    else if (arr[mid] > item)
        up = mid - 1 
    else if (arr[mid] < item)
        low = mid + 1 
}

found == false && console.log(`${item} is not present`);