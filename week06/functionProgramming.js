const math = (numbers,formatter) => formatter(numbers)
const add = num => num.reduce((x,y) => x + y)
const multiple = num => num.reduce((x,y) => x * y)

// console.log(math([1,2,3,4],add))
// console.log(math([1,2,3,4],multiple))

function a() {
  return sum
}
function b() {
  return sum(1, 5)
}
function c(x) {
  return x
}
function sum(n1, n2) {
  return n1 + n2
}

// console.log(typeof a())
// console.log(typeof b())
// console.log(typeof c(sum))

function addSquares(a, b) { 
    function square(x) { 
        return x * x
    } 
    return square(a) + square(b)
} 
// console.log(addSquares(3,3));

// let aa = 1 //global scope
// function doSomething(x) {
//   let aa = 10 //local scope
//   let greet = "Hello"
//   function echo() {
//     let b = "Bob"
//     console.log(aa, b)
//   }
//   echo()
//   return `${greet}, ${x}, a=${aa}`
// }
// console.log(doSomething("guest"))
// aa = 100
// console.log(`a= ${aa}`)


function doSomething(x) {
  function echo() {
    return `hello,${x}`
  }
  return echo
}
// console.log(doSomething("guest")())


function idGenerator(){
    let id = 0
    return function(){
        return ++id
    }
}

const idGen = idGenerator()
// console.log(idGen());
// console.log(idGen());
// console.log(idGen());


function outerFunction(x){
    return function(y){
        return x + y
    }
}

const addFive = outerFunction(5)
// console.log(addFive(3));
const addFive2 = outerFunction(10)
// console.log(addFive2(2));
 
