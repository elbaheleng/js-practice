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


