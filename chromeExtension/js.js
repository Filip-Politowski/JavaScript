let myLeads = []
const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")



inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()

})

function renderLeads() {
    const li = document.createElement("li")
    li.setAttribute("id","leads-list")
    for (let i = 0; i < myLeads.length; i++) {
        li.innerHTML = `<a id="leads-links" target ='_blank' href ='${myLeads[i]}'>  ${myLeads[i]} </a>`
    }
    ulEl.append(li)

q
}






