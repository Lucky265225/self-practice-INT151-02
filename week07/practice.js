// ข้อ 1: Selecting Elements
// ใช้ getElementById เพื่อเปลี่ยนข้อความของ <h1 id="title"> เป็น
// 👉 "Hello World with DOM"
const getIdTitle = document.getElementById("title")
getIdTitle.textContent = "Hello World with DOM"

// ข้อ 2: innerText vs textContent
// เลือก <p id="desc"> แล้วใช้ console.log แสดงค่า
// innerText
// textContent
// 👉 สังเกตว่าต่างกันยังไง
const getIdDesc = document.getElementById("desc")
console.log(getIdDesc.innerText); // เห็ฯเฉพาะที่มันแสดงบนเว็บ
console.log(getIdDesc.textContent); // เห็นทั้งหมด

// ข้อ 3: Create and Append Elements
// ใน <ul id="fruit-list"></ul>
// เขียนโค้ดเพื่อเพิ่ม <li> 3 ตัว: "Apple", "Banana", "Orange"
const addInUl = document.getElementById("fruit-list")
const arr = ["Apple","Banana","Orange"]
arr.forEach(ele => {
    const li = document.createElement("li")
    li.textContent = ele
    addInUl.appendChild(li)
})

// ข้อ 4: classList Manipulation
// เลือก <div id="box"> แล้วเขียนโค้ดเพื่อ:
// เพิ่ม class "red-box"
// toggle class "highlight"
// แสดงผลว่า box มี class "red-box" หรือไม่ (true/false)
const IdBox = document.getElementById("box")
IdBox.classList.add("red-box")
IdBox.classList.toggle("highlight")
console.log(IdBox.classList.contains("red-box")) // true/false



// ข้อ 5: System Dialogs
// เขียนโค้ดที่:
// ใช้ prompt() ถามชื่อผู้ใช้
// ถ้า user กรอกชื่อ → แสดง alert("Hello, [ชื่อ]!")
// ถ้า user ไม่กรอก → แสดง alert("Hello, Guest!")
const userName = prompt("กรุณากรอกชื่อของคุณ:")
if (userName) {
  alert(`Hello, ${userName}!`)
} else {
  alert("Hello, Guest!")
}
