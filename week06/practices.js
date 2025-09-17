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




 
