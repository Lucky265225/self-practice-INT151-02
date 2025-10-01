// 1.display all child nodes under <ul id ="appetizer">
const allNode = document.getElementById("appetizer").childNodes

const meatElement = document.querySelectorAll(".meat") // return nodelist (array-like)

// console.log(meatElement.forEach(ele => console.log(ele)));

// 2.find meat element that a text value contain "soup"
const result = []
const soup = meatElement.forEach(ele => {
    if(ele.textContent.toLowerCase().includes("soup")){
        result.push(ele);
    }
});
// const soup2 = Array.from(meatElement).map(ele => ele.textContent).filter(ele => ele.toLowerCase().includes("soup"))

// 3.goto the first child element node under <ul id="soup"> and display all sibling nodes
const ulElement = document.querySelector("#soup")
// let currentNode = ulElement.children[0]
let currentNode = ulElement.firstElementChild
while (currentNode !== null) {
  console.log(currentNode)
  currentNode = currentNode.nextElementSibling
}

