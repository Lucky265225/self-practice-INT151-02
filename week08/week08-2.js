// 1.getElementsByName(), return NodesList (array-like) data type, implement forEach
const nameAttrElements = document.getElementsByName("fname")
// console.log(nameAttrElements);

// 2.getElementByTagName(), return HTMLCollection (array-like) data type
const inputElements = document.getElementsByTagName("input")
// Array.from(inputElements).forEach(ele => console.log(ele))

// 3.getElementByClassName(), return HTMLCollection (array-like) data type
const veganElement = document.getElementsByClassName("vegan")
// Array.from(veganElement).forEach(ele => console.log(ele))


const firstElement = document.querySelector("#soup , #appetizer")
console.log(firstElement);

const allMeat = document.querySelectorAll("#appetizer .meat,#soup .meat")
Array.from(allMeat).forEach(ele => console.log(ele));

