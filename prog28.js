//    *
//   * *
//  * * *
// * * * *

// for ( i = 1; i <= 4; i++){
//     str = ""
//     for ( k = 1 ; k <= (4 - i); k++){
//         str = str + " "
//     } 
//     for ( j = 1; j <= i; j++){
//         str = str + "* "
//     }
//     console.log(str);
// }

// hw



//     *
//    * *
//   * * *
//  * * * *
// * * * * *
//  * * * *
//   * * *
//    * *
//     *

for ( i = 1; i <= 9 ; i++){
    str = ""
    for ( k = 1; i<= 5 ? k <= (5-i) : k <= (i-5); k++ )
        str = str + " "
    for ( j = 1; (i <= 5)? j <= i : j<=(10-i); j++ )
        str = str + "* "
    console.log(str);  
}
