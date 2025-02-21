//wap to display all the vowels in a given string
str = 'Good afternoon'
str1 =[]
for(i = 0; i < str.length; i++)
    if (str[i] == 'a' ||str[i] == 'e' ||str[i] == 'i' ||str[i] == 'o' ||str[i] == 'u'|| str[i] == 'A' ||str[i] == 'E' ||str[i] == 'I' ||str[i] == 'O' ||str[i] == 'U' )
        str1 = str1 + str[i] + ' '
console.log(str1);

console.log(`-------`);
characters = Array.from(str)
vowels = ['a', 'e', 'i','o', 'u']
for( let char of characters){
    if(vowels.includes(char))
        console.log(char);
        
}
console.log(`-------`);

Array.from(str).filter((item) => vowels.includes(item)).forEach((item) => console.log(item))

