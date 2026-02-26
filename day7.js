// loop
// let arr = [10,20,30,40];
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// let arr = [{name:"kunal"},{name:"bharat"},{name:"saad"},{name:"suresh"}]

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i].name)
// }


// let arr = [{address:{city:"jaipur",pincode:"305627"}},{address:{city:"bhilwara",pincode:"305620"}}]
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]["address"]["city"],arr[i]["address"]["pincode"])
// }


let count = 0;

for (let i = 1; i <= 3; i++) {
  for (let j = i; j <= 3; j++) {
    count += j;
  }
}

console.log(count);
