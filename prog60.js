

//wap to check whether a string is palindrom or not
str = 'hih'
a = Array.from(str)
b = Array.from(str)
str2 = []
while(a.length>0)
str2.unshift(a.pop())
console.log(str2);
console.log(b);
console.log(str2 == b ? 'Palindrome': 'Not Palindrome');/// check


//or
str = "malayalam"
palin = ''
for (i = str.length - 1; i >= 0 ; i-- ){
    palin += str[i]
}
console.log(str == palin ? 'Palindrome': 'Not Palindrome');

// to find the largest word from the given string
str = 'My first program got it'
arr = str.split(' ')
console.log(arr.reduce((high, word) => high.length > word.length ? high : word));




