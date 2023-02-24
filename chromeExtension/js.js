let myLeads = []
const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteButton = document.getElementById("delete-leads-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const titleEl = document.getElementById("title-el")
const tabButton = document.getElementById("tab-btn")
const deleteLast = document.getElementById("delete-last")
let text = "Materials to learn 📚"


if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    title(text)
    render(myLeads)
}

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        if (leads[i].substring(0, 12) === "https://www.") {
            listItems += `
            <li id="leads-list">
                <a id = "leads-links"target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
        }
        else {
            listItems += `
            <li id="leads-list">
                <a id = "leads-links"target='_blank' href='https://www.${leads[i]}'>https://www.${leads[i]}
                </a>
            </li>
        `
        }
    }
    ulEl.innerHTML = listItems
}

function title(text) {
    titleEl.textContent = `${text}`
}

inputBtn.addEventListener("click", function () {
   if(inputEl.value !== "" && !myLeads.includes(inputEl.value)){
       myLeads.push(inputEl.value)
       inputEl.value = ""
       localStorage.setItem("myLeads", JSON.stringify(myLeads))
       render(myLeads)

   }

})


deleteButton.addEventListener("dblclick", function deleteAll() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

deleteLast.addEventListener("click",function (){
    myLeads = JSON.parse(localStorage.myLeads ?? "[]")
    localStorage.myLeads = JSON.stringify(myLeads.slice(0,-1))
    myLeads.pop()
    render(myLeads)
})

tabButton.addEventListener("click", function () {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        if(!myLeads.includes(tabs[0].url)) {
            myLeads.push(tabs[0].url)
            localStorage.setItem("myLeads", JSON.stringify(myLeads))
            render(myLeads)
        }
    })
})


// Execute a function when the user presses a key on the keyboard
inputEl.addEventListener("keypress", function (event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("input-btn").click();
    }
});

