// insertBefore(newNode, referenceNode) //The node to insert becomes the previous sibling of the reference node
// replaceChild(newChild, oldChild)//replaces a child node within the given (parent) node
// removeChild(child)//removes a child node from the DOM and returns the removed node.

/* <ul id="soup">
<li class="meat">Spicy Bacon-Corn Soup</li>
<!-- 2. remove Vegetable Soup -->
<li class="vegan">Vegetable Soup</li>
<!-- 1. <li class="vegan">Cabbage Soup</li> -->
<li class="meat">Beef Soup</li>
<!-- 3. replace Beef Soup with Pork Soup -->
<li class="vegan">Coconut Soup</li>
</ul> */

// (insertBefore) 1. <li class="vegan">Cabbage Soup</li>
//1.1 get its parent
const soupUlElement = document.getElementById("soup")
//1.2 get ref node -Beef Soup
let refNode = null
Array.from(soupUlElement.children).forEach((element) => {
  if (element.textContent.trim().includes("Beef Soup")) refNode = element
})
//1.3 create node <li class="vegan">Cabbage Soup</li>
const newNode = document.createElement("li")
newNode.textContent = "Cabbage Soup"
newNode.setAttribute("class", "vegan")
//1.4 insertBefore(newNode, refNode)
soupUlElement.insertBefore(newNode, refNode)


// 2. remove Vegetable Soup
//2.1 get its parent
// const soupUlElement = document.getElementById("soup")
//2.2 get ref node -Beef Soup
let refNode2 = null
Array.from(soupUlElement.children).forEach((element) => {
  if (element.textContent.trim() === "Vegetable Soup") refNode2 = element
})
//2.3 remove
soupUlElement.removeChild(refNode2)

//  3. replace Beef Soup with Pork Soup
//2.1 get its parent
// const soupUlElement = document.getElementById("soup")
//2.2 get ref node -Beef Soup
let refNode3 = null
Array.from(soupUlElement.children).forEach((element) => {
  if (element.textContent.trim() === "Beef Soup") refNode3 = element
})
//3.3 create new node <li class="meat">Pork Soup</li>
const newNode = document.createElement("li")
newNode.textContent = "Pork Soup"
newNode.setAttribute("class", "meat")
//3.4 replaceChild(newNode, refNode)
soupUlElement.replaceChild(newNode, refNode)