// const html = document.documentElement


// // console.log(document.getElementById('123'));
// // console.log(html);

// // console.log(document.firstChild);
// // console.log(document.firstElementChild);

// const divElement = document.getElementById("123")
// const divChildNodes = divElement.childNodes

// // console.log(divChildNodes.length);
// // divChildNodes.forEach(child => console.log(child));

// const divChildren = divElement.children
// // console.log(divChildren);
// // Array.from(divChildren).forEach(child => console.log(child));

// const divAttributes = divElement.attributes
// // console.log(divAttributes);
// // console.log(divAttributes.length);
// // Array.from(divAttributes).forEach(attribute => console.log(`${attribute.name} : ${attribute.value}`));


// const firstChildNode = document.firstChild
// const firstChildElement = document.firstElementChild
// // console.log(firstChildNode);
// // if(firstChildNode.nodeName === "HTML"){
// //     console.log(`Hello ,HTML node`);
// // }else{
// //     console.log(`Hello ,any node`);
// // }


// // สร้างเพิ่มเข้าไปใน html => <p id="p5">#5</p>
// const pElement = document.createElement("p")
// // const attr = document.createAttribute("id")
// // attr.value = "p5"
// // pElement.setAttributeNode(attr)
// pElement.setAttribute("id","p5")
// // const pText = document.createTextNode("#5")
// // pElement.appendChild(pText)
// pElement.textContent = "#5"
// document.body.appendChild(pElement)

// innerHTML, innerText, textContent
let el = document.getElementById("demo")
// console.log(el.innerHTML)
// console.log(el.innerText)
// console.log(el.textContent)


// 1.append <p> to under <div id="demo">
const appP = document.createElement("p")
// 1.5 add format='italic' attribute to <p></p>
appP.setAttribute("format","italic")
// 2. try to add three different text types
// 2.1 add <i>Sample Italic Text</i> with innerHTML
appP.innerHTML = "<i>Sample Italic Text</i> with innerHTML"
// 2.2  add <i>Sample Italic Text</i> with innerText
appP.innerText = "<i>Sample Italic Text</i> with innerText"
// 2.3 add <i>Sample Italic Text</i> with textContent
appP.textContent = "<i>Sample Italic Text</i> with TextContent"

document.getElementById("demo").appendChild(appP)
console.log(document.firstElementChild);

// วิธีใช้ loop
// const demo = document.getElementById("demo");

// // ข้อมูลแต่ละรอบของลูป
// const contents = [
//   { method: "innerHTML", value: "<i>Sample Italic Text</i> with innerHTML" },
//   { method: "innerText", value: "<i>Sample Italic Text</i> with innerText" },
//   { method: "textContent", value: "<i>Sample Italic Text</i> with textContent" },
// ];

// contents.forEach(item => {
//   const p = document.createElement("p");
//   p.setAttribute("format", "italic");

//   p[item.method] = item.value;
//   demo.appendChild(p);
// });


 






