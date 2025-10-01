// const addBorder = document.getElementById("add")
// const removeBorder = document.getElementById("remove")
// const toggleBorder = document.getElementById("toggle")

// addBorder.addEventListener("click",() => {
//     console.log("hello");
    
//     const box = document.getElementById("box")
//     box.classList.add("bordered")
// })

// removeBorder.addEventListener("click",() => {
//     const box = document.getElementById("box")
//     box.classList.remove("bordered")
// })

// toggleBorder.addEventListener("click",() => {
//     const box = document.getElementById("box")
//     box.classList.toggle("bordered")
// })

const buttons = document.getElementsByTagName("button");
const box = document.getElementById("box");

Array.from(buttons).forEach(button => {
  button.addEventListener("click", () => {
    const action = button.id;

    if (action === "add") box.classList.add("bordered");
    if (action === "remove") box.classList.remove("bordered");
    if (action === "toggle") box.classList.toggle("bordered");
  });
});
