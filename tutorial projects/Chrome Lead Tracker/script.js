let myLeads = []
// myLeads= JSON.parse(myLeads)
// myLeads.push("www.hello.com")
// myLeads= JSON.stringify(myLeads)
// console.log(typeof myLeads)
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const tabBtn = document.getElementById("tab-btn")
const deleteBtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")

// To store data in local storage to access data across page refresh
// localStorage.setItem("myLeads","www.google.com")
// console.log(localStorage.getItem("myLeads"))
// localStorage.clear()

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

function render(leads) {
    let listitems = ""
    for (let i = 0; i < leads.length; i++) {
        // below line does same thing
        // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"

        // that these 3 line does
        // const li= document.createElement("li") 
        // li.textContent=myLeads[i]
        // ulEl.append(li)
        listitems += `<li><a href="${leads[i]}" target="_blank">${leads[i]}</a></li>`
    }
    //listitems method will help to manipulate dom once instead doing it 3 times inside the loop
    ulEl.innerHTML = listitems
}

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})

tabBtn.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})

deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})
