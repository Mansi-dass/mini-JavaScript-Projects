const selectElJc = document.querySelector("#select-el-jc")
const selectElJi = document.querySelector("#select-el-ji")
const selectElJs = document.querySelector("#select-el-js")
const jcContainer = document.querySelector(".jc-container")
const jiContainer = document.querySelector(".ji-container")
const jsContainer = document.querySelector(".js-container")
const jsItem = jsContainer.firstElementChild
console.log(jsItem)


selectElJc.addEventListener("change", function () {
    let jc = selectElJc.value
    jcContainer.style.justifyContent = jc
})
selectElJi.addEventListener("change", function () {
    let ji = selectElJi.value
    jiContainer.style.justifyItems = ji
})
selectElJs.addEventListener("change", function () {
    let js = selectElJs.value
    jsItem.style.justifySelf = js
})