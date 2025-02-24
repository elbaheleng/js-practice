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
console.log(output);
