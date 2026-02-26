//loop
// let obj = {colors:["red","blue","orange",{weeks:["mon","tue","wed"]}]}

// console.log(obj.colors[3].weeks[1] , obj.colors[1])

// let arr = [10,20,30,40]
// let i =0;
// while(i < arr.length){
//     console.log(arr[i])
//     i++;
// }

// let arr = [[[[10,20,30,40,50]]]]
// let i =0
// while(i<arr[0][0][0].length){
//     console.log(arr[0][0][0][i]);
//     i++
// }

let arr = [[10], [20], [30], [40], [50]];
let i = 0;
while (i < arr.length) {
  console.log(arr[i][0]);
  i++;
}
