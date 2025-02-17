
//       *
//     *   *
//   *       *
// * * * * * * *

// for ( i = 1; i <= 4; i++){
//     str = ""
//     for ( j = 1; j <= 7; j++){
//         if ( (i + j)==5 || (j - i) == 3 || (i == 4)){
//                str = str + "* "
//         }
//         else
//             str = str + "  "
//     }
//     console.log(str);
    
// }

// * * * * *
// *       *
// *       *
// *       *
// * * * * *

// for ( i = 1; i <= 5; i++){
//     str = ""
//     for ( j = 1; j <= 5; j++){
//         if ( i == 1 || j == 1 || i == 5 || j == 5){
//             str = str + "* "
//         }
//         else{
//             str = str + "  "
//         }
//     }
//     console.log(str);
    
// }

// 1 
// 0 1 
// 1 0 1
// 0 1 0 1

// for ( i = 1 ; i <= 4; i++){
//     str = ""
//     for ( j = 1; j <= i; j++){
//         if ( (i + j) % 2 == 0)
//             str = str + "1 "
//         else
//             str = str + "0 "
//     }
//     console.log(str);
    
// }

// * * * * * 
//   *   *   
//     *
//   *   *
// * * * * *

for ( i = 1 ; i <= 5; i++){
    str = ""
    for ( j = 1; j <= 5; j++){
        if ( i == j || i == 1 || i == 5 || (i + j) == 6)
            str = str + "* "
        else
            str = str + "  "
    }
    console.log(str);
    
}
//             11 
//          12 13 14 
//       15 16 17 18 19
//    20 21 22 23 24 25 26
// 27 28 29 30 31 32 33 34 35

// k = 11
// for ( i = 1; i <= 5 ; i ++){
//     str = ""
//     for ( l = 1; l <= (5-i) ; l++){
//         str = str + "   "
//     }
//      for ( j = 1; j <= (2*i -1); j++){
//         str = str + k + " "
//         k++
//      }
//      console.log(str);
     
// }