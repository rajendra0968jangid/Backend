//
// let num1 = 10;
// let num2 = 20;
// if(num1>num2){ 
//     console.log(num1)
// }
// else{
//     console.log(num2)
// }

// let num1 = 10
// let num2 = "10";
// if(num1 == num2){ 
//     console.log("if ka" +num1)
// }
// else{
//     console.log("else ka " +num2)
// }

// let num1 = -20;
// let num2 = 20;
// if(num1 != num2){ 
//     console.log("if ka" +num1)
// }
// else{
//     console.log("else ka " +num2)
// }

// let num1 = 10;
// let num2 = 20;
// if(num1){
//     let num2 =30;
//     console.log(num2)
// }
// else{
//     console.log(num2)
// }
// console.log(num2);

// let num1 = [1,"2",3];
// let num2 = 2;
// if(num1[1] != num2){
//     console.log("true")
// }
// else {
//     console.log("false")

// }

// let arr = [1,2,3,{"key name":3}]
// let num = 3
// if(arr[3]["key name"] == num){
//     console.log("true")
// }
// else {
//     console.log("false")
// }

// let x = 3;

// if(x++ == 3)
//     if(++x == 5)
//         console.log(x)
//     else
//         console.log(x+10)
// else
//     console.log(x - 10);

// let a = 5;
// if(a++ + ++a > 12)
//     if(a-- - --a == 1){
//         console.log(a++)
//     }
//     else{
//         console.log(++a)
//     }
// else{
//         console.log(a--)        
// }


// 
// if percentage > 90 -> a
// 75 -> b
// 60 -> c
// fail

let per = 75;

if(per < 60){
    console.log("fail");
}else if(per >=60 && per<75){
    console.log("C");
}else if (per>=75 && per<90){
    console.log("B")
}else{
    console.log("A")
}

// let per = 53 ;

// if(per>60){
//     if(per< 75){
//         console.log("C")
//     }else if(per < 90){
//         console.log("B")
//     }else{
//         console.log("A")
//     }
// }else{
//     console.log("Fail")
// }

let check = 10;
switch(check){
    default:
        
        console.log("c")
    case 10:
        console.log("a")
        break;
    case 20:
        console.log("b")
        break;
}

