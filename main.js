//addition function
//function addition(a,b){
   // let c = a + b
  //  console.log(c)
//}
//addition(10,30)

function addition(a,b){
    return console.log(a + b)
}
addition(10,30)
addition(100,70)

//subtraction function
function subtraction(a,b){
    return console.log(a - b)
}
subtraction(10,30)
subtraction(100,70)

//multiplication function
function multiplication(a,b){
    return console.log(a * b)
}
multiplication(10,30)
multiplication(100,70)

//division function
function division(a,b){
    return console.log(a / b)
}
division(10,30)
division(100,50)

//Convert from celcius to farenheit
function temp_conversion(cel_degrees){
    let farenheit = cel_degrees*(9/5) + 32
     return console.log(farenheit);
}

temp_conversion(0)

//larger of 2 numbers
function larger_no(a,b){  //const larger_no = (a,b) =>{ function body }
    if (a>b) {
        return console.log(a);
    } else if(b>a){
        return console.log(b);
    }
    else{
        return console.log("Equal");
    }
}

larger_no(59,94)
larger_no(50,50)

//CHECK EVEN OR ODD
// function even_odd(num){
//    if (num % 2 == 0) {
//         return console.log("Even");
//     } else {
//         return console.log("Odd");
//     }
// }

//even_odd(11)

const even_odd = (num) =>{
if (num % 2 === 0) {
    return console.log("Even");
} else {
    return console.log("Odd");
}
}
even_odd(10)

//CONVERT MINUTES TO SECONDS
const min_sec = (minutes) =>{
    let seconds = minutes*60 
    return console.log(seconds)
}

min_sec(1)

//AREA OF A CIRCLE
const area_circle = (radius) => {
    let area = (22/7)*radius*radius
    return console.log(area);
}

area_circle(7)

let b = 10
function viewA(){
    console.log(b);
    b = 20
    console.log(b);
}
console.log(b);
viewA(b)
