text = "HAI HELLO ALL HELLO WORLD"
//wap to print the word count from the given string
//output = { HAI:1, HELLO:2, ALL:1, WORLD: 1}
arr = text.split(" ")
console.log(arr);
output = {}
for (word of arr){
        if  (word in output){
            output[word] = output[word] + 1
        }
        else
         output[word] = 1
    }

//or
//text.split(" ").forEach(word => word in output? output[word] = output[word] + 1 : output[word] = 1 )
console.log(output);

console.log(`-----------`);


newArray = [10,20,30,10,50,20,30, 30, 60]
obj ={}
console.log(newArray);

newArray.forEach(num => num in obj ? obj[num] += 1 : obj[num] = 1 )
console.log(obj);
console.log(`----------------`);

pattern = 'ABCBCDA'
//wap to find the first repeated letter
arr = pattern.split('')
console.log(arr);
output = {}
for (letter of arr){
        if  (letter in output){
            console.log(letter);
            break
        }
        else
         output[letter] = 1
    }
    console.log(`----------------`);




