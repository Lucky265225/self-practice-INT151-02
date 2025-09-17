// เขียนฟังก์ชัน apply_twice(func, x) ที่รับฟังก์ชัน func กับค่าจำนวนเต็ม x แล้วคืนค่าการทำงาน func(func(x))
// Input: func = lambda x: x + 2, x = 3
// Output: 7 (เพราะ (3+2)+2 = 7)
function apply_twice(func,x){
    return func(func(x))
}
let result = apply_twice( x => x + 2,3)
// console.log(result);


// เขียนฟังก์ชัน square(x) ที่คืนค่ากำลังสองของ x โดยไม่เปลี่ยนแปลงตัวแปรภายนอก
// Input: 4
// Output: 16
function square(x){
    return x*x
}
// console.log(square(4));


function compose(f,g,x){
    return f(g(x))
}
const f = x => x * 2
const g = x => x + 1
const x = 5

// console.log(compose(f,g,x));


function make_multiple(x){
    return function(y){
        return x * y
    }
}
const mul = make_multiple(3)
// console.log(mul(4));


function filter_even(numbers, func){
    return numbers.map(func).filter(n => n % 2 === 0)
}
const numbers = [1, 2, 3, 4, 5, 6]
const func = x => x * 3
// console.log(filter_even(numbers,func));


function counter(){
    let count = 0
    return function(){
        return ++count
    }
}
const myCounter = counter();
// console.log(myCounter());
// console.log(myCounter());
// console.log(myCounter());


function apply_function(funcs,x){
    return funcs.map( func => func(x))
}
const funcs = [x => x + 1 , x => x * 2 , x => x ** 2];
// console.log(apply_function(funcs,3));


function getScorePass(score){
    return function(cuttingScore){
        return score.filter(score => score >= cuttingScore)
    }
}
const cuttingScore1 = getScorePass([50,40,60,70,80,30])
// console.log(cuttingScore1(70));
