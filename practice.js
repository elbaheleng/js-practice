//* * * * *
//*       *
//*       *
//*       *
//*       *
//* * * * *

// for ( i = 1; i <= 6 ; i++ ){
//     str = ""
//     for(j = 1; j <= 5; j++){
//         if ( i == 1 || i==6 || j == 1 || j == 5)
//             str = str +"* "
//         else
//         str = str + "  "
//     }
//     console.log(str);

// }

//    1
//   2 2
//  3 3 3
// 4 4 4 4
// for ( i = 1; i <= 4 ; i++ ){
//     str = ""
//     for(j = 1; j <= (4 - i); j++){
//         str = str + " "
//     }
//     for ( k = 1; k <= i ; k++){
//         str = str + i + " "
//     }
//     console.log(str);

// }

//1
//1 2
//1 2 3
//1 2 3 4
// for ( i = 1; i <= 4 ; i++ ){
//     str = ""
//     for(j = 1; j <= i; j++){
//         str = str + j + " "
//     }
//     console.log(str);

// }
//1 2 3 4
//1 2 3
//1 2
//1

// for ( i = 1; i <= 4; i++){
//     str = ""
//     for ( j = 1; j <= (5 - i); j++){
//         str = str + j + " "
//     }
//     console.log(str);

// }

// 1
// 2 3
// 4 5 6
// 7 8 9 10
// k = 0
// for (i = 1; i <= 4; i++) {
//     str = ""
//     for (j = 1; j <= i; j++) {
//         k++
//         str = str + k + " "
//     }
//     console.log(str);
// }
// k = 0
// for ( i = 1; i <= 4; i++){
//     str = ""
//     if ( i % 2 == 0 ){
//         k = 1
//     }
//     else{
//         k = 0
//     }
//     for ( j = 1; j <= i; j++){

//         if ( k == 0){
//             str = str + "1 "
//             k = 1
//         }
//         else {
//             str = str + "0 "
//             k = 0
//         }

//     }
//     console.log(str);
// }



//       1 
//     2 1 2 
//   3 2 1 2 3
// 4 3 2 1 2 3 4

// for ( i = 1; i <= 4; i++ ){
//     str = ""
//     for ( j = 1; j <= (4 - i); j++){
//         str = str + "  "
//     }
//     for ( k = i ; k > 1 ; k --){
//         str = str + k + " " 
//     }
//     for ( l = 1 ; l <= i ; l++){
//         str = str + l + " "
//     }
//     console.log(str);

// }

// * * * * 
//  * * * * 
//   * * * *
//    * * * *
//     * * * *

// for ( i = 1; i <= 5; i++){
//     str = ""
//     for (j = 1; j <= (i - 1); j++){
//         str = str + " "
//     }
//     for (j = 1; j <= 4; j++){
//         str = str + "* "
//     }
//     console.log(str);
// }

//       *  
//     *   *  
//   *   *   *
// *   *   *   *
//   *   *   *
//     *   *
//       *

// for ( i = 1 ; i <= 7; i++){
//     str = ""
//     for ( j = 1 ; i <= 4 ? j <= (4 - i) : j <= (i - 4); j++ ){
//         str = str + "  "
//     }
//     for ( j = 1 ; i <= 4 ? j <= i : j <= ( 8- i) ; j++){
//         str = str + " *  "
//     }
//    console.log(str);

// }

// for ( i = 1; i <= 7; i++){
//     str = ""
//     for ( j = 1; j <= 7; j++){
//         if (i == j || i + j == 8 || ( i == 4) && (j % 2 == 0) || (i % 2 != 0 && (j == 7 || j == 1))){
//             str = str + "* "
//         }
//         else
//             str = str + "  "
//     }
//     console.log(str);

// }

// * * * * * * 
// * * * * * * 
// * * * * * *
// * * * * * *
// * * * * * *
// * * * * * *

// for ( i = 1; i <= 6; i++){
//     str = ""
//     for (j = 1; j <= 6; j++){
//         str = str + "* "
//     }
// console.log(str);

// }

// * 
// * * 
// * * *
// * * * *
// * * * * *
// * * * * * *

// for ( i = 1; i <= 6; i++){
//     str = ""
//     for (j = 1; j <= i; j++){
//         str = str + "* "
//     }
// console.log(str);

// }

// * * * * * * 
// * * * * * 
// * * * * 
// * * * 
// * * 
// * 

// for ( i = 1; i <= 6; i++){
//     str = ""
//     for (j = 6; j >= i; j--){
//         str = str + "* "
//     }
// console.log(str);

// }

//           * 
//         * * 
//       * * *
//     * * * *
//   * * * * *
// * * * * * *

// for ( i = 1; i <= 6; i++){
//     str = ""
//     for (j = 6; j > i; j--){
//         str = str + "  "
//     }
//     for ( k = 1; k <= i; k++){
//         str = str + "* "
//     }
// console.log(str);

// }

// * * * * * * 
//   * * * * * 
//     * * * * 
//       * * * 
//         * * 
//           * 

// for ( i = 1; i <= 6; i++){
//     str = ""
//     for ( k = 1; k < i; k++){
//         str = str + "  "
//     }
//     for (j = 6; j >= i; j--){
//         str = str + "* "
//     }
// console.log(str);

// }

// * * * * 
// * * * 
// * *
// *
// * *
// * * *
// * * * *

// for ( i = 1; i <= 7; i++){
//     str =""
//     for( j = 1; i < 4 ? j <= (5 - i): j <= (i-3); j++){
//         str = str + "* "
//     }
//     console.log(str);
// }


//     * 
//    * * 
//   * * *
//  * * * *
// * * * * *

// for ( i = 1; i <= 5; i++){
//     str = ""
//     for (j = 5; j > i; j--){
//         str = str + " "
//     }
//     for ( k = 1; k <= i; k++){
//         str = str + "* "
//     }
// console.log(str);

// }

// 1 2 3 4 
//  2 3 4 
//   3 4
//    4

// for ( i = 1; i <= 4; i++){
//     str = ""
//     for (k = 1; k < i ; k++){
//         str = str + " "
//     }
//     for( j = i; j <= 4; j++){
//         str = str + j + " "
//     }
//     console.log(str);

// }

// 1 2 3 4 
//  2 3 4 
//   3 4
//    4
//   3 4
//  2 3 4
// 1 2 3 4

// for (i = 1; i <= 7; i++){
//     str = ""
//     for (j = 1 ; i <= 4 ? j <= i-1 : j <= 7 - i; j++){
//         str = str + " "
//     }
//     for ( i <= 4 ? k = i : k = 8 - i; k <= 4; k++ ){
//         str = str + k + " "
//     }
//     console.log(str);

// }

//         *
//       *   *       
//     *       *
//   *           *
// *   *   *   *   *

// for (i = 1; i <= 5; i++){
//     str = ""
//     for (j = 1; j <= 9; j++){
//         if ((i + j == 6) || (i==5 && (j%2) != 0) || (j - i) == 4)
//             str = str + "* "
//         else
//             str = str + "  "
//     }
//     console.log(str);

// }

////////////////////////////////////////////roman to integer
// s = 'D'
// arr = s.split('')
// console.log(arr);

// arr2 = []
// for( i = 0; i < arr.length; i++){
//     if (arr[i] == 'M')
//         arr2[i] = 1000
//     if (arr[i] == 'D')
//         arr2[i] = 500
//     if (arr[i] == 'C')
//         arr2[i] = 100
//     if (arr[i] == 'L')
//         arr2[i] = 50
//     if (arr[i] == 'X')
//         arr2[i] = 10
//     if (arr[i] == 'V')
//         arr2[i] = 5
//     if (arr[i] == 'I')
//         arr2[i] = 1

// }
// console.log(arr2);

// arr3 = []
// k = 0
// if (arr2.length == 1){
//     arr3 = arr2
// }
// else{
// for( i = 0; i < arr2.length - 1; i++){
//     if (arr2[i] < arr2[i + 1]){
//         arr3[k] = arr2[i + 1] - arr2[i]
//         k++
//         i++
//     }
//     else if (arr2[i] >= arr2[i + 1]){
//         arr3[k] = arr2[i]
//         k++
//     }   
// }

// if (arr2[arr.length-2] >= arr2[arr.length-1]){
//     arr3[k] = arr2[arr.length-1]
// }
// }
// console.log(arr3);

// console.log(arr3.reduce((sum,x) => sum + x , 0));
//////////////////////////////////////////////////////////////////////////
// strs = ["flower","flow","flight"]
// common = true
// commonstr = ''
// shortest = strs.reduce((short, x) => short.length < x.length ? short : x)
// len = shortest.length
// for (j = 0; j < len; j++) {
//     c = strs[0][j]
//     for (i = 1; i < strs.length; i++) {
//         if (c != strs[i][j])
//             common = false
//     }
//     if (common)
//         commonstr = commonstr + c
// }
// console.log(commonstr);
//////////////////////////////////////////////////////////////////
// s = '{()}{'
// str = []
// for (i = 0; i < s.length; i++) {
//     if (s[i] == '(' || s[i] == '{' || s[i] == '[')
//         str.push(s[i])
//     else{
//         if (s[i] == ')' || s[i] == '}' || s[i] == ']'){
//             if (str.length == 0)
//                 console.log(false);
//             else{
//                 if (s[i] == ')' && str[str.length - 1] == '('){
//                     str.pop()
//                     continue
//                 }
//                 else if (s[i] == '}' && str[str.length - 1] == '{'){
//                     str.pop()
//                     continue
//                 }
//                 else if (s[i] == ']' && str[str.length - 1] == '['){
//                     str.pop()
//                     continue
//                 }
//                 else
//                 console.log(false);


//             }
//         }
//     }

// }
// if (str.length == 0)
//     console.log(true);
// else
//      console.log(false);


///////////////////////////////////////////////////////////



// nums = [1,1,2]
// for (let i = 0; i < nums.length; i++) {
//     count = 0
//     for (let j = i + 1; j < nums.length; j++) {
//         if (nums[i] == nums[j]) {
//             count++
//         }
//     }
//     nums.splice(i + 1, count)
// }
// console.log(nums);

//////////////////////////////////////////////////////////

// nums = [0,1,2,2,3,0,4,2]
// val = 2
// count = 0
//     for ( let i = 0; i < nums.length; i++){
//         if (nums[i] == val){
//             nums.splice(i,1)
//             i--
//         }
//         else
//             count++

//     }
// console.log(nums);
// console.log(count);



////////////////////////////////////////////
// haystack = "leetcode"
//  needle = "leeto"
// i = 0
// j = 0
// count = 0
// while (j < haystack.length){
//     if (needle[i] == haystack[j]){
//         i++
//         j++
//         count++
//         if (count == needle.length){
//             occurance = j - (count)
//             break
//         }
//     }
//     else{
//         j = (j - count) + 1
//         i = 0
//         count = 0
//     }
// }
// if (count == needle.length){
//     console.log(occurance);  
// }
// else
//  console.log('-1');

////////////////////////////////////////////
nums = [1,3]
target = 2
if (target <= nums[0])
    return 0
if (target > nums[nums.length - 1])
    console.log(nums.length);
     nums.length
low = 0
found = false
high = nums.length - 1
while (low < high) {
    mid = Math.floor((low + high) / 2)
    if (nums[mid] > target) {
        high = mid - 1
    }
    else if (nums[mid] < target) {
        low = mid + 1
    }
    else {
        found = true
        break
    }
}
//console.log(nums [high], nums [low]);

if (found)
    console.log(mid);

else{
    if( nums[high] < nums[low])
        console.log(high+1);
    else{
        if (target > nums[high])
        console.log(high+1);
    else if (target < nums[high])
       console.log(low);
       
    } 
} 



