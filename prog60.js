

//wap to check whether a string is palindrom or not
str = 'hih'
// a = Array.from(str)
// b = Array.from(str)

// str2 = []
// while(a.length>0){
// str2.unshift(a.pop())
// }
// console.log(str2 == b ? 'Palindrome': 'Not Palindrome');
// bstr = b.toString()
// str2str = str2.toString()
// console.log(str2str == bstr ? 'Palindrome': 'Not Palindrome');

//or
// // console.log(str); // hih
// // pal = str.split(' ') // [ 'hih' ]
// // console.log(pal);
// // pal2 = pal.reverse()
// // console.log(pal2); // [ 'hih' ]
// // pal3 = pal2.join('')
// // console.log(pal3); // hih
// pal = str.split('').reverse().join('')
// console.log(pal == str ? 'Palindrome': 'Not Palindrome');

//or
// str = "malayalam"
// palin = ''
// for (i = str.length - 1; i >= 0 ; i-- ){
//     palin += str[i]
// }
// console.log(str == palin ? 'Palindrome': 'Not Palindrome');

// to find the largest word from the given string
 str = 'My first program got it'
arr = str.split(' ')
// console.log(arr.reduce((high, word) => high.length > word.length ? high : word));
largest = arr[0]
for (let word of arr){
    if( word.length > largest.length){
        largest = word
    }
}
console.log(largest);





