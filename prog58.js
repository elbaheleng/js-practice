str = 'Luminar'

console.log(str.substring(0,3));// Lum

console.log(str.substring(2));// minar

console.log(str.slice(-5));// minar

console.log(str.slice(2));// minar

str1 = '    hello'
console.log(str1);
console.log(str1.trim());

text ="Good evening All"
arr = text.split(' ')//[ 'Good', 'evening', 'All' ]
console.log(arr);
arr = text.split('e')// [ 'Good ', 'v', 'ning All' ]
console.log(arr);
arr = text.split('') // ['G', 'o', 'o', 'd', ' ', 'e', 'v', 'e','n', 'i', 'n', 'g',' ', 'A', 'l', 'l']
console.log(arr);

sentence = 'I came from Kakkanad. I work in Kakkanad'
a = sentence.replace('Kakkanad', 'Kochi') //I came from Kochi. I work in Kakkanad
console.log(a);
a = sentence.replaceAll('Kakkanad', 'Kochi')//I came from Kochi. I work in Kochi
console.log(a);

str = 'Luminar'
c = Array.from(str)
console.log(c);


