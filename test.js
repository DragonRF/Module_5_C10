// let arr = [8,7,6,5,4,3,2,1];
// let count = 0
//
//     for (let i = 0; i < arr.length;i++){
//         if (arr[i] > arr[i+1]){
//             count--
//         } else {
//             if (arr[i] < arr[i + 1]) {
//                 count++
//             }
//         }
//     }
//     if (count === 7) {
//         console.log('tang')
//     }else if (count === -7){
//         console.log('giam')
//     } else{
//         console.log('khongbiet')
//     }

let x = 7
let y = 1

let pair = Math.min(x,y)

let pair1 = Math.floor((x - pair) / 2) + Math.floor((y - pair) / 2)
console.log(pair,pair1)


