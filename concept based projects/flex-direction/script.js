const selectEl = document.querySelector("#select-el")
const container = document.querySelector(".container")
const items = document.querySelectorAll(".items")

console.log(items)
let flexDir = ""

selectEl.addEventListener("change", function () {
    flexDir = selectEl.value
    if (flexDir === "row" || flexDir === "row-reverse") {
        container.style.height = "21vh"
        container.style.alignItems = "center"
        for (let i = 0; i < items.length; i++) {
            items[i].style.width = "14vh"
            items[i].style.height = "14vh"
            items[i].style.margin = "1.25rem"
        }
        container.style.flexDirection = flexDir
    } else {
        container.style.height = "75vh"
        container.style.removeProperty("align-items")
        
        for (let i = 0; i < items.length; i++) {
            items[i].style.width = "11vh"
            items[i].style.height = "11vh"
            items[i].style.margin = "0.9rem"
        }
        container.style.flexDirection = flexDir
    }
})
